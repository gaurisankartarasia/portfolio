"use client";

import { useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const validLangs = ["en", "or", "hi", "bn", "te", "ta", "es", "fr", "de", "ja"];
const validThemes = ["dark", "light"];

export function parseRouteState(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  let lang = "en";
  let theme = null;

  for (const seg of segments) {
    if (validLangs.includes(seg)) {
      lang = seg;
    } else if (validThemes.includes(seg)) {
      theme = seg;
    }
  }

  return { lang, theme };
}

export function buildRoutePath(lang, theme) {
  const parts = [];
  if (lang && lang !== "en") {
    parts.push(lang);
  }
  if (theme) {
    parts.push(theme);
  }
  return parts.length > 0 ? `/${parts.join("/")}` : "/";
}

export function clearGoogleTranslateCookies() {
  if (typeof window === "undefined") return;
  const paths = ["/", "/en", "/or", "/hi", "/bn", "/te", "/ta", "/es", "/fr", "/de", "/ja"];
  const host = window.location.hostname;
  const domains = ["", host, "." + host];

  paths.forEach((p) => {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p}; max-age=0;`;
    domains.forEach((d) => {
      if (d && host !== "localhost") {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${p}; domain=${d}; max-age=0;`;
      }
    });
  });

  try {
    sessionStorage.removeItem("googtrans");
    localStorage.removeItem("googtrans");
  } catch (e) {}
}

export function ensureGoogleTranslateLoaded() {
  if (typeof window === "undefined") return;
  if (document.getElementById("google-translate-script")) return;

  window.googleTranslateElementInit = function () {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,or,hi,bn,te,ta,es,fr,de,ja",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    }
  };

  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
}

export function applyGoogleTranslate(langCode) {
  if (typeof window === "undefined") return;

  const domain = window.location.hostname;
  const isEn = !langCode || langCode === "en";

  // Set or clear cookies
  if (isEn) {
    clearGoogleTranslateCookies();
  } else {
    ensureGoogleTranslateLoaded();
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    if (domain && domain !== "localhost") {
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${domain}`;
    }
  }

  const triggerCombo = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      if (isEn) {
        if (!select.value || select.value === "en") return true;
        const hasEn = Array.from(select.options).some((opt) => opt.value === "en");
        select.value = hasEn ? "en" : "";
        select.dispatchEvent(new Event("change"));
      } else {
        if (select.value === langCode) return true;
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
      }
      return true;
    }
    return false;
  };

  // Only start polling interval if non-English translation was explicitly requested
  if (!isEn && !triggerCombo()) {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (triggerCombo() || attempts > 15) {
        clearInterval(interval);
      }
    }, 250);
  }
}

function UrlSyncContent() {
  const pathname = usePathname();
  const { theme: currentTheme, setTheme } = useTheme();

  useEffect(() => {
    const { lang, theme } = parseRouteState(pathname);

    // 1. Sync language
    applyGoogleTranslate(lang);

    // 2. Sync theme from path if specified
    if (theme && (theme === "dark" || theme === "light")) {
      if (currentTheme !== theme) {
        setTheme(theme);
      }
    }
  }, [pathname, currentTheme, setTheme]);

  return null;
}

export function UrlSyncHandler() {
  return (
    <Suspense fallback={null}>
      <UrlSyncContent />
    </Suspense>
  );
}
