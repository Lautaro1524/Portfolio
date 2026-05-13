"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import projectsData from "@/data/projects.json";

type Project = {
  id: number;
  title: string;
  description: string;
  problem: string;
  tags: string[];
  github: string;
  demo: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative bg-[#0f0f17] border border-[#1e1e2e] rounded-2xl p-6 hover:border-[#6366f1]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#6366f1]/5 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative w-full h-44 rounded-xl bg-[#14141f] mb-5 overflow-hidden flex items-center justify-center border border-[#1e1e2e]">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#06b6d4]/10"
          aria-hidden="true"
        />
        <FiCode size={44} className="text-[#6366f1]/30" aria-hidden="true" />

        {/* Quick-access buttons overlay */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0a0a0f]/80 backdrop-blur text-[#94a3b8] hover:text-white border border-[#1e1e2e] hover:border-[#6366f1] transition-all duration-200"
              aria-label={`Ver demo de ${project.title}`}
            >
              <FiExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0a0a0f]/80 backdrop-blur text-[#94a3b8] hover:text-white border border-[#1e1e2e] hover:border-[#6366f1] transition-all duration-200"
              aria-label={`Ver código de ${project.title} en GitHub`}
            >
              <FiGithub size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#818cf8] transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-[#64748b] text-sm leading-relaxed mb-4 flex-1">
        {project.problem}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5" aria-label="Tecnologías utilizadas">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-xs font-mono"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e2e]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#94a3b8] hover:text-white transition-colors duration-200"
          >
            <FiGithub size={14} aria-hidden="true" />
            Código
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#06b6d4] hover:text-white transition-colors duration-200 ml-auto"
          >
            Demo en vivo
            <FiExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="proyectos" className="py-24 px-6" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#6366f1] text-sm font-mono uppercase tracking-widest mb-3 block">
            Trabajos
          </span>
          <h2
            id="projects-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Proyectos Destacados
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto">
            Soluciones que desarrollé enfocadas en resolver problemas reales,
            priorizando la experiencia del usuario y la calidad del código.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {(projectsData as Project[]).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
