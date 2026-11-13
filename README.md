# Luma — Buzzvel Front-End Test 2026

Landing page for "luma.", built from the Figma file provided in the Buzzvel Front-End Engineer coding challenge.

Live preview: https://buzzvel-fe-test-chi.vercel.app

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4

No other runtime dependencies. Forms, menu, icons and animations are written by hand.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

Other scripts: `npm run lint`.

## Project structure

```
src/app/                    layout, metadata, global styles (design tokens), page
src/components/layout/      Header, Footer
src/components/sections/    one component per page section
src/components/ui/          reusable pieces: ButtonLink, SectionHeading, AvatarStack,
                            CategoryCard, StepItem, ContactItem, FormField, icons
src/data/content.ts         typed mock content (navigation, categories, steps, stats...)
public/images/              photos exported from Figma (WebP) and the CTA decoration (SVG)
```

## Implementation decisions

- **Design tokens in one place.** Colors, shadows, type scale and button styles live in `src/app/globals.css` using Tailwind v4 `@theme` and `@utility`. Type styles mirror the Figma text styles (`Desktop/H1`, `Mobile/H1`, ...) and switch at the `lg` breakpoint.
- **Reusable components with typed props.** Anything that repeats in the design is a component in `src/components/ui` with a typed API (`ButtonLink` variants, `SectionHeading` alignment and tone, `FormField` for inputs and textareas). Sections only compose them.
- **Content separated from markup.** All copy that repeats or comes in lists lives in `src/data/content.ts` with exported types, standing in for a CMS or API.
- **Server components by default.** Only the header (mobile menu) and the contact form ship client-side JavaScript.
- **One layout breakpoint for the two designs.** Mobile layout up to 1023px, desktop from 1024px. Between the two Figma widths the layout is fluid: grids go to two columns on tablets and large headings scale with `clamp()` so 1024px screens do not overflow.
- **Images.** Exported from Figma at 2x, converted to WebP and served through `next/image` with explicit `sizes`. The hero image loads eagerly with `fetchPriority="high"` since it is the LCP element.
- **Loading.** Fonts are self-hosted through `next/font` with `display: swap`, CSS is inlined in the document (`experimental.inlineCss`, a good fit for a single Tailwind page) and the build targets modern browsers only, so no legacy polyfills are shipped.
- **Final CTA decoration.** The scattered shapes and icons are a single decorative SVG (10 KB, hidden from assistive tech) positioned behind real HTML content, instead of a dozen absolutely positioned elements.
- **Animations without JavaScript.** Entrance animations use CSS scroll-driven animations (`animation-timeline: view()`) as progressive enhancement, and everything is disabled under `prefers-reduced-motion`.
- **Contact form.** Uses the browser Constraint Validation API with custom rendering: errors are shown inline in English regardless of browser language, linked with `aria-describedby`, and focus moves to the first invalid field. There is no backend, so submission is simulated and ends in a success message.
- **Accessibility.** Semantic landmarks, one `h1`, labelled sections, skip link, visible focus styles, `aria-expanded`/`aria-controls` on the menu button, Escape closes the menu, content images have descriptive `alt` text and decorative ones are hidden, touch targets are at least 44px.
- **States not present in the design.** Hover, focus, the open mobile menu and form validation states were not designed, so I created them following the existing tokens.

## Design inconsistencies and how I handled them

- The desktop "How Luma works" section labels all three steps "Step 01". I used 01, 02, 03 as in the mobile design.
- Step 2 copy differs between desktop ("who use these skills") and mobile ("who actually use these skills"). I used the desktop copy.
- The mobile contact form is written in Portuguese while the rest of the page and the desktop form are in English. I used the English copy on every breakpoint.
- The "Meet international students & teachers" paragraph is lorem ipsum in the design. I kept it as is.
- Three text colors in the design sit at a 4.45:1 contrast ratio, just under WCAG AA (4.5:1): the step labels and the "Up to 24 hours" text on the cream background, and the "Browse all courses" link on blue. I moved each one step up in the same palette (`text-secondary` and white) so the page passes AA.
- That same section contains leftover template layers (Roboto "Caption", "Headline Two"). I treated them as unused and left them out.

## Known gaps

- The photo collage keeps the desktop proportions on mobile. The mobile design crops each photo slightly shorter, so that section is a little taller than in Figma.
- Navigation and footer links point to sections of the page, since there are no other pages.
- No automated tests. The challenge lists them as optional and I chose to spend the time on fidelity and accessibility.
- The header is sticky. The design does not specify this behaviour.

## Time spent

Around 7 hours in total, roughly:

- 1h reading the Figma file and collecting measurements, text styles and assets;
- 3h building the sections for mobile and desktop;
- 1.5h reviewing against the design and adjusting spacing, states and accessibility;
- 1h refactoring into reusable typed components and a content file;
- 0.5h on performance checks, the production build and this README.

## AI tools

I used Claude Code (Anthropic) as an assistant during this challenge:

- to read measurements, colors, text styles and copy from the Figma layers and to export the image assets;
- to scaffold the section components from that spec;
- to cross-check accessibility and responsive behaviour.

How I verified the output:

- compared every section side by side with the Figma frames at 1280px and 402px, including section heights;
- ran `npm run lint`, the TypeScript check and a production build;
- exercised the mobile menu and the form (empty, invalid and valid submissions);
- ran Lighthouse against the deployed build: 100 / 100 / 100 / 100 on desktop and 98–99 / 100 / 100 / 100 on mobile (performance, accessibility, best practices, SEO).
