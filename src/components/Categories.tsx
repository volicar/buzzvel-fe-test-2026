import { ArrowIcon } from "./icons";

const categories = [
  {
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
  },
  {
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

export function Categories() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="section-y bg-white">
      <div className="wrap">
        <div className="reveal max-w-[560px]">
          <p className="text-overline text-primary">Find your next skill</p>
          <h2 id="courses-title" className="mt-4 text-h3">
            Learn something worth knowing.
          </h2>
          <p className="mt-4 text-sub1 text-muted">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map((category, index) => (
            <li key={category.title} className="reveal">
              <a
                href="#featured"
                className="group flex h-full min-h-[200px] flex-col justify-between rounded-2xl border border-line bg-white p-6 transition duration-200 hover:border-primary hover:shadow-card motion-safe:hover:-translate-y-1 lg:min-h-[260px] lg:p-7"
              >
                <div>
                  <span className="inline-block rounded-md bg-primary-light px-2 py-1 text-overline text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-h5">{category.title}</h3>
                  <p className="mt-3 text-body text-subtle">{category.description}</p>
                </div>
                <p className="mt-6 flex items-center gap-2 text-body font-bold">
                  Explore
                  <span className="sr-only"> {category.title}</span>
                  <ArrowIcon className="transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
