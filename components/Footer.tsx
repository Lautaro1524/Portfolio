export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e2e] py-8 px-6">
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
    </footer>
  );
}
