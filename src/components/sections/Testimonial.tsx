import Image from "next/image";
import { QuoteIcon } from "@/components/ui/icons";
import { stats, testimonial } from "@/data/content";

export function Testimonial() {
  return (
    <section aria-label="What learners say" className="section-y bg-white">
      <div className="wrap flex flex-col gap-[60px] lg:flex-row lg:items-center lg:justify-between">
        <figure className="reveal max-w-[600px]">
          <QuoteIcon className="text-primary" />
          <blockquote className="mt-4 text-quote">{testimonial.quote}</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src={testimonial.avatar}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full bg-primary-light"
            />
            <span>
              <span className="block text-base font-bold leading-[26px] lg:leading-7">
                {testimonial.name}
              </span>
              <span className="block text-body text-muted">{testimonial.role}</span>
            </span>
          </figcaption>
        </figure>

        <dl className="reveal grid grid-cols-3 gap-2 lg:-mr-4 lg:w-[401px] lg:shrink-0 lg:grid-cols-1 lg:gap-5 lg:border-l lg:border-line lg:pl-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-body text-subtle lg:mt-px">{stat.label}</dt>
              <dd className="text-h1 text-primary lg:text-[4rem] lg:leading-[4.375rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
