"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = ({ children, className }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setVisible((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex w-full justify-center pointer-events-none px-3 pt-3 md:pt-4 transition-all duration-300",
        className
      )}
    >
      <div className="w-full flex items-center justify-center pointer-events-auto">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { visible })
            : child
        )}
      </div>
    </header>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-2xl border px-5 py-2.5 transition-all duration-300 ease-out md:flex",
        visible
          ? "max-w-4xl bg-white/90 dark:bg-[#070e1a]/90 border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5 dark:shadow-black/20 backdrop-blur-md translate-y-1"
          : "max-w-6xl bg-white/50 dark:bg-[#070e1a]/50 border-slate-200/40 dark:border-slate-800/40 backdrop-blur-xs translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items = [], className, onItemClick }) => {
  return (
    <nav
      className={cn(
        "hidden md:flex flex-row items-center justify-center space-x-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onClick={onItemClick}
          className="relative px-3 py-1.5 rounded-lg transition-colors hover:bg-blue-50/80 dark:hover:bg-slate-800/80 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </nav>
  );
};

export const NavbarLogo = ({ children, className }) => {
  return (
    <a href="#" aria-label="Home" className={cn("flex items-center gap-2.5 group shrink-0", className)}>
      {children}
    </a>
  );
};

export const NavbarButton = ({
  children,
  variant = "primary",
  className,
  onClick,
  as: Component = "button",
  ...props
}) => {
  return (
    <Component
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 shadow-xs shrink-0",
        variant === "primary" &&
          "bg-blue-600 text-white shadow-blue-600/25 hover:bg-blue-700 hover:shadow-blue-600/35",
        variant === "secondary" &&
          "border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between rounded-xl border px-3 py-2 transition-all duration-300 md:hidden",
        visible
          ? "w-[94%] bg-white/95 dark:bg-[#070e1a]/95 border-slate-200/80 dark:border-slate-800/80 shadow-md backdrop-blur-md translate-y-1"
          : "w-full bg-white/80 dark:bg-[#070e1a]/80 border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex size-8 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 transition hover:text-blue-600",
        className
      )}
      aria-label="Toggle navigation"
    >
      {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
    </button>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "w-full overflow-hidden border-t border-slate-100 dark:border-slate-800/80 pt-3 mt-2 space-y-2 animate-in fade-in-50 duration-200",
        className
      )}
    >
      {children}
    </div>
  );
};
