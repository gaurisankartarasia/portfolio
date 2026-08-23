"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShoppingBag,
  Globe,
} from "@animateicons/react/lucide";
import {
  Building2,
  FileCheck2,
  KanbanSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GridBackground } from "@/components/ui/grid-background";

const projects = [
  {
    id: "e-ormas",
    title: "E-ORMAS – Govt. of Odisha",
    tech: "Angular • Laravel • MySQL",
    category: "E-Commerce Platform",
    icon: <ShoppingBag className="h-4 w-4 text-blue-600 dark:text-sky-400" />,
    className: "md:col-span-2",
    summary:
      "State e-commerce portal promoting Odisha handlooms & handicrafts with Angular frontend modules and Laravel backend APIs.",
    tags: ["Angular", "Laravel", "MySQL", "E-Commerce"],
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning (ERP)",
    tech: "React.js • Shadcn UI • Express.js • MySQL",
    category: "Enterprise Management",
    icon: <Building2 className="h-4 w-4 text-blue-600 dark:text-sky-400" />,
    className: "md:col-span-1",
    summary:
      "Large-scale ERP across 150+ screens for payroll, ledger accounting, and inventory with 50+ normalized MySQL tables, built with a 6-developer team.",
    tags: ["React.js", "Express.js", "MySQL", "150+ Screens"],
  },
  {
    id: "e-indent",
    title: "E-INDENT Supply System",
    tech: "React.js • Laravel • MySQL",
    category: "Govt. Procurement",
    icon: <FileCheck2 className="h-4 w-4 text-blue-600 dark:text-sky-400" />,
    className: "md:col-span-1",
    summary:
      "Procurement & inventory digitization for Govt. of Odisha organizations featuring iFMS payment gateway integration and RBAC security.",
    tags: ["React.js", "Laravel", "iFMS", "RBAC"],
  },
  {
    id: "pms",
    title: "Project Management System",
    tech: "Laravel • MySQL",
    category: "Workflow Tracking",
    icon: <KanbanSquare className="h-4 w-4 text-blue-600 dark:text-sky-400" />,
    className: "md:col-span-1",
    summary:
      "Internal planning and milestone tracking system managing project lifecycles, member allocations, and task module workflows.",
    tags: ["Laravel", "MySQL", "Milestone Tracking"],
  },
  {
    id: "cms",
    title: "Public Health Department CMS",
    tech: "React.js • Express.js • MySQL",
    category: "Government CMS",
    icon: <Globe className="h-4 w-4 text-blue-600 dark:text-sky-400" />,
    className: "md:col-span-1",
    summary:
      "Dual-interface CMS displaying Directorate of Public Health resources with high-speed citizen access and secure admin control.",
    tags: ["React.js", "Express.js", "MySQL", "CMS"],
  },
];

const ProjectCardHeader = ({ category, tech, tags }) => (
  <div className="flex flex-1 w-full min-h-[5.5rem] flex-col justify-between rounded-lg bg-gradient-to-br from-blue-50/80 via-slate-50/60 to-indigo-50/40 dark:from-slate-950/80 dark:via-slate-900/60 dark:to-slate-900/40 p-3.5 border border-slate-200/70 dark:border-slate-800">
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-semibold text-blue-700 dark:text-sky-300 bg-blue-100/70 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-800/40 px-2 py-0.5 rounded-md">
        {category}
      </span>
      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
        {tech}
      </span>
    </div>
    <div className="flex flex-wrap gap-1.5 pt-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          className="text-[9px] px-1.5 py-0 bg-white/90 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-normal"
        >
          {tag}
        </Badge>
      ))}
    </div>
  </div>
);

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative transition-colors duration-300 overflow-hidden"
    >
      <GridBackground className="py-20">
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-md border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300"
            >
              <span>Production Projects</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              Featured Systems &amp; Case Studies
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400"
            >
              Key enterprise applications and government platforms engineered for scale and performance.
            </motion.p>
          </div>

          {/* Aceternity Bento Grid */}
          <div className="mt-12">
            <BentoGrid className="max-w-6xl mx-auto">
              {projects.map((project) => (
                <BentoGridItem
                  key={project.id}
                  title={project.title}
                  description={project.summary}
                  header={
                    <ProjectCardHeader
                      category={project.category}
                      tech={project.tech}
                      tags={project.tags}
                    />
                  }
                  icon={project.icon}
                  className={project.className}
                />
              ))}
            </BentoGrid>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
