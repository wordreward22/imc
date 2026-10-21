# IMC Iraq website

The editable site is built with TypeScript, Next.js, React, Tailwind CSS, and Framer Motion. The `main` branch also tracks the ready-to-serve output in [`site/`](site/). Hosting serves that folder as static HTML, CSS, JavaScript, and images, with one PHP endpoint for forms. **Node.js is not needed on the web server.**

## Develop and rebuild

```bash
npm install
npm run dev
```

After changing the source, update the deployable files:

```bash
npm run build:site
```

Commit both source changes and the refreshed `site/` folder. The website in `site/` works without running a build on cPanel or Plesk.

## Hosting

Clone `main` and point the domain's document root at the checkout's `site/` folder. See [`CPANEL_DEPLOY.md`](CPANEL_DEPLOY.md) for the cPanel steps and Resend form configuration. The five forms use PHP at `/api/submit.php`; the Resend key stays outside the Git checkout and document root.
