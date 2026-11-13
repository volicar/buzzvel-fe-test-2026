import { ContactItem } from "@/components/ui/ContactItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChatIcon, ClockIcon } from "@/components/ui/icons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-y border-y border-line bg-white"
    >
      <div className="wrap flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="reveal flex flex-col gap-8 lg:w-[480px] lg:shrink lg:gap-10">
          <SectionHeading id="contact-title" eyebrow="Contact" title="Get in touch">
            <p className="mt-4 text-body text-muted lg:text-lg lg:leading-7">
              Have a question? We’re here to help. Whether you’re looking for the right course,
              learning with your team or interested in teaching with Luma, we’d love to hear from
              you.
            </p>
          </SectionHeading>

          <ul className="flex flex-col gap-4">
            <ContactItem icon={<ChatIcon />} label="Email">
              <a
                href="mailto:contact@luma.com"
                className="text-body text-primary underline-offset-4 hover:underline"
              >
                contact@luma.com
              </a>
            </ContactItem>
            <ContactItem icon={<ClockIcon />} label="Response Time">
              <span className="text-body text-muted">Up to 24 hours on business days</span>
            </ContactItem>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
