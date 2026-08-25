# AMAS Inter Designers Ltd. — progress for the next model

Read this first. Then `prompt.md` (scope and content rules) and `generated-page.html` (visual system). Do not start a new Next.js app. Do not install packages unless the user asks.

Last updated: 2026-08-22 (motion pass).

---

## What this project is

Public storefront for **AMAS Inter Designers Ltd.**: signage, branding, printing, fabrication, and visual advertising. Nigeria-based. Image-led marketing site only.

**Not in scope:** admin, CMS UI, inventory, CRM, dashboards, or any internal tool.

The existing Next.js app is the foundation. The HTML file is a Spare Orbit (car-mirror shop) template. Keep that look. Replace the content with AMAS. Drop cart, search, catalog, and dealership comparison.

---

## Source of truth (read in this order)

| File | Why it matters |
|------|----------------|
| `PROGRESS.md` | This file. Current state and next work. |
| `prompt.md` | Full original brief: pages, sections, content rules, clients list. |
| `generated-page.html` | Exact visual language: dark, red accent, fonts, cards, motion. |
| `data/` | All copy, clients, services, projects, images. Edit here, not in JSX. |
| `AGENTS.md` | Next.js 16 has breaking changes. Read `node_modules/next/dist/docs/` before using App Router APIs. |

---

## Locked decisions from the owner

These were confirmed in conversation. Do not reopen unless asked.

1. **Full 13-page storefront**, not home only.
2. **Visual system from `generated-page.html`**, AMAS content. Component-based, not one giant HTML paste.
3. **Text wordmark:** `AMAS` + red `Inter` (Montserrat, uppercase, tracking). No fake logo file.
4. **Contact/social:** placeholders until real details are provided. Vest photo number `08065357926` is **not** confirmed. Do not use it.
5. **Trusted By:** the 16 names from `prompt.md` only, plus “And More….”. Text now; logos later. Do not invent extra clients.
6. **Images:** real files in `public/assets/`. Hero + gallery use them. Project titles come from signage visible in the photos. No stock photos.
7. **Testimonials:** use Trusted By organisation names as clients, each with a different comment. Written for the site; can be replaced with approved quotes.
8. **No new installs** unless the user asks. If deps are missing, give them `npm install` rather than running it.
9. **Copy:** human, natural, international English. **No em dashes** (`—` or `–`) in public copy. Circle checkmarks on lists, not dashes.

---

## Stack

- Next.js **16.3.1** App Router, TypeScript, React 19
- Tailwind CSS **v4** (`@import "tailwindcss"`, `@theme inline` in `app/globals.css`)
- Fonts: Inter + Montserrat via `next/font/google`
- Motion: GSAP + ScrollTrigger, Lenis (`lenis/react`)
- Icons: `@iconify/react` with **bundled** `@iconify-json/solar` and `@iconify-json/simple-icons` (see `components/icons/register-icons.ts`). Do not rely on the Iconify CDN at runtime.
- Path alias: `@/*` → project root

Commands:

```bash
npm install    # only if node_modules is missing
npm run dev    # http://localhost:3000
npm run build
```

---

## Design system (from the HTML template)

| Token | Value |
|-------|--------|
| Background | `#0D0D0D` (`background`) |
| Surface | `#1A1D21` (`surface`) |
| Border | `#2A2E34` (`border`) |
| Accent | `#FF3C3C` (`accent`) |
| Accent hover | `#C62828` (`accent-hover`) |
| Text | `#FFFFFF` |
| Muted | `#B0B0B0` (`muted`) |
| Body | Inter |
| Display | Montserrat (`font-display`) |
| Nav | Fixed, `h-20`, backdrop blur, `bg-background/70` → `/90` on scroll |
| Buttons | Sharp (`rounded-none`), red / white / outline |
| Cards | `rounded-2xl`, surface, border |
| Container | `max-w-7xl mx-auto px-6` (`components/shared/Container.tsx`) |
| Section padding | `py-32` major, `py-24` medium |

Wordmark: `AMAS` white + `Inter` red.

Floating WhatsApp button exists (green FAB). Href is a placeholder until a number is provided.

---

## What is done

### Pages (all exist)

