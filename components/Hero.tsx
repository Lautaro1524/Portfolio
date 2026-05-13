"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      aria-label="Sección de inicio"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06b6d4]/15 rounded-full blur-[100px]" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1e1e2e] bg-[#0f0f17] text-sm text-[#94a3b8]">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" aria-hidden="true" />
            Disponible para oportunidades
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#94a3b8] text-lg mb-3"
        >
          Hola, soy
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-5 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-[#c7d2fe] to-[#818cf8] bg-clip-text text-transparent">
            Lautaro Arias
          </span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mb-8"
        >
          <span className="text-xl md:text-2xl font-medium text-[#6366f1]">
            Analista de Sistemas
          </span>
          <span className="hidden sm:block text-xl md:text-2xl text-[#475569] mx-4" aria-hidden="true">
            /
          </span>
          <span className="text-xl md:text-2xl font-medium text-[#06b6d4]">
            Desarrollador Web
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-[#64748b] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Estudiante de Análisis de Sistemas en Buenos Aires, Argentina.
          Apasionado por construir soluciones digitales que resuelvan problemas
          reales, combinando lógica analítica con desarrollo moderno.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#proyectos"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#6366f1] hover:bg-[#5254cc] text-white font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6366f1]/30 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
          >
            Ver Proyectos
            <FiArrowDown
              className="group-hover:translate-y-1 transition-transform duration-200"
              aria-hidden="true"
            />
          </a>
          <a
            href="/cv-lautaro-arias.pdf"
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-[#1e1e2e] text-[#94a3b8] hover:text-white hover:border-[#6366f1]/60 font-medium transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
          >
            <FiDownload size={16} aria-hidden="true" />
            Descargar CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[#2d2d3a] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#6366f1]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
