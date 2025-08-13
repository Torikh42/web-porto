"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string | null;
  url: string | null;
  techstack: string;
  imageUrl: string | null;
}

interface ProjectCardProps {
  project: Project;
  setSelectedProject: (project: Project) => void;
}

export default function ProjectCard({
  project,
  setSelectedProject,
}: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      onClick={() => setSelectedProject(project)}
      className="cursor-pointer group"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-2xl border border-slate-200/20 bg-slate-900/40 backdrop-blur-lg hover:bg-slate-900/60 hover:border-cyan-400/50">
        <CardHeader className="p-0">
          {project.imageUrl && (
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </CardTitle>
        </CardContent>
      </Card>
    </motion.div>
  );
}
