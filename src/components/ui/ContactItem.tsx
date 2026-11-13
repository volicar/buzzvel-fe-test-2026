import type { ReactNode } from "react";

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

export function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <li className="flex items-center gap-4 rounded-xl bg-cream p-4 lg:p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
        {icon}
      </span>
      <span className="flex flex-col gap-0.5 lg:gap-1">
        <span className="text-body">{label}</span>
        {children}
      </span>
    </li>
  );
}
