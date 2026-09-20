# Site Audit

Last React audit: 2026-09-20, programme detail sections expanded (local only).

Verified locally with `npm run build`. Not pushed. Not deployed.

### QA status 2026-09-20 (programme detail sections expanded, local)

- Community Engagement, Advocacy and Systems Change, and Research and Learning: existing programme sections populated with approved vertical-specific copy where notes support it (overview, who/what may include, where framing, intended outcomes, stories/resources non-download copy, connect to `/contact`). Named partners, named communities/regions, measured outcomes, case studies, and downloads remain pending or explicitly TBD.
- Access and Support: approved short description only; remaining sections use specific pending labels (who, what support may include, where, partners, outcomes, resources, contact/referral pathway). No invented content.
- Wording uses “may include” / intended outcomes framing; Advocacy connect does not imply legal intake or representation.
- Routes and programme names unchanged. Local preview at 1280px and 390px: one H1 per page, sections numbered 01–10, no horizontal overflow, no broken images, `/contact` `/stories` `/resources` links resolve.
- `npm run build` succeeded. Not pushed. Not deployed.

### QA status 2026-09-20 (programme scope content, local)

- Community Engagement, Advocacy and Systems Change, and Research and Learning now publish approved scope sections and “Areas this work may include” lists framed as possible scope, not active delivery claims.
- Access and Support unchanged (no new notes).
- Resources adds a pending “Awareness and campaign materials” category with Content pending approval. No fake downloads.
- Existing programme architecture pending sections remain. One H1 per programme page.

### QA status 2026-09-20 (final polish, local)

- Removed unused `public/_tmp-support.jpg` and unpublished `public/homepage-hero-stock-photo.jpg`. High-resolution hero archive remains under `assets/stock-images/` with licence notes. Referenced app images were not deleted.
- Approach Listen / Learn / Act steps are semantic `h2` headings; page still has one H1.
- Visitor-facing temporary/stock photograph captions removed from heroes, programme panels, and alt text. Content-status labels (pending, coming soon, draft, donation workflow not active, reserved editorial space) remain.
- Image alt text stays descriptive without implementation wording.

### QA status 2026-09-20 (visual quality pass, local)

Audited every public route’s photography, crops, decorative graphics, and mobile treatment against the live reference at `https://secondcirclewebsite.vercel.app/` (pre-deploy state), then redesigned locally.

- Homepage hero no longer uses a floating yellow circle over the photograph. Caption sits in a bottom strip.
- Homepage Stories panel is a full editorial figure with “Reserved editorial space / Stories coming soon”, not rings around a tiny crop.
- Approach (home + `/approach`) uses a Listen / Learn / Act system list instead of empty concentric diagram rings.
- Programme feature panels use gradient overlays that keep faces readable; temporary-photograph labels remain.
- Copy-only heroes (Resources, Financial, Legal, Core Values, 404) use a restrained Connected Care brand-field decoration (`aria-hidden`).
- New temporary Pexels assets for Access and Support and Donate; hero rebuilt from the high-res stock archive. Sources recorded in `assets/stock-images/README.md`.
- Team photographs unchanged. Pending and draft labels preserved.

`npm run build` succeeded. Local preview checked at 1280px and 390px for broken images, overflow, and one H1 per route.

### QA status 2026-09-20 (live QA fixes, local)

Implemented in the project folder only. Do not treat `https://secondcirclewebsite.vercel.app/` as updated.

- `vercel.json` rewrites the listed application routes and trailing-slash / WordPress-alias equivalents to `/index.html`. There is no catch-all rewrite. Unknown paths remain outside that list so Vercel can still return HTTP 404 (via `404.html`) while the app shows the React 404.
- `.footer-logo` now has `height: auto` and a bounded `.footer-identity`, so the 2000px intrinsic logo height no longer inflates the mobile footer.
- Preview / non-production hosts set `robots` to `noindex, nofollow` and omit `rel=canonical`. Production host `secondcircleindia.org` (and `www`) keeps route-specific titles and descriptions and sets canonical URLs on `https://secondcircleindia.org/...`.
- `public/robots.txt` disallows all crawlers on the temporary preview. `public/sitemap.xml` is an empty urlset. Restore Allow + production locs at cutover. No launch date invented.
- `/privacy` and `/donation-policy` no longer use visitor-facing “React site” / “React rebuild” wording. Draft / founder-and-legal-review labels remain.
- Footer tagline and editorial heading line-breaks include a space so assistive technology reads natural phrases. Header nav links and About “Read more” have a 44px min tap/focus height.

`npm run build` succeeded with no new warnings from this work. Local code review: one H1 per route, route-specific titles/descriptions, no public legal “React rebuild” strings, footer compact on a 390px-width rule set. Images unchanged.

