"use client";

import React, { useEffect, useRef } from "react";

export type PredictiveArcMode = "dark" | "light";

export type PredictiveArcOptions = {
    mode: PredictiveArcMode;
    speed: number;
    spacing: number;
    dotSize: number;
    archHeight: number;
    thickness: number;
    brightness: number;
    hue: number;
    saturation: number;
};

export const PREDICTIVE_ARC_DEFAULTS: PredictiveArcOptions = {
    mode: "light",
    speed: 1.5,
    spacing: 5,
    dotSize: 6,
    archHeight: 0.7,
    thickness: 1,
    brightness: 1,
    hue: 0,
    saturation: 1,
};

function resolveMode(mode: PredictiveArcOptions["mode"] | number | string | undefined): PredictiveArcMode {
    if (mode === "dark" || mode === 0 || mode === "0") return "dark";
    return "light";
}

function createPredictiveArcRenderer(
    canvas: HTMLCanvasElement,
    getOptions: () => PredictiveArcOptions,
) {
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return null;
    let width = 1;
    let height = 1;
    let time = 0;

    const resize = (nextWidth: number, nextHeight: number) => {
        width = Math.max(1, nextWidth);
        height = Math.max(1, nextHeight);
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const render = () => {
        const options = getOptions();
        const mode = resolveMode(options.mode);
        const isLight = mode === "light";

        // --- SCREEN SIZE BREAKPOINTS ---
        const isMobile = width < 768;
        const isTablet = width >= 768 && width < 1024;

        // Matched exact brand backgrounds
        context.fillStyle = isLight ? "#FDF9F9" : "#12110B";
        context.fillRect(0, 0, width, height);

        time += 0.045 * options.speed;

        const centerX = width / 2;

        // --- RESPONSIVE ADJUSTMENTS (Mobile -> Tablet -> Desktop) ---
        const archPeakY = height * (isMobile ? 0.20 : isTablet ? 0.28 : 0.35);
        const archWidth = width * (isMobile ? 2.8 : isTablet ? 2.0 : 1.5);
        const archHeight = isMobile ? width * 1.2 : isTablet ? width * 0.9 : height * options.archHeight;

        const thicknessScale = isMobile ? 0.45 : isTablet ? 0.7 : 1.0;
        const spacing = isMobile ? Math.max(3, options.spacing * 0.8) : isTablet ? Math.max(4, options.spacing * 0.9) : options.spacing;
        const dotSize = isMobile ? Math.max(3, options.dotSize * 0.8) : isTablet ? Math.max(4, options.dotSize * 0.9) : options.dotSize;

        context.globalCompositeOperation = isLight ? "source-over" : "lighter";

        for (let x = 0; x < width; x += spacing) {
            const normX = (x - centerX) / (archWidth / 2);
            const curveY = archPeakY + normX * normX * archHeight;

            for (let y = 0; y < height; y += spacing) {
                const distanceToCurve = Math.abs(y - curveY);
                // Apply responsive thickness scale
                const thickness = (140 + (1 - Math.abs(normX)) * 80) * options.thickness * thicknessScale;
                if (distanceToCurve >= thickness) continue;

                let intensity = 1 - distanceToCurve / thickness;
                const waveX = Math.sin(x * 0.015 + time);
                const waveY = Math.cos(y * 0.02 + time);
                intensity = intensity * 0.7 + waveX * waveY * 0.3 * intensity;
                intensity *= Math.max(0, 1 - Math.pow(Math.abs(normX), 2.5));
                if (intensity <= 0.02) continue;

                let r: number;
                let g: number;
                let b: number;

                if (isLight) {
                    r = Math.min(255, 18 * intensity);
                    g = Math.min(255, 17 * intensity);
                    b = Math.min(255, 11 * intensity);

                    if (intensity > 0.7) {
                        const coreBoost = (intensity - 0.7) * 3.3;
                        r = Math.min(255, r + 237 * coreBoost);
                        g = Math.min(255, g + 62 * coreBoost);
                        b = Math.min(255, b + 38 * coreBoost);
                    }
                } else {
                    r = Math.min(255, 253 * intensity);
                    g = Math.min(255, 249 * intensity);
                    b = Math.min(255, 249 * intensity);

                    if (intensity > 0.7) {
                        const coreBoost = (intensity - 0.7) * 3.3;
                        r = Math.min(255, r + 2 * coreBoost);
                        g = Math.max(0, Math.min(255, g - 170 * coreBoost));
                        b = Math.max(0, Math.min(255, b - 200 * coreBoost));
                    }
                }

                context.fillStyle = `rgb(${Math.floor(r * options.brightness)}, ${Math.floor(g * options.brightness)}, ${Math.floor(b * options.brightness)})`;
                context.fillRect(x, y, dotSize * intensity, dotSize * intensity);
            }
        }
        context.globalCompositeOperation = "source-over";
    };

    return { resize, render };
}

type PredictiveVariantProps = Partial<PredictiveArcOptions> & {
    className?: string;
};

export default function PredictiveArc({ className = "", ...props }: PredictiveVariantProps) {
    const hostRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const optionsRef = useRef({ ...PREDICTIVE_ARC_DEFAULTS, ...props });

    useEffect(() => {
        optionsRef.current = { ...PREDICTIVE_ARC_DEFAULTS, ...props };
    }, [props]);

    useEffect(() => {
        const host = hostRef.current;
        const canvas = canvasRef.current;
        if (!host || !canvas) return undefined;

        const renderer = createPredictiveArcRenderer(canvas, () => optionsRef.current);
        if (!renderer) return undefined;

        let frame = 0;
        let visible = true;

        const resize = () => {
            const bounds = host.getBoundingClientRect();
            renderer.resize(bounds.width, bounds.height);
            renderer.render();
        };

        const tick = () => {
            renderer.render();
            frame = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
        };

        const observer = new ResizeObserver(resize);
        const intersection = new IntersectionObserver(([entry]) => {
            visible = entry?.isIntersecting ?? true;
            if (visible && !frame) frame = requestAnimationFrame(tick);
            if (!visible && frame) {
                cancelAnimationFrame(frame);
                frame = 0;
            }
        });

        const visibility = () => {
            if (document.hidden && frame) {
                cancelAnimationFrame(frame);
                frame = 0;
            } else if (!document.hidden && visible && !frame) {
                frame = requestAnimationFrame(tick);
            }
        };

        observer.observe(host);
        intersection.observe(host);
        document.addEventListener("visibilitychange", visibility);
        resize();
        frame = requestAnimationFrame(tick);

        return () => {
            if (frame) cancelAnimationFrame(frame);
            observer.disconnect();
            intersection.disconnect();
            document.removeEventListener("visibilitychange", visibility);
        };
    }, []);

    return (
        <div
            ref={hostRef}
            className={`absolute inset-0 z-0 overflow-hidden w-full h-full pointer-events-none ${className}`}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full block pointer-events-none"
                style={{ filter: `hue-rotate(${props.hue ?? PREDICTIVE_ARC_DEFAULTS.hue}deg) saturate(${props.saturation ?? PREDICTIVE_ARC_DEFAULTS.saturation})` }}
            />
        </div>
    );
}