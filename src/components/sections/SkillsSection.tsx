"use client";

import { motion } from "framer-motion";

interface SkillsSectionProps {
  skills: Record<string, string[]>;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#08090A]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
          Skills
        </h2>
      </div>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium leading-5 text-primary-foreground hover:bg-white/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
