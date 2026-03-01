"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";
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
      <DialogContent className="sm:max-w-[700px] bg-[#141517] border-white/[0.08] text-white p-0 overflow-hidden gap-0 shadow-2xl">
        {project && (
          <>
            <div className="relative h-64 w-full bg-black/50">
              {project.imageUrl && (
                <Image
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141517] to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <DialogTitle className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </DialogTitle>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <DialogDescription className="text-base text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </DialogDescription>

              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techstack.split(",").map((tech) => (
                    <span
                      key={tech.trim()}
                      className="bg-white/[0.05] text-slate-200 text-sm px-3 py-1.5 rounded-md border border-white/[0.05]"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black hover:bg-slate-200 px-6 py-3 rounded-full font-medium transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </motion.a>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
