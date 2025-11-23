"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
      onClick={() => setSelectedProject(project)}
      className="group cursor-pointer h-full"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Card className="h-full overflow-hidden border border-white/10 bg-[#141517] hover:border-white/20 hover:bg-[#1A1B1E] transition-all duration-300 flex flex-col">
        <CardHeader className="p-0 relative aspect-video overflow-hidden">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No Image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </CardHeader>
        
        <CardContent className="p-5 flex-grow">
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="p-5 pt-0 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.techstack.split(",").slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] uppercase tracking-wider text-muted-foreground bg-white/5 px-2 py-1 rounded border border-white/5"
              >
                {tech.trim()}
              </span>
            ))}
            {project.techstack.split(",").length > 3 && (
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground px-1 py-1">
                +{project.techstack.split(",").length - 3}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
