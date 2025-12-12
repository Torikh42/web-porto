"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, MapPin, Mail, Linkedin, GithubIcon } from "lucide-react";
import ExperienceList from "@/components/sections/ExperienceList";
import ProjectCard from "@/components/cards/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string | null;
  url: string | null;
  techstack: string;
  imageUrl: string | null;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        console.error("Project fetch error:", err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const profileData = {
    name: "Torikh Abdullah Naser",
    title: "Information Systems Student",
    location: "Bogor, Indonesia",
    email: "torikhnaser42@gmail.com",
    github: "https://github.com/torikh42",
    linkedin: "https://www.linkedin.com/in/torikh-abdullah-naser-80a738320/",
    description:
      "Information Systems student at UPN Veteran Jakarta with a strong interest in Software Engineering. Actively involved in organizations and competitions to hone technical skills, leadership skills, and build extensive networks.",
    skills: {
      "Languages": ["JavaScript/TypeScript", "C/C++"],
      "Backend": ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "Supabase"],
      "Frontend": ["React", "Next.js", "Tailwind CSS"],
      "Tools": ["Git", "Docker", "Postman", "Figma"],
    },
    experience: [
      {
        title: "Staff Backend - PIM (Project Internal Maintenance)",
        company: "KSM Android UPNVJ",
        period: "Feb 2025 - Present",
        description: [
          "Centralized event announcements for 100-200 members, reducing manual broadcast time by ~30-60 minutes/month and improving event awareness.",
          "Built 6-8 stable REST endpoints with full OpenAPI docs to streamline development and integration.",
          "Improved backend efficiency with validation middleware and optimized Cloudflare file handling."
        ],
      },
    ],
    achievements: [
      "Top 4 Finalist Android Hackathon x Slashcom 2025",
      "1st Place Olimpiade Olahraga Siswa Nasional (02SN) se-Kabupaten/Kota (2023)",
      "1st Place National Pencak Silat Championship Satria Bumi Pamungkas Open 2 (2022)",
    ],
    certifications: [
      {
        name: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        date: "July 2025",
      },
      {
        name: "Backend Beginner Study Club",
        issuer: "KSM Android UPNVJ",
        date: "July 2025",
      },
      {
        name: "Backend Basic Study Club",
        issuer: "KSM Android UPNVJ",
        date: "Jan 2025",
      },
    ],
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary bg-[#08090A]">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* LEFT COLUMN - STICKY HEADER */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {profileData.name}
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
                  {profileData.title}
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
                  {profileData.description}
                </p>

                {/* Navigation */}
                <nav className="nav hidden lg:block mt-16">
                  <ul className="mt-16 w-max">
                    <li>
                      <a className="group flex items-center py-3 active" href="#experience">
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">Experience</span>
                      </a>
                    </li>
                    <li>
                      <a className="group flex items-center py-3" href="#projects">
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">Projects</span>
                      </a>
                    </li>
                    <li>
                      <a className="group flex items-center py-3" href="#skills">
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">Skills</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </motion.div>
            </div>

            <ul className="ml-1 mt-8 flex items-center gap-5 lg:mt-0" aria-label="Social media">
              <li>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                  <GithubIcon className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
              <li>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${profileData.email}`} className="text-muted-foreground hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{profileData.location}</span>
                </div>
              </li>
            </ul>
          </header>

          {/* RIGHT COLUMN - SCROLLABLE CONTENT */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* Experience Section */}
            <motion.section 
              id="experience" 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#08090A]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Experience</h2>
              </div>
              <ExperienceList experience={profileData.experience} />
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              id="projects" 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#08090A]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Projects</h2>
              </div>
              
              {loading ? (
                <div className="text-sm text-muted-foreground">Loading projects...</div>
              ) : error ? (
                <div className="text-sm text-red-400">Error loading projects</div>
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

            {/* Skills Section */}
            <motion.section 
              id="skills" 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#08090A]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Skills</h2>
              </div>
              <div className="space-y-8">
                {Object.entries(profileData.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-white mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className="flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium leading-5 text-primary-foreground hover:bg-white/20 transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Awards & Certifications - Simple List */}
            <motion.section 
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#08090A]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Achievements & Certifications</h2>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Achievements</h3>
                  <ul className="space-y-4">
                    {profileData.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-white/10">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Certifications</h3>
                  <ul className="space-y-4">
                    {profileData.certifications.map((cert, idx) => (
                      <li key={idx} className="group flex justify-between items-baseline gap-4">
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{cert.name}</span>
                        <span className="text-xs text-muted-foreground/60 whitespace-nowrap">{cert.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            <footer className="pt-8 text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Torikh Abdullah Naser. Built with Next.js & Tailwind.</p>
            </footer>

          </main>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}
      >
        <DialogContent className="sm:max-w-[700px] bg-[#141517] border-white/[0.08] text-white p-0 overflow-hidden gap-0 shadow-2xl">
          {selectedProject && (
            <>
              <div className="relative h-64 w-full bg-black/50">
                {selectedProject.imageUrl && (
                  <Image
                    src={selectedProject.imageUrl}
                    alt={`Screenshot of ${selectedProject.title}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141517] to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <DialogTitle className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <DialogDescription className="text-base text-muted-foreground leading-relaxed mb-8">
                  {selectedProject.description}
                </DialogDescription>
                
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techstack
                      .split(",")
                      .map((tech) => (
                        <span
                          key={tech.trim()}
                          className="bg-white/[0.05] text-slate-200 text-sm px-3 py-1.5 rounded-md border border-white/[0.05]"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                  </div>
                </div>
                
                {selectedProject.url && (
                  <motion.a
                    href={selectedProject.url}
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
    </div>
  );
}
