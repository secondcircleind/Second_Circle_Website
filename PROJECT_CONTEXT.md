# Project Context

Updated: 2026-09-19

## Two websites

**Live now:** WordPress + Elementor on Hostinger at `https://secondcircleindia.org/`. That is the public site until a React deploy is explicitly authorized.

**In this folder:** a React/Vite rebuild of the public site. Run it with `npm run dev`. Build with `npm run build`. Preview with `npm run preview`. It is not live.

## React rebuild

- Stack: React, Vite, JavaScript, Lucide React, CSS in `src/styles.css`
- No backend. Content lives in `src/site.js`
- Pathname routing. WordPress URLs are aliased to the new routes in `src/site.js`, `public/.htaccess`, and `public/_redirects`
- Brand assets: `assets/logo/`, `public/assets-logo-second-circle-india.png`
- Team photographs: `assets/team/` and `public/team/`
- Temporary stock images: `assets/stock-images/` and copies in `public/`
- Founder source files: `assets/founder-content/`

### React routes

- `/`
- `/about`
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

WordPress aliases: `/about-us` → `/about`, `/our-programs` → `/our-work`, `/contact-us` → `/contact`, `/privacy-policy` → `/privacy`, `/privacy-policy-2` → `/donation-policy`, `/financial-reports-list` → `/resources/financial-reports`, `/legal-and-statutory-documents` → `/resources/legal-documents`. `/our-core-values` is a canonical React page; `/our-core-values/` resolves to it. `/donate` is unchanged.

## Live WordPress

- Domain: `secondcircleindia.org`
- Hosting: Hostinger, Single Web Hosting plan
- CMS: WordPress with Elementor
- Browser automation for live edits: Playwright MCP using the signed-in Brave profile

WordPress page IDs observed during the 2026-08 rebuild:

- Home 1323 `/`
- About Us 1325 `/about-us/`
- Our Programs 1327 `/our-programs/`
- Our Core Values 1329 `/our-core-values/`
- Donate 1331 `/donate/`
- Contact Us 1333 `/contact-us/`
- Privacy Policy 1404 `/privacy-policy/`
- Donation Policy 1405 `/privacy-policy-2/`
- Financial Reports 1407 `/financial-reports-list/`
- Legal & Statutory Documents 1409 `/legal-and-statutory-documents/`

Old WordPress pages remain as drafts with `old-` prefixes. Do not delete them without approval.

## Deployment blockers for React

The React site is not production-ready as a replacement until:

1. The founder-approved content listed in `CONTENT_STATUS.md` is filled, especially donation, legal, programmes, and documents.
2. Files in `dist/` are uploaded to a host.
3. The host serves `index.html` for unknown paths. `vite.config.js` is not enough. Use `dist/.htaccess` on Apache/Hostinger, `dist/_redirects` on Netlify, or nginx `try_files $uri $uri/ /index.html;`.
4. WordPress permalinks are retired or redirected using the alias list above, with an explicit go-ahead.

## Founder source files

- `assets/founder-content/mission-vision-values-second-circle-india.pdf`
- `assets/founder-content/website-content-review-report.pdf`
