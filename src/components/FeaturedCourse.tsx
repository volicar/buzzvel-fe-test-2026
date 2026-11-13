import Image from "next/image";
import { ArrowIcon } from "./icons";

const details = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
  return (
    <section id="featured" aria-labelledby="featured-title" className="section-y bg-primary text-white">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-[60px]">
        <div className="reveal relative">
          <div className="relative aspect-[362/280] overflow-hidden rounded-2xl lg:aspect-[538/408]">
            <Image
              src="/images/course.webp"
              alt="Product design course — student working on interface designs"
              fill
              sizes="(min-width: 1024px) 538px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -left-2 -top-2 rounded-md bg-sun px-3 py-1.5 text-overline text-ink">
            Featured Course
          </p>
        </div>

        <div className="reveal">
          <p className="text-overline">Most popular this month</p>
          <h2 id="featured-title" className="mt-4 text-h3">
            Designing products people understand.
          </h2>
          <p className="mt-5 text-sub2">
            Learn how to turn complex workflows into simple, intentional product experiences through
            research, structure and thoughtful interaction design.
          </p>
          <p className="mt-6 text-sub2">with Maya Chen · Senior Product Designer</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {details.map((detail) => (
              <li key={detail} className="rounded-lg border border-line px-3.5 py-1.5 text-body">
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-sun focus-visible:outline-white">
              View course
            </a>
            <a
              href="#courses"
              className="btn group px-4 text-white hover:text-sun focus-visible:outline-white"
            >
              Browse all courses
              <ArrowIcon className="transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
