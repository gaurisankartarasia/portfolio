"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = ({ number, className }) => {
  const meteorCount = number || 20;
  const meteors = new Array(meteorCount).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const position = idx * (800 / meteorCount) - 400;
        const animationDelay = (((idx * 37 + 13) % 50) / 10).toFixed(2) + "s";
        const animationDuration = (4 + (idx % 5)) + "s";

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[215deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-blue-500 before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-20px",
              left: `calc(${idx * (100 / meteorCount)}% + ${position / 8}px)`,
              animationDelay,
              animationDuration,
            }}
          />
        );
      })}
    </motion.div>
  );
};
