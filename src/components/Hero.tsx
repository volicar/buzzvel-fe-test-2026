import Image from "next/image";
import { StarIcon } from "./icons";

const learners = ["/images/learner-1.webp", "/images/learner-2.webp", "/images/learner-3.webp"];

export function Hero() {
  return (
    <section className="section-y overflow-x-clip">
      <div className="wrap flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] lg:items-center lg:gap-[60px]">
        <div>
          <p className="text-overline text-primary">Learn at your own pace</p>
          <h1 className="mt-4 text-h1">Build skills that actually move you forward.</h1>
          <p className="mt-6 max-w-[480px] text-sub1 text-muted">
            Practical courses taught by people who do the work every day. Learn design, technology,
            business and more — one focused lesson at a time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#courses" className="btn btn-primary">
              Explore courses
            </a>
            <a href="#how-it-works" className="btn btn-outline">
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex">
              {learners.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className="-ml-2 size-8 rounded-full border-2 border-cream bg-primary-light first:ml-0"
                />
              ))}
            </div>
            <p className="text-body text-muted">
              <strong className="font-bold text-ink">Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>

        <div className="relative order-first mx-auto aspect-[362/380] w-full max-w-[362px] lg:order-none lg:aspect-[500/520] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute bottom-[14px] right-[-10px] top-6 w-3/4 rounded-2xl bg-peach lg:bottom-7 lg:right-[-39px] lg:w-[89px]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-[-10px] size-16 rounded-full bg-primary-light lg:left-[-45px] lg:size-[106px]"
          />
          <div className="absolute inset-y-0 left-2 right-2 overflow-hidden rounded-2xl bg-primary-light lg:inset-x-0 lg:rounded-3xl">
            <Image
              src="/images/hero.webp"
              alt="Person focused on learning at their laptop"
              fill
              preload
              sizes="(min-width: 1024px) 500px, (min-width: 402px) 346px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute left-0 top-1.5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-float motion-safe:animate-rise lg:left-[-22px] lg:top-4">
            <span className="rounded-lg bg-primary-light px-1 py-1 text-body font-bold text-primary">
              120+
            </span>
            <span className="text-body">expert-led courses</span>
          </div>

          <div className="absolute bottom-[35px] right-[-11px] flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-float motion-safe:animate-rise motion-safe:[animation-delay:150ms] lg:right-[-57px]">
            <span className="flex gap-0.5 text-sun" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon key={index} />
              ))}
            </span>
            <span className="text-body">4.9 avg rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
