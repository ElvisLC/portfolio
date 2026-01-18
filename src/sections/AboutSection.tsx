import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Experience in medium and large-scale projects with focus on clean, maintainable code.",
  },
  {
    icon: Users,
    title: "Cross-functional Collaboration",
    description: "Strong collaboration with design and product teams to deliver aligned solutions.",
  },
  {
    icon: Lightbulb,
    title: "Product Mindset",
    description: "Feature ownership from conception to deployment, always aligned with business goals.",
  },
  {
    icon: Rocket,
    title: "Quality & Scalability",
    description: "Commitment to building robust, scalable solutions that stand the test of time.",
  },
];

export function AboutSection() {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto">
        <AnimatedHeading className="text-center mb-6">
          About Me
        </AnimatedHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-muted-foreground text-lg leading-relaxed mb-12"
        >
          I'm a product-oriented Full Stack Developer with a passion for building
          digital solutions that make a real impact. My approach combines technical
          expertise with a deep understanding of business objectives, ensuring every
          feature I develop adds genuine value.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-xl p-6 flex gap-4"
            >
              <div className="shrink-0">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
