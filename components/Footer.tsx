import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const socials = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/Lautaro1524",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lautaro-arias-84444130a/",
  },
  {
    icon: FiMail,
    label: "Email",
    href: "mailto:lautaro1524arias@gmail.com",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="Pie de página">
      {/* CTA section */}
      <div className="border-t border-[#1e1e2e] py-20 px-6 text-center">
        <p className="text-[#6366f1] text-sm font-mono uppercase tracking-widest mb-4">
          ¿Tenés un proyecto en mente?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Hagamos algo{" "}
          <span className="bg-gradient-to-r from-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
            juntos
          </span>
        </h2>
        <p className="text-[#94a3b8] max-w-md mx-auto mb-10">
          Estoy disponible para proyectos freelance, colaboraciones y
          oportunidades laborales. ¡Escribime!
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="w-11 h-11 rounded-xl bg-[#0f0f17] border border-[#1e1e2e] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#6366f1]/60 hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <a
          href="#inicio"
          className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#94a3b8] transition-colors duration-200 focus:outline-none focus:underline"
          aria-label="Volver al inicio"
        >
          <FiArrowUp size={14} aria-hidden="true" />
          Volver al inicio
        </a>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[#1e1e2e] py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#475569]">
          <p>
            © {year}{" "}
            <span className="text-[#818cf8]">Lautaro Nicolas Arias</span>.
            Todos los derechos reservados.
          </p>
          <nav aria-label="Links del footer">
            <ul className="flex items-center gap-6" role="list">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Proyectos", href: "#proyectos" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#94a3b8] transition-colors duration-200 focus:outline-none focus:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
