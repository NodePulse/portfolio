import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Full Portfolio Metadata (Dev + Data)
export const metadata: Metadata = {
  title: "Sachin | Full-Stack Developer & Data Enthusiast",
  description:
    "I'm Sachin – a passionate full-stack web developer and data science enthusiast from India. I build scalable web apps and create intelligent data-driven solutions.",
  keywords: [
    "Sachin",
    "Portfolio",
    "Full Stack Developer",
    "Data Analyst",
    "Next.js",
    "React",
    "Python",
    "Machine Learning",
    "Power BI",
    "SQL",
    "Projects",
    "Resume",
    "India",
  ],
  authors: [{ name: "Sachin", url: "https://sachin-bharbey.vercel.app/" }],
  creator: "Sachin",
  metadataBase: new URL("https://sachin-bharbey.vercel.app/"),
  openGraph: {
    title: "Sachin | Developer & Data Science Portfolio",
    description:
      "Explore Sachin's projects, resume, and skills in web development, data analysis, and machine learning.",
    url: "https://sachin-bharbey.vercel.app/",
    siteName: "Sachin Portfolio",
    type: "website",
    locale: "en_US",
    // images: [
    //   {
    //     url: "https://sachin-bharbey.vercel.app//og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Sachin's Portfolio Preview",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin | Developer & Data Enthusiast",
    description:
      "Check out Sachin’s portfolio – full-stack developer and data science enthusiast with real-world projects.",
    site: "@sachin_bh31",
    creator: "@sachin_bh31",
    // images: ["https://sachin-bharbey.vercel.app//og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
      >
        <AppProvider>
          {children}
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
