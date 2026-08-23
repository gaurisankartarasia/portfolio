"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedLayersIcon,
} from "@/components/ui/animated-icons";
import { DotBackground } from "@/components/ui/dot-background";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2026",
    content: (
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 md:p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md transition-all backdrop-blur-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-slate-100 dark:border-slate-800/80 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                Associate Software Engineer
              </h3>
              <div className="text-xs font-semibold text-blue-700 dark:text-sky-400 mt-0.5">
                Mindtrack Technologies Private Limited
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1 sm:mt-0">
              <Badge
                variant="secondary"
                className="text-[10px] bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-sky-300 border-blue-200/60 dark:border-slate-700"
              >
                Full-time
              </Badge>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                Apr 2026 - Present
              </span>
            </div>
          </div>

          <p className="mt-3 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Leading full-stack engineering of Government of Odisha web platforms (E-ORMAS) using Angular, Laravel, and MySQL while managing internal project management workflows.
          </p>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {["Angular", "Laravel", "MySQL", "Architecture"].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-[10px] px-2 py-0.5 bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Late 2025",
    content: (
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 md:p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md transition-all backdrop-blur-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-slate-100 dark:border-slate-800/80 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                Junior Software Trainee
              </h3>
              <div className="text-xs font-semibold text-blue-700 dark:text-sky-400 mt-0.5">
                Mindtrack Technologies Private Limited
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1 sm:mt-0">
              <Badge
                variant="secondary"
                className="text-[10px] bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-sky-300 border-blue-200/60 dark:border-slate-700"
              >
                Full-time
              </Badge>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                Oct 2025 - Mar 2026
              </span>
            </div>
          </div>

          <p className="mt-3 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Engineered core modules for 150+ screen ERP and E-INDENT procurement system with iFMS payments, schema design (50+ tables), and 6-member team collaboration.
          </p>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {["React.js", "Shadcn UI", "Express.js", "MySQL", "RBAC", "iFMS"].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-[10px] px-2 py-0.5 bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Mid 2025",
    content: (
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 md:p-6 shadow-xs hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md transition-all backdrop-blur-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-slate-100 dark:border-slate-800/80 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                React &amp; Node.js Developer Intern
              </h3>
              <div className="text-xs font-semibold text-blue-700 dark:text-sky-400 mt-0.5">
                Mindtrack Technologies Private Limited
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1 sm:mt-0">
              <Badge
                variant="secondary"
                className="text-[10px] bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-sky-300 border-blue-200/60 dark:border-slate-700"
              >
                Internship
              </Badge>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
                Jul 2025 - Sep 2025
              </span>
            </div>
          </div>

          <p className="mt-3 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Developed public-facing health portals and secure administrative CMS dashboards with user authentication, role management, and REST APIs.
          </p>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {["React.js", "Node.js", "Express.js", "CMS"].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-[10px] px-2 py-0.5 bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    ),
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative transition-colors duration-300">
      <DotBackground className="py-20">
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-md border border-blue-200 dark:border-blue-500/30 bg-blue-100/60 dark:bg-blue-950/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-800 dark:text-blue-300"
            >
              <AnimatedLayersIcon className="size-3.5" />
              <span>Career Path</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              Professional Experience
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400"
            >
              Milestones and progressive impact at Mindtrack Technologies Private Limited.
            </motion.p>
          </div>

          {/* Aceternity Timeline */}
          <div className="mt-8">
            <Timeline data={timelineData} />
          </div>
        </div>
      </DotBackground>
    </section>
  );
}
