# Luma — Buzzvel Front-End Test 2026

Landing page for "luma.", built from the Figma file provided in the Buzzvel Front-End Engineer coding challenge.

Live preview: https://buzzvel-fe-test-chi.vercel.app

## Stack

Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. No other runtime dependencies: the form, menu, icons and animations are written by hand.

## Run

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev                   # http://localhost:3000
npm run build && npm start    # production build
npm run lint
```

## Structure

```
src/app/                  layout, metadata, icons, global styles (design tokens), page
src/components/layout/    Header, Footer
src/components/sections/  one component per page section
src/components/ui/        reusable pieces (ButtonLink, SectionHeading, FormField, ...)
src/data/content.ts       typed mock content
public/images/            photos exported from Figma (WebP) and the CTA decoration (SVG)
```

## Key decisions

- **Design tokens in one place.** Colors, shadows, type scale and button styles live in `src/app/globals.css` (Tailwind v4 `@theme` and `@utility`). Type styles mirror the Figma text styles and switch at the `lg` breakpoint.
- **Reusable components with typed props.** Anything that repeats in the design is a component in `src/components/ui`. Sections only compose them.
- **Content separated from markup.** Repeated copy and lists live in `src/data/content.ts` with exported types, standing in for a CMS or API.
- **Server components by default.** Only the header (mobile menu) and the contact form ship client-side JavaScript.
- **Responsive.** Mobile layout up to 1023px, desktop from 1024px. In between, grids go to two columns and large headings scale with `clamp()`.
- **Performance.** Images are WebP served through `next/image` with explicit `sizes`, and the hero image loads eagerly as the LCP element. Fonts are self-hosted with `next/font`, CSS is inlined and the build targets modern browsers only.
- **Motion.** Entrance animations use CSS scroll-driven animations as progressive enhancement and are disabled under `prefers-reduced-motion`.
- **Contact form.** Constraint Validation API with custom rendering: inline errors in English, linked with `aria-describedby`, focus moves to the first invalid field. There is no backend, so submission is simulated.
- **Accessibility.** Semantic landmarks, one `h1`, skip link, visible focus styles, `aria-expanded`/`aria-controls` on the menu button, Escape closes the menu, descriptive `alt` text, 44px menu touch target.
- **Not in the design.** Hover, focus, the open mobile menu, form validation states and the favicon were not designed, so I created them from the existing tokens.

## Design inconsistencies and how I handled them

- Desktop labels all three steps "Step 01". I used 01, 02, 03 as in the mobile design.
- Step 2 copy differs between desktop and mobile. I used the desktop copy.
- The mobile contact form is in Portuguese while everything else is in English. I used English on every breakpoint.
- The "Meet international students & teachers" paragraph is lorem ipsum. I kept it.
- Three text colors sit at a 4.45:1 contrast ratio, just under WCAG AA. I moved each one step up in the same palette (`text-muted` and white).
- The testimonial row and the footer link columns sit on a 1136px container that runs 16px into the right page margin. I reproduced it so positions match the design.
- A few frames have a fixed height smaller than their own text (for example the final CTA heading), so some sections differ from Figma by 1 to 4px.

## Known gaps

- The photo collage keeps the desktop proportions on mobile, so that section is about 45px taller than in Figma.
- Navigation and footer links point to sections of the page, since there are no other pages. "Log in" goes to the contact section because authentication is out of scope.
- No automated tests. The challenge lists them as optional and I spent the time on fidelity and accessibility.
- The header is sticky. The design does not specify this.

## Time spent

Around 7 hours: 1h reading the Figma file, 3h building the sections, 1.5h reviewing against the design, 1h refactoring into typed components, 0.5h on performance checks and this README.

## AI tools

I used Claude Code (Anthropic) to read measurements, styles and copy from the Figma layers, export the image assets, scaffold the section components and cross-check accessibility and responsive behaviour.

How I checked the result:

- compared every section with the Figma frames at 1280px and 402px, checking positions and section heights against the values in Figma's properties panel;
- ran `npm run lint`, the TypeScript check and a production build;
- exercised the mobile menu and the form in the browser (empty, invalid and valid submissions);
- ran Lighthouse against the deployed build: 100 / 100 / 100 / 100 on desktop and 98–99 / 100 / 100 / 100 on mobile (performance, accessibility, best practices, SEO).
