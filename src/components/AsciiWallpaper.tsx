"use client";

import { useEffect, useRef } from "react";
import { useMouse } from "@/hooks/useMouse";

export function AsciiWallpaper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { x, y } = useMouse();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const chars = [".", "*", "+", "✦", "°"];
    const particles: any[] = [];
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.1, // Depth for parallax
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: Math.random(),
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.fillStyle = "#000000"; // Pure black space
      ctx.fillRect(0, 0, width, height);

      // Mouse influence
      const mx = x - width / 2;
      const my = y - height / 2;

      ctx.font = "14px monospace";
      particles.forEach((p) => {
        // Move slowly
        p.y -= 0.2 * p.z;
        if (p.y < 0) p.y = height;

        // Parallax offset
        const offsetX = (mx * p.z * -0.05);
        const offsetY = (my * p.z * -0.05);

        ctx.fillStyle = `rgba(34, 197, 94, ${p.opacity})`; // Green terminal color
        ctx.fillText(p.char, p.x + offsetX, p.y + offsetY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [x, y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1] pointer-events-none opacity-40"
    />
  );
}
