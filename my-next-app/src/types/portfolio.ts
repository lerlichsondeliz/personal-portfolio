export type SocialLinks = {
  github?: string;
  linkedin?: string;
  email?: string;
  website?: string;
};

export type About = {
  name: string;
  degree: string;
  location?: string;
  summary: string;
  skills: string[];
  socials: SocialLinks;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  startDate: string; // ISO or human string
  endDate: string; // "Present" allowed
  description: string[]; // bullet points
};

export type Project = {
  slug: string; // unique identifier for the project
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string; // public path (e.g., "/project.png")
  images?: string[]; // optional multiple images for slideshows
  details?: string; // optional longer description
  highlights?: string[]; // optional bullet points for expanded view
  preferredImageFit?: "contain" | "cover"; // optional preference for image fit in slideshow
};

export type EducationEntry = {
  school: string;
  degree: string;
  dates: string;
  description?: string;
  highlights?: string[];
  location?: string;
};


