import Image from "next/image";

const columns = [
  {
    className: "w-[26.5%] items-end pt-[12.3%]",
    photos: [
      { src: "/images/people-1.webp", width: 222, height: 330, className: "w-[74.4%]" },
      { src: "/images/people-2.webp", width: 293, height: 435, className: "w-full" },
    ],
  },
  {
    className: "w-[19.75%] pt-[4.9%]",
    photos: [
      { src: "/images/people-3.webp", width: 222, height: 362, className: "w-full" },
      { src: "/images/people-4.webp", width: 222, height: 366, className: "w-full" },
      { src: "/images/people-5.webp", width: 222, height: 278, className: "w-full" },
    ],
  },
  {
    className: "w-[19.75%]",
    photos: [
      { src: "/images/people-6.webp", width: 222, height: 296, className: "w-full" },
      { src: "/images/people-7.webp", width: 222, height: 297, className: "w-full" },
      { src: "/images/people-8.webp", width: 222, height: 330, className: "w-full" },
    ],
  },
  {
    className: "w-[24.7%] items-start",
    photos: [
      { src: "/images/people-9.webp", width: 273, height: 431, className: "w-full" },
      { src: "/images/people-10.webp", width: 222, height: 286, className: "w-4/5" },
    ],
  },
];

export function People() {
  return (
    <section id="community" aria-labelledby="community-title" className="section-y">
      <div className="wrap flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-[60px]">
        <div className="reveal">
          <p className="text-overline text-primary">The people</p>
          <h2 id="community-title" className="mt-2 text-h3">
            Meet international students &amp; teachers
          </h2>
          <p className="mt-6 text-sub1 text-ink lg:mt-8 lg:text-muted">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel,
            velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit.
            Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <a href="#contact" className="btn btn-outline mt-6 lg:mt-8">
            Explore teachers and students
          </a>
        </div>

        <div className="reveal relative mx-auto flex w-full max-w-[530px] items-start justify-between">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 aspect-square w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-light"
          />
          {columns.map((column, index) => (
            <div key={index} className={`relative flex flex-col gap-2 lg:gap-[13px] ${column.className}`}>
              {column.photos.map((photo) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt=""
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
