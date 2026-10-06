"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { GoogleTranslator } from "@/components/ui/google-translator";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatedGithubIcon } from "@/components/ui/animated-icons";

export default function AppNavbar() {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation with Aceternity Resizing Container */}
      <NavBody>
        <NavbarLogo>
          <div className="flex size-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 p-1.5 shadow-xs group-hover:scale-105 transition-transform">
            <Image
              src="/g.svg"
              alt="Gaurisankar Tarasia"
              width={24}
              height={24}
              className="size-full object-contain dark:invert"
              priority
            />
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
            Gaurisankar Tarasia
          </span>
        </NavbarLogo>

        <NavItems items={navItems} />

        <div className="flex items-center gap-2">
          <GoogleTranslator />
          <ThemeToggle />
          <a
            href="https://github.com/gaurisankartarasia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 shadow-xs transition hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="GitHub Profile"
          >
            <AnimatedGithubIcon className="size-4" />
          </a>
          <NavbarButton as="a" href="#contact" variant="primary">
            Get In Touch
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo>
            <div className="flex size-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 p-1.5 shadow-xs">
              <Image
                src="/g.svg"
                alt="Gaurisankar Tarasia"
                width={20}
                height={20}
                className="size-full object-contain dark:invert"
                priority
              />
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
              Gaurisankar
            </span>
          </NavbarLogo>

          <div className="flex items-center gap-2">
            <GoogleTranslator />
            <ThemeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-2.5 pb-2">
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex w-full items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <a
              href="https://github.com/gaurisankartarasia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
              aria-label="GitHub Profile"
            >
              <AnimatedGithubIcon className="size-4" />
            </a>
            <NavbarButton
              as="a"
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="flex-1"
            >
              Get In Touch
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
