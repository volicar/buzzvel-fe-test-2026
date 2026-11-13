import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { memberAvatars } from "@/data/content";

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
        <AvatarStack avatars={memberAvatars} size="md" ring="sun" />
        <h2 id="cta-title" className="mt-8 text-h2">
          What will you learn next?
        </h2>
        <p className="mt-4 text-sub1 text-muted">Start with one course. Build from there.</p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="#courses">Explore all courses</ButtonLink>
          <ButtonLink href="#contact" variant="outline">
            Join Luma
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
