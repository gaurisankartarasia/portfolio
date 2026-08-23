"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "@animateicons/react/lucide";
import { usePathname, useRouter } from "next/navigation";
import { parseRouteState, buildRoutePath } from "@/components/url-sync-handler";

export function ThemeToggle({ className = "" }) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`size-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);

    // Build URL containing both current language and new theme (e.g. /or/dark or /dark)
    const { lang } = parseRouteState(pathname);
    const targetPath = buildRoutePath(lang, nextTheme);
    router.push(targetPath);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex size-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 shadow-xs backdrop-blur-md transition hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 ${className}`}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="size-4 text-sky-400" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="size-4 text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
