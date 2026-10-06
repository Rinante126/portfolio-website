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
  title: {
    default: "Rinante Orwa | Software & AI Portfolio",
    template: "%s | Rinante Orwa",
  },

  description:
    "Portfolio of Rinante Orwa, an aspiring Software and AI Engineer building projects in web development, software engineering, and artificial intelligence.",

  keywords: [
    "Rinante Orwa",
    "D4RINX",
    "Software Developer",
    "Software Engineer",
    "AI Engineer",
    "Web Developer",
    "Next.js",
    "Artificial Intelligence",
    "Portfolio",
  ],

  authors: [
    {
      name: "Rinante Orwa",
    },
  ],

  creator: "Rinante Orwa",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
