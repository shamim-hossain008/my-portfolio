export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "Frontend" | "Cyber Security";
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
