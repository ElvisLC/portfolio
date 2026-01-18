import type { Experience, Project, SkillCategory, SocialLink } from "@/types";

export const experiences: Experience[] = [
  {
    id: "yuppie",
    title: "Full Stack Developer",
    company: "Yuppie Creativo",
    period: "Jun 2025 – Jan 2026",
    description:
      "Led development of multiple high-impact projects including TodoBien POP (shopping cart with state management and complete purchase flow) and CEO MINDS (AWS S3 integration, WebSockets for real-time chat & notifications, and membership payment system).",
    technologies: ["NestJS", "React", "Tailwind CSS", "AWS S3", "WebSockets"],
  },
  {
    id: "mexican-company",
    title: "Full Stack Developer",
    company: "Empresa de marketing digital",
    period: "Dec 2024 – May 2025",
    description:
      "Built a CMS for advertising campaigns from the ground up. Responsible for full feature development cycle including QA processes, ensuring high-quality deliverables aligned with business objectives.",
    technologies: ["React", "Supabase", "Tailwind CSS"],
  },
  {
    id: "blockchain",
    title: "Junior Frontend Developer",
    company: "BlockChain Consultora",
    period: "Jul 2024 – Oct 2024",
    description:
      "Developed an inventory management system with focus on user experience and reliability. Implemented comprehensive E2E and UI testing with Cypress to ensure robust functionality.",
    technologies: ["Next.js", "Cypress", "Tailwind CSS"],
  },
];

export const projects: Project[] = [
  {
    id: "ceominds",
    title: "CEO MINDS",
    description:
      "Enterprise platform featuring real-time communication via WebSockets, AWS S3 file management, and a complete membership payment system. Built for scalability and real-time collaboration.",
    technologies: ["NestJS", "React", "AWS S3", "WebSockets", "Tailwind CSS"],
    role: "Full Stack Developer",
    liveUrl: "https://ceominds.net",
  },
  {
    id: "todobien",
    title: "TodoBien POP",
    description:
      "E-commerce shopping cart with advanced state management, optimized purchase flow, and seamless user experience. Focus on performance and conversion optimization.",
    technologies: ["React", "Tailwind CSS", "State Management"],
    role: "Full Stack Developer",
    liveUrl: "https://todobien.yuppiecreativo.com",
  },
  {
    id: "advertising-cms",
    title: "Advertising Campaign CMS",
    description:
      "Content management system for creating and managing advertising campaigns. Features intuitive UI, campaign analytics, and streamlined workflow for marketing teams.",
    technologies: ["React", "Supabase", "Tailwind CSS"],
    role: "Full Stack Developer",
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    description:
      "Comprehensive inventory tracking system with real-time updates, reporting capabilities, and full E2E test coverage ensuring reliability.",
    technologies: ["Next.js", "Cypress", "Tailwind CSS"],
    role: "Frontend Developer",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "NestJS" },
      { name: "Node.js" },
      { name: "Supabase" },
      { name: "PostgreSQL" },
      { name: "REST APIs" },
      { name: "WebSockets" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "Cypress" },
      { name: "Jest" },
      { name: "E2E Testing" },
      { name: "Unit Testing" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git" },
      { name: "AWS S3" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "VS Code" },
      { name: "Agile/Scrum" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ElvisLC",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/elvislacruz/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/elvisjlcm/",
    icon: "instagram",
  },
];
