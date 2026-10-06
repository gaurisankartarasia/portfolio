import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter.woff2",
  variable: "--font-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMono.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

import { ThemeProvider } from "@/components/theme-provider";
import { UrlSyncHandler } from "@/components/url-sync-handler";

export const metadata = {
  title: "Gaurisankar Tarasia | Software Engineer",
  description: "Associate Software Engineer & Full-Stack Developer Portfolio",
  icons: {
    icon: "/g.svg",
    shortcut: "/g.svg",
    apple: "/g.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="google" content="notranslate" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var validLangs = ["or", "hi", "bn", "te", "ta", "es", "fr", "de", "ja"];
                  var pathSegments = window.location.pathname.split("/").filter(Boolean);
                  var currentLang = "en";
                  for (var i = 0; i < pathSegments.length; i++) {
                    if (validLangs.indexOf(pathSegments[i]) !== -1) {
                      currentLang = pathSegments[i];
                      break;
                    }
                  }

                  function purgeCookies() {
                    var paths = ["/", "/en", "/or", "/hi", "/bn", "/te", "/ta", "/es", "/fr", "/de", "/ja"];
                    var host = window.location.hostname;
                    var domains = ["", host, "." + host];
                    for (var p = 0; p < paths.length; p++) {
                      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + paths[p] + "; max-age=0;";
                      for (var d = 0; d < domains.length; d++) {
                        if (domains[d] && host !== "localhost") {
                          document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + paths[p] + "; domain=" + domains[d] + "; max-age=0;";
                        }
                      }
                    }
                  }

                  if (currentLang === "en") {
                    purgeCookies();
                    try {
                      sessionStorage.removeItem("googtrans");
                      localStorage.removeItem("googtrans");
                    } catch(e) {}
                  } else {
                    document.cookie = "googtrans=/en/" + currentLang + "; path=/;";
                    if (window.location.hostname && window.location.hostname !== "localhost") {
                      document.cookie = "googtrans=/en/" + currentLang + "; path=/; domain=" + window.location.hostname + ";";
                      document.cookie = "googtrans=/en/" + currentLang + "; path=/; domain=." + window.location.hostname + ";";
                    }
                  }
                } catch(e) {}
              })();

              window.googleTranslateElementInit = function() {
                if (window.google && window.google.translate) {
                  new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,or,hi,bn,te,ta,es,fr,de,ja',
                    autoDisplay: false
                  }, 'google_translate_element');
                }
              };
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div id="google_translate_element" style={{ display: "none" }} />
          <UrlSyncHandler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
