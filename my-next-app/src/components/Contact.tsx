"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string>("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    setStatus(`Thanks, ${name || "there"}! Your message has been captured.`);
    form.reset();
  }

  return (
    <section id="contact" className="mx-auto max-w-xl px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-black/20 force-card">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea id="message" name="message" required rows={5} className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2" />
        </div>
        <button type="submit" className="rounded-md bg-primary text-white px-4 py-2 text-sm hover:opacity-90">Send</button>
        {status && <p className="text-sm text-foreground/80">{status}</p>}
      </form>
      {/* This is a frontend-only form. Hook it to an API route or a service like Formspree when ready. */}
    </section>
  );
}


