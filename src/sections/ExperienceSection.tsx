import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase } from "lucide-react";

interface ExperienceData {
  id: string;
  title: string;
  company: string;
  period: string;
  descriptionKey: string;
  technologies: string[];
}

const experiences: ExperienceData[] = [
  {
    id: "yuppie",
    title: "Full Stack Developer",
    company: "Yuppie Creativo",
    period: "Jun 2025 – Ene 2026",
    descriptionKey: "experience.yuppie.description",
    technologies: ["NestJS", "React", "Tailwind CSS", "AWS S3", "WebSockets"],
  },
  {
    id: "mexican-company",
    title: "Full Stack Developer",
    company: "Empresa Mexicana",
    period: "Dic 2024 – May 2025",
    descriptionKey: "experience.mexican.description",
    technologies: ["React", "Supabase", "Tailwind CSS"],
  },
  {
    id: "blockchain",
    title: "Junior Frontend Developer",
    company: "BlockChain Consultora",
    period: "Jul 2024 – Oct 2024",
    descriptionKey: "experience.blockchain.description",
    technologies: ["Next.js", "Cypress", "Tailwind CSS"],
  },
];

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <Section id="experience" className="relative">
      <AnimatedHeading className="text-center mb-12">
        {t("experience.title")}
      </AnimatedHeading>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary hidden md:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass glass-hover rounded-2xl p-6 group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary md:hidden">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono bg-muted/50 px-3 py-1 rounded-full">
                    {experience.period}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(experience.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
