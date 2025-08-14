"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

export default function SlideShow({
  images,
  alt,
  fit = "contain",
  heightClass,
}: {
  images: string[];
  alt: string;
  fit?: "contain" | "cover";
  heightClass?: string; // optional override for image height sizing
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((prev) => (prev + delta + total) % total);
    },
    [total]
  );

  const current = images[index];
  const objectFitClass = fit === "cover" ? "object-cover" : "object-contain";

  const resolvedHeightClass = heightClass ?? "h-56 sm:h-64";

  return (
    <>
      <div className="relative rounded-lg overflow-hidden border border-black/5 dark:border-white/10">
        <Image
          key={current}
          src={current}
          alt={alt}
          width={1200}
          height={800}
          className={`w-full ${resolvedHeightClass} ${objectFitClass} bg-white dark:bg-transparent transition-opacity`}
          priority={false}
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white w-8 h-8 grid place-items-center hover:bg-black/70"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white w-8 h-8 grid place-items-center hover:bg-black/70"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={
                    "h-1.5 w-1.5 rounded-full " +
                    (i === index ? "bg-white/90" : "bg-white/40")
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              className={`shrink-0 rounded-md border ${i === index ? "border-secondary/60" : "border-black/10 dark:border-white/10"} bg-white/70 dark:bg-black/20`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={src} alt="thumbnail" width={80} height={60} className={`h-14 w-20 ${objectFitClass}`} />
            </button>
          ))}
        </div>
      )}
    </>
  );
}



