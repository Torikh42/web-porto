"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface Certification {
  name: string;
  date: string;
  score?: string;
}

interface CertificationsCardProps {
  certifications: Certification[];
}

export default function CertificationsCard({ certifications }: CertificationsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="h-full shadow-xl border border-slate-200/20 bg-slate-900/40 backdrop-blur-lg">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 bg-black/20 rounded-lg">
                <h4 className="font-semibold text-white">
                  {cert.name}
                </h4>
                <p className="text-sm text-cyan-400 font-medium">
                  {cert.date}
                  {cert.score && ` • Score: ${cert.score}`}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
