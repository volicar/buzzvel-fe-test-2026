import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photoColumns } from "@/data/content";

export function People() {
  return (
    <section id="community" aria-labelledby="community-title" className="section-y">
      <div className="wrap flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-[60px]">
        <SectionHeading
          id="community-title"
          eyebrow="The people"
          title="Meet international students & teachers"
          tight
          className="reveal"
        >
          <p className="mt-6 text-sub1 text-ink lg:mt-8 lg:text-muted">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel,
            velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit.
            Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <ButtonLink href="#contact" variant="outline" className="mt-6 lg:mt-8">
            Explore teachers and students
          </ButtonLink>
        </SectionHeading>

        <div className="reveal relative mx-auto flex w-full max-w-[530px] items-start justify-between">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light"
          />
          {photoColumns.map((column) => (
            <div
              key={column.photos[0].src}
              className={`relative flex flex-col gap-2 lg:gap-[13px] ${column.className}`}
            >
              {column.photos.map((photo) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 138px, 26vw"
                  className={`h-auto rounded shadow-photo ${photo.className}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
