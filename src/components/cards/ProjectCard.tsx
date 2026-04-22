"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

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
      className="group relative w-full cursor-pointer h-full perspective-container"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { rotateX: 0, rotateY: 0, y: 0 },
          hover: { rotateX: 2, rotateY: -2, y: -5 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="h-full relative preserve-3d"
      >
        {/* Animated Gradient Border */}
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 group-hover:from-app-accent/50 group-hover:via-app-accent/20 group-hover:to-app-accent/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
        
        <div className="relative h-full flex flex-col bg-app-card border border-white/5 rounded-xl overflow-hidden preserve-3d backdrop-blur-sm z-10">
          
          {/* Image Header */}
          <div className="relative aspect-video overflow-hidden">
            {project.imageUrl ? (
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="font-jetbrains text-app-muted text-sm">&lt;no_image /&gt;</span>
              </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-app-bg/90 via-app-bg/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            
            {/* Top-right Icon */}
            <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-app-accent" />
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 flex-grow flex flex-col relative z-20">
            <h3 className="text-xl font-syne font-bold text-white group-hover:text-app-accent transition-colors mb-2">
              {project.title}
            </h3>
            
            <p className="text-sm text-zinc-400 line-clamp-3 mb-6 leading-relaxed font-jetbrains">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techstack.split(",").slice(0, 4).map((tech) => (
                <span 
                  key={tech} 
                  className="text-[10px] uppercase tracking-wider text-app-accent bg-app-accent/10 px-2 py-1 border border-app-accent/20 rounded-md font-jetbrains"
                >
                  {tech.trim()}
                </span>
              ))}
              {project.techstack.split(",").length > 4 && (
                <span className="text-[10px] uppercase tracking-wider text-zinc-500 bg-white/5 px-2 py-1 rounded-md font-jetbrains">
                  +{project.techstack.split(",").length - 4}
                </span>
              )}
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
