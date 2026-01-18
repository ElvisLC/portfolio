import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { socialLinks } from "@/data/portfolio";
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <Section id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedHeading className="mb-6">
          {t("contact.title")}
        </AnimatedHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-muted-foreground text-lg mb-10"
        >
          {t("contact.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <GlowButton
            variant="primary"
            size="lg"
            onClick={() => window.open("mailto:contact@elvislacruz22@gmail.com", "_blank")}
            className="inline-flex items-center gap-2 group"
          >
            <Mail size={20} />
            {t("contact.sendEmail")}
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="p-4 rounded-2xl glass glass-hover text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label={`Visit ${link.name}`}
              >
                {IconComponent && <IconComponent size={24} />}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
