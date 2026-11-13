"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CloseIcon, Logo, MenuIcon } from "@/components/ui/icons";
import { navLinks } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream">
      <div className="wrap flex h-[68px] items-center justify-between lg:grid lg:h-[69px] lg:grid-cols-[1fr_auto_1fr]">
        <a href="#main" aria-label="Luma home" className="inline-flex w-fit py-2 text-ink">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-body text-muted transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <a href="#contact" className="px-4 py-2.5 text-body text-muted transition-colors hover:text-ink">
            Log in
          </a>
          <ButtonLink href="#courses" className="px-5 py-[9px]">
            Start learning
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="-mr-1.5 inline-flex size-11 items-center justify-center rounded-lg text-ink lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-cream shadow-card motion-safe:animate-rise lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap flex flex-col gap-6 py-6">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={close} className="block py-3 text-sub1 font-medium text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <ButtonLink href="#courses" onClick={close}>
              Start learning
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline" onClick={close}>
              Log in
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
