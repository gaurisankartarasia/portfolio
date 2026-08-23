"use client";

import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  AnimatedSparklesIcon,
  AnimatedCodeIcon,
  AnimatedRocketIcon,
} from "@/components/ui/animated-icons";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 transition-colors duration-300">
      <AuroraBackground className="py-10">
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 w-full">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Summary */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-md border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300"
            >
              <AnimatedSparklesIcon className="size-3.5" />
              <span>About Me</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Full-stack software engineer building enterprise &amp; government platforms.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Experienced in developing ERP systems, supply chain automation, e-commerce applications, and secure CMS portals using React, Angular, Node.js, and Laravel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <div className="rounded-lg border border-blue-100 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-900/50 p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-blue-700 dark:text-sky-400 font-semibold text-xs mb-1">
                  <AnimatedCodeIcon className="size-3.5" />
                  <span>Scalable Architecture</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Modular APIs, relational schemas (50+ tables), and secure role-based access control.
                </p>
              </div>

              <div className="rounded-lg border border-blue-100 dark:border-slate-800 bg-blue-50/50 dark:bg-slate-900/50 p-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-blue-700 dark:text-sky-400 font-semibold text-xs mb-1">
                  <AnimatedRocketIcon className="size-3.5" />
                  <span>Production Delivery</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Proven delivery on Govt. of Odisha portals, 150+ screen ERPs, and payment gateways.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column Profile Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-blue-100 dark:border-slate-800 bg-gradient-to-b from-white to-blue-50/40 dark:from-slate-900 dark:to-slate-950 p-5 shadow-md shadow-blue-500/5"
            >
              <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-3.5">
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-sm text-white shadow-sm shadow-blue-500/20">
                  GT
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Gaurisankar Tarasia</h3>
                  <p className="text-xs font-medium text-blue-600 dark:text-sky-400">Software Engineer</p>
                </div>
              </div>

              <div className="mt-3.5 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/80 pb-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Current Role</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Associate Software Engineer</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/80 pb-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Company</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Mindtrack Technologies</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/80 pb-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Frontend</span>
                  <span className="font-medium text-blue-700 dark:text-sky-300">React.js, Next.js, Angular, TS</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/80 pb-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Backend</span>
                  <span className="font-medium text-blue-700 dark:text-sky-300">Node.js, Express.js, NestJS, Laravel</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-500 dark:text-slate-400">Location</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Cuttack, Odisha</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </AuroraBackground>
    </section>
  );
}
