"use client";

import { motion } from "motion/react";
import {
  AnimatedSparklesIcon,
} from "@/components/ui/animated-icons";
import { Meteors } from "@/components/ui/meteors";

const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    period: "2023 – 2025",
    institution: "Gandhi Engineering College, Bhubaneswar",
  },
  {
    degree: "Bachelor of Science (BSc.)",
    period: "2022",
    institution: "M.S. Degree College, Badamba",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-md border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300"
          >
            <AnimatedSparklesIcon className="size-3.5" />
            <span>Academic Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Education
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400"
          >
            Formal degrees and academic qualifications.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 p-6 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all shadow-md backdrop-blur-xs"
            >
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h4>
                <span className="text-xs font-semibold text-blue-700 dark:text-sky-400 font-mono">
                  {edu.period}
                </span>
              </div>
              <div className="relative z-10 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-2">
                {edu.institution}
              </div>

              {/* Aceternity Meteors Effect */}
              <Meteors number={15} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
