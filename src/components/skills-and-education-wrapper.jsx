"use client";

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";

export default function SkillsAndEducationWrapper() {
  return (
    <div className="relative w-full overflow-hidden transition-colors duration-300">
      <WavyBackground
        className="w-full py-20 space-y-24"
        containerClassName="min-h-fit bg-slate-50/50 dark:bg-[#0a1526]/50"
        speed="slow"
        waveOpacity={0.35}
        blur={8}
      >
        <SkillsSection />
        <EducationSection />
      </WavyBackground>
    </div>
  );
}
