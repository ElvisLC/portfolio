import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Folder } from "lucide-react";

interface ProjectData {
  id: string;
  title: string;
  descriptionKey: string;
  technologies: string[];
  role: string;
  liveUrl?: string;
}

const projects: ProjectData[] = [
  {
    id: "ceominds",
    title: "CEO MINDS",
    descriptionKey: "projects.ceominds.description",
    technologies: ["NestJS", "React", "AWS S3", "WebSockets", "Tailwind CSS"],
    role: "Full Stack Developer",
    liveUrl: "https://ceominds.net",
  },
  {
    id: "todobien",
    title: "TodoBien POP",
    descriptionKey: "projects.todobien.description",
    technologies: ["React", "Tailwind CSS", "State Management"],
    role: "Full Stack Developer",
    liveUrl: "https://todobien.yuppiecreativo.com",
  },
  {
    id: "advertising-cms",
    title: "Advertising Campaign CMS",
    descriptionKey: "projects.cms.description",
    technologies: ["React", "Supabase", "Tailwind CSS"],
    role: "Full Stack Developer",
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    descriptionKey: "projects.inventory.description",
    technologies: ["Next.js", "Cypress", "Tailwind CSS"],
    role: "Frontend Developer",
  },
];

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <AnimatedHeading className="text-center mb-12">
        {t("projects.title")}
      </AnimatedHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="glass glass-hover rounded-2xl p-6 group flex flex-col h-full"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Folder size={24} />
              </div>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${t("projects.viewProject")} ${project.title}`}
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-primary/80 font-medium mb-3">
                {project.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t(project.descriptionKey)}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View Project Link */}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {t("projects.viewProject")}
                <ExternalLink size={14} />
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
