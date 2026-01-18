import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass glass-hover rounded-xl p-6 md:p-8">
        {/* Timeline indicator */}
        <div className="absolute left-0 top-8 -translate-x-1/2 hidden md:block">
          <div className="h-4 w-4 rounded-full bg-primary glow-accent-soft" />
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {experience.title}
            </h3>
            <p className="text-primary font-medium">{experience.company}</p>
          </div>
          <span className="text-muted-foreground text-sm font-mono shrink-0">
            {experience.period}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-4">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
