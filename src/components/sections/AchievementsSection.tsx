"use client";

import { motion } from "framer-motion";
import { Certification } from "@/types";

interface AchievementsSectionProps {
  achievements: string[];
  certifications: Certification[];
}

export default function AchievementsSection({ achievements, certifications }: AchievementsSectionProps) {
  return (
    <motion.section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#08090A]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
          Achievements & Certifications
        </h2>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
            Achievements
          </h3>
          <ul className="space-y-4">
            {achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-white/10"
              >
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
            Certifications
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <li
                key={idx}
                className="group flex justify-between items-baseline gap-4"
              >
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {cert.name}
                </span>
                <span className="text-xs text-muted-foreground/60 whitespace-nowrap">
                  {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
