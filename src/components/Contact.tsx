import { ContactForm } from "./ContactForm";
import { ChatIcon, ClockIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y border-y border-line bg-white">
      <div className="wrap flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="reveal flex flex-col gap-8 lg:w-[480px] lg:shrink lg:gap-10">
          <div>
            <p className="text-overline text-primary">Contact</p>
            <h2 id="contact-title" className="mt-4 text-h3">
              Get in touch
            </h2>
            <p className="mt-4 text-body text-muted lg:text-lg lg:leading-7">
              Have a question? We’re here to help. Whether you’re looking for the right course,
              learning with your team or interested in teaching with Luma, we’d love to hear from
              you.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4 rounded-xl bg-cream p-4 lg:p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                <ChatIcon />
              </span>
              <span className="flex flex-col gap-0.5 lg:gap-1">
                <span className="text-body">Email</span>
                <a
                  href="mailto:contact@luma.com"
                  className="text-body text-primary underline-offset-4 hover:underline"
                >
                  contact@luma.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-4 rounded-xl bg-cream p-4 lg:p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                <ClockIcon />
              </span>
              <span className="flex flex-col gap-0.5 lg:gap-1">
                <span className="text-body">Response Time</span>
                <span className="text-body text-muted">Up to 24 hours on business days</span>
              </span>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
