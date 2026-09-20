# Second Circle India Website

Two surfaces exist today. They are not the same site.

**Public now:** WordPress/Elementor at https://secondcircleindia.org/, hosted on Hostinger.

**Rebuild:** React/Vite at the project root. Not deployed. Do not treat it as the live site.

**Intended production (not done):** static React from GitHub to Hostinger, document root = contents of `dist/`, Apache rewrite unknown routes to `/index.html`, then WordPress files and database removed after a verified backup. Sequence and safety rules: `DEPLOYMENT.md`. Pathname routing stays. Do not add React Router unless there is a compelling reason.

## Resume here

1. `AGENTS.md`
2. `PROJECT_CONTEXT.md`
3. `CONTENT_STATUS.md`
4. `SITE_AUDIT.md`
5. `DESIGN_SYSTEM.md`
6. `DEPLOYMENT.md`

For React work, run `npm run dev` or `npm run preview`. Do not log into Hostinger, change DNS, or modify WordPress unless the task is an explicit live cutover.

The project folder is not a Git repository yet. `node_modules/`, `dist/`, `.env`, logs, and common editor files are listed in `.gitignore`. Do not commit secrets. Cutover is documented in `DEPLOYMENT.md` and is not done.

The React app is not production-ready as a WordPress replacement while founder content, legal approval, backup, and cutover checks remain pending.

## React commands

```powershell
npm run dev
npm run build
npm run preview
```

## What is approved vs pending

See `CONTENT_STATUS.md`. Mission, vision, values, organisation details, and several people biographies are approved. Programmes, stories, donation, privacy, donation policy, and document files are not.
