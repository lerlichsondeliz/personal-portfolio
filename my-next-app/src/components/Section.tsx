import { ReactNode } from "react";

export default function Section({ id, title, children }: { id?: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  );
}


