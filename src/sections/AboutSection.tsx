import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Code2, Users, Lightbulb, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      titleKey: "about.technicalExcellence",
      descriptionKey: "about.technicalExcellenceDesc",
    },
    {
      icon: Users,
      titleKey: "about.collaboration",
      descriptionKey: "about.collaborationDesc",
    },
    {
      icon: Lightbulb,
      titleKey: "about.productMindset",
      descriptionKey: "about.productMindsetDesc",
    },
    {
      icon: Rocket,
      titleKey: "about.quality",
      descriptionKey: "about.qualityDesc",
    },
  ];

  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto">
        <AnimatedHeading className="text-center mb-6">
          {t("about.title")}
        </AnimatedHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-muted-foreground text-lg leading-relaxed mb-12"
        >
          {t("about.description")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass glass-hover rounded-2xl p-6 flex gap-4 group"
            >
              <div className="shrink-0">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <item.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(item.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
