import { CategoryCard } from "@/components/ui/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/content";

export function Categories() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="section-y bg-white">
      <div className="wrap">
        <SectionHeading
          id="courses-title"
          eyebrow="Find your next skill"
          title="Learn something worth knowing."
          className="reveal max-w-[560px]"
        >
          <p className="mt-4 text-sub1 text-muted">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </SectionHeading>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map((category, index) => (
            <li key={category.title} className="reveal">
              <CategoryCard position={index + 1} {...category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
