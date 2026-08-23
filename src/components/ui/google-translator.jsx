"use client";

import React, { useEffect, useState } from "react";
import { Globe } from "@animateicons/react/lucide";
import { motion, AnimatePresence } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { parseRouteState, buildRoutePath, applyGoogleTranslate, clearGoogleTranslateCookies } from "@/components/url-sync-handler";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "or", label: "Odia", native: "ଓଡ଼ିଆ" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "fr", label: "French", native: "Français" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "ja", label: "Japanese", native: "日本語" },
];

export function GoogleTranslator() {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const { lang } = parseRouteState(pathname);
    setSelectedLang(lang);
  }, [pathname]);

  const changeLanguage = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    const { theme } = parseRouteState(pathname);
    const targetPath = buildRoutePath(langCode, theme);

    if (langCode === "en") {
      clearGoogleTranslateCookies();
      window.location.assign(targetPath);
      return;
    }

    applyGoogleTranslate(langCode);
    router.push(targetPath);
  };

  const currentObj = languages.find((l) => l.code === selectedLang) || languages[0];

  return (
    <div className="relative inline-block text-left notranslate">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-xs backdrop-blur-md transition hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400"
        aria-label="Select Language"
      >
        <Globe className="size-3.5 text-blue-600 dark:text-sky-400" />
        <span>{currentObj.native}</span>
      </button>

      {/* Language Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click dismiss */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 shadow-xl backdrop-blur-xl"
            >
              <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Language / ଭାଷା
              </div>
              <div className="max-h-60 overflow-y-auto space-y-0.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition ${
                      selectedLang === lang.code
                        ? "bg-blue-50 dark:bg-blue-950/60 font-bold text-blue-600 dark:text-sky-400"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <span>{lang.native}</span>
                    <span className="text-[10px] opacity-60 font-sans">{lang.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
