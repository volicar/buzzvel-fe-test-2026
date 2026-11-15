# Luma — Buzzvel Front-End Test 2026

Landing page built from the Figma file of the Buzzvel Front-End Engineer coding challenge, with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. No other runtime dependencies.

Live preview: https://buzzvel-fe-test-chi.vercel.app

## Run

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev                   # http://localhost:3000
npm run build && npm start    # production build
npm run lint
```

## Key decisions

- Design tokens (colors, type scale, buttons) live in `src/app/globals.css`, repeated UI is typed components in `src/components/ui`, and content is typed mock data in `src/data/content.ts`.
- Server components by default. Only the mobile menu and the contact form ship JavaScript.
- One layout breakpoint at 1024px, fluid in between: two-column grids on tablet and headings sized with `clamp()`.
- Images are WebP through `next/image`, fonts are self-hosted and CSS is inlined. Animations are CSS only and respect `prefers-reduced-motion`.
- The form uses the Constraint Validation API, shows inline errors and moves focus to the first invalid field. Submission is simulated.
- Accessibility: semantic landmarks, skip link, visible focus, keyboard-operable menu and descriptive `alt` text.
- Hover, focus, open menu, validation states and the favicon are not in the design. I created them from the existing tokens.

## Design inconsistencies

- Desktop labels every step "Step 01" and the step 2 copy differs between breakpoints. I used 01 to 03 and the desktop copy.
- The mobile form is in Portuguese. I used English everywhere.
- One paragraph is lorem ipsum in the design. I kept it.
- Three text colors miss WCAG AA by a hair (4.45:1). I moved them one step up in the palette.
- The testimonial row and the footer columns run 16px into the right margin. I reproduced it.

## Known gaps

- The photo collage is about 45px taller than Figma on mobile, and a few other sections differ by 1 to 4px.
- Links point to page sections, since there are no other pages. "Log in" goes to the contact section.
- No automated tests, which the brief lists as optional.
- The sticky header is my choice. The design does not specify it.

## Time spent

Around 7 hours.

## AI tools

I used Claude Code (Anthropic) to read measurements and copy from Figma, export assets, scaffold the sections and cross-check accessibility. I checked the result by comparing every section with the Figma frames at 1280px and 402px, running lint, the type check and a production build, testing the menu and the form in the browser, and running Lighthouse on the deployed build (100 in every category on desktop; 98 to 99 for performance and 100 elsewhere on mobile).