### Verified (engineering)

- `package.json` now pins `@vitejs/plugin-react` 6.1.1, `lucide-react` 1.47.0, `react` 19.3.0, `react-dom` 19.3.0, and `vite` 8.3.0 from the previous lockfile. `typescript` was unused and has been removed. `package-lock.json` matches.
- `npm run build` succeeds. Scripts remain `dev`, `build`, and `preview`.
- Unknown paths never publish a canonical URL. On `secondcircleindia.org`, valid routes set `rel=canonical` to `https://secondcircleindia.org/...`. On the Vercel preview and other non-production hosts, canonical is omitted.
- No `.env` files. No WordPress or Hostinger credentials found in project source. No `localhost`, `127.0.0.1`, or Windows filesystem paths in `src/` or `public/`.
- Public assets use root-relative URLs. Favicon, `robots.txt`, `sitemap.xml`, `.htaccess`, `_redirects`, and `404.html` are in `dist/` after build.
- Every route listed in `DEPLOYMENT.md` (plus WordPress aliases and `/404-test`) has one H1, a route-specific document title and meta description, and no missing `alt` attributes. Footer logo uses empty alt (decorative). Homepage `#work`, `#approach`, and `#support` hashes resolve. Unknown path `/404-test` renders the React 404.
- Mobile menu opens and closes with Escape. `:focus-visible` styles exist.

### Remaining blockers (founder, legal, cutover)

See `CONTENT_STATUS.md` and `DEPLOYMENT.md`. Incomplete programme/story/donation/document content, draft legal policies, no donation gateway, no enquiry form, stock photography, no verified WordPress backup, no Git repository or GitHub remote, no Hostinger Git deploy. The site is not production-ready as a public replacement.

The folder is **not a Git repository**. `.gitignore` now covers `node_modules/`, `dist/`, `.env`, logs, and common editor files. Do not treat that as a GitHub connection.

`/privacy` remains a conservative draft for founder and legal review.

The **live public site is still WordPress**. This audit is of the local React rebuild (`npm run preview`). WordPress was not edited.

## Surfaces

- Live WordPress: `https://secondcircleindia.org/`
- Temporary Vercel preview: `https://secondcirclewebsite.vercel.app/` (not the production domain; local QA fixes are not live until a separate deploy)
- React rebuild: project root.

Approved vs pending content: `CONTENT_STATUS.md`.

Deployment: `DEPLOYMENT.md`. Do not upload `dist/` to the live WordPress document root.

## React rebuild

### Completed routes

Canonical React routes plus WordPress aliases that resolve to them:

- `/about-us` → `/about`
- `/our-programs` → `/our-work`
- `/contact-us` → `/contact`
- `/privacy-policy` → `/privacy`
- `/privacy-policy-2` → `/donation-policy`
- `/financial-reports-list` → `/resources/financial-reports`
- `/legal-and-statutory-documents` → `/resources/legal-documents`

Unknown paths render a 404 page.

### QA status 2026-09-19 (GitHub / production-readiness)

Local audit only. `npm run build` succeeded. Preview checked every `DEPLOYMENT.md` route, WordPress aliases, and `/404-test`. One H1 and route metadata on each. No deploy, no GitHub push, no Hostinger change.

Findings that are not cutover blockers but should be known:

- The project folder has no `.git` directory and no remote.
- `dist/404.html` is a copy of `index.html` for fallback hosts. Apache still needs `dist/.htaccess`.

### QA status 2026-09-19 (Engineering follow-up)

Pinned lockfile versions in `package.json`, removed unused `typescript`, and omitted `rel=canonical` on unknown paths. `npm install` and `npm run build` succeeded. Required `dist/` files remain. No GitHub push, Hostinger, DNS, or WordPress change. Cutover blockers in `CONTENT_STATUS.md` and `DEPLOYMENT.md` are unchanged.

### QA status 2026-09-19 (Deployment docs)

Verified locally with `npm run build` and `npm run preview`. Confirmed `dist/index.html`, `dist/assets/`, `dist/.htaccess`, `dist/_redirects`, and `dist/404.html`. Checked `/` and `/404-test` on preview. No upload, no DNS change, no Hostinger change, no WordPress change.

### QA status 2026-09-19 (Core Values)

Verified locally with `npm run build` and `npm run preview` after the Core Values page pass.

Checked `/our-core-values` and `/our-core-values/` on 1280px and 390px:

- One H1: Our Core Values
- Nine approved value names and descriptions
- Approved guide sentence from the founder PDF
- About, Our work, and Contact links
- No stock image
- Trailing slash normalises to `/our-core-values`
- Keyboard focus-visible styles remain on links and buttons

### QA status 2026-09-19 (Contact)

