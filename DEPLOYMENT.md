# Deployment

Updated: 2026-09-20

This file records the **confirmed production architecture** and the **cutover sequence**. It is documentation only.

The React site is **not the public WordPress replacement**. WordPress is still the public site at `https://secondcircleindia.org/`. A temporary Vercel preview may exist at `https://secondcirclewebsite.vercel.app/`. Do not treat that preview host as the production domain. Local QA fixes are not live on Vercel until they are committed and deployed separately. No Hostinger, DNS, WordPress, GitHub, Vercel settings, or payment change was made from this file.

Approved vs pending content: `CONTENT_STATUS.md`.

## Two phases

**Deployment preparation** is what this project is in now: local React build, `dist/` output, Apache rewrite files, and this sequence. Preparation does not publish the React app.

**Actual cutover** is a later, explicit instruction. It is the only phase in which GitHub is connected to Hostinger, WordPress data is removed, and React becomes the public site. Do not treat `npm run build` or this document as cutover.

## Confirmed architecture

- WordPress will not remain live after cutover.
- WordPress site data will eventually be removed from Hostinger, only after a complete backup and after React passes production checks.
- The React app will be deployed from GitHub directly to Hostinger.
- Hostinger must serve the React app as a **static site**.
- The deployed production files must be the **contents of `dist/`**, not the project source and not `node_modules/`.
- Apache must rewrite unknown non-file routes to `/index.html` so paths such as `/about`, `/our-work`, `/privacy`, and `/contact` work on refresh.
- Routing stays as the current pathname router in `src/main.jsx` and `src/site.js`. Do not add React Router unless there is a compelling reason later.
- `public/.htaccess` is copied into `dist/.htaccess` on build. That file is the Hostinger Apache SPA fallback.

Uploading `dist/` into the **current WordPress document root** before cutover can break the live site. Do not do that.

Deleting WordPress files and the database is **irreversible** unless a complete backup exists and has been verified as restorable.

## Local build (preparation only)

From the project root, in PowerShell:

```powershell
npm install
npm run build
```

Local check (does not publish):

```powershell
npm run preview
```

Build command for Hostinger Git deployment:

```text
npm run build
```

Deploy / output directory:

```text
dist/
```

`npm run build` writes production files into `dist/`. Vite copies `public/` into `dist/`. The build also copies `dist/index.html` to `dist/404.html`.

## Required production files

These must be present in the Git-deployed Hostinger document root (the contents of `dist/`):

- `dist/index.html`
- `dist/assets/`
- `dist/.htaccess`
- `dist/_redirects`
- `dist/404.html`

Also deployed with `dist/` and required once React is the public host:

- `dist/robots.txt`
- `dist/sitemap.xml`

While the app is on the temporary Vercel preview, `public/robots.txt` disallows crawlers and `public/sitemap.xml` is an empty urlset. Do not list `https://secondcircleindia.org/...` URLs from the preview host.

At production cutover on `https://secondcircleindia.org` (no launch date is claimed here), restore:

```text
User-agent: *
Allow: /

Sitemap: https://secondcircleindia.org/sitemap.xml
```

and a sitemap urlset whose `<loc>` values use `https://secondcircleindia.org` for every known public route: `/`, `/about`, `/our-core-values`, `/our-work`, `/our-work/community-engagement`, `/our-work/access-and-support`, `/our-work/research-and-learning`, `/our-work/advocacy-and-systems-change`, `/approach`, `/stories`, `/donate`, `/contact`, `/resources`, `/resources/financial-reports`, `/resources/legal-documents`, `/privacy`, `/donation-policy`.

`applyDocumentMeta` in `src/site.js` is host-aware. On `secondcirclewebsite.vercel.app` (and other non-production hosts) it sets `noindex, nofollow` and does not publish a canonical URL. On `secondcircleindia.org` or `www.secondcircleindia.org` it is indexable and sets canonical URLs to `https://secondcircleindia.org/...`. `index.html` ships with `noindex, nofollow` and no static canonical so the preview HTML cannot claim the production domain before JavaScript runs.

