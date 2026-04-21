"use client";

import { useEffect, useState } from "react";

export function GridHoverEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none w-screen h-screen bg-background">
      {/* Structural Grid lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(167, 139, 250, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(167, 139, 250, 0.07) 1px, transparent 1px)`,
          backgroundSize: `50px 50px`
        }}
      />
      
      {/* Interactive Mouse Spotlight Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(167,139,250,0.12), transparent 40%)`
        }}
      />

      {/* Fade the grid towards edges so it feels atmospheric */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_80%)]" />
    </div>
  );
}
