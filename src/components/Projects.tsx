import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import AnimateOnScroll from "./AnimateOnScroll";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Selected <span className="gradient-text">Work</span>
              </h2>
              <p className="text-gray-400">
                Engineering pipelines and visualizing success.
              </p>
            </div>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors mt-4 md:mt-0"
            >
              View GitHub{" "}
              <i className="fas fa-arrow-right text-sm" aria-hidden="true" />
            </a>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            See Project Archive{" "}
            <i className="fas fa-archive text-xs" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
