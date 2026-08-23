"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  AnimatedMailIcon,
  AnimatedGithubIcon,
  AnimatedSparklesIcon,
} from "@/components/ui/animated-icons";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-16 bg-slate-50 dark:bg-[#0a1526] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-md border border-blue-200 dark:border-blue-500/30 bg-blue-100/60 dark:bg-blue-950/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-blue-800 dark:text-blue-300"
              >
                <AnimatedMailIcon className="size-3.5" />
                <span>Contact</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
              >
                Let&apos;s Connect
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                Reach out for full-stack engineering roles, enterprise collaborations, or project inquiries.
              </motion.p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-md bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-sky-400">
                  <AnimatedMailIcon className="size-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Email</div>
                  <a
                    href="mailto:gaurisankartarasia@gmail.com"
                    className="text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition"
                  >
                    gaurisankartarasia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-md bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-sky-400">
                  <span className="text-xs font-bold font-mono">📱</span>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Phone</div>
                  <a
                    href="tel:+919938292646"
                    className="text-xs font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition"
                  >
                    +91 9938292646
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-md bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-sky-400">
                  <span className="text-xs font-bold font-mono">📍</span>
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Location</div>
                  <div className="text-xs font-semibold text-slate-900 dark:text-white">
                    Cuttack, Odisha, 754031
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-0.5">
                <div className="flex size-8 items-center justify-center rounded-md bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-600 dark:text-sky-400">
                  <AnimatedGithubIcon className="size-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Profiles</div>
                  <div className="flex items-center gap-2.5 mt-0.5 text-xs font-semibold text-blue-700 dark:text-sky-400">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                    <span className="text-slate-400">•</span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 md:p-6 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    required
                    placeholder="Write your message or inquiry here..."
                    className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  size="default"
                  className="w-full rounded-md bg-blue-600 font-semibold text-white shadow-sm hover:bg-blue-700 text-xs h-9 tracking-wider"
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <AnimatedSparklesIcon className="size-3.5" /> Message Sent Successfully
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Gaurisankar Tarasia. All rights reserved.</p>
          <div className="flex items-center gap-4 font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-sky-400 transition">About</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-sky-400 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-sky-400 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-sky-400 transition">Skills</a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-sky-400 transition">Education</a>
          </div>
        </div>
      </div>
    </section>
  );
}
