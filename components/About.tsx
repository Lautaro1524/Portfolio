"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBook, FiMapPin, FiCode, FiTarget } from "react-icons/fi";
import type { IconType } from "react-icons";

type Highlight = {
  icon: IconType;
  title: string;
  desc: string;
};

const highlights: Highlight[] = [
  {
    icon: FiBook,
    title: "Formación",
    desc: "Tecnicatura en Análisis de Sistemas — Buenos Aires, Argentina",
  },
  {
    icon: FiMapPin,
    title: "Ubicación",
    desc: "Guernica, Buenos Aires, Argentina",
  },
  {
    icon: FiCode,
    title: "Enfoque",
    desc: "Desarrollo web full-stack y análisis de requerimientos",
  },
  {
    icon: FiTarget,
    title: "Objetivo",
    desc: "Crear soluciones tecnológicas que generen impacto real",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre-mi" className="py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#6366f1] text-sm font-mono uppercase tracking-widest mb-3 block">
            Sobre Mí
          </span>
          <h2
            id="about-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Quién soy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 text-[#cbd5e1] text-base leading-relaxed">
              <p>
                Soy{" "}
                <span className="text-white font-medium">
                  Lautaro Nicolas Arias
                </span>
                , estudiante de Análisis de Sistemas en Buenos Aires,
                Argentina. Me apasiona entender los problemas desde la raíz
                para construir soluciones tecnológicas que realmente funcionen.
              </p>
              <p>
                Mi formación me entrenó en el pensamiento analítico:
                levantamiento de requerimientos, modelado de datos, diseño de
                arquitecturas y desarrollo de software. Disfruto tanto del
                análisis como de la implementación técnica.
              </p>
              <p>
                Cuando no estoy programando, estoy investigando nuevas
                tecnologías, contribuyendo a proyectos colaborativos o
                profundizando en sistemas y bases de datos.
              </p>
            </div>

            <motion.a
              href="#contacto"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-[#0f0f17] border border-[#1e1e2e] text-[#cbd5e1] hover:text-white hover:border-[#6366f1]/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
              whileHover={{ x: 4 }}
            >
              Hablemos →
            </motion.a>
          </motion.div>

          {/* Right: Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="p-5 rounded-xl bg-[#0f0f17] border border-[#1e1e2e] hover:border-[#6366f1]/40 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#6366f1]/10 flex items-center justify-center mb-3 group-hover:bg-[#6366f1]/20 transition-colors">
                    <Icon size={18} className="text-[#6366f1]" aria-hidden="true" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[#94a3b8] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
