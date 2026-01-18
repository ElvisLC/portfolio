import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SkillCard } from "@/components/cards/SkillCard";
import { skillCategories } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <Section id="skills">
      <AnimatedHeading className="text-center mb-12">
        Skills
      </AnimatedHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.category} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
}
