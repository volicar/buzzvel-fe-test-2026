"use client";

import { useState, type FocusEvent, type FormEvent } from "react";
import { FormField } from "@/components/ui/FormField";

type Field = "name" | "email" | "message";
type Control = HTMLInputElement | HTMLTextAreaElement;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent";

const fields: Field[] = ["name", "email", "message"];

const requiredMessages: Record<Field, string> = {
  name: "Please enter your name.",
  email: "Please enter your email address.",
  message: "Please tell us how we can help.",
};

function getMessage(control: Control) {
  const { validity } = control;

  if (validity.valid) return "";
  if (validity.valueMissing) return requiredMessages[control.name as Field];
  if (validity.typeMismatch) return "Please enter a valid email address.";
  if (validity.tooShort) return `Please use at least ${control.minLength} characters.`;
  return control.validationMessage;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (control: Control) => {
    setErrors((current) => ({ ...current, [control.name]: getMessage(control) }));
    return control.validity.valid;
  };

  const handleBlur = (event: FocusEvent<Control>) => {
    const field = event.currentTarget.name as Field;
    if (errors[field] !== undefined) validate(event.currentTarget);
  };

  const handleChange = () => {
    if (status === "sent") setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const controls = fields.map((field) => form.elements.namedItem(field) as Control);
    const invalid = controls.filter((control) => !validate(control));

    if (invalid.length > 0) {
      invalid[0].focus();
      return;
    }

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 800));
    form.reset();
    setStatus("sent");
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-labelledby="form-title"
      className="reveal flex flex-col gap-6 rounded-2xl border border-line bg-white px-5 py-6 shadow-card lg:w-1/2 lg:shrink-0 lg:p-10 xl:w-[540px]"
    >
      <div className="flex flex-col gap-2">
        <h3 id="form-title" className="font-display text-xl font-bold leading-8">
          Contact us
        </h3>
        <p className="text-body text-muted">Fill out the fields and we will get in touch.</p>
      </div>

      <div className="flex flex-col gap-5">
        <FormField
          label="Full name"
          name="name"
          autoComplete="name"
          minLength={2}
          placeholder="Your name"
          error={errors.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="youremail@example.com"
          error={errors.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <FormField
          label="Your question"
          name="message"
          multiline
          minLength={10}
          placeholder="Tell us how we can help..."
          error={errors.message}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        <p role="status" className="text-body text-muted empty:hidden">
          {status === "sent" ? "Thanks! Your message was sent. We will reply within 24 hours." : ""}
        </p>
      </div>
    </form>
  );
}
