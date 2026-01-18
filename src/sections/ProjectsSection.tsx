import { Section } from "@/components/ui/Section";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <AnimatedHeading className="text-center mb-12">
        Projects
      </AnimatedHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
