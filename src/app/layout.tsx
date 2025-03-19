import Header from "@/components/Header";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Manoel Carvalho | Desenvolvedor Fullstack",
  description: "Desenvolvedor Fullstack especializado em Node.js, ReactJS e React Native. Confira meus projetos, habilidades e experiência em desenvolvimento de aplicações web e mobile.",
  keywords: ["Desenvolvedor Fullstack", "Node.js", "ReactJS", "React Native", "Portfólio", "Manoel Carvalho"],
  authors: [{ name: "Manoel Carvalho" }],
  openGraph: {
    title: "Manoel Carvalho | Desenvolvedor Fullstack",
    description: "Desenvolvedor Fullstack especializado em Node.js, ReactJS e React Native. Confira meus projetos, habilidades e experiência em desenvolvimento de aplicações web e mobile.",
    type: "website",
    url: "https://seusite.com",
    images: [
      {
        url: "https://seusite.com/imagem-de-destaque.jpg",
        width: 1200,
        height: 630,
        alt: "Portfólio - Manoel Carvalho",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
