import { Logo } from "./icons";

const groups = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#courses" },
      { label: "Instructors", href: "#community" },
      { label: "For Teams", href: "#featured" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#how-it-works" },
      { label: "Careers", href: "#contact" },
      { label: "Journal", href: "#community" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#main" },
      { label: "Privacy", href: "#main" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pb-5 pt-[60px] text-white lg:pb-10 lg:pt-20">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Logo role="img" aria-hidden={undefined} aria-label="Luma" />
            <p className="mt-3 text-body text-haze lg:max-w-[240px]">
              Practical learning for curious people.
            </p>
          </div>

          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-overline text-mist">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body text-haze transition-colors hover:text-white focus-visible:outline-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-muted pt-6 text-[13px] leading-[19.5px] text-mist lg:mt-16">
          © 2026 Luma Learning
        </p>
      </div>
    </footer>
  );
}