Verified locally with `npm run build` and `npm run preview` after the Contact and Enquiries pass.

Checked `/contact` on desktop and a narrow mobile viewport:

- One H1 on the page
- Four purpose cards with mailto subjects
- Email and both phone numbers present as working links
- Address shown on two lines
- Contact form coming soon section with no inputs and no submit control
- Privacy note linking to `/privacy`
- No WhatsApp or social links

### QA status 2026-09-19 (Stories)

Verified locally with `npm run build` and `npm run preview` after the Stories architecture pass.

Checked `/stories` on desktop and a narrow mobile viewport:

- One H1 on the page
- Featured reserved slot plus three category sections
- Category hash navigation only; no filter state and no implication that stories exist
- Story cards are inactive placeholders, not story detail links
- Temporary stock photographs remain labelled as such

### QA status 2026-09-19

Verified locally with `npm run build` and `npm run preview`.

Also added: favicon from the logo, `robots.txt`, `sitemap.xml` of canonical React URLs, image width/height and lazy-loading, client-side alias rewriting, Apache and Netlify redirect files.

`sitemap.xml` and `robots.txt` describe the React URL set. They are only correct after React is the public host. Do not upload them to the current WordPress site unless that cutover is authorized.

Checked on desktop and a narrow mobile viewport:

- About people cards, programme detail pages, footer, resource/legal pages, and the header menu
- One H1 per route
- No horizontal overflow on the audited pages
- Keyboard focus-visible styles and Escape to close the mobile menu

Not a live-host QA. Production WordPress was not edited.

### Routing limitations

- `/`
- `/about`
- `/our-core-values`
- `/our-work`
- `/our-work/community-engagement`
- `/our-work/access-and-support`
- `/our-work/research-and-learning`
- `/our-work/advocacy-and-systems-change`
- `/approach`
- `/stories`
- `/donate`
- `/contact`
- `/resources`
- `/resources/financial-reports`
- `/resources/legal-documents`
- `/privacy`
- `/donation-policy`

Unknown paths render a 404 page with links home, to Our work, and to Contact.

### QA status 2026-09-19

Verified locally with `npm run build` and `npm run preview`.

Checked:

- Pathname routing still used. No client-side router library.
- Header links: Our work, Our approach, Stories & insights, About, Donate.
- Homepage programme “Programme details” links go to the matching `/our-work/...` route.
- Homepage Stories CTA goes to `/stories`.
- Footer includes About, Our work, Our approach, Stories & insights, Donate, Contact, Resources, Financial reports, Legal documents, Privacy policy, Donation policy, plus approved organisation details.
- Each listed route has one visible H1 and a route-specific document title and meta description.
- Financial report and legal document rows are pending states, not “Read now”.
- Privacy and Donation policy are visually distinct placeholder pages.

Not a live-host QA. Production WordPress was not edited.

### Routing limitations

`vite.config.js` sets `appType: 'spa'`. That is enough for:

- `npm run dev`
- `npm run preview`

It is **not** enough on its own for production-style static hosting. The host must serve `index.html` for unknown paths so the React app can show the correct page or the 404.

Ship and configure one of these with the `dist/` upload:

- **Apache / typical Hostinger public_html:** `public/.htaccess` is copied into `dist/.htaccess`. Keep `mod_rewrite` on. Do not upload only `index.html` without this file.
- **Netlify / similar:** `public/_redirects` copies to `dist/_redirects` as `/* /index.html 200`.
- **nginx:** `try_files $uri $uri/ /index.html;`
- **GitHub Pages:** the build also writes `dist/404.html` as a copy of `index.html`. That is a fallback, not a host-level rewrite. Other hosts should still use the rewrite above.

If the host returns a raw server 404 for `/about`, the React 404 will never run. Fix the host fallback first.

Content, titles and org facts live in `src/site.js` so they can later move to a CMS or MDX without changing the page chrome.

### Remaining placeholders

See `CONTENT_STATUS.md`. Do not present the React site as content-final.

## WordPress public site (2026-08-20)

- All then-current public routes returned successfully.
- New pages were live and old pages remained drafted with `old-` names.
- Homepage setting pointed to page 1323.
- Primary and footer navigation pointed to the new pages.
- Document page kicker text `Transparency & Trust` was removed because it was clipping under the header.

## Audit procedure for future React passes

1. Check the homepage at desktop and mobile.
2. Check every header and footer link, including Donate, Contact, Resources and both policy pages.
3. Confirm one visible H1 and the document title on each route.
4. Confirm an unknown path shows the React 404, not a blank host error.
5. Check hero contrast, clipping and mobile overflow.
6. Confirm financial and legal rows still read as pending if no files are attached.
7. Record findings here and in `CHANGELOG.md`.
