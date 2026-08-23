"use client";

import { motion } from "motion/react";
import {
  AnimatedCodeIcon,
  AnimatedLayersIcon,
  AnimatedCpuIcon,
  AnimatedTerminalIcon,
} from "@/components/ui/animated-icons";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const skillGroups = [
  {
    title: "Frontend",
    icon: AnimatedCodeIcon,
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend",
    icon: AnimatedCpuIcon,
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Laravel",
    ],
  },
  {
    title: "Database",
    icon: AnimatedLayersIcon,
    items: [
      "MySQL",
      "Relational Schema Design (50+ Tables)",
      "Database Relationships & Indexing",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: AnimatedTerminalIcon,
    items: [
      "Git",
      "GitHub",
      "REST APIs",
      "MVC Architecture",
      "Authentication & Authorization (RBAC)",
      "iFMS Payment Integration",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-md border border-blue-200 dark:border-blue-500/30 bg-blue-100/60 dark:bg-blue-950/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-800 dark:text-blue-300"
          >
            <AnimatedCpuIcon className="size-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Technical Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400"
          >
            Core technical competencies categorized directly from my professional resume.
          </motion.p>
        </div>

        {/* Aceternity Card Hover Effect for Skills */}
        <div className="mt-8">
          <HoverEffect items={skillGroups} />
        </div>
      </div>
    </section>
  );
}
