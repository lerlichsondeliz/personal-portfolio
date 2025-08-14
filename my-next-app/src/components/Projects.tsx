"use client";

import projects from "@/data/projects.json";
import type { Project } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect, useRef, Fragment } from "react";
import SlideShow from "@/components/SlideShow";

export default function Projects() {
  const items = projects as Project[];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [openPoint, setOpenPoint] = useState<{ x: number; y: number } | null>(null);
  const [modalTop, setModalTop] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleOpen = useCallback((idx: number, _e?: React.MouseEvent) => {
    // Always center relative to the current viewport
    const viewportHeight = window.innerHeight;
    setOpenPoint(null);
    const assumedModalHeight = Math.min(viewportHeight * 0.85, 800);
    const centerY = viewportHeight / 2;
    const initialTop = Math.round(
      Math.max(16, Math.min(centerY - assumedModalHeight / 2, viewportHeight - assumedModalHeight - 16))
    );
    setModalTop(initialTop);
    setExpandedIndex(idx);
  }, []);

  const handleToggle = useCallback((idx: number) => {
    setExpandedIndex((current) => (current === idx ? null : idx));
  }, []);

  // Robust scroll lock: freeze background exactly in place and avoid layout shift
  const scrollYRef = useRef(0);
  const prevBodyStyleRef = useRef<{
    position: string;
    top: string;
    left: string;
    right: string;
    width: string;
    paddingRight: string;
  } | null>(null);

  useEffect(() => {
    if (expandedIndex !== null) {
      const body = document.body as HTMLBodyElement;
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
      prevBodyStyleRef.current = {
        position: body.style.position,
        top: body.style.top,
        left: body.style.left,
        right: body.style.right,
        width: body.style.width,
        paddingRight: body.style.paddingRight,
      };
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`;
      }
      return () => {
        const prev = prevBodyStyleRef.current;
        body.style.position = prev?.position ?? "";
        body.style.top = prev?.top ?? "";
        body.style.left = prev?.left ?? "";
        body.style.right = prev?.right ?? "";
        body.style.width = prev?.width ?? "";
        body.style.paddingRight = prev?.paddingRight ?? "";
        const y = Math.abs(parseInt(prev?.top || "0", 10)) || scrollYRef.current;
        const html = document.documentElement as HTMLElement;
        const previousBehavior = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        try {
          window.scrollTo({ top: y, behavior: "auto" as ScrollBehavior });
        } catch {
          window.scrollTo(0, y);
        }
        requestAnimationFrame(() => {
          html.style.scrollBehavior = previousBehavior;
        });
      };
    }
  }, [expandedIndex]);

  const closeModal = useCallback(() => {
    setExpandedIndex(null);
    setOpenPoint(null);
    setModalTop(null);
  }, []);

  // ESC to close and focus trap inside modal
  useEffect(() => {
    if (expandedIndex !== null) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          closeModal();
          return;
        }
        if (e.key === "Tab" && modalRef.current) {
          const focusable = Array.from(
            modalRef.current.querySelectorAll<HTMLElement>(
              'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
            )
          ).filter((el) => !el.hasAttribute("disabled"));
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          const active = (document.activeElement as HTMLElement) ?? null;
          if (e.shiftKey) {
            if (active === first || !modalRef.current.contains(active)) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (active === last || !modalRef.current.contains(active)) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };
      // Move focus into the modal container for accessibility
      const toFocus = closeBtnRef.current ?? modalRef.current;
      if (toFocus && typeof (toFocus as any).focus === "function") {
        try {
          (toFocus as any).focus({ preventScroll: true });
        } catch {
          (toFocus as any).focus();
        }
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [expandedIndex, closeModal]);

  // Position modal vertically centered in the viewport; account for fixed-body offset
  useEffect(() => {
    if (expandedIndex !== null && modalRef.current) {
      const modal = modalRef.current;
      const viewportHeight = window.innerHeight;
      // If body is fixed with a negative top offset, add it back to clickY so we stay in view
      const fixedTop = Math.abs(parseInt(document.body.style.top || "0", 10)) || 0;
      const clickY = (viewportHeight / 2) + fixedTop;
      const modalHeight = modal.offsetHeight || Math.min(viewportHeight * 0.85, 800);
      const targetTop = Math.round(clickY - modalHeight / 2);
      const clampedTop = Math.max(16, Math.min(targetTop, fixedTop + viewportHeight - modalHeight - 16));
      setModalTop(clampedTop);
    }
  }, [expandedIndex]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, idx) => {
          const isExpanded = expandedIndex === idx;
          const slideshowImages = (p.images && p.images.length > 0) ? p.images : (p.image ? [p.image] : []);
          const fit = p.preferredImageFit ?? (slideshowImages.length ? inferFitFromPath(slideshowImages[0]) : "contain");
          const objectFitClass = fit === "cover" ? "object-cover" : "object-contain";

          return (
            <Fragment key={p.slug ?? String(idx)}>
              <article
                className={
                  "group rounded-xl border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-black/20 transition-transform hover:-translate-y-1 force-card"
                }
                onClick={(e) => handleOpen(idx, e)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpen(idx);
                  }
                }}
              >
                {slideshowImages.length > 0 && (
                  <div className="mb-3 rounded-lg overflow-hidden border border-black/5 dark:border-white/10">
                    <Image
                      src={slideshowImages[0]}
                      alt={p.title}
                      width={600}
                      height={380}
                      className={`w-full h-36 ${objectFitClass} bg-white dark:bg-transparent`}
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-foreground/85 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-1">
                  {p.techStack.map((t) => (
                    <span key={t} className="text-[11px] rounded-full bg-secondary/15 text-secondary px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-sm text-secondary underline underline-offset-4" onClick={(e) => e.stopPropagation()}>
                  {p.githubLink && (
                    <Link href={p.githubLink} target="_blank" rel="noreferrer">GitHub</Link>
                  )}
                  {p.demoLink && (
                    <Link href={p.demoLink} target="_blank" rel="noreferrer">Live Demo</Link>
                  )}
                </div>
              </article>

              {isExpanded && (
                <div
                  className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm p-0"
                  onClick={closeModal}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`project-title-${idx}`}
                >
                  <div
                    className="fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl max-h-[85vh] overflow-auto rounded-xl border border-black/10 dark:border-white/10 bg-background"
                    ref={modalRef}
                    tabIndex={-1}
                    onClick={(e) => e.stopPropagation()}
                    style={{ top: modalTop ?? undefined }}
                  >
                    <button
                      type="button"
                      onClick={closeModal}
                      ref={closeBtnRef}
                      aria-label="Close"
                      className="absolute right-3 top-3 z-10 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 px-2 py-1"
                    >
                      ✕
                    </button>
                    <div className="grid gap-6 p-5 lg:grid-cols-2">
                      <div className="order-2 lg:order-1">
                        <h3 id={`project-title-${idx}`} className="text-2xl sm:text-3xl font-semibold mb-2">{p.title}</h3>
                        <p className="text-base text-foreground/85 mb-4 leading-relaxed">{p.description}</p>
                        {p.details && (
                          <p className="text-sm text-foreground/90 leading-relaxed mb-4">{p.details}</p>
                        )}
                        {p.highlights && p.highlights.length > 0 && (
                          <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                            {p.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        )}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {p.techStack.map((t) => (
                            <span key={t} className="text-xs rounded-full bg-secondary/15 text-secondary px-2 py-1">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {p.githubLink && (
                            <Link href={p.githubLink} target="_blank" rel="noreferrer" className="rounded-md bg-secondary text-white px-3 py-2 text-sm">
                              GitHub
                            </Link>
                          )}
                          {p.demoLink && (
                            <Link href={p.demoLink} target="_blank" rel="noreferrer" className="rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm">
                              Live Demo
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="order-1 lg:order-2">
                        <SlideShow images={slideshowImages} alt={p.title} fit={fit} heightClass="h-64 sm:h-80 md:h-[28rem]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      {/* To add multiple images for a project, set `images: ["/images/one.png", "/images/two.png"]` in `src/data/projects.json`. */}
    </section>
  );
}

function inferFitFromPath(path: string): "contain" | "cover" {
  // Heuristic: portrait-like names get contain to avoid cropping; landscape defaults to cover for better fill
  const lowered = path.toLowerCase();
  if (lowered.includes("poster") || lowered.includes("portrait")) return "contain";
  return "cover";
}


