import { cn } from "@/lib/utils";
import React from "react";

export const HoverEffect = ({ items, className }) => {
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
            className="group block p-2 h-full w-full"
          >
            <div className="relative z-20 flex h-full flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-xs backdrop-blur-xs transition-all duration-200 group-hover:border-blue-300 dark:group-hover:border-blue-500/50 group-hover:shadow-md group-hover:-translate-y-1">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-md bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-sky-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
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