## Vercel preview routing

Project-root `vercel.json` rewrites **listed valid routes only** (including trailing-slash and WordPress alias paths) to `/index.html` so those URLs can return HTTP 200. Do not replace that list with a catch-all rewrite. Unknown paths must still miss a rewrite, fall through to the host 404 behaviour, and show the React 404 page.

This file is for Vercel. Hostinger still uses `dist/.htaccess`. The two hosts are not the same cutover.

## Cutover sequence

Do not start this sequence without an explicit cutover instruction. Steps 3 to 12 change GitHub, Hostinger, or WordPress. This documentation pass does **not** perform them.

1. Export and retain a complete WordPress backup before deletion:
   - WordPress files
   - database
   - uploads/media
   - DNS and hosting details
   - current URL/redirect inventory
   Confirm the backup can be restored. Deleting WordPress later is irreversible without this.
2. Confirm the React site has founder-approved content and approved legal policies. See `CONTENT_STATUS.md`. Privacy and Donation Policy are currently drafts. Programme, story, donation, document, and remaining biography content is still pending.
3. Push the React project to the chosen GitHub repository.
4. Configure Hostinger Git deployment from that repository.
5. Configure the build command as `npm run build`.
6. Configure the deploy/output directory as `dist/`.
7. Confirm these files are deployed: `dist/index.html`, `dist/assets/`, `dist/.htaccess`, `dist/_redirects`, `dist/404.html`.
8. Confirm Apache rewrite support and preserve the SPA fallback from `dist/.htaccess`. Unknown non-file routes must rewrite to `/index.html`. Keep `mod_rewrite` enabled. Do not deploy without `.htaccess`.
9. Test every public route directly after deployment, including browser refresh:
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
   - an unknown path (for example `/404-test`) to verify the React 404, not a blank host error
10. Only after the React site passes production checks, remove the WordPress files and database from Hostinger.
11. Verify DNS, HTTPS, canonical URLs, `robots.txt`, `sitemap.xml`, favicon, redirects, and mobile layouts.
12. Record a rollback procedure using the retained WordPress backup and the previous GitHub commit.

WordPress aliases that must still resolve after cutover (refresh included):

- `/about-us/` to `/about`
- `/our-programs/` to `/our-work`
- `/our-core-values/` to `/our-core-values`
- `/contact-us/` to `/contact`
- `/privacy-policy/` to `/privacy`
- `/privacy-policy-2/` to `/donation-policy`
- `/financial-reports-list/` to `/resources/financial-reports`
- `/legal-and-statutory-documents/` to `/resources/legal-documents`
- `/donate/` to `/donate`

## Rollback

Record this at cutover, not before the backup exists.

- Restore WordPress from the retained files, database, and uploads/media backup.
- Re-point the Hostinger document root at that restored WordPress tree if Git deploy has already replaced it.
- Revert the GitHub repository to the previous commit if the React build is the fault.
- Confirm DNS and HTTPS still match the restored host.
- Confirm the URL/redirect inventory from the backup.

Without a verified WordPress backup, rollback after deletion is not available.

## Preparation safety (current phase)

Until an explicit cutover instruction:

- Do not upload `dist/` into the live WordPress document root.
- Do not change DNS.
- Do not modify Hostinger.
- Do not push to GitHub from this task unless separately asked.
- Do not connect a payment gateway.
- Do not publish the React site.
- Do not delete WordPress files or the database.
- Do not add React Router.

The React build is a local artefact. `npm run preview` is local only.

## Current blockers

The architecture above is confirmed. Cutover is **not** ready.

1. Founder-approved content and legal policies are not complete (`CONTENT_STATUS.md`).
2. No complete, verified WordPress backup has been taken for this cutover.
3. The React project is not yet connected to a chosen GitHub repository for Hostinger Git deploy (and this pass must not create that connection).
4. Apache SPA rewrite has been prepared in `dist/.htaccess` but not installed on Hostinger.
5. No donation gateway. No contact form. No audited or statutory files. Stock photography still in use.

None of these blockers were resolved by this documentation pass. The site is not deployed.
