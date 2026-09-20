# Changelog

## 2026-09-20

- Expanded programme detail pages so approved notes fill the existing ten-section layout for Community Engagement, Advocacy and Systems Change, and Research and Learning. Access and Support keeps the approved short description and more specific pending labels only. No invented locations, partners, outcomes, downloads, or active-delivery claims. `npm run build` succeeded. Not pushed. Not deployed.
- Added approved programme scope content to Community Engagement, Advocacy and Systems Change, and Research and Learning (scope copy plus “Areas this work may include”), and reserved Awareness and campaign materials on Resources. Access and Support unchanged. `npm run build` succeeded. Not pushed. Not deployed.

- Final polish: removed unused `public/_tmp-support.jpg` and unpublished `homepage-hero-stock-photo.jpg` from `public/` (licence archive kept under `assets/stock-images/`), Approach steps use semantic `h2`, and visitor-facing temporary/stock image captions were removed while pending/draft/donation-status labels remain. `npm run build` succeeded. Not pushed. Not deployed.

- Visual quality pass: removed floating yellow hero stamp and Stories orbit rings; rebuilt Approach as a Listen / Learn / Act system; editorial captions on temporary photographs; softer programme image overlays; typographic brand-field treatment on copy-only heroes; new Pexels assets for Access and Support and Donate. `npm run build` succeeded. Not pushed. Not deployed.

- Applied local live-QA fixes: explicit `vercel.json` rewrites for known routes only, compact mobile footer (logo `height: auto`), host-aware preview `noindex` without a conflicting canonical, preview-closed `robots.txt` and empty sitemap, visitor-facing legal wording without “React rebuild” jargon, 44px tap targets, and heading/tagline spacing for screen readers. `npm run build` succeeded. Not pushed. Not deployed. The live Vercel preview is not claimed fixed until a separate commit and deploy.

## 2026-09-19

- Pinned `package.json` to lockfile versions, removed unused `typescript`, and stopped unknown paths from publishing a canonical URL. `npm install` and `npm run build` succeeded. No GitHub, Hostinger, DNS, or WordPress changes. Cutover is still not ready.

- Completed a local GitHub and production-readiness audit. `npm run build` succeeded. Routes, metadata, and `dist/` rewrite files checked on preview. Tightened `.gitignore`. No GitHub push, Hostinger, DNS, or WordPress changes. The site is not production-ready for cutover.

- Updated `DEPLOYMENT.md`, `README.md`, and this changelog for the confirmed Hostinger model: GitHub deploys `dist/` as a static site, Apache rewrites unknown routes to `/index.html`, pathname routing stays, WordPress is removed only after backup and production checks. No live Hostinger, DNS, WordPress, or GitHub changes. The site is not deployed.

- Added `DEPLOYMENT.md` for the React rebuild: build command, required `dist/` files, Hostinger Apache rewrite notes, pre-cutover and route checklists, and explicit do-not-publish rules. WordPress, Hostinger, and DNS were not changed.

- Added a dedicated `/our-core-values` page using the nine founder-approved values and the two approved guide sentences from the mission-vision-values PDF. `/our-core-values/` resolves to the same page. No value names rewritten. No new photography.

- Improved `/contact` with four enquiry purposes, confirmed email, phone and address, mailto links with prefilled subjects, and a reserved Contact form coming soon section. No form collection, no fake success state, no WhatsApp or social links.

- Structured `/stories` around three reserved categories: Community voices, Research and learning, and Organisation and partner updates. Added a reusable story card, a featured reserved slot, and hash category links. No stories, quotes, people, dates, or outcomes invented. No story detail pages.

- Added a shared ten-section programme architecture on all four vertical pages, with a reusable Content pending approval block. No programme facts, figures, locations, or partners invented.
- Improved `/our-work` so each vertical shows name, approved description, temporary image, detail link, and placeholder status.
- Updated AGENTS, README and PROJECT_CONTEXT so live WordPress, the React rebuild, approved content, pending content, and deploy blockers are distinct.

- Ported approved About people content onto React: Karandeep Pupneja, the three Advisory Board biographies, Technology & Communications names, and the published team photographs. Tech & Communications biographies stay marked pending.
- Added the nine founder-approved values from `assets/founder-content/mission-vision-values-second-circle-india.pdf` to About.
- Expanded each programme page with pending sections for who, what, where, partners, outcomes, and stories. No programme facts invented.
- Replaced homepage placeholder copy with labelled pending-content states. Structured the Stories page into coming-soon community, research and update slots.
- Copied approved team photographs into `assets/team/` and `public/team/`.

