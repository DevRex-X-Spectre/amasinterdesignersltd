"use client";

import { useState, type FormEvent } from "react";

type Errors = Record<string, string>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    if (!name) next.name = "Enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (message.length < 10) next.message = "Write a short message.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSuccess(true);
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-surface p-8">
        <h2 className="font-display text-xl font-semibold">Got it</h2>
        <p className="mt-3 text-sm font-light text-muted">
          The form is not connected to a backend yet, so this stayed in your
          browser.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <label className="block space-y-2 text-sm">
        <span>
          Name <span className="text-accent">*</span>
        </span>
        <input name="name" className={inputClass} />
        {errors.name ? (
          <span className="block text-xs text-accent" role="alert">
            {errors.name}
          </span>
        ) : null}
      </label>
      <label className="block space-y-2 text-sm">
        <span>
          Email <span className="text-accent">*</span>
        </span>
        <input name="email" type="email" className={inputClass} />
        {errors.email ? (
          <span className="block text-xs text-accent" role="alert">
            {errors.email}
          </span>
        ) : null}
      </label>
      <label className="block space-y-2 text-sm">
        <span>Phone</span>
        <input name="phone" type="tel" className={inputClass} />
      </label>
      <label className="block space-y-2 text-sm">
        <span>
          Message <span className="text-accent">*</span>
        </span>
        <textarea name="message" rows={5} className={`${inputClass} resize-y`} />
        {errors.message ? (
          <span className="block text-xs text-accent" role="alert">
            {errors.message}
          </span>
        ) : null}
      </label>
      <button
        type="submit"
        className="bg-accent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Send message
      </button>
    </form>
  );
}

const inputClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-white focus:border-accent";
