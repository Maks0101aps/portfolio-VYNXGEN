import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const sans = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "VYNXGEN | Full-stack web developer",
  description:
    "Портфоліо senior full-stack web developer: Next.js, React, інтеграції, анімації та продакшн-рішення для бізнесу.",
  metadataBase: new URL("https://portfolio-vynxgen.vercel.app"),
  openGraph: {
    title: "VYNXGEN | Full-stack web developer",
    description: "Темне преміальне портфоліо українською мовою.",
    images: ["/images/hero-portfolio.avif"]
  },
  other: {
    "freelancehunt": "46fea771686bcb2"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${display.variable} ${sans.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
