"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiDotnet,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiPhp,
  SiGit,
  SiReact,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

const techStack: Tech[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "SQL / MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "C# / .NET", icon: SiDotnet, color: "#512bd4" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: SiCss, color: "#1572b6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "GitHub", icon: SiGithub, color: "#f0f6fc" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
];

const firstRow = techStack.slice(0, 6);
const secondRow = techStack.slice(6);

function TechChip({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0f0f17] border border-[#1e1e2e] hover:border-[#6366f1]/50 transition-all duration-200 group cursor-default min-w-max">
      <Icon
        size={20}
        style={{ color: tech.color }}
        className="group-hover:scale-110 transition-transform duration-200"
        aria-hidden="true"
      />
      <span className="text-sm text-[#94a3b8] font-medium group-hover:text-white transition-colors whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="techstack" className="py-24 overflow-hidden" aria-labelledby="techstack-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#6366f1] text-sm font-mono uppercase tracking-widest mb-3 block">
            Herramientas
          </span>
          <h2
            id="techstack-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Tech Stack
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto">
            Tecnologías y herramientas con las que construyo soluciones digitales.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative mb-4 overflow-hidden" aria-hidden="true">
        <div className="flex gap-4 animate-marquee">
          {[...firstRow, ...firstRow].map((tech, i) => (
            <TechChip key={`${tech.name}-r1-${i}`} tech={tech} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none z-10" />
      </div>

      {/* Row 2 — right to left */}
      <div className="relative overflow-hidden" aria-hidden="true">
        <div className="flex gap-4 animate-marquee-reverse">
          {[...secondRow, ...secondRow].map((tech, i) => (
            <TechChip key={`${tech.name}-r2-${i}`} tech={tech} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
