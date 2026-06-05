import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "../styles/globals.scss";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trazamapas | Trazando tu próximo destino",
  description: "Estamos preparando una experiencia única para ayudarte a trazar y planificar tus viajes más memorables. Muy pronto.",
  keywords: ["Trazamapas", "agencia de viajes", "turismo", "viajes a medida", "planificador de viajes"],
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
