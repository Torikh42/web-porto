"use client";

import { motion } from "framer-motion";
import { GithubIcon, Linkedin, Mail, MapPin } from "lucide-react";
import { ProfileData } from "@/types";

interface HeroSectionProps {
  profileData: ProfileData;
}

export default function HeroSection({ profileData }: HeroSectionProps) {
  return (
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

          <nav className="nav hidden lg:block mt-16">
            <ul className="mt-16 w-max">
              <li>
                <a className="group flex items-center py-3 active" href="#experience">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#projects">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">
                    Projects
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#skills">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-white motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-white group-focus-visible:text-white">
                    Skills
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5 lg:mt-0" aria-label="Social media">
        <li>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <GithubIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${profileData.email}`}
            className="text-muted-foreground hover:text-white transition-colors"
          >
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
  );
}
