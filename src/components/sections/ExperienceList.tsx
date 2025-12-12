"use client";

import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string[];
}

interface ExperienceListProps {
  experience: Experience[];
}

export default function ExperienceList({ experience }: ExperienceListProps) {
  return (
    <div className="space-y-12">
      {experience.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          className="group"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
            <h3 className="text-lg font-medium text-white group-hover:text-primary transition-colors duration-200">
              {exp.title}
            </h3>
            <span className="text-sm font-mono text-muted-foreground">
              {exp.period}
            </span>
          </div>
          <div className="text-sm text-primary mb-4 font-medium">
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
              >
                {exp.company}
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              exp.company
            )}
          </div>
          <ul className="space-y-2">
            {exp.description.map((desc, idx) => (
              <li
                key={idx}
                className="text-muted-foreground leading-relaxed text-sm pl-4 border-l border-white/10 hover:border-primary/50 transition-colors duration-200"
              >
                {desc}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
