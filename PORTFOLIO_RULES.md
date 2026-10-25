# PORTFOLIO PROJECT RULES

> Read this file fully before planning or writing any code. These rules apply to every task in this project. If a user prompt conflicts with a rule here, the user's latest prompt wins, but mention the conflict.

---

## 0. FILL THIS IN FIRST (owner details)

Replace the placeholders below. If anything is still a placeholder when you start, **ask me before designing** and propose sensible options.

```yaml
name: "[CHIRAG MALIK]"
role: "[Full-stack developer / AI Solutions Engineer / RAG Models]"
positioning: "[I build fast, clean websites for Business owners.]"
target_clients: "[startups, agencies, local businesses, international freelance clients]"
primary_cta: "Book a call"          # main action visitors should take
secondary_cta: "View work"
contact:
  email: "[chiragmalik0505@gmail.com]"
  whatsapp: "[+919501480672]"
  linkedin: "[https://www.linkedin.com/in/chirag-malik-a9a859265/]"
  github: "[https://github.com/chiragmalik27]"
  
design_direction: "[bento]"
```

---

## 1. PROJECT GOAL

Build a **client-facing portfolio website** whose single job is to make a potential client trust me and contact me within about 60 seconds of landing.

Every design and copy decision must support that job. If an element does not help a client understand what I do, see proof I do it well, or contact me, cut it.

**Primary audience:** potential clients (not other developers). Write and design for people who are not technical.

---

## 2. TECH STACK (fixed)

