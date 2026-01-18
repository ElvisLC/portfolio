import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { useLanguage } from "@/contexts/LanguageContext";

interface SkillCategory {
  categoryKey: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    categoryKey: "skills.frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS",  "HTML/CSS"],
  },
  {
    categoryKey: "skills.backend",
    skills: ["NestJS", "Node.js", "Supabase", "PostgreSQL", "REST APIs", "WebSockets"],
  },
  {
    categoryKey: "skills.testing",
    skills: ["Cypress", "Jest", "E2E Testing", "Unit Testing"],
  },
  {
    categoryKey: "skills.tools",
    skills: ["Git", "AWS S3", "Docker", "Figma", "VS Code", "Agile/Scrum"],
  },
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <AnimatedHeading className="text-center mb-12">
        {t("skills.title")}
      </AnimatedHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.categoryKey}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass glass-hover rounded-2xl p-6 group"
          >
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              {t(category.categoryKey)}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm px-3 py-1.5 rounded-lg bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
