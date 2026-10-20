# IMC remake audit — 20 October 2026

## Sources and scope

Compared the `wordreward22/imc` main branch at `48e58d4` with the original WordPress export in `Local Sites/imc/app/sql/local.sql`, the exported `src/data/pages_{en,ar,ku}.json` content, and saved screenshots of the original homepage. The GitHub CLI is authenticated as `wordreward22`; the remote main branch matched the local checkout before these changes. The new design is intentional and was retained.

## Corrections

- Restored WordPress source text on the seven long-form product and service routes where the export has corresponding pages. English and Arabic content is sourced for all seven; Kurdish source content exists for Cummins Kit, Preventative Maintenance, and Master Rebuild. The four other Kurdish routes keep their existing localized copy because the WordPress export has no matching Kurdish pages.
- Restored source paragraphs in Careers, Training, Repairs, and Contact while keeping their current page layouts and forms. Arabic About now uses its source mission, vision, Cummins history and values, and Alkan history paragraphs. The English About paragraphs already matched the original.
- Corrected the English homepage claim from Cummins distributor “worldwide” to the original claim of authorization in Iraq; corrected the phone number presentation in Arabic and Kurdish.
- Replaced a broken Cummins Kit image path, restored IMC social URLs from WordPress, fixed Kurdish UI strings, and added the missing About menu anchors.
- Replaced simulated form success messages with email drafts and clear delivery instructions. The site has no submission backend.
- Bundled the fonts locally so production builds work without Google Fonts network access.
- Moved mobile hero arrows below the introductory text to remove a visible overlap.

## Verification

- `npm run build` succeeds and compiles all 16 routes.
- Opened the production build in a browser and checked all 16 routes in English, Arabic, and Kurdish at desktop and 390px mobile widths: correct language/direction, no broken images, and no horizontal overflow in 96 route-language-size combinations.
- Visually reviewed representative homepage, product, About, and RTL pages on desktop and mobile. The modern visual style remains.

## Source limitations

- The WordPress export has no matching Kurdish source pages for Engines, Renewable Power, Oils, or Fleetguard. Their existing Kurdish copy cannot be checked against original Kurdish text.
- The WordPress Kurdish About page is internally inconsistent: it mixes Kurmanji and Sorani and includes extensive Cummins parts content unrelated to the English/Arabic About page. Its content was not copied into the remake; the current Kurdish About page needs native-language editorial review.
- The original WordPress site was not running at `imc.local`, so exact live-page behavior and unpublished WordPress content were unavailable. The export and saved screenshots were the reference.
- Email draft delivery depends on a visitor's mail client; the application has no server submission endpoint.

Run `node scripts/build-source-copy.mjs` to regenerate `src/data/sourceCopy.json` from the exported WordPress pages. `scripts/audit-copy.mjs` compares the original text only with the pre-existing translation dictionary and is retained as a baseline for the changes that prompted this audit; it does not account for the new source-backed rendering.
