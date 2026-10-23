'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const WORD = 'TheContentGang';

// Intro: every letter rises from below a hidden line, staggered, with an ease-out curve
const LETTER_DELAY = 0.055; // seconds between letters
const LETTER_DURATION = 0.95; // seconds per letter
const easeOut = (t: number) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 4);

const VERT = `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0., 1.); }
`;

// Brand palette: ink #12110B, cream #FDF9F9, orange #FF4F31 (+ a deeper and a lighter tint of the orange)
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 resolution;
uniform vec2 light;      // light position in 0..1 canvas space (y up)
uniform vec2 bmin;       // text strip box in canvas space
uniform vec2 bmax;
uniform float dpr;
uniform float blob;      // glow size multiplier (smaller on narrow screens)
uniform sampler2D src;   // text strip mask (white on black), covers bmin..bmax only

#define SAMPLES 48.

const vec3 CREAM  = vec3(0.992, 0.976, 0.976); // #FDF9F9
const vec3 ORANGE = vec3(1.000, 0.310, 0.192); // #FF4F31
const vec3 EMBER  = vec3(0.620, 0.150, 0.070);
const vec3 PEACH  = vec3(1.000, 0.640, 0.520);

float hash(vec3 p) { return fract(sin(dot(p, vec3(489., 589., 58.))) * 492.) * 2. - 1.; }

float readTex(vec2 uv) {
  vec2 m = (uv - bmin) / (bmax - bmin);
  if (m.x < 0. || m.x > 1. || m.y < 0. || m.y > 1.) return 0.;
  return texture2D(src, m).r;
}

