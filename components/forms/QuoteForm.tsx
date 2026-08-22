"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";

const contactMethods = ["Phone", "Email", "WhatsApp"] as const;
const budgetRanges = [
  "Not sure yet",
  "Under ₦250,000",
  "₦250,000 to ₦1,000,000",
  "₦1,000,000 to ₦5,000,000",
  "Above ₦5,000,000",
] as const;

type Errors = Record<string, string>;

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function validate(form: FormData): Errors {
    const next: Errors = {};
    const name = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const description = String(form.get("description") ?? "").trim();

    if (!name) next.fullName = "Enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!phone) next.phone = "Enter a phone number.";
    if (!service) next.service = "Select a service.";
    if (description.length < 20) {
      next.description = "Describe the project in at least 20 characters.";
    }
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-surface p-10 text-center">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          We have the details
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm font-light text-muted">
          The form is not connected to a backend yet, so this stayed in your
          browser. Once contact channels are live, this will go through to us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName}
          description="Your name as we should address you."
        >
          <input id="fullName" name="fullName" className={inputClass} />
        </Field>
        <Field id="company" label="Company Name">
          <input id="company" name="company" className={inputClass} />
        </Field>
        <Field
          id="email"
          label="Email Address"
          required
          error={errors.email}
          description="We will use this if email is your preferred contact method."
        >
          <input id="email" name="email" type="email" className={inputClass} />
        </Field>
        <Field id="phone" label="Phone Number" required error={errors.phone}>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </Field>
        <Field id="contactMethod" label="Preferred Contact Method">
          <select id="contactMethod" name="contactMethod" className={inputClass}>
            {contactMethods.map((method) => (
              <option key={method}>{method}</option>
            ))}
          </select>
        </Field>
        <Field id="service" label="Service Required" required error={errors.service}>
          <select id="service" name="service" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
        <Field id="projectTitle" label="Project Title">
          <input id="projectTitle" name="projectTitle" className={inputClass} />
        </Field>
        <Field id="location" label="Project Location">
          <input id="location" name="location" className={inputClass} />
        </Field>
        <Field
          id="dimensions"
          label="Estimated Dimensions"
          description="Width, height, or site notes if known."
        >
          <input id="dimensions" name="dimensions" className={inputClass} />
        </Field>
        <Field id="date" label="Preferred Completion Date">
          <input id="date" name="date" type="date" className={inputClass} />
        </Field>
        <Field id="budget" label="Estimated Budget Range">
          <select id="budget" name="budget" className={inputClass}>
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </Field>
        <Field
          id="file"
          label="Upload Reference Image or File"
          description="Optional. A photo of the site or a sketch helps."
        >
          <input
            id="file"
            name="file"
            type="file"
            accept="image/*,.pdf"
            className={`${inputClass} file:mr-4 file:border-0 file:bg-border file:px-3 file:py-1 file:text-xs file:text-white`}
          />
        </Field>
      </div>
      <Field
        id="description"
        label="Project Description"
        required
        error={errors.description}
        description="What should be made, where it will sit, and any brand notes."
      >
        <textarea
          id="description"
          name="description"
          rows={6}
          className={`${inputClass} resize-y`}
        />
      </Field>
      <button
        type="submit"
        className="bg-accent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        Send the request
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-none border border-border bg-background px-4 py-3 text-sm text-white placeholder:text-muted focus:border-accent";

function Field({
  id,
  label,
  required,
  error,
  description,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  description?: string;
  children: React.ReactNode;
}) {
  const errorId = error ? `${id}-error` : undefined;
  const descId = description ? `${id}-desc` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required ? <span className="ml-1 text-accent">*</span> : null}
      </label>
      {description ? (
        <p id={descId} className="text-xs font-light text-muted">
          {description}
        </p>
      ) : null}
      <div
        aria-invalid={Boolean(error)}
        aria-describedby={[descId, errorId].filter(Boolean).join(" ") || undefined}
      >
        {children}
      </div>
      {error ? (
        <p id={errorId} className="text-xs text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