| Area | Choice |
|---|---|
| Framework | Next.js (latest stable, App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS (latest stable) with design tokens in the theme |
| Animation | Framer Motion (`motion` components, `useReducedMotion`) |
| Fonts | `next/font` (self-hosted via Google Fonts or local files) |
| Images | `next/image` always, never raw `<img>` |
| Icons | `lucide-react` (only when an icon adds meaning) |
| Content | Local typed data files or MDX in `/content` (no CMS unless asked) |
| Forms | Next.js Route Handler or Server Action + a mail service (Resend or similar), with validation via `zod` |
| Deployment target | Vercel |

**Do not add** extra UI libraries (MUI, Chakra, Bootstrap), CSS-in-JS, or heavy animation libraries unless I approve. Ask before adding any dependency. Prefer fewer dependencies.

Check the installed versions in `package.json` and follow current docs for them. Do not use deprecated APIs (for example the old `pages/` router).

---

## 3. WORKFLOW RULES (how you should work)

1. **Plan first.** For any non-trivial task, write a short plan (files to create or change, components, data shape) and wait for my approval before large changes.
2. **Design plan before code.** Before building the UI, produce a compact design plan:
   - **Color:** 4-6 named hex values
   - **Type:** typefaces and their roles
   - **Layout:** one-sentence concept plus a rough ASCII wireframe per major section; state alignment (left, center)
   - **Principles:** what makes this portfolio feel specific to *me* rather than generic
   Then review the plan against these rules. If any part looks like a generic default, revise it and say what you changed and why.
3. **Build in small steps, in this order:**
   1. Project setup, tokens, fonts, layout shell
   2. Hero
   3. Selected work (project cards)
   4. Case study page template
   5. Services / how I work
   6. Proof (testimonials or metrics)
   7. About
   8. Contact
   9. SEO, accessibility, performance pass
4. **Do not generate the whole site in one go.** Finish one step, verify it, then continue.
5. **Verify with the browser.** After each visual step, open the dev server, take screenshots at **375px, 768px, 1280px, and 1536px**, and fix any overflow, clipping, bad spacing, or low contrast before reporting done.
6. **Critique before delivering.** Look at your own screenshots and remove one decorative thing that does not earn its place.
7. **Run checks.** Before marking any task complete, run `npm run lint`, `npm run build`, and fix all errors and type warnings.
8. **Report briefly.** After each step: what changed, which files, anything I should decide next.
9. **Never invent facts.** Do not fabricate client names, testimonials, metrics, awards, or project results. Use clearly marked placeholders such as `[PLACEHOLDER: result metric]` until I supply real data.

---

## 4. DESIGN PHILOSOPHY

### 4.1 Overall feel
**Aesthetic, modern, premium, confident.** Calm and disciplined, with **one memorable element** (for example the hero treatment or the project showcase). Everything else stays quiet to support it.

Spend boldness in one place. Remove decoration that does not serve the content.

### 4.2 Avoid the "AI-generated portfolio" look
These are the common tells. Do **not** use them unless my design direction explicitly asks for them:

- Cream background (~`#F4F1EA`) + high-contrast serif + terracotta/clay accent
- Near-black background + a single acid-green or vermilion accent
- Identical rounded cards with the same radius and the same soft grey shadow everywhere
- Gradient washes used purely as decoration
- Tracked-out ALL-CAPS eyebrow label above every heading
- Highlighting just one word in a headline with italic, bold, or a different color
- Numbered markers (01 / 02 / 03) on content that is not actually a sequence
- Meta strings joined with middle dots (`A · B · C`) and labels like `WORD — fragment`
- A `→` appended to every link and button
- Monospace for small labels everywhere
- Pure tinted near-black (`#0B0B0B` / `#111`) as the default for "black"
- Fade-up-on-scroll on every section and hover lift on every card

Make deliberate, opinionated choices that fit *this* portfolio and *this* person.

### 4.3 Chosen direction
Follow the `design_direction` in Section 0. Reference notes for each:

- **dark-editorial:** deep dark base (not default black), very large display type, minimal copy, generous negative space, restrained accent.
- **soft-glass:** soft multi-tone mesh background, frosted panels (`backdrop-blur`) used with restraint, large radii, light and airy type. Ensure text contrast on glass.
- **bento:** a grid of mixed-size tiles with intentional hierarchy (not equal cards). Tiles expand into case studies.
- **neo-brutalist:** off-white base, thick borders, hard offset shadows, bold flat color blocks, oversized type, deliberate "rawness" with clean alignment.
- **interactive-showcase:** full-viewport project panels, horizontal or pinned scroll, custom cursor states, with a solid non-JS/mobile fallback.

If direction is `custom`, follow my description exactly.

---

## 5. DESIGN TOKENS (define in Tailwind theme, use only these)

Define all tokens once in `tailwind.config` / CSS variables in `globals.css`. **Never hard-code hex values, px sizes, or font names inside components.**

### 5.1 Color
Provide a named palette (the values come from the approved design plan):

```
--bg            base page background
--bg-elevated   surfaces / panels
--fg            primary text
--fg-muted      secondary text
--border        dividers and outlines
--accent        main accent (used sparingly: CTA, focus, key highlights)
--accent-fg     text on accent
--success / --danger   form states only
```

Rules:
- 4-6 core colors total. Accent used on **at most ~10%** of any screen.
- Support light and dark themes using CSS variables and `data-theme` (or `class`) switching. Respect `prefers-color-scheme` on first load, persist the user's choice.
- Text contrast must meet **WCAG AA** (4.5:1 body, 3:1 large text and UI components) in both themes.
- Color must never be the only carrier of meaning.

### 5.2 Typography
- **One or two typefaces maximum.** If two, make them clearly distinct (for example a characterful display face + a neutral, readable text face).
- Do not default to the usual picks you would use on any project. Choose with intent for this brief and explain the choice in one line.
- Define a **type scale** with `clamp()` fluid sizes, for example: `display`, `h1`, `h2`, `h3`, `body-lg`, `body`, `small`.
- Body line length: **under ~70-75 characters** (`max-w-prose` or similar). Serif body text gets slightly more line-height than sans.
- Body size minimum 16px. Line-height around 1.5-1.7 for body, 1.0-1.15 for large display type.
- Use letter-spacing deliberately: slightly tight on large headings, neutral on body.
- Use type itself as a design element in the hero. It should not be a neutral delivery vehicle.
- Load fonts with `next/font`, `display: swap`, subset to what is needed, and give each a proper fallback stack.

### 5.3 Spacing and layout
- Use a consistent spacing scale (4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128).
- Vertical rhythm between sections is consistent (for example `py-24 md:py-32`), set once in a shared `Section` component. Avoid conflicting padding/margin classes that cancel each other out.
- Max content width defined once (for example 1200-1280px) in a shared `Container` component.
- Mobile-first. Layouts built for 375px first, then enhanced with `sm`, `md`, `lg`, `xl`.
- Use CSS grid and flexbox. No fixed pixel widths on containers. No horizontal page scroll at any viewport.
- Vary radius, scale, and density with intent. Not everything is the same card.

### 5.4 Borders, shadows, effects
- Radius tokens by role (for example `--radius-sm` for inputs, `--radius-lg` for large media). Do not apply one radius everywhere.
- Shadows and blurs used rarely and only for real elevation or hierarchy.
- Structural devices (borders, dividers, labels, numbering) must **encode information**, not decorate.

---

## 6. MOTION RULES (Framer Motion)

Motion should be **deliberate and sparse**.

1. **One orchestrated moment:** a single page-load sequence in the hero (staggered reveal of headline, subline, CTA). That is the main "wow".
2. **Motion that responds to the user is welcome:** opening or closing menus, expanding a project into a case study, hover and focus states on interactive elements, form success and error transitions, page transitions between case studies.
3. **Do not** add fade-up on every section, hover-lift on every card, floating blobs, or looping background animation without a clear purpose.
4. **Respect reduced motion.** Use `useReducedMotion()` (or `MotionConfig reducedMotion="user"`). When reduced, replace movement with simple opacity changes or no animation.
5. **Performance:** animate only `transform` and `opacity`. Never animate `width`, `height`, `top`, `left`, or box-shadow on large elements. Use `will-change` sparingly.
6. **Timing tokens:** define shared durations and easings once (for example `duration.fast 0.2s`, `duration.base 0.4s`, `duration.slow 0.8s`; one signature ease curve) in `lib/motion.ts` and reuse them.
7. **Scroll effects:** use `whileInView` with `viewport={{ once: true, margin: "-10%" }}` only where it serves the content. Avoid scroll-jacking. Never block native scroll.
8. Keep animation components as small client components. Do not mark whole pages `"use client"` just to animate one element.

---

## 7. PAGE STRUCTURE

```
/                    Home (single scroll page)
/work                All projects (optional if > 5 projects)
/work/[slug]         Case study page
/about               (optional, can live on home)
/contact             (optional, can live on home)
```

### 7.1 Home sections (in this order)

1. **Header / nav:** logo or name, 3-4 links max, theme toggle, primary CTA button. Sticky and unobtrusive. Becomes a clean mobile menu with focus trap and Escape-to-close.
2. **Hero:** the first thing visitors see. State what I do and for whom in a clear headline (use `positioning`). Add one supporting line and one primary CTA, with the secondary CTA less prominent. Open with the most characteristic thing about my work (a headline, a live demo, an interactive moment, or a strong visual). Do not default to "big number + small label + gradient accent".
3. **Selected work:** 3-5 projects, each with title, one-line outcome, role/tags, and a real image or mockup. Click leads to the case study.
4. **Services / how I work:** what I offer, in client language, and a short process. Number the steps only if it is a true sequence.
5. **Proof:** testimonials, logos, or metrics. Only real data. If none exists, leave out the section instead of faking it.
6. **About:** short, human, a real photo, 2-3 sentences on how I work and what clients can expect.
7. **Contact:** one clear call to action, a short form (name, email, message, optional budget/timeline), plus direct email, WhatsApp, LinkedIn.
8. **Footer:** minimal. Links, copyright, socials.

### 7.2 Case study template
Each project follows this structure:

1. **Header:** project name, one-line summary, client, my role, timeline, stack
2. **The problem:** what the client needed
3. **My approach:** key decisions (2-4 short points)
4. **The solution:** visuals (device mockups, screens, short video or GIF), annotated where useful
5. **The result:** measurable outcome. Use real numbers only
6. **Next project** link + contact CTA

Case studies are **content-driven from typed data** (`/content/projects.ts` or MDX), never hard-coded in JSX.

---

## 8. COMPONENT AND CODE RULES

### 8.1 Structure
```
/app
  layout.tsx, page.tsx, globals.css
  /work/[slug]/page.tsx
  /api/contact/route.ts
/components
  /ui          primitives: Button, Container, Section, Heading, Tag, ThemeToggle
  /sections    Hero, SelectedWork, Services, Proof, About, Contact, Footer
  /motion      small reusable animation wrappers
/content       projects.ts, services.ts, testimonials.ts, site.ts
/lib           motion.ts, utils.ts, validators.ts
/public        optimized images, og images, favicon
```

### 8.2 Coding standards
- TypeScript strict. No `any`. Type all content data with interfaces.
- Default to **Server Components**. Add `"use client"` only for interactivity or animation, and keep those components small.
- One component per file. Descriptive names. Props typed and minimal.
- Reuse primitives (`Button`, `Section`, `Container`). No copy-pasted class strings across files.
- Use Tailwind utilities. Extract repeated patterns into components, not `@apply` sprawl.
- Use `clsx`/`tailwind-merge` via a `cn()` helper for conditional classes.
- No inline styles except for truly dynamic values.
- No dead code, commented-out blocks, or leftover console logs.
- Keep CSS specificity simple. Avoid selector conflicts between section-level and element-level spacing.
- All site copy and project data lives in `/content`, so I can edit text without touching components.

---

## 9. CONTENT AND COPY RULES

- Write for the **client's** point of view: outcomes and plain language, not tech jargon. Say "faster checkout", not "optimized React rendering".
- Be specific over clever. Avoid filler like "passionate", "cutting-edge", "seamless", "innovative", "crafting digital experiences".
- Sentence case for headings and buttons. Active voice.
- **Buttons say what happens:** "Book a call", "View case study", "Send message". Not "Submit" or "Click here".
- Keep the same name for an action through the whole flow (button "Send message" → confirmation "Message sent").
- Headlines are short. Paragraphs 1-3 sentences. One idea per element.
- Errors state what went wrong and how to fix it, without apologizing or being vague. Empty states invite an action.
- Use placeholders clearly marked as `[PLACEHOLDER: ...]` until real content is provided. Never ship lorem ipsum silently.

---

## 10. IMAGES AND MEDIA

- Use `next/image` with explicit `width`/`height` or `fill` + sized parent, `alt` text that describes the image, and `priority` only for the hero image.
- Present project screenshots inside **device mockups or clean frames**, not raw flat screenshots, when possible.
- Prefer WebP/AVIF. Keep each image under ~200KB where feasible.
- Provide `sizes` attributes for responsive images.
- Short videos: muted, `playsInline`, lazy-loaded, with a poster image, and never autoplay with sound.
- If a real image is missing, use a neutral, well-designed placeholder block with the intended aspect ratio, not stock photos.
- Create an Open Graph image (1200x630) for the home page and each case study.

---

## 11. ACCESSIBILITY (quality floor, not optional)

- Semantic HTML: one `h1` per page, logical heading order, `header`, `nav`, `main`, `section`, `footer`.
- Visible **keyboard focus** on every interactive element (custom focus ring using the accent, not removed).
- Full keyboard operability, including the mobile menu and any modal or expanding card (focus trap, `Escape` closes, focus returns).
- Skip-to-content link.
- Proper labels and `aria-*` on form fields and icon-only buttons. Form errors announced with `aria-live`.
- Touch targets at least 44x44px.
- Respect `prefers-reduced-motion` and `prefers-color-scheme`.
- Do not rely on hover for anything essential.

---

## 12. PERFORMANCE AND SEO

**Targets:** Lighthouse 95+ on Performance, Accessibility, Best Practices, and SEO. LCP under 2.5s, CLS under 0.1.

- Use `metadata` / `generateMetadata` for title, description, canonical, Open Graph, and Twitter cards on every page.
- Add `sitemap.ts`, `robots.ts`, and JSON-LD (`Person` or `ProfessionalService`) on the home page.
- Static generation for all pages (`generateStaticParams` for case studies).
- Lazy-load below-the-fold media. Keep client JS minimal. Avoid large animation bundles by importing only what is used.
- No layout shift from fonts or images.
- Contact form: validate on client and server with `zod`, add a honeypot field and basic rate limiting, never expose API keys client-side (use env vars; list them in `.env.example`).

---

## 13. RESPONSIVE BEHAVIOR

- Breakpoints to verify: **375, 768, 1280, 1536**.
- Hero text scales fluidly. Nothing overflows or wraps awkwardly at 375px.
- Project grids collapse: multi-column or bento on desktop → single column on mobile with the same hierarchy.
- Desktop-only effects (custom cursor, horizontal scroll, parallax) must **degrade gracefully** on touch devices and small screens.
- Navigation collapses into an accessible mobile menu.

---

## 14. DEFINITION OF DONE (checklist for every task)

A task is done only when all of these are true:

- [ ] Matches the approved design plan and tokens (no hard-coded values)
- [ ] No item from the "AI-generated tells" list (Section 4.2) unless I asked for it
- [ ] Works and looks correct at 375 / 768 / 1280 / 1536 (screenshots reviewed)
- [ ] Keyboard navigable with visible focus. Contrast meets AA in both themes
- [ ] Reduced-motion respected
- [ ] `npm run lint` and `npm run build` pass with zero errors
- [ ] No fabricated content. Placeholders are clearly marked
- [ ] Content lives in `/content`, not hard-coded in components
- [ ] Short summary given: what changed, files touched, next decision for me

---

## 15. HARD "DO NOT" LIST

- Do not use `localStorage` for anything except the saved theme preference.
- Do not use lorem ipsum, stock-photo people, fake logos, or fake testimonials.
- Do not add auto-playing audio/video, pop-ups, newsletter modals, or cookie banners unless I ask.
- Do not add dependencies without asking.
- Do not rewrite working files wholesale to make a small change. Edit surgically.
- Do not remove focus outlines or disable zoom.
- Do not use the `pages/` router, class components, or deprecated Next.js APIs.
- Do not ship a section I did not ask for. If you think one is missing, suggest it first.
- Do not start building before I approve the plan and design plan.

---

## 16. FIRST TASK (start here)

1. Read this file. List any placeholders in Section 0 that are still unfilled and ask me about them.
2. Propose the **design plan** (Section 3, step 2) for my chosen direction, including 2 alternative hero concepts as ASCII wireframes.
3. Wait for my approval. Then scaffold the project (Next.js App Router + TypeScript + Tailwind + Framer Motion), set up tokens, fonts, `Container`, `Section`, `Button`, theme toggle, and the layout shell. Stop and show me a screenshot before building the hero.
