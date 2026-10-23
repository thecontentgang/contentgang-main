"use client";

import React, { useEffect, useRef } from "react";

interface GrowthOrbProps {
  className?: string;
}

export default function GrowthOrb({ className = "" }: GrowthOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.parentElement?.clientWidth || 500;
      const height = canvas.parentElement?.clientHeight || 500;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      if (!canvas || !ctx) return;

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY) * 0.75;

      time += 0.015;

      ctx.clearRect(0, 0, width, height);

      // Outer glow
      const outerGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.2,
        centerX,
        centerY,
        radius * 1.3
      );
      outerGlow.addColorStop(0, "rgba(255, 79, 49, 0.2)");
      outerGlow.addColorStop(0.5, "rgba(236, 68, 41, 0.08)");
      outerGlow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Main core gradient
      const coreGradient = ctx.createRadialGradient(
        centerX - radius * 0.25 * Math.cos(time * 0.8),
        centerY - radius * 0.25 * Math.sin(time * 0.8),
        radius * 0.05,
        centerX,
        centerY,
        radius
      );
      coreGradient.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      coreGradient.addColorStop(0.2, "rgba(255, 120, 90, 0.85)");
      coreGradient.addColorStop(0.55, "rgba(236, 68, 41, 0.65)");
      coreGradient.addColorStop(0.85, "rgba(180, 40, 20, 0.4)");
      coreGradient.addColorStop(1, "rgba(255, 79, 49, 0)");

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Soft pulsating wave rings
      for (let i = 0; i < 3; i++) {
        const ringProgress = (time * 0.3 + i * 0.33) % 1;
        const ringRadius = radius * (0.6 + ringProgress * 0.6);
        const ringAlpha = (1 - ringProgress) * 0.25;

        ctx.strokeStyle = `rgba(255, 79, 49, ${ringAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
