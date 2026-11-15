import type { Category } from "@/data/content";
import { ArrowIcon } from "./icons";

type CategoryCardProps = Category & {
  position: number;
};

export function CategoryCard({ position, title, description, href }: CategoryCardProps) {
  return (
    <a
      href={href}
      className="group flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-line bg-white p-6 transition duration-200 hover:border-primary hover:shadow-card motion-safe:hover:-translate-y-1 lg:min-h-[260px] lg:p-7"
    >
      <div>
        <span className="inline-block rounded-md bg-primary-light px-2 py-1 text-overline text-primary">
          {String(position).padStart(2, "0")}
        </span>
        <h3 className="mt-5 text-h5">{title}</h3>
        <p className="mt-3 text-body text-subtle">{description}</p>
      </div>
      <p className="mt-6 flex items-center gap-2 text-body leading-5 font-bold">
        Explore
        <span className="sr-only"> {title}</span>
        <ArrowIcon className="transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
      </p>
    </a>
  );
}
