"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Code2, Cpu, Github, Linkedin, Mail, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { profileData } from "@/data/profile";

interface DockItemType {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  external?: boolean;
}

const navItems: DockItemType[] = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" },
  { id: "projects", label: "Projects", icon: Code2, href: "#projects" },
  { id: "skills", label: "Skills", icon: Cpu, href: "#skills" },
];

const socialItems: DockItemType[] = [
  { id: "github", label: "GitHub", icon: Github, href: profileData.github, external: true },
  { id: "linkedin", label: "LinkedIn", icon: Linkedin, href: profileData.linkedin, external: true },
  { id: "email", label: "Email", icon: Mail, href: `mailto:${profileData.email}`, external: true },
];

export function FloatingDock() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass-dock rounded-full p-2 flex items-center gap-1 sm:gap-2 border border-white/10">
        {navItems.map((item) => (
          <DockItem 
            key={item.id} 
            item={item} 
            hovered={hovered} 
            setHovered={setHovered} 
          />
        ))}
        
        <div className="w-px h-8 bg-white/10 mx-1 sm:mx-2" />
        
        {socialItems.map((item) => (
          <DockItem 
            key={item.id} 
            item={item} 
            hovered={hovered} 
            setHovered={setHovered} 
          />
        ))}
      </div>
    </motion.div>
  );
}

function DockItem({ 
  item, 
  hovered, 
  setHovered 
}: { 
  item: DockItemType, 
  hovered: string | null, 
  setHovered: (id: string | null) => void 
}) {
  const isHovered = hovered === item.id;
  
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setHovered(item.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 border border-white/10 rounded-md text-xs font-jetbrains whitespace-nowrap text-white"
          >
            {item.label}
            {/* Tooltip triangle */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/80 border-r border-b border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Link
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:bg-white/10 transition-colors"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            y: isHovered ? -4 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isHovered ? 'text-app-accent drop-shadow-[0_0_8px_rgba(232,185,49,0.8)]' : 'text-zinc-400'}`} />
        </motion.div>
      </Link>
    </div>
  );
}
