"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceList from "@/components/sections/ExperienceList";
import ProjectCard from "@/components/cards/ProjectCard";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ProjectDetailModal from "@/components/sections/ProjectDetailModal";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { profileData } from "@/data/profile";
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types";

export default function Home() {
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-app-bg text-app-text selection:bg-app-accent/20 selection:text-app-accent relative">
      {/* Top/Bottom Edge Gradients for Depth */}
      <div className="fixed top-0 inset-x-0 h-32 bg-gradient-to-b from-app-bg to-transparent pointer-events-none z-40" />
      <div className="fixed bottom-0 inset-x-0 h-40 bg-gradient-to-t from-app-bg to-transparent pointer-events-none z-40" />

      {/* Main Navigation */}
      <FloatingDock />

      <main className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10 pb-40">
        <HeroSection profileData={profileData} />

        {/* Content Sections Wrapper */}
        <div className="space-y-32">
          
          <motion.section
            id="experience"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12 flex items-center gap-4">
              <h2 className="text-3xl font-syne font-bold text-white tracking-tight">
                Experience
              </h2>
              <div className="h-px bg-white/10 flex-grow" />
            </div>
            <ExperienceList experience={profileData.experience} />
          </motion.section>

          <motion.section
            id="projects"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12 flex items-center gap-4">
              <h2 className="text-3xl font-syne font-bold text-white tracking-tight">
                Projects
              </h2>
              <div className="h-px bg-white/10 flex-grow" />
            </div>

            {loading ? (
              <div className="text-app-muted font-jetbrains animate-pulse">
                &gt; Loading_Projects...
              </div>
            ) : error ? (
              <div className="text-red-400 font-jetbrains">
                &gt; Error: {error}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    setSelectedProject={setSelectedProject}
                  />
                ))}
              </div>
            )}
          </motion.section>

          <SkillsSection skills={profileData.skills} />

          <AchievementsSection 
            achievements={profileData.achievements} 
            certifications={profileData.certifications} 
          />

        </div>

        <footer className="mt-32 pt-8 pb-12 border-t border-white/10 text-center">
          <p className="text-sm text-zinc-500 font-jetbrains">
            &copy; {new Date().getFullYear()} {profileData.name}. 
            <span className="block sm:inline sm:ml-2">System build stable.</span>
          </p>
        </footer>
      </main>

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
