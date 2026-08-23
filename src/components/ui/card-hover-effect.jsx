"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={item?.title || idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-blue-100/70 dark:bg-blue-900/30 block rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-20 flex h-full flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-xs backdrop-blur-xs transition-all duration-200 group-hover:border-blue-300 dark:group-hover:border-blue-500/50">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-md bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-sky-400">
                  {Icon && <Icon className="size-4" />}
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {item.description && (
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              )}

              {item.items && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.items.map((subItem) => (
                    <span
                      key={subItem}
                      className="inline-flex items-center rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-800 dark:text-slate-200 hover:border-blue-400 transition-colors"
                    >
                      {subItem}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
