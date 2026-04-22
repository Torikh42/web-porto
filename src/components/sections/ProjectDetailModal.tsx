"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Project } from "@/types";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <Dialog
      open={!!project}
      onOpenChange={(isOpen) => !isOpen && onClose()}
    >
      <DialogContent className="sm:max-w-[750px] bg-app-card border border-white/10 text-white p-0 overflow-hidden gap-0 shadow-[0_0_50px_rgba(232,185,49,0.1)] font-jetbrains">
        {project && (
          <>
            <div className="relative h-72 w-full bg-black">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-60"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center border-b border-white/5">
                  <span className="text-zinc-500">&lt;no_image /&gt;</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-app-card via-app-card/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <DialogTitle className="text-3xl md:text-4xl font-bold font-syne text-white mb-2 tracking-tight">
                  {project.title}
                </DialogTitle>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <DialogDescription className="text-base text-zinc-400 leading-relaxed mb-8 font-jetbrains">
                {project.description}
              </DialogDescription>

              <div className="mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-app-accent" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techstack.split(",").map((tech) => (
                    <span
                      key={tech.trim()}
                      className="bg-app-accent/10 text-app-accent text-xs px-3 py-1.5 rounded border border-app-accent/20"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {project.url && (
                <div className="pt-4 border-t border-white/5">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-app-accent text-black hover:bg-yellow-400 px-8 py-3 rounded font-syne font-bold transition-colors glow-box"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Launch Project
                  </motion.a>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
