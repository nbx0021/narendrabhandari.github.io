"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

// Map tag color names to Tailwind classes
const tagColors: Record<string, { text: string; bg: string }> = {
  primary: { text: "text-primary", bg: "bg-primary/10" },
  secondary: { text: "text-secondary", bg: "bg-secondary/10" },
  accent: { text: "text-accent", bg: "bg-accent/10" },
  purple: { text: "text-purple-400", bg: "bg-purple-400/10" },
  red: { text: "text-red-500", bg: "bg-red-500/10" },
  yellow: { text: "text-yellow-500", bg: "bg-yellow-500/10" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="group relative rounded-2xl overflow-hidden glass-card hover:-translate-y-2 transition-all duration-300">
      {/* Thumbnail */}
      <div className="h-48 bg-gray-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 opacity-60" />
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag) => {
            const colors = tagColors[tag.color] || tagColors.primary;
            return (
              <span
                key={tag.label}
                className={`text-xs font-semibold ${colors.text} ${colors.bg} px-2 py-1 rounded`}
              >
                {tag.label}
              </span>
            );
          })}
        </div>

        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{project.description}</p>

        {/* Expandable Details */}
        {project.details && project.details.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="text-primary text-xs cursor-pointer select-none font-medium outline-none flex items-center gap-1"
              aria-expanded={detailsOpen}
            >
              Project Details
              <i
                className={`fas fa-chevron-down text-[10px] transition-transform ${
                  detailsOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {detailsOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 text-xs mt-3 space-y-2 list-disc pl-4 marker:text-primary/50 overflow-hidden"
                >
                  {project.details.map((detail) => (
                    <li key={detail.title}>
                      <strong className="text-white">{detail.title}:</strong>{" "}
                      {detail.text}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs text-gray-500">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center border-t border-white/10 pt-4">
          <a
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-medium hover:text-primary transition-colors"
          >
            {project.linkLabel || "View Project"}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
