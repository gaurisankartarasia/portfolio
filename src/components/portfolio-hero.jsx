"use client";

import { motion } from "motion/react";
import { CloudShader } from "@/components/ui/cloud-shader";
import { SquigglyText } from "@/components/ui/squiggly-text";
import {
  AnimatedRocketIcon,
  AnimatedMailIcon,
} from "@/components/ui/animated-icons";
import { PointerHighlight } from "@/components/ui/pointer-highlight";


export default function PortfolioHero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#e8f2fc] via-[#f4f8fd] to-white dark:from-[#0b1728] dark:via-[#0e1d32] dark:to-[#070e1a] transition-colors duration-300 pt-20 md:pt-24">
      {/* Cloud Shader Backdrop */}
      <motion.div
        className="absolute inset-0 opacity-80 dark:opacity-40 mix-blend-normal dark:mix-blend-screen pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute h-1/2 w-1/2 origin-top-left scale-200">
          <CloudShader speed={0.7} className="absolute inset-0" />
        </div>
      </motion.div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-white dark:to-[#070e1a] pointer-events-none" />

      {/* Hero Body */}
      <div className="relative z-20 mx-auto flex min-h-[calc(85vh-80px)] max-w-6xl flex-col justify-center px-6 pb-14 md:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-md border border-blue-200 dark:border-blue-500/30 bg-white/80 dark:bg-slate-900/80 px-3 py-1 shadow-xs backdrop-blur-md mb-4 text-xs font-medium text-blue-900 dark:text-blue-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-emerald-600"></span>
            </span>
            <span>Associate Software Engineer • Mindtrack Technologies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            <SquigglyText stepDuration={70} scale={[4, 6]}>
              Software Engineer
            </SquigglyText>{" "}
            &amp;{" "}
            <SquigglyText stepDuration={70} scale={[4, 6]}>
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </SquigglyText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg"
          >
            Architecting scalable enterprise platforms, supply chain workflows, and Government of Odisha web systems with React, Node.js, and Laravel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <PointerHighlight>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 m-2"
            >
              <AnimatedRocketIcon className="size-4" />
              <span>View Projects</span>
            </a>
            </PointerHighlight>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 shadow-xs transition hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <span>Experience</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 transition hover:text-blue-600 dark:hover:text-blue-400"
            >
              <AnimatedMailIcon className="size-4 text-blue-600 dark:text-blue-400" />
              <span>Contact</span>
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-slate-200/90 dark:border-slate-800 pt-5"
          >
            <div className="rounded-lg border border-blue-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3 shadow-xs backdrop-blur-xs">
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Current Role</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Associate Software Engineer</div>
              <div className="text-[11px] text-blue-600 dark:text-sky-400">Mindtrack Technologies</div>
            </div>
            <div className="rounded-lg border border-blue-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3 shadow-xs backdrop-blur-xs">
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Education</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">MCA (2023 - 2025)</div>
              <div className="text-[11px] text-blue-600 dark:text-sky-400">Gandhi Engineering College</div>
            </div>
            <div className="rounded-lg border border-blue-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3 shadow-xs backdrop-blur-xs">
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Location</div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Cuttack, Odisha</div>
              <div className="text-[11px] text-blue-600 dark:text-sky-400">gaurisankartarasia@gmail.com</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
