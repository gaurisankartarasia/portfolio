"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Menu, X } from "@animateicons/react/lucide";
import { cn } from "@/lib/utils";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.header
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex w-full justify-center pointer-events-none px-3 pt-3 md:pt-4",
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
    </motion.header>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05)"
          : "none",
        width: visible ? "68%" : "100%",
        y: visible ? 8 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-6xl flex-row items-center justify-between self-start rounded-2xl border px-5 py-2.5 transition-colors duration-300 md:flex",
        visible
          ? "bg-white/85 dark:bg-[#070e1a]/85 border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5 dark:shadow-black/20"
          : "bg-white/50 dark:bg-[#070e1a]/50 border-slate-200/40 dark:border-slate-800/40 backdrop-blur-xs",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items = [], className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden md:flex flex-row items-center justify-center space-x-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-3 py-1.5 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-lg bg-blue-50/80 dark:bg-slate-800/80"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const NavbarLogo = ({ children, className }) => {
  return (
    <a href="#" className={cn("flex items-center gap-2.5 group shrink-0", className)}>
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
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(12px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05)"
          : "none",
        width: visible ? "94%" : "100%",
        y: visible ? 6 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col items-center justify-between rounded-xl border px-3 py-2 transition-colors md:hidden",
        visible
          ? "bg-white/90 dark:bg-[#070e1a]/90 border-slate-200/80 dark:border-slate-800/80 shadow-md"
          : "bg-white/80 dark:bg-[#070e1a]/80 border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
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
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={cn(
            "w-full overflow-hidden border-t border-slate-100 dark:border-slate-800/80 pt-3 mt-2 space-y-2",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
