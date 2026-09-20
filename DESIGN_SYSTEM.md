# Design System

## Brand palette

The site follows the current logo's yellow, olive green, charcoal, and light paper palette.

- Charcoal: `#172033`
- Logo yellow: approximately `#f2b51d`
- Olive green: `#6b9b5a`
- Paper background: `#f7f7f2`
- Supporting muted text: approximately `#536075`

## Visual direction

- Calm, editorial, human, and credible.
- Use the logo palette rather than introducing unrelated colors.
- Prefer fewer stronger visuals over decorative circles, badges, or floating stamps.
- Do not show visitor-facing “temporary stock” image captions; keep stock source notes in `assets/stock-images/README.md` only.
- Programme imagery uses consistent aspect ratios and soft bottom gradients so people remain readable.
- Copy-only heroes may use a restrained Connected Care ring field (`aria-hidden`), not fake documentary photos.
- Keep placeholder notes visibly distinct but consistent with the page theme.
- Use charcoal for headings on light backgrounds and white for headings on dark/image backgrounds.
- Keep page sections aligned to a shared content width.

## Existing global rules

- Logo uses `assets/logo/logo-second-circle-india.png` with a larger desktop treatment and a responsive mobile size.
- Header Donate button uses yellow; hover uses olive.
- Page links and labels use olive.
- Cards use yellow top borders.
- CTA bands use charcoal with yellow action buttons.
- Document hero panels use charcoal with white headings.
- Document hero content is vertically centered; the longer Legal & Statutory Documents hero uses a taller panel.

## Responsive checks

Always check at least a desktop viewport and a narrow mobile viewport. Watch for:

- Heading clipping under the header
- Hero text touching image edges
- Horizontal overflow
- Logo or navigation collisions
- Button text wrapping badly
- Low contrast on hero headings