- Hardened the React rebuild: shared header/footer, route metadata, 404 page, keyboard focus styles, and `aria-current` on active navigation.
- Pointed homepage programme detail links at each `/our-work/...` route and the Stories CTA at `/stories`.
- Expanded the footer with the full public page set plus approved organisation details, including CIN. No tax or donation claims added.
- Split Privacy Policy and Donation Policy into distinct placeholder pages. Financial and legal rows now read as pending, not downloadable.
- Added Vite SPA preview support plus `public/.htaccess`, `public/_redirects`, and a built `404.html` copy. Host rewrite is still required for static production deep links.
- Moved route, organisation and programme data into `src/site.js`.

- Created the first React/Vite prototype for the rebuild at the project root.
- Added the programme-led homepage direction with Community Engagement, Access and Support, Research and Learning, and Advocacy and Systems Change verticals.
- Added the Connected Care visual identity using the existing charcoal, yellow, olive and paper palette.
- Preserved placeholders for programme detail, communities served, impact, stories, donation workflow and unfinished content.
- Added responsive navigation, mobile layout, CTA sections, contact footer, and local brand assets.
- Downloaded six temporary Pexels stock images for the hero, programme verticals, and stories placeholders through Playwright. Source URLs and intended uses are recorded in `assets/stock-images/README.md`.
- Integrated the temporary image set into the React homepage hero, programme feature panel, and Stories section while preserving the colour-led placeholder treatment.
- Enlarged programme imagery into full-card backgrounds for all four verticals, with readable brand-colour overlays and responsive mobile sizing.
- Added the remaining React page structure: About, Our Work, four programme detail routes, Our Approach, Stories & Insights, Donate, Contact, Resources, Financial Reports, Legal Documents, Privacy, and Donation Policy.
- Added reusable inner-page headers, footers, programme cards, document rows, contact blocks, and clearly marked placeholders for content awaiting approval.

## 2026-08-20

- Created the persistent Second Circle India project context under `Products/Live/NGO/second-circle-india/`.
- Recorded the live page IDs, routes, menus, old-page rollback state, design system, content placeholders, and audit workflow.
- Corrected document hero vertical alignment across Financial Reports, Legal & Statutory Documents, Privacy Policy, and Donation Policy.
- Corrected light hero heading contrast across About Us, Our Programs, Contact Us, and Donate.
- Restored the homepage hero heading to white after the light-page contrast fix.

## 2026-08-21

- Added the About page people section with Founder, Technology & Communications Team, and Advisory Board groups.
- Added nine styled photo placeholder cards with confirmed names and roles pending final bios, photos, and consent.
- Uploaded and wired seven team photos on About Us. Nipun Aggarwal and Mohd Wasil remain labelled photo placeholders until their photos are available.
- Corrected team card image clipping so text stays below photographs, and corrected the advisory member name to Mohd Wasil.
- Replaced Piyush and Shrutanjaya photos and added photos for Nipun Aggarwal and Mohd Wasil.
- Standardised all team photo frames to a uniform 360px height with face-preserving top alignment.
- Removed the temporary About page accountability CTA now that the team section is populated.
- Reordered the About page people groups to Founder, Advisory Board, then Technology & Communications Team.
- Added Mohd Wasil's approved biography to his Advisory Board card.
- Expanded the team card names to Jatin Gupta and Jatin Paroli.
- Updated full names for Karandeep Pupneja, Shrutanjaya Bhardwaj, and Aditya Singh, and changed Karandeep's designation to Founder and Executive Director.
- Updated Shashank's full name to Shashank Maheshwari.
- Added the founder biography for Karandeep Pupneja and Advisory Board biographies for Shrutanjaya Bhardwaj and Shashank Maheshwari from the founder-provided introductions PDF.
- Updated the About page mission and vision wording from the founder-provided reference image.
- Verified the About page on desktop and mobile with no horizontal overflow.

## Earlier rebuild work

- Recreated and published the current page set in Elementor.
- Updated primary and footer navigation to the new pages.
- Replaced the visible logo treatment with the uploaded new logo.
- Applied the logo-based color system and responsive layout refinements.
- Added and later refined themed placeholder sections for content awaiting founder input.
