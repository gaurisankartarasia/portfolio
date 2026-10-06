import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({ number = 10, className }) => {
  const meteors = new Array(number).fill(true);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((_, idx) => {
        const position = idx * (800 / number) - 400;
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
              left: `calc(${idx * (100 / number)}% + ${position / 8}px)`,
              animationDelay,
              animationDuration,
            }}
          />
        );
      })}
    </div>
  );
};
