"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";

interface TechnicalSkillsCardProps {
  skills: { [key: string]: string[] };
}

export default function TechnicalSkillsCard({ skills }: TechnicalSkillsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="h-full shadow-xl border border-slate-200/20 bg-slate-900/40 backdrop-blur-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(skills).map(
              ([category, skillList]) => (
                <div key={category}>
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-3 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs bg-slate-700/50 text-slate-200 hover:bg-slate-700/80 transition-all duration-200 shadow-sm border border-slate-500/50"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
