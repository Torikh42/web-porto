"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";

interface AchievementsCardProps {
  achievements: string[];
}

export default function AchievementsCard({
  achievements,
}: AchievementsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="h-full shadow-xl border border-slate-200/20 bg-slate-900/40 backdrop-blur-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-3 bg-black/20 rounded-lg"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0,0,0,0.4)",
                }}
              >
                <Trophy className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-300 font-medium">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
