"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" }
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="px-4 py-2 rounded-full border border-black/15 dark:border-white/15 bg-white dark:bg-[#0f0f10] flex items-center gap-6 force-nav-white">
        <Link href="/" aria-label="Home" className="rounded-full border border-black/15 dark:border-white/15 p-2 bg-white dark:bg-[#0c0c0d] hover:bg-white dark:hover:bg-black transition-colors nav-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
          </svg>
          <span className="sr-only">Home</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            item.href.startsWith("/#") ? (
              <a key={item.href} href={item.href} className="text-sm hover:text-primary transition-colors">{item.label}</a>
            ) : (
              <Link key={item.href} href={item.href} className="text-sm hover:text-primary transition-colors">{item.label}</Link>
            )
          ))}
          <Link href="/blog" className="text-sm hover:text-primary transition-colors">Blog</Link>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Link href="/blog" className="text-sm">Blog</Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-black/10 dark:border-white/15 p-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-sm rounded-xl border border-black/5 dark:border-white/15 bg-white dark:bg-background/95">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm">{item.label}</a>
              ) : (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm">{item.label}</Link>
              )
            ))}
            <Link href="/blog" className="text-sm" onClick={() => setOpen(false)}>Blog</Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}


