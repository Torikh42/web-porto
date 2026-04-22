"use client";

import { motion, Variants } from "framer-motion";
import { ProfileData } from "@/types";

interface HeroSectionProps {
  profileData: ProfileData;
}

export default function HeroSection({ profileData }: HeroSectionProps) {
  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="home" className="relative flex flex-col justify-center min-h-screen pt-20 pb-32">
      {/* Background Mesh Gradient */}
      <div className="mesh-gradient" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl z-10"
      >
        <motion.div variants={item} className="mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-app-accent/10 border border-app-accent/20 text-app-accent text-sm font-jetbrains">
            System Online. Welcome.
          </span>
        </motion.div>

        {/* Code-style introduction */}
        <motion.div variants={item} className="font-jetbrains text-app-muted text-sm md:text-base mb-6">
          <span className="text-pink-500">const</span>{" "}
          <span className="text-blue-400">developer</span>{" "}
          <span className="text-app-text">=</span>{" "}
          <span className="text-yellow-300">{`{`}</span>
        </motion.div>

        <motion.h1 
          variants={item}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-2 ml-4 md:ml-8"
        >
          <span className="text-app-muted font-jetbrains text-2xl sm:text-4xl mr-4 opacity-50">name:</span>
          <span className="text-glow">{profileData.name}</span>
          <span className="text-app-muted font-jetbrains text-2xl sm:text-4xl opacity-50">,</span>
        </motion.h1>

        <motion.h2 
          variants={item}
          className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-300 mb-8 ml-4 md:ml-8"
        >
          <span className="text-app-muted font-jetbrains text-xl sm:text-3xl mr-4 opacity-50">role:</span>
          <span className="text-app-accent text-glow-accent">&quot;{profileData.title}&quot;</span>
          <span className="text-app-muted font-jetbrains text-xl sm:text-3xl opacity-50">,</span>
        </motion.h2>

        <motion.p 
          variants={item}
          className="max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed ml-4 md:ml-8"
        >
          <span className="text-app-muted font-jetbrains text-base sm:text-lg mr-4 opacity-50">desc:</span>
          &quot;{profileData.description}&quot;
        </motion.p>
        
        <motion.div variants={item} className="font-jetbrains text-app-muted text-sm md:text-base mt-6">
          <span className="text-yellow-300">{`}`}</span><span className="text-app-text">;</span>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex flex-wrap gap-4 items-center">
          <a href="#projects" className="px-6 py-3 bg-app-accent text-black font-bold font-syne rounded-md hover:bg-yellow-400 transition-colors glow-box">
            Execute.Projects()
          </a>
          <a href={`mailto:${profileData.email}`} className="px-6 py-3 bg-transparent border border-white/20 text-white font-syne rounded-md hover:bg-white/10 transition-colors">
            Contact.Init()
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
