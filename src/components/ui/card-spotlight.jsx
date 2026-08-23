"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "rgba(14, 116, 144, 0.08)",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group/spotlight p-6 rounded-xl relative border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-xs backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500/50",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
