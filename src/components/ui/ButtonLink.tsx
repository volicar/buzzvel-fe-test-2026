import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "sun" | "ghost";

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  sun: "btn-sun focus-visible:outline-white",
  ghost: "group px-4 py-3 text-white hover:text-sun focus-visible:outline-white",
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <a className={`btn ${variants[variant]} ${className}`} {...props} />;
}
