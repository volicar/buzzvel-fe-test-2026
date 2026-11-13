const steps = [
  {
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    icon: (
      <span className="relative block size-14 rounded-full bg-primary-light">
        <span className="absolute left-2 top-2 size-6 rounded-md bg-primary" />
      </span>
    ),
  },
  {
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    icon: (
      <span className="relative block size-14">
        <span className="absolute inset-0 -rotate-12 rounded-lg bg-peach" />
        <span className="absolute left-6 top-6 size-7 rounded-full bg-orange" />
      </span>
    ),
  },
  {
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
    icon: (
      <span className="relative block size-14 rounded-xl bg-butter">
        <span className="absolute left-2 top-7 size-5 rounded-full bg-mustard" />
      </span>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section-y">
      <div className="wrap">
        <div className="reveal text-center">
          <p className="text-overline text-primary">How Luma works</p>
          <h2 id="how-title" className="mt-4 text-h3">
            Less browsing. More learning.
          </h2>
        </div>

        <div className="relative mt-10 lg:mt-20 lg:py-7">
          <div
            aria-hidden="true"
            className="absolute left-7 right-[calc((100%-160px)/3)] top-14 hidden h-px bg-line lg:block"
          />
          <ol className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-20">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="reveal relative pb-[76px] after:absolute after:bottom-0 after:left-7 after:h-[50px] after:w-px after:bg-line last:pb-0 last:after:hidden lg:pb-0 lg:after:hidden"
              >
                <span aria-hidden="true" className="relative block w-fit">
                  {step.icon}
                </span>
                <p className="mt-6 text-overline text-muted">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-h5">{step.title}</h3>
                <p className="mt-3 text-sub2 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
