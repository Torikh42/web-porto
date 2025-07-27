"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Trophy,
  Code2,
  Briefcase,
  Award,
  GraduationCap,
} from "lucide-react";

// Definisikan tipe data untuk sebuah proyek
interface Project {
  id: number;
  title: string;
  description: string | null;
  url: string | null;
  techstack: string;
  imageUrl: string | null;
}

export default function Home() {
  // State untuk menyimpan data proyek, status loading, dan error
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // State untuk menyimpan proyek yang dipilih untuk ditampilkan di modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Mengambil data proyek dari API saat komponen dimuat
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

  // Data profile
  const profileData = {
    name: "Torikh Abdullah Naser",
    title: "Backend Developer & Information Systems Student",
    location: "Bogor, Indonesia",
    email: "torikhnaser42@gmail.com",
    phone: "+62 878-9274-9782",
    linkedin: "https://www.linkedin.com/in/torikh-abdullah-naser-80a738320/",
    description:
      "Mahasiswa Sistem Informasi di Universitas Pembangunan Nasional “Veteran” Jakarta dengan minat dalam pengembangan backend. Memiliki pengalaman dalam organisasi serta kompetisi pencak silat. Menguasai teknologi backend basic dan frontend basic serta beberapa bahasa pemrograman seperti JavaScript, Node.js, MySQL, MongoDB, Express, C, C++, Git, dan GitHub.",
    skills: {
      "Bahasa Pemrograman": ["JavaScript/TypeScript", "C/C++"],
      Backend: [
        "Node.js",
        "Express.js",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Prisma ORM",
      ],
      Frontend: ["ReactJS", "Next.js"],
      "Version Control": ["Git/GitHub"],
    },
    experience: [
      {
        title: "Staff Backend - PIM (Project Internal Maintenance)",
        company: "KSM Android UPNVJ",
        period: "Feb 2025 – Sekarang",
        description: [
          "Merawat dan melanjutkan pengembangan aplikasi web",
          "Membuat beberapa validation middleware seperti validation request body dan request query",
          "Membuat API Specification (openAPI)",
        ],
      },
    ],
    achievements: [
      "Top 4 Finalist Android Hackathon x Slashcom 2025",
      "Juara 2 Kejuaraan Pencak Silat tingkat Nasional BNN CUP 3 (2023)",
      "Juara 1 Kejuaraan Pencak Silat tingkat Nasional Bekasi Nasional Championship 1 (2022)",
      "Juara 1 Olimpiade Olahraga Siswa Nasional (02SN) se-Kabupaten/Kota (2022)",
    ],
    certifications: [
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

  // Konfigurasi animasi untuk Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const skillCategories = [
    {
      name: "Bahasa Pemrograman",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-white",
    },
    {
      name: "Backend",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
      textColor: "text-white",
    },
    {
      name: "Frontend",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      textColor: "text-white",
    },
    {
      name: "Version Control",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      textColor: "text-white",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-foreground min-h-screen font-sans">
      {/* Hero Header with Gradient */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="relative container mx-auto p-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
              A showcase of my latest work, achievements, and technical
              expertise
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-8">
        {/* About Me Section */}
        <motion.section
          className="mb-20 -mt-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Card with Advanced Styling */}
          <Card className="mb-8 shadow-2xl border-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                {/* Profile Photo with Animated Border */}
                <div className="flex-shrink-0 relative">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                      <Image
                        src="/myphoto.jpg"
                        alt="Torikh Abdullah Naser"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  {/* Floating Animation Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce"></div>
                </div>

                {/* Profile Info with Enhanced Typography */}
                <div className="flex-grow text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {profileData.name}
                  </h3>
                  <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold mb-6">
                    {profileData.title}
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
                    {profileData.description}
                  </p>

                  {/* Contact Info with Colorful Icons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {profileData.location}
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Mail className="w-5 h-5 text-green-600" />
                      <a
                        href={`mailto:${profileData.email}`}
                        className="hover:text-green-600 transition-colors text-gray-700 dark:text-gray-300"
                      >
                        {profileData.email}
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Phone className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {profileData.phone}
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Linkedin className="w-5 h-5 text-cyan-600" />
                      <a
                        href={profileData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-600 transition-colors text-gray-700 dark:text-gray-300"
                      >
                        LinkedIn Profile
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills, Experience, and Achievements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills with Gradient Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Technical Skills
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {Object.entries(profileData.skills).map(
                      ([category, skills], index) => {
                        const categoryColor = skillCategories.find(
                          (c) => c.name === category
                        );
                        return (
                          <div key={category}>
                            <div
                              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-3 ${categoryColor?.color} ${categoryColor?.textColor}`}
                            >
                              {category}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {skills.map((skill) => (
                                <motion.div
                                  key={skill}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="text-xs bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 shadow-sm"
                                  >
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience with Gradient Background */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Work Experience
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profileData.experience.map((exp, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-lg backdrop-blur-sm"
                      >
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                          {exp.company} • {exp.period}
                        </p>
                        <ul className="text-sm space-y-2">
                          {exp.description.map((desc, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300">
                                {desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements with Golden Theme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      Achievements
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profileData.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg backdrop-blur-sm"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Trophy className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications with Blue Theme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Certifications
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profileData.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-lg backdrop-blur-sm"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {cert.date}
                          {cert.score && ` • Score: ${cert.score}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section with Enhanced Styling */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </motion.div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Loading projects...
              </p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg inline-block">
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
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer group"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-2xl border-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-slate-800">
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <Dialog
                open={!!selectedProject}
                onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}
              >
                <DialogContent className="sm:max-w-[600px] bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-0 shadow-2xl">
                  {selectedProject && (
                    <>
                      <DialogHeader>
                        <DialogTitle className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {selectedProject.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
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
                        <DialogDescription className="text-base mb-4 text-gray-700 dark:text-gray-300">
                          {selectedProject.description}
                        </DialogDescription>
                        <div className="mb-4">
                          <h3 className="font-semibold mb-3 text-lg">
                            Tech Stack:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.techstack
                              .split(",")
                              .map((tech) => (
                                <span
                                  key={tech.trim()}
                                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg"
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
                            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800"></div>
        <div className="relative text-center p-8 text-white">
          <div className="mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
          </div>
          <p className="text-lg">
            &copy; {new Date().getFullYear()}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              {" " + profileData.name}
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
