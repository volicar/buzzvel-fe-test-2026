import type { ReactNode } from "react";
import type { Step } from "@/data/content";

type StepItemProps = Step & {
  position: number;
};

const icons: Record<Step["icon"], ReactNode> = {
  focus: (
    <span className="relative block size-14 rounded-full bg-primary-light">
      <span className="absolute left-2 top-2 size-6 rounded-md bg-primary" />
    </span>
  ),
  experience: (
    <span className="relative block size-14">
      <span className="absolute inset-0 -rotate-12 rounded-lg bg-peach" />
      <span className="absolute left-6 top-6 size-7 rounded-full bg-orange" />
    </span>
  ),
  practice: (
    <span className="relative block size-14 rounded-xl bg-butter">
      <span className="absolute left-2 top-7 size-5 rounded-full bg-mustard" />
    </span>
  ),
};

export function StepItem({ position, title, description, icon }: StepItemProps) {
  return (
    <li className="reveal relative pb-[76px] after:absolute after:bottom-0 after:left-7 after:h-[50px] after:w-px after:bg-line last:pb-0 last:after:hidden lg:pb-0 lg:after:hidden">
      <span aria-hidden="true" className="relative block w-fit">
        {icons[icon]}
      </span>
      <p className="mt-6 text-overline text-muted">Step {String(position).padStart(2, "0")}</p>
      <h3 className="mt-2 text-h5">{title}</h3>
      <p className="mt-3 text-sub2 text-muted">{description}</p>
    </li>
  );
}
