"use client";

import { motion } from "framer-motion";
import { Certification } from "@/types";
import { Trophy, Award } from "lucide-react";

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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-app-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
          Achievements & Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
        <div>
          <h3 className="flex items-center gap-3 text-lg font-syne font-bold text-white mb-8 border-b border-white/5 pb-4">
            <Trophy className="w-5 h-5 text-app-accent" />
            Achievements
          </h3>
          <ul className="space-y-6">
            {achievements.map((achievement, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-4"
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-app-accent group-hover:glow-box shrink-0 transition-colors" />
                <span className="text-sm md:text-base text-zinc-400 leading-relaxed font-jetbrains group-hover:text-zinc-200 transition-colors">
                  {achievement}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-3 text-lg font-syne font-bold text-white mb-8 border-b border-white/5 pb-4">
            <Award className="w-5 h-5 text-app-accent" />
            Certifications
          </h3>
          <ul className="space-y-6">
            {certifications.map((cert, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 bg-app-card/50 border border-white/5 p-4 rounded-lg hover:border-app-accent/30 hover:bg-white/5 transition-all"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm md:text-base text-zinc-200 font-syne font-medium group-hover:text-app-accent transition-colors">
                    {cert.name}
                  </span>
                  <span className="text-xs font-jetbrains text-zinc-500">
                    {cert.issuer}
                  </span>
                </div>
                <span className="text-xs font-jetbrains text-zinc-500 bg-black/40 px-2 py-1 rounded">
                  {cert.date}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
