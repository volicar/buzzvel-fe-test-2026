import type { ChangeEventHandler, FocusEventHandler } from "react";

type Control = HTMLInputElement | HTMLTextAreaElement;

type FormFieldProps = {
  label: string;
  name: string;
  error?: string;
  multiline?: boolean;
  type?: "text" | "email";
  placeholder?: string;
  autoComplete?: string;
  minLength?: number;
  required?: boolean;
  onBlur?: FocusEventHandler<Control>;
  onChange?: ChangeEventHandler<Control>;
};

const controlClass =
  "w-full rounded-lg border border-line bg-cream px-4 text-body text-ink transition-colors placeholder:text-muted hover:border-subtle focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 aria-invalid:border-red-600";

export function FormField({
  label,
  name,
  error,
  multiline = false,
  type = "text",
  required = true,
  ...props
}: FormFieldProps) {
  const shared = {
    id: name,
    name,
    required,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${name}-error` : undefined,
    ...props,
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-body font-bold">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...shared}
          className={`${controlClass} h-[100px] resize-y py-[13px] lg:h-[120px]`}
        />
      ) : (
        <input {...shared} type={type} className={`${controlClass} py-[11px]`} />
      )}
      {error ? (
        <p id={`${name}-error`} className="text-[13px] leading-5 text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
