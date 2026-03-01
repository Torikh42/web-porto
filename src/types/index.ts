export interface Project {
  id: number;
  title: string;
  description: string | null;
  url: string | null;
  techstack: string;
  imageUrl: string | null;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string[];
  techstack: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  description: string;
  skills: Record<string, string[]>;
  experience: Experience[];
  achievements: string[];
  certifications: Certification[];
}
