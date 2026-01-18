import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <Section id="experience" className="relative">
      <AnimatedHeading className="text-center mb-12">
        Experience
      </AnimatedHeading>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8 md:pl-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
