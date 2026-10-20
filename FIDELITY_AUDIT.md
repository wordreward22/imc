# IMC remake audit — 20 October 2026

## Sources and scope

Compared the `wordreward22/imc` main branch at `48e58d4` with the original WordPress export in `Local Sites/imc/app/sql/local.sql`, the exported `src/data/pages_{en,ar,ku}.json` content, and the live `imc.local` WordPress pages. The GitHub CLI is authenticated as `wordreward22`; the remote main branch matched the local checkout before these changes. The new design is intentional and was retained.

## Corrections

- Restored WordPress source text on the seven long-form product and service routes where the export has corresponding pages, including short labels, original secondary images, video links, and contact CTA labels. English and Arabic content is sourced for all seven; Kurdish source content exists for Cummins Kit, Preventative Maintenance, and Master Rebuild. The four other Kurdish routes keep their existing localized copy because the WordPress export has no matching Kurdish pages.
- Restored source paragraphs in Careers, Training, Repairs, and Contact while keeping their current page layouts and forms. Arabic About now uses its source mission, vision, Cummins history and values, and Alkan history paragraphs. The English About paragraphs already matched the original.
- Corrected the English homepage claim from Cummins distributor “worldwide” to the original claim of authorization in Iraq; corrected the phone number presentation in Arabic and Kurdish.
- Replaced a broken Cummins Kit image path, restored IMC social URLs from WordPress, fixed Kurdish UI strings, and added the missing About menu anchors.
- Replaced simulated form success messages with a server submission route using Resend. Careers applications now attach the selected CV. Live delivery needs `RESEND_API_KEY` and a verified `IMC_FROM_EMAIL` configured on the Next.js host; until then, forms show an error and never claim delivery.
- Aligned the Services page with the original three service descriptions, Training link, and CTA copy on WordPress, while retaining its modern card layout.
- Bundled the fonts locally so production builds work without Google Fonts network access.
- Moved mobile hero arrows below the introductory text to remove a visible overlap.
- Rechecked the English and Arabic homepages against the exported WordPress pages. The overview, mission, vision, values, all four FAQ questions and answers, and four service card titles and descriptions now render from `src/data/homeSource.json`, generated directly from those exports.
- Restored the Arabic homepage service and feature labels, and replaced shortened Arabic contact service options and addresses with the original copy.
- Removed unsupported English and Arabic training curriculum, careers benefits, workshop hours, and numeric CTA claims that did not appear on the corresponding WordPress pages. The functional forms and new visual styling remain. The field-service benefit list now comes from the original page text.
- Read the Revolution Slider rows and navigation menu items in the local SQL export. Restored the Arabic hero slide wording and menu labels. The first English slider's original “worldwide” distributor claim was kept corrected to “in Iraq” because the original English second slide and company overview both specify Iraq.

## Verification

- `npm run build` succeeds and compiles all 16 routes.
- Opened the production build in a browser and checked all 16 routes in English, Arabic, and Kurdish at desktop and 390px mobile widths: correct language/direction, no broken images, and no horizontal overflow in 96 route-language-size combinations.
- Visually reviewed representative homepage, product, About, and RTL pages on desktop and mobile. The modern visual style remains.
- Opened live WordPress product pages by page ID and compared their rendered copy and images to the remake for all available English, Arabic, and Kurdish counterparts. The automated pass found missing badges and contact CTA labels; these were restored. Decorative SVG CSS was excluded from the comparison.
- Local API checks: without Resend configuration, Contact and a valid Careers submission return `503 MAIL_NOT_CONFIGURED`; an invalid CV returns `400 INVALID_CV`. No email was sent during these checks.
- Rebuilt after the English and Arabic homepage and short-copy corrections; the production build passes.

## Source limitations

- The WordPress export has no matching Kurdish source pages for Engines, Renewable Power, Oils, or Fleetguard. Their existing Kurdish copy cannot be checked against original Kurdish text.
- The WordPress Kurdish About page is internally inconsistent: it mixes Kurmanji and Sorani and includes extensive Cummins parts content unrelated to the English/Arabic About page. Its content was not copied into the remake; the current Kurdish About page needs native-language editorial review.
- Browser security policy interrupted a further automated pass over the remaining live WordPress routes. Their exported HTML and saved page data remain available for source checks.
- Resend has not been configured with a live API key and verified sender yet, so end-to-end delivery cannot be confirmed.
- The old Arabic Contact page prints `info@imc-iraq.com`, while the remake and the requested Resend destination use `info@imc.iq`. The latter remains the active contact address; the older address has not been verified.

Run `node scripts/build-source-copy.mjs` and `node scripts/build-home-copy.mjs` to regenerate the source-backed copy from the exported WordPress pages. `scripts/audit-copy.mjs` compares the original text only with the pre-existing translation dictionary and is retained as a baseline for the changes that prompted this audit; it does not account for the new source-backed rendering.
`scripts/inspect-slider-copy.mjs` reads the local SQL dump when given its path and lists the original Revolution Slider text layers.
