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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-app-bg/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
          Skills
        </h2>
      </div>

      <div className="font-jetbrains bg-[#0b0c0f] border border-white/5 rounded-xl p-4 md:p-8 shadow-2xl overflow-x-auto">
        <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-zinc-500 text-xs ml-4">skills.ts</span>
        </div>

        <div className="text-sm md:text-base leading-relaxed whitespace-pre font-mono">
          <span className="text-pink-500">const</span> <span className="text-blue-400">skills</span> <span className="text-zinc-300">=</span> <span className="text-yellow-300">{"{"}</span>
          
          <div className="pl-4 md:pl-8 space-y-6 my-4">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-zinc-300">"{category.toLowerCase()}"</span><span className="text-zinc-300">:</span> <span className="text-yellow-300">[</span>
                <div className="flex flex-wrap gap-2 pl-4 md:pl-8 my-2">
                  {skillList.map((skill, sIdx) => (
                    <span
                      key={skill}
                      className="text-app-accent hover:text-white hover:bg-app-accent/20 px-2 py-0.5 rounded cursor-default transition-colors"
                    >
                      "{skill}"{sIdx < skillList.length - 1 ? <span className="text-zinc-300">,</span> : ""}
                    </span>
                  ))}
                </div>
                <span className="text-yellow-300">]</span><span className="text-zinc-300">,</span>
              </motion.div>
            ))}
          </div>
          
          <span className="text-yellow-300">{"}"}</span><span className="text-zinc-300">;</span>
        </div>
      </div>
    </motion.section>
  );
}