vec3 ramp(float x) {
  x = clamp(x, 0., 1.);
  vec3 c = mix(EMBER, ORANGE, smoothstep(0., .45, x));
  c = mix(c, PEACH, smoothstep(.45, .8, x));
  return mix(c, CREAM, smoothstep(.8, 1., x));
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution;

  float text = readTex(uv);
  if (text > 0.) {
    gl_FragColor = vec4(CREAM, 1.) * text;
    return;
  }

  float aspect = resolution.x / resolution.y;
  vec2 dp = (light - uv) * vec2(aspect, 1.);
  float lmPx = length(dp) * resolution.y * .5 / dpr / blob; // distance to the light in css pixels
  float reach = 1. - smoothstep(280., 620., lmPx);
  if (reach <= 0.) { gl_FragColor = vec4(0.); return; }

  float glow = smoothstep(0., 1., pow(16. / max(lmPx, .001), .6)) * reach;

  // Shadow: only march the part of the ray that crosses the text strip
  float acc = 0.;
  vec2 d = light - uv;
  d = mix(d, vec2(1e-5), step(abs(d), vec2(1e-5)));
  vec2 inv = 1. / d;
  vec2 ta = (bmin - uv) * inv;
  vec2 tb = (bmax - uv) * inv;
  float t0 = max(max(min(ta.x, tb.x), min(ta.y, tb.y)), 0.);
  float t1 = min(min(max(ta.x, tb.x), max(ta.y, tb.y)), 1.);
  if (t1 > t0) {
    float seg = (t1 - t0) / SAMPLES;
    for (float i = 0.; i < SAMPLES; i++) {
      float t = t0 + (i + .5 + hash(vec3(uv, i)) * .5) * seg;
      acc += readTex(uv + d * t);
    }
    acc *= seg;
  }

  float lit = max(glow - acc, 0.);
  vec3 e = ORANGE * lit * 0.9;                                  // light
  e += ramp(.25 + acc * 1.6) * acc * (1. - acc) * 3.2 * glow;   // coloured fringe where the shadow starts
  e -= hash(vec3(uv.xyy)) * 0.01;                               // dither
  e = max(e, 0.);

  float a = clamp(max(max(e.r, e.g), e.b), 0., 1.);
  gl_FragColor = vec4(min(e, a), a);
}
`;

const FooterWordmark = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [footerEl, setFooterEl] = useState<HTMLElement | null>(null);

  // Nothing heavy is created until the footer is close to the viewport.
  useEffect(() => {
    const wrap = wrapRef.current;
    const footer = wrap?.closest('footer');
    if (!wrap || !footer) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterEl(footer as HTMLElement);
          io.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas || !footerEl) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const lowPower = coarse || (navigator.hardwareConcurrency ?? 8) <= 4;
    const maxDpr = coarse ? 1.25 : 1.5;

    const mask = document.createElement('canvas');
    const mctx = mask.getContext('2d');
    if (!mctx) return;

    const gl = canvas.getContext('webgl', {
      premultipliedAlpha: true,
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    });

    let texture: WebGLTexture | null = null;
    let uRes: WebGLUniformLocation | null = null;
    let uLight: WebGLUniformLocation | null = null;
    let uDpr: WebGLUniformLocation | null = null;
    let uBlob: WebGLUniformLocation | null = null;
    let uMin: WebGLUniformLocation | null = null;
    let uMax: WebGLUniformLocation | null = null;

    if (gl) {
      const compile = (type: number, source: string) => {
        const shader = gl.createShader(type)!;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(shader));
        return shader;
      };
      const frag = FRAG.replace('SAMPLES 48.', lowPower ? 'SAMPLES 28.' : 'SAMPLES 48.');
      const program = gl.createProgram()!;
      gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, frag));
      gl.linkProgram(program);
      gl.useProgram(program);

      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const loc = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

      texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

      uRes = gl.getUniformLocation(program, 'resolution');
      uLight = gl.getUniformLocation(program, 'light');
      uDpr = gl.getUniformLocation(program, 'dpr');
      uBlob = gl.getUniformLocation(program, 'blob');
      uMin = gl.getUniformLocation(program, 'bmin');
      uMax = gl.getUniformLocation(program, 'bmax');
      gl.uniform1i(gl.getUniformLocation(program, 'src'), 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }

    // Layout state (filled by layout())
    let scale = 1;
    let fontPx = 0;
    let family = '';
    let startX = 0; // css px inside the strip
    let letterX: number[] = [];
    const textBox = { cx: 0.5, cy: 0.2, halfW: 0.3 }; // canvas uv, y up

    // Light state (canvas uv, y up): drifts along the name on its own
    const light = { x: 0.2, y: 0.2 };
    const target = { x: 0.2, y: 0.2 };
    let lastFrame = 0;

    // Intro state
    let introStart = reduceMotion ? -Infinity : -1; // -1 = waiting for the name to scroll into view
    let introDone = reduceMotion;
    let maskDirty = true;
    let inView = false;
    let laidOut = false;

    let visible = true;
    let raf = 0;

    const drawMask = (now: number) => {
      const w = mask.width;
      const h = mask.height;
      mctx.fillStyle = '#000';
      mctx.fillRect(0, 0, w, h);
      if (introStart === -1) return; // letters not revealed yet
      mctx.fillStyle = '#fff';
      mctx.font = `900 ${fontPx * scale}px ${family}`;
      mctx.textAlign = 'left';
      mctx.textBaseline = 'alphabetic';
      const elapsed = (now - introStart) / 1000;
      let done = true;
      for (let i = 0; i < WORD.length; i++) {
        const p = introDone ? 1 : (elapsed - i * LETTER_DELAY) / LETTER_DURATION;
        if (p < 1) done = false;
        if (p <= 0) continue;
        const e = easeOut(p);
        mctx.globalAlpha = Math.min(1, e * 1.6);
        const x = (startX + letterX[i]) * scale;
        const y = (fontPx * 0.93 + (1 - e) * fontPx * 1.25) * scale;
        mctx.fillText(WORD[i], x, y);
      }
      mctx.globalAlpha = 1;
      if (done) introDone = true;
    };

    const upload = () => {
      if (gl && texture) {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, gl.LUMINANCE, gl.UNSIGNED_BYTE, mask);
      } else {
        // No WebGL: show the plain cream word on the canvas itself
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.style.mixBlendMode = 'screen'; // the black mask background drops out
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(mask, stripPx.x, stripPx.y);
        }
      }
    };
    const stripPx = { x: 0, y: 0 };

    const layout = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const fr = footerEl.getBoundingClientRect();
      const wr = wrap.getBoundingClientRect();
      const cssW = Math.round(fr.width);
      const cssH = Math.round(fr.height);
      if (!cssW || !cssH || !wr.width) return false;

      scale = dpr;
      family = getComputedStyle(wrap).fontFamily;
      mctx.font = `900 100px ${family}`;
      mctx.letterSpacing = '0px';
      const measured = mctx.measureText(WORD).width || 1;
      fontPx = (wr.width * 0.8 * 100) / measured;

      // per-letter x positions (with tight tracking, kerning-aware)
      mctx.font = `900 ${fontPx}px ${family}`;
      mctx.letterSpacing = `${-0.04 * fontPx}px`;
      letterX = [];
      for (let i = 0; i < WORD.length; i++) {
        letterX.push(mctx.measureText(WORD.slice(0, i + 1)).width - mctx.measureText(WORD[i]).width);
      }
      const total = mctx.measureText(WORD).width;
      startX = (wr.width - total) / 2;

      const stripH = Math.round(fontPx * 1.2);
      const wantH = `${stripH}px`;
      if (wrap.style.height !== wantH) wrap.style.height = wantH;

      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      mask.width = Math.round(wr.width * dpr);
      mask.height = Math.round(stripH * dpr);
      mctx.letterSpacing = `${-0.04 * fontPx * dpr}px`;

      const left = wr.left - fr.left;
      const top = wr.top - fr.top;
      stripPx.x = Math.round(left * dpr);
      stripPx.y = Math.round(top * dpr);
      textBox.cx = (left + wr.width / 2) / cssW;
      textBox.cy = 1 - (top + stripH / 2) / cssH;
      textBox.halfW = (wr.width * 0.4) / cssW;

      if (gl) {
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uDpr, dpr);
        gl.uniform1f(uBlob, Math.min(1, Math.max(0.4, cssW / 1000)));
        gl.uniform2f(uMin, left / cssW, 1 - (top + stripH) / cssH);
        gl.uniform2f(uMax, (left + wr.width) / cssW, 1 - top / cssH);
      }
      maskDirty = true;
      laidOut = true;
      return true;
    };

    const draw = (now: number) => {
      if (!gl) return;
      const t = now / 1000;
      if (!reduceMotion) {
        target.x = textBox.cx + textBox.halfW * 1.1 * Math.sin(t * 0.55);
        target.y = textBox.cy + 0.06 * Math.sin(t * 0.9 + 1);
        light.x += (target.x - light.x) * 0.12;
        light.y += (target.y - light.y) * 0.12;
      } else {
        light.x = textBox.cx - textBox.halfW * 0.6;
        light.y = textBox.cy;
      }
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uLight, light.x, light.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const loop = (now: number) => {
      raf = 0;
      if (!visible) return;
      // phones / low-core devices: after the intro, the idle drift runs at ~30fps
      if (introDone && lowPower && now - lastFrame < 30) {
        raf = requestAnimationFrame(loop);
        return;
      }
      lastFrame = now;

      if (introStart === -1 && inView && laidOut) introStart = now;

      if (introStart !== -1 && (maskDirty || !introDone)) {
        drawMask(now);
        upload();
        maskDirty = false;
      }
      draw(now);
      if (!reduceMotion) raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const resizeObserver = new ResizeObserver(() => {
      if (layout()) start();
    });
    resizeObserver.observe(footerEl);
    resizeObserver.observe(wrap);

    // pause when off-screen
    const visIo = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
    });
    visIo.observe(footerEl);

    // start the reveal when the name actually scrolls into view
    const introIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView = true;
          start();
          introIo.disconnect();
        }
      },
      { threshold: 0.6, rootMargin: '0px 0px -8% 0px' }
    );
    introIo.observe(wrap);

    document.fonts?.ready.then(() => {
      if (layout()) start();
    });

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visIo.disconnect();
      introIo.disconnect();
      gl?.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [footerEl]);

  return (
    <>
      <div
        ref={wrapRef}
        className="relative w-full font-black select-none aspect-[8/1]"
        role="img"
        aria-label="The Content Gang"
      />
      {footerEl &&
        createPortal(
          <canvas ref={canvasRef} aria-hidden="true" className="absolute left-0 top-0 z-0 pointer-events-none" />,
          footerEl
        )}
    </>
  );
};

export default FooterWordmark;
