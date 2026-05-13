import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lautaro Arias | Analista de Sistemas",
  description:
    "Portfolio profesional de Lautaro Nicolas Arias, estudiante de Análisis de Sistemas en Buenos Aires, Argentina. Desarrollo web con JavaScript, Python, SQL, Node.js y más.",
  keywords: [
    "Lautaro Arias",
    "Analista de Sistemas",
    "Portfolio",
    "Desarrollador Web",
    "Buenos Aires",
    "JavaScript",
    "Python",
    "SQL",
  ],
  authors: [
    { name: "Lautaro Nicolas Arias", url: "https://github.com/Lautaro1524" },
  ],
  openGraph: {
    title: "Lautaro Arias | Analista de Sistemas",
    description:
      "Portfolio profesional de Lautaro Nicolas Arias — Analista de Sistemas y Desarrollador Web de Buenos Aires, Argentina.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
