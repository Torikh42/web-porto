"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github } from "lucide-react";
import ProfileSection from "@/components/sections/ProfileSection";
import TechnicalSkillsCard from "@/components/cards/TechnicalSkillsCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import AchievementsCard from "@/components/cards/AchievementsCard";
import CertificationsCard from "@/components/cards/CertificationsCard";
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
    title: "Backend Developer & Information Systems Student",
    location: "Bogor, Indonesia",
    email: "torikhnaser42@gmail.com",
    phone: "+62 878-9274-9782",
    linkedin: "https://www.linkedin.com/in/torikh-abdullah-naser-80a738320/",
    description:
      "An Information Systems student at UPN Veteran Jakarta with a strong interest in Software Engineering. Actively involved in organizations and competitions to hone technical skills, leadership skills, and build extensive networks.",
    skills: {
      "Programming Language": ["JavaScript/TypeScript", "C/C++"],
      Backend: [
        "Node.js",
        "Express.js",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
        "Supabase",
        "NeonDB",
        "Clerk",
      ],
      Frontend: ["ReactJS", "Tailwind CSS", "Next.js", "React Native", "Expo"],
      "Version Control": ["Git/GitHub"],
      Tools: ["Postman", "Docker", "Figma", "n8n"],
    },
    experience: [
      {
        title: "Staff Backend - PIM (Project Internal Maintenance)",
        company: "KSM Android UPNVJ",
        period: "Feb 2025 - now",
        description: [
          "Maintaining and continuing the backend development of the web application",
          "Creating several validation middleware, such as request body and query validation",
          "Creating an API Specification (openAPI)",
          "Creating file upload and deletion configurations to Cloudflare"
        ],
      },
    ],
    achievements: [
      "Top 4 Finalist Android Hackathon x Slashcom 2025",
      "Juara 1 Olimpiade Olahraga Siswa Nasional (02SN) se-Kabupaten/Kota (2023)",
      "Juara 1 Kejuaraan Pencak Silat tingkat Nasional Satria Bumi Pamungkas Open 2 (2022)",
      "Juara 1 Kejuaraan Pencak Silat tingkat Nasional Bekasi Nasional Championship 1 (2022)",
    ],
    certifications: [
      {
        name: "Responsive Web Design - FreeCodeCamp",
        date: "July 2025",
      },
      {
        name: "Sertifikat kelulusan Study Club Backend Beginner KSM Android UPNVJ",
        date: "July 2025",
      },
      {
        name: "Sertifikat kelulusan Study Club Backend Basic KSM Android UPNVJ",
        date: "Jan 2025",
      },
      {
        name: "ENGLISH LANGUAGE PROFICIENCY TEST (ELPT)",
        date: "Dec 2024",
        score: "463 (Upper Intermediate)",
      },
      {
        name: "Uji Kemahiran Bahasa Indonesia (UKBI)",
        date: "Juli 2024",
        score: "688 (Sangat Unggul)",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="text-foreground min-h-screen font-sans">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative container mx-auto p-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-shadow-lg">
              My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto">
              A showcase of my latest work, achievements, and technical
              expertise
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-8">
        <ProfileSection profileData={profileData} />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          {/* Grid for Skills, Experience, etc. */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <TechnicalSkillsCard skills={profileData.skills} />

            <ExperienceCard experience={profileData.experience} />

            <AchievementsCard achievements={profileData.achievements} />

            <CertificationsCard certifications={profileData.certifications} />
          </div>
        </motion.section>

        {/* Projects Section */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
          </motion.div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <p className="mt-4 text-slate-400">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-400 bg-red-900/20 px-4 py-2 rounded-lg inline-block">
                Error: {error}
              </p>
            </div>
          )}

          {!loading && !error && (
            <>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    setSelectedProject={setSelectedProject}
                  />
                ))}
              </motion.div>

              <Dialog
                open={!!selectedProject}
                onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}
              >
                <DialogContent className="sm:max-w-[600px] bg-slate-900/80 backdrop-blur-xl border-slate-700/50 shadow-2xl text-white max-h-[90vh] grid grid-rows-[auto_1fr]">
                  {selectedProject && (
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {selectedProject.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 overflow-y-auto">
                        {selectedProject.imageUrl && (
                          <div className="relative h-64 w-full rounded-xl overflow-hidden mb-4 shadow-lg">
                            <Image
                              src={selectedProject.imageUrl}
                              alt={`Screenshot of ${selectedProject.title}`}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        )}
                        <DialogDescription className="text-base mb-4 text-slate-300">
                          {selectedProject.description}
                        </DialogDescription>
                        <div className="mb-4">
                          <h3 className="font-semibold mb-3 text-lg text-white">
                            Tech Stack:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.techstack
                              .split(",")
                              .map((tech) => (
                                <span
                                  key={tech.trim()}
                                  className="bg-cyan-500/20 text-cyan-200 text-sm font-medium px-4 py-1.5 rounded-full"
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
                            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-4 h-4" />
                            View on GitHub
                          </motion.a>
                        )}
                      </div>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </>
          )}
        </section>
      </main>

      <footer className="relative mt-20">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
        <div className="relative text-center p-8 text-white">
          <div className="mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg text-slate-300">
            &copy; {new Date().getFullYear()}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              {" " + profileData.name}
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
