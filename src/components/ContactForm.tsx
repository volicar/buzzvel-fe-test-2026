"use client";

import { useState, type FocusEvent, type FormEvent } from "react";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const fields: Field[] = ["name", "email", "message"];

const inputClass =
  "w-full rounded-lg border border-line bg-cream px-4 py-[11px] text-body text-ink transition-colors placeholder:text-subtle hover:border-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-red-600";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (input: HTMLInputElement | HTMLTextAreaElement) => {
    setErrors((current) => ({ ...current, [input.name]: input.validationMessage }));
    return input.validity.valid;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputs = fields.map(
      (field) => form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement,
    );
    const invalid = inputs.filter((input) => !validate(input));

    if (invalid.length > 0) {
      invalid[0].focus();
      return;
    }

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 800));
    form.reset();
    setStatus("sent");
  };

  const fieldProps = (field: Field) => ({
    id: field,
    name: field,
    required: true,
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    onBlur: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (errors[field] !== undefined) validate(event.currentTarget);
    },
    onChange: () => status === "sent" && setStatus("idle"),
    className: inputClass,
  });

  const error = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="text-[13px] leading-5 text-red-700">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="form-title"
      className="reveal flex flex-col gap-6 rounded-2xl border border-line bg-white px-5 py-6 shadow-card lg:w-[540px] lg:shrink-0 lg:p-10"
    >
      <div className="flex flex-col gap-2">
        <h3 id="form-title" className="text-xl font-bold leading-8 font-display">
          Contact us
        </h3>
        <p className="text-body text-muted">Fill out the fields and we will get in touch.</p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-body font-bold">
            Full name
          </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" minLength={2} placeholder="Your name" />
          {error("name")}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-body font-bold">
            Email
          </label>
          <input
            {...fieldProps("email")}
            type="email"
            autoComplete="email"
            placeholder="youremail@example.com"
          />
          {error("email")}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-body font-bold">
            Your question
          </label>
          <textarea
            {...fieldProps("message")}
            minLength={10}
            placeholder="Tell us how we can help..."
            className={`${inputClass} h-[100px] resize-y py-[13px] lg:h-[120px]`}
          />
          {error("message")}
        </div>

        <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-70">
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        <p role="status" className="text-body text-muted empty:hidden">
          {status === "sent" ? "Thanks! Your message was sent. We will reply within 24 hours." : ""}
        </p>
      </div>
    </form>
  );
}
