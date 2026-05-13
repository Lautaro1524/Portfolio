"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

// ⚠️ Para activar el formulario:
// 1. Creá una cuenta gratis en https://formspree.io
// 2. Creá un nuevo formulario y copiá tu ID (ej: "xpwzrnqk")
// 3. Reemplazá "YOUR_FORMSPREE_ID" con ese ID
const FORMSPREE_ID = "xpqbnpne";

type Social = {
  icon: IconType;
  label: string;
  href: string;
  handle: string;
  isExternal: boolean;
};

const socials: Social[] = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/Lautaro1524",
    handle: "Lautaro1524",
    isExternal: true,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lautaro-arias-84444130a/",
    handle: "lautaro-arias",
    isExternal: true,
  },
  {
    icon: FiMail,
    label: "Email",
    href: "mailto:lautaro1524arias@gmail.com",
    handle: "lautaro1524arias@gmail.com",
    isExternal: false,
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0f0f17] border border-[#1e1e2e] rounded-lg px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#6366f1] transition-colors text-sm";

  return (
    <section id="contacto" className="py-24 px-6" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#6366f1] text-sm font-mono uppercase tracking-widest mb-3 block">
            Contacto
          </span>
          <h2
            id="contact-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Trabajemos juntos
          </h2>
          <p className="text-[#64748b] max-w-lg mx-auto">
            Tengo interés en oportunidades laborales, colaboraciones y proyectos
            desafiantes. ¡No dudes en escribirme!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
            aria-label="Formulario de contacto"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm text-[#94a3b8] mb-1.5"
              >
                Nombre
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={80}
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={inputClass}
                autoComplete="name"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm text-[#94a3b8] mb-1.5"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={254}
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={inputClass}
                autoComplete="email"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm text-[#94a3b8] mb-1.5"
              >
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Contame sobre tu proyecto o propuesta..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#6366f1] hover:bg-[#5254cc] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6366f1]/30 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
            >
              {status === "sending" ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensaje{" "}
                  <FiSend size={15} aria-hidden="true" />
                </>
              )}
            </button>

            {status === "success" && (
              <p
                className="text-[#22c55e] text-sm text-center"
                role="status"
                aria-live="polite"
              >
                ✓ Mensaje enviado. ¡Te respondo pronto!
              </p>
            )}
            {status === "error" && (
              <p
                className="text-red-400 text-sm text-center"
                role="alert"
                aria-live="assertive"
              >
                Ocurrió un error. Intentá de nuevo o escribime directamente.
              </p>
            )}
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            <p className="text-[#64748b] text-sm mb-2">
              O encontrame en mis redes:
            </p>
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.isExternal ? "_blank" : undefined}
                  rel={social.isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0f0f17] border border-[#1e1e2e] text-[#94a3b8] hover:text-white hover:border-[#6366f1]/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center group-hover:bg-[#6366f1]/20 transition-colors flex-shrink-0">
                    <Icon size={18} className="text-[#6366f1]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-sm">{social.label}</div>
                    <div className="text-xs text-[#475569] truncate">
                      {social.handle}
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
