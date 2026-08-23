"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { cn } from "@/lib/utils";

export const GlowingEffect = ({
  blur = 0,
  borderWidth = 3,
  spread = 80,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  className,
}) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const [isNear, setIsNear] = useState(false);

  const handleGlobalMouseMove = useCallback(
    (e) => {
      if (!containerRef.current || disabled) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check proximity bounds
      const isInsideOrNear =
        x >= -proximity &&
        x <= rect.width + proximity &&
        y >= -proximity &&
        y <= rect.height + proximity;

      if (isInsideOrNear) {
        mouseX.set(x);
        mouseY.set(y);
        setIsNear(true);
      } else {
        setIsNear(false);
      }
    },
    [disabled, proximity, mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [handleGlobalMouseMove]);

  if (disabled) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300",
        isNear && glow ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        padding: `${borderWidth}px`,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${spread * 2}px circle at ${mouseX}px ${mouseY}px,
              #2563eb 0%,
              #38bdf8 40%,
              transparent 70%
            )
          `,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: `exclude`,
          WebkitMaskComposite: `xor`,
          padding: `${borderWidth}px`,
        }}
      />
    </div>
  );
};
