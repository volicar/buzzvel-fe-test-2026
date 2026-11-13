import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepItem } from "@/components/ui/StepItem";
import { steps } from "@/data/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section-y">
      <div className="wrap">
        <SectionHeading
          id="how-title"
          eyebrow="How Luma works"
          title="Less browsing. More learning."
          align="center"
          className="reveal"
        />

        <div className="relative mt-10 lg:mt-20 lg:py-7">
          <div
            aria-hidden="true"
            className="absolute left-7 right-[calc((100%-160px)/3)] top-14 hidden h-px bg-line lg:block"
          />
          <ol className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-20">
            {steps.map((step, index) => (
              <StepItem key={step.title} position={index + 1} {...step} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
