import type { Project, SkillCategory } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "VulnScanner Dashboard",
    description:
      "Real-time web vulnerability scanner UI with automated XSS & SQLi payload testing reports.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Python API"],
    category: "Cyber Security",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "2",
    title: "FinTech Enterprise Portal",
    description:
      "High-performance SaaS dashboard with role-based access control (RBAC) and encrypted state management.",
    techStack: ["React", "TypeScript", "Framer Motion", "Redux"],
    category: "Frontend",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "State Management",
    ],
  },
  {
    title: "Cyber Security & AppSec",
    skills: [
      "OWASP Top 10",
      "Penetration Testing",
      "Burp Suite",
      "Network Security",
      "Linux",
      "XSS/CSRF Mitigation",
    ],
  },
];
