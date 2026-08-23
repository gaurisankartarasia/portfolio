import Navbar from "@/components/navbar";
import PortfolioHero from "@/components/portfolio-hero";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsAndEducationWrapper from "@/components/skills-and-education-wrapper";
import ContactSection from "@/components/contact-section";

const validLangs = ["en", "or", "hi", "bn", "te", "ta", "es", "fr", "de", "ja"];
const validThemes = ["dark", "light"];

export async function generateStaticParams() {
  const paths = [];
  for (const lang of validLangs) {
    paths.push({ lang });
  }
  for (const theme of validThemes) {
    paths.push({ lang: theme });
  }
  return paths;
}

export default function DynamicRoutePage({ params }) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#070e1a] text-slate-900 dark:text-white selection:bg-blue-600 selection:text-white transition-colors duration-300">
      <Navbar />
      <PortfolioHero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsAndEducationWrapper />
      <ContactSection />
    </main>
  );
}
