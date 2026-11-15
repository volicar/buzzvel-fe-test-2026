import { Logo } from "@/components/ui/icons";
import { footerGroups } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-ink pb-5 pt-[60px] text-white lg:pb-10 lg:pt-20">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Logo label="Luma" />
            <p className="mt-3 text-body text-haze lg:max-w-[240px]">
              Practical learning for curious people.
            </p>
          </div>

          {footerGroups.map((group) => (
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

        <p className="mt-9 border-t border-muted pt-6 text-center text-[13px] leading-[19.5px] text-mist lg:mt-16 lg:text-left">
          © 2026 Luma Learning
        </p>
      </div>
    </footer>
  );
}
