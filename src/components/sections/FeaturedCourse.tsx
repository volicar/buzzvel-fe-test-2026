import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowIcon } from "@/components/ui/icons";
import { featuredCourse } from "@/data/content";

export function FeaturedCourse() {
  return (
    <section
      id="featured"
      aria-labelledby="featured-title"
      className="section-y bg-primary text-white"
    >
      <div className="wrap grid gap-10 md:grid-cols-2 md:items-center xl:gap-[60px]">
        <div className="reveal relative">
          <div className="relative aspect-[362/280] overflow-hidden rounded-2xl md:aspect-[538/408]">
            <Image
              src={featuredCourse.image.src}
              alt={featuredCourse.image.alt}
              fill
              sizes="(min-width: 1280px) 538px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -left-2 -top-2 rounded-md bg-sun px-3 py-1.5 text-overline text-ink">
            Featured Course
          </p>
        </div>

        <SectionHeading
          id="featured-title"
          eyebrow="Most popular this month"
          title={featuredCourse.title}
          tone="inverse"
          className="reveal"
        >
          <p className="mt-5 text-sub2">{featuredCourse.description}</p>
          <p className="mt-6 text-sub2">{featuredCourse.instructor}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {featuredCourse.details.map((detail) => (
              <li key={detail} className="rounded-lg border border-line px-3.5 py-1.5 text-body">
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#contact" variant="sun">
              View course
            </ButtonLink>
            <ButtonLink href="#courses" variant="ghost">
              Browse all courses
              <ArrowIcon className="transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
            </ButtonLink>
          </div>
        </SectionHeading>
      </div>
    </section>
  );
}
