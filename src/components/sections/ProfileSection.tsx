"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  description: string;
  skills: { [key: string]: string[] };
  experience: {
    title: string;
    company: string;
    period: string;
    description: string[];
  }[];
  achievements: string[];
  certifications: { name: string; date: string; score?: string }[];
}

interface ProfileSectionProps {
  profileData: ProfileData;
}

export default function ProfileSection({ profileData }: ProfileSectionProps) {
  return (
    <motion.section
      className="mb-20 -mt-16 relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* BAGIAN YANG DIUBAH: background card utama menjadi lebih transparan */}
      <div className="shadow-2xl border border-slate-200/10 bg-slate-900/20 backdrop-blur-lg p-8 md:p-12 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Profile Photo with Animated Border */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
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

          {/* Profile Info */}
          <div className="flex-grow text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              {profileData.name}
            </h3>
            <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold mb-6">
              {profileData.title}
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-slate-300">
              {profileData.description}
            </p>

            {/* Contact Info with unified style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg bg-black/10"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              >
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">{profileData.location}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg bg-black/10"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-cyan-300 transition-colors text-slate-300"
                >
                  {profileData.email}
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg bg-black/10"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">{profileData.phone}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start p-3 rounded-lg bg-black/10"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors text-slate-300"
                >
                  LinkedIn Profile
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
