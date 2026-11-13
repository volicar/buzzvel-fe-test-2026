import Image from "next/image";

const members = [
  "/images/member-1.webp",
  "/images/member-2.webp",
  "/images/member-3.webp",
  "/images/member-4.webp",
];

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="section-y relative overflow-hidden bg-butter">
      <Image
        src="/images/cta-decoration.svg"
        alt=""
        width={1280}
        height={470}
        unoptimized
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-auto max-w-none -translate-x-1/2 lg:block"
      />
      <div className="reveal wrap relative flex max-w-[720px] flex-col items-center text-center lg:px-8">
        <div className="flex">
          {members.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={40}
              height={40}
              className="-ml-2 size-10 rounded-full border-2 border-sun bg-primary-light first:ml-0"
            />
          ))}
        </div>
        <h2 id="cta-title" className="mt-8 text-h2">
          What will you learn next?
        </h2>
        <p className="mt-4 text-sub1 text-muted">Start with one course. Build from there.</p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="#courses" className="btn btn-primary">
            Explore all courses
          </a>
          <a href="#contact" className="btn btn-outline">
            Join Luma
          </a>
        </div>
      </div>
    </section>
  );
}
