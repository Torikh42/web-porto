"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceList from "@/components/sections/ExperienceList";
import ProjectCard from "@/components/cards/ProjectCard";
import MobileNav from "@/components/ui/MobileNav";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ProjectDetailModal from "@/components/sections/ProjectDetailModal";
import { profileData } from "@/data/profile";
import { useProjects } from "@/hooks/useProjects";
import { Project } from "@/types";

export default function Home() {
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary bg-[#08090A]">
      <MobileNav />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <HeroSection profileData={profileData} />

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <motion.section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#08090A]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
                  Experience
                </h2>
              </div>
              <ExperienceList experience={profileData.experience} />
            </motion.section>

            <motion.section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#08090A]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
                  Projects
                </h2>
              </div>

              {loading ? (
                <div className="text-sm text-muted-foreground">
                  Loading projects...
                </div>
              ) : error ? (
                <div className="text-sm text-red-400">
                  Error loading projects
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <footer className="pt-8 text-sm text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} {profileData.name}. Built
                with Next.js & Tailwind.
              </p>
            </footer>
          </main>
        </div>
      </div>

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
