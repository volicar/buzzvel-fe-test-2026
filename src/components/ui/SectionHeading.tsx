import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
  tight?: boolean;
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  align = "left",
  tone = "default",
  tight = false,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <p className={`text-overline ${tone === "inverse" ? "text-white" : "text-primary"}`}>
        {eyebrow}
      </p>
      <h2 id={id} className={`text-h3 ${tight ? "mt-2" : "mt-4"}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}