| Route | Status |
|-------|--------|
| `/` | Home, full section set |
| `/about` | Story, mission, vision, values, capabilities (circle checks) |
| `/services` | Grouped index |
| `/services/[slug]` | Detail + related work + FAQ slice |
| `/portfolio` | Filterable grid |
| `/portfolio/[slug]` | Detail, gallery, related, quote CTA |
| `/gallery` | All assets, category filter, lightbox, video item |
| `/quote` | Full quote form, client-side validation, local success state, no backend |
| `/contact` | Placeholder NAP, form, map placeholder, social icons |
| `/faq` | Accordion |
| `/privacy` | Holding copy |
| `/terms` | Holding copy |
| `app/not-found.tsx` | Custom 404 |
| `app/sitemap.ts`, `app/robots.ts` | Present |
| JSON-LD LocalBusiness | In root layout; NAP omitted while placeholders |

### Home sections (top to bottom)

1. Hero: AMAS photo slideshow, GSAP text reveal, ken-burns, dots only (no arrows, no progress bar)
2. Company intro (split image + three points)
3. Contrast band (split suppliers vs AMAS)
4. Services preview (4 featured cards)
5. Why choose (4-up)
6. Trusted By (two-row text marquee, centered, edge fades, logo-slot ready)
7. Featured projects
8. How we work (01–04)
9. Statistics (explicit “Soon”, not fake numbers)
10. Testimonials (Trusted By orgs, unique comments, centered marquee + fades)
11. Final CTA

### Architecture

Content lives in `data/` and is mapped in components. `"use client"` only where needed (nav, slideshow, Lenis/GSAP, forms, filters, lightbox, marquees that use Icon).

**Reveal:** `components/motion/Reveal.tsx` must **not** start as `visibility: hidden`. That hid every section below the hero. Current pattern: `y`/`opacity` only, `immediateRender: false`, driven by **ScrollTrigger** (`start: "top 92%"`, `once`) inside a `gsap.context`, with Lenis synced via `ScrollTrigger.update()` in `SmoothScroll`. Do not go back to `IntersectionObserver`: it fires off Lenis's clock, so sections popped in after they were already on screen.

**Motion (2026-08-22 pass):** Intro curtain (`Intro.tsx`, once per session), desktop custom cursor, magnetic buttons, hero word-split + mouse parallax, clip-path image reveal, card shine/lift, process line scrub, CTA glow. Respect `prefers-reduced-motion`. Custom cursor is `md+` only and hidden on coarse pointers.

`SmoothScroll` also calls `ScrollTrigger.refresh()` on `window.load`, because hero and gallery images settle after hydration and shift every trigger point below them.

**Icons:** register names in `components/icons/register-icons.ts` before using a new Solar/Simple icon.

---

## File map

```
app/                    routes, layout, globals.css, sitemap, robots, not-found
components/home/        home sections
components/layout/      Navbar, Footer, SmoothScroll, WhatsApp, JsonLd
components/shared/      Button, Container, ImageCard, Marquee, CheckList, PageHero, Wordmark
components/forms/       QuoteForm, ContactForm
components/gallery/     GalleryGrid, Lightbox
components/portfolio/   PortfolioGrid
components/icons/       IconProvider + register-icons
components/motion/      Reveal
data/                   site, services, projects, gallery, clients, testimonials, about, faqs, stats, process, why-choose
lib/                    use-prefers-reduced-motion
public/assets/          20 JPGs + 1 MP4 of real AMAS work
generated-page.html     design reference
prompt.md               original brief
```

---

## Content that is still placeholder

Edit `data/site.ts`, `data/stats.ts`, `data/about.ts`, `data/testimonials.ts`, project overviews in `data/projects.ts`.

