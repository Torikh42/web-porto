"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface ExperienceListProps {
  experience: Experience[];
}

export default function ExperienceList({ experience }: ExperienceListProps) {
  return (
    <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-16 py-8">
      {experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12 group"
        >
          {/* Timeline Node */}
          <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-app-bg border-2 border-zinc-600 group-hover:border-app-accent group-hover:bg-app-accent transition-colors duration-300" />
          
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
            <h3 className="text-xl font-syne font-bold text-white group-hover:text-app-accent transition-colors duration-200">
              {exp.title}
            </h3>
            <div className="flex items-center gap-3 text-sm font-jetbrains mt-1 md:mt-0">
              <span className="text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                {exp.period}
              </span>
            </div>
          </div>
          
          <div className="text-base font-jetbrains text-zinc-400 mb-6 font-medium">
            <span className="text-pink-500 mr-2">@</span>
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-app-accent transition-colors inline-flex items-center gap-1 group/link"
              >
                {exp.company}
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <span className="text-zinc-300">{exp.company}</span>
            )}
          </div>
          
          <div className="space-y-3 mb-6">
            {exp.description.map((desc, idx) => (
              <p
                key={idx}
                className="text-zinc-400 leading-relaxed text-sm md:text-base"
              >
                {desc}
              </p>
            ))}
          </div>
          
          {exp.techstack && (
            <div className="flex flex-wrap gap-2">
              {exp.techstack.map((tech, idx) => (
                <span
                  key={idx}
                  className="flex items-center rounded bg-white/5 border border-white/5 px-2.5 py-1 text-xs font-jetbrains text-zinc-300 hover:bg-app-accent/10 hover:border-app-accent/30 hover:text-app-accent transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
