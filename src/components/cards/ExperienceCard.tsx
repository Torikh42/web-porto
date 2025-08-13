"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface ExperienceCardProps {
  experience: Experience[];
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="h-full shadow-xl border border-slate-200/20 bg-slate-900/40 backdrop-blur-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div key={index} className="p-4 bg-black/20 rounded-lg">
                <h4 className="font-bold text-lg text-white">{exp.title}</h4>
                <p className="text-sm font-medium text-cyan-400 mb-3">
                  {exp.company} • {exp.period}
                </p>
                <ul className="text-sm space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="text-slate-300">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
