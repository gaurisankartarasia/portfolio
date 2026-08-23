import { cn } from "@/lib/utils";
import React from "react";

export function DotBackground({ className, children }) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center bg-slate-50 dark:bg-[#0a1526] transition-colors duration-300",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#cbd5e1_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#334155_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for container to give faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#0a1526]" />
      <div className="relative z-20 w-full">{children}</div>
    </div>
  );
}
