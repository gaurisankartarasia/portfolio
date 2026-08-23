"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, Math.max(svgHeight - 100, 50)]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-6xl", className)}
    >
      <div className="absolute top-3 left-0 md:-left-8 z-20">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          className="ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border border-blue-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900"
        >
          <motion.div
            animate={{
              backgroundColor: "#2563eb",
              borderColor: "#1d4ed8",
            }}
            className="h-2 w-2 rounded-full border border-blue-400 bg-blue-600"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight || 100}`}
          width="20"
          height={svgHeight || 100}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${(svgHeight || 100) * 0.8} l -18 24V ${svgHeight || 100}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.2"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${(svgHeight || 100) * 0.8} l -18 24V ${svgHeight || 100}`}
            fill="none"
            stroke="url(#tracing-beam-gradient)"
            strokeWidth="2"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <motion.linearGradient
              id="tracing-beam-gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#38bdf8" stopOpacity="0" />
              <stop stopColor="#38bdf8" />
              <stop offset="0.325" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#818cf8" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </motion.div>
  );
};
