import { ProfileData } from "@/types";

export const profileData: ProfileData = {
  name: "Torikh Abdullah Naser",
  title: "Information Systems Student",
  location: "Bogor, Indonesia",
  email: "torikhnaser42@gmail.com",
  github: "https://github.com/torikh42",
  linkedin: "https://www.linkedin.com/in/torikh-abdullah-naser-80a738320/",
  description:
    "Information Systems student at UPN Veteran Jakarta with a strong interest in Software Engineering. Actively involved in organizations and competitions to hone technical skills, leadership skills, and build extensive networks.",
  skills: {
    Languages: ["JavaScript/TypeScript", "C/C++"],
    Backend: [
      "Node.js",
      "Express.js",
      "Bun",
      "Hono",
      "Drizzle",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Supabase",
    ],
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    Mobile: ["React Native", "Expo", "Nativewind"],
    Tools: ["Git", "Docker", "Postman", "Figma", "n8n"],
  },
  experience: [
    {
      title: "Staff Backend - PIM (Project Internal Maintenance)",
      company: "KSM Veterantech UPNVJ",
      companyUrl: "https://www.instagram.com/veterantechupnvj",
      period: "Feb 2025 - Dec 2025",
      description: [
        "Centralized event announcements for 100-200 members, reducing manual broadcast time by ~30-60 minutes/month and improving event awareness.",
        "Built 6-8 stable REST endpoints with full OpenAPI docs to streamline development and integration.",
        "Improved backend efficiency with validation middleware and optimized Cloudflare file handling.",
      ],
      techstack: ["TypeScript", "Node.js", "Express.js", "OpenAPI", "Cloudflare", "PostgreSQL", "Prisma", "Zod"],
    },
    {
      title: "Backend Developer - Vexpro x Code Sheesh (SDN Joglo 05 Pagi Project)",
      company: "KSM Veterantech UPNVJ",
      companyUrl: "https://www.instagram.com/veterantechupnvj",
      period: "Jan 2026 - Present",
      description: [
        "Architected a modular and scalable database schema using Drizzle ORM to integrate academic data and environmental programs (7 Habits, Waste Bank, and Composting) across 15+ tables.",
        "Implemented automated data aggregation to calculate real-time School Achievement metrics, including attendance averages, 7-habit scores, and environmental impact (liters of oil collected, kg of waste processed).",
        "Built high-performance RESTful APIs using Bun and TypeScript, maintaining a response time target of <2 seconds for complex dashboard operations and data exports (.csv).",
      ],
      techstack: ["TypeScript", "bun", "hono", "PostgreSQL", "Drizzle", "BetterAuth", "Zod"],
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
      issuer: "KSM Veterantech UPNVJ",
      date: "July 2025",
    },
    {
      name: "Backend Basic Study Club",
      issuer: "KSM Veterantech UPNVJ",
      date: "Jan 2025",
    },
  ],
};
