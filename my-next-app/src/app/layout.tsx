import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Portfolio · Computer Science Graduate",
    template: "%s · Portfolio",
  },
  description:
    "Modern, responsive portfolio built with Next.js, Tailwind CSS, and TypeScript.",
  openGraph: {
    title: "Portfolio · Computer Science Graduate",
    description:
      "Modern, responsive portfolio built with Next.js, Tailwind CSS, and TypeScript.",
    url: "https://example.com",
    siteName: "Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio · Computer Science Graduate",
    description:
      "Modern, responsive portfolio built with Next.js, Tailwind CSS, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var theme = (stored === 'light' || stored === 'dark') ? stored : 'light';
      var root = document.documentElement;
      root.classList.toggle('dark', theme === 'dark');
    } catch (e) {}
  })();
            `,
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