| Item | Current | Needed from owner |
|------|---------|-------------------|
| Phone, email, address, hours | “coming soon” | Real NAP |
| WhatsApp | FAB disabled / `#` | Number or wa.me URL |
| X / Facebook / Instagram | Icons shown, hrefs undefined | Real URLs |
| Logo | Text wordmark | Official logo file, then swap in `Wordmark` |
| Client logos | Styled names in Trusted By | Official logos in `public/`, swap inside `ClientMark` |
| Stats | “Soon” | Verified counts only |
| Testimonials | Written copy attributed to listed orgs | Approved real quotes if they want them marked as real |
| About story / mission / vision | Human holding copy | Official statements |
| Quote / contact forms | Validate in browser only | Backend / email / WhatsApp |
| Map | Dashed placeholder | Google Maps embed |
| Privacy / terms | Holding pages | Lawyer-reviewed text |
| Project challenge / solution | Short holding lines | Client-approved case copy |
| Favicon | Default Next.js icon | AMAS favicon |

**Trusted By names (do not add/rename):** Rukuba Barracks, Gowons Bank, Cocin Guest Inn, Diamond Dreams, Jds Fuel Station, Vochmal Bakery, Teest Hotel & Suite, Plateau State Polytechnic, Grand Cereal, El-Rehoboth, Plateau State Chieftency Affairs, Airforce Girls Jos, Military Cantonment (Jaji), Golden Bide Hotel, Jennys Fuel Station, Stanel Bakery, And More…..

---

## Assets

All under `public/assets/`. Titles in `data/projects.ts` and `data/gallery.ts` come from what is visible in the photo.

Hero slides are selected in `data/gallery.ts` (`heroSlides`). Gallery uses every still plus `VID-20260820-WA0100.mp4`.

Some shots are workshop/install (debris, generators). Hero uses stronger images; gallery can include the rest. Stanel café shot may include WhatsApp chrome; crop with `object-cover` if it shows.

---

## Copy and typography rules (current)

- Sound like a person talking. Short sentences. International English (colour, organisation).
- No em dashes or en dashes in user-facing strings. Use commas, periods, or “to” (e.g. budget ranges).
- Lists: `CheckList` with `solar:check-circle-bold`, not `—` bullets.
- Do not invent awards, fake stats, extra clients, or social URLs.
- Vest number is not official contact.

---

## Bugs already fixed (do not reintroduce)

1. **Empty sections below the hero.** Reveal used `visibility: hidden` and ScrollTrigger did not see Lenis scroll. Keep Reveal visible-by-default and `LenisScrollTrigger` in `SmoothScroll`.
2. **Blank icons.** Iconify was fetching from the network. Icons must be registered offline in `register-icons.ts`.
3. **Marquees full-bleed.** Trusted By and testimonials must stay in `max-w-7xl` with left/right fades.

---

## What to do next (priority)

Ask the owner before inventing missing facts. Then:

1. **Real contact details** in `data/site.ts` (phone, email, address, hours, WhatsApp, social URLs). Wire the FAB and social `href`s. Add the Google Map on `/contact`.
2. **Logo file** when they upload it. Replace `Wordmark` text, keep the same nav height.
3. **Client logos** when they arrive. Swap the `<span>` in `TrustedBy` `ClientMark` for `next/image`. Keep slot size consistent.
4. **Quote/contact backend.** Forms are structured for this. Do not redesign the UI. Wire email, API, or Formspree/etc. when they choose.
5. **Verified stats** in `data/stats.ts`. Do not guess.
6. **Approved about copy** and project case text if they want more than holding lines.
7. **Favicon and OG image.**
8. **Favicon/brand domain.** `site.url` currently defaults to `https://www.amasinterdesigners.com` (placeholder). Set `NEXT_PUBLIC_SITE_URL` when the real domain is known.
9. Visual polish only if they ask: inner pages, mobile nav, quote form, gallery lightbox.
10. Production pass: `npm run build`, check all routes, broken images, mobile nav, reduced motion.

---

## How to continue a session

1. Read this file.
2. Skim `prompt.md` sections that match the task.
3. Match `generated-page.html` for look (dark, red, Montserrat/Inter, sharp buttons, rounded-2xl cards).
4. Change copy/images in `data/`, not by hardcoding repeats in JSX.
5. Do not `npm install` extra libraries unless asked.
6. Do not rebuild as static HTML or a new Next app.
7. If UI changes, verify in the browser (desktop and mobile). If no browser tools, say so and use the closest check.
8. Keep public copy free of em dashes.

If the owner says “continue building” without a specific page, check the next-work list above and ask which item they want, unless it is an obvious leftover on a page they just screenshotted.
