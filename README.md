# IMC Iraq website

The site is written in TypeScript with Next.js, React, Tailwind CSS, and Framer Motion. `npm run build` exports static HTML, CSS, JavaScript, and images to `out/`. **The published site does not need Node.js.** It needs ordinary cPanel hosting with PHP 8.1+ and the PHP cURL extension for the forms.

## Local development

```bash
npm install
npm run dev
```

The development server shows the pages, but the forms require the PHP endpoint. Use a local PHP server rooted at the exported `out/` directory to test submissions.

## Build and upload to cPanel

```bash
npm run build
```

Upload the **contents of `out/`**, including the `api/` directory, into the domain's document root (usually `public_html`). Uploading the `out` folder itself would put the site under `/out/` and break its absolute asset URLs. The domain should point to this document root. The exported route folders contain `index.html`, so `/about/`, `/contact/`, and the other page URLs work without a Node service or rewrite rules.

The site pages work as soon as the files are uploaded. To activate the quote, contact, careers, repairs, and training forms, copy [`deploy/imc-config.example.php`](deploy/imc-config.example.php) to `imc-config.php` in the **directory directly above the document root**. Add the Resend API key and a sender address verified in Resend. For example, if the website files are in `/home/account/public_html`, place the configuration at `/home/account/imc-config.php`. Do not put this file inside `public_html` or commit it to Git.

PHP must permit uploads of at least 10 MB and POST requests of at least 14 MB (`upload_max_filesize` and `post_max_size`). The cURL extension and outbound HTTPS access to `api.resend.com` must be enabled. Without a configured key and sender, the pages work and forms explain that online submissions are unavailable.

See [`CPANEL_DEPLOY.md`](CPANEL_DEPLOY.md) for the upload checklist and how to rebuild later.
