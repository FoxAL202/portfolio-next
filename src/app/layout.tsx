import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Александр | Разработчик сайтов",
  description:
    "Портфолио веб-разработчика Александра. Создание сайтов, лендингов, Telegram ботов. Современный дизайн, чистый код, продуманный UX.",
  keywords: [
    "веб-разработчик",
    "создание сайтов",
    "лендинги",
    "telegram бот",
    "портфолио",
    "фронтенд",
    "верстка",
  ],
  authors: [{ name: "Александр" }],
  openGraph: {
    title: "Александр | Разработчик сайтов",
    description:
      "Портфолио веб-разработчика. Создание сайтов, лендингов и Telegram ботов.",
    url: "https://foxal202.github.io/portfolio/",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Александр | Разработчик сайтов",
    description:
      "Портфолио веб-разработчика. Создание сайтов, лендингов и Telegram ботов.",
  },
  icons: {
    icon: "/portfolio/favicon.svg",
  },
  metadataBase: new URL("https://foxal202.github.io/portfolio/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
