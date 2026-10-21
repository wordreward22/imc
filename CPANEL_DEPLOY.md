# Deploy IMC from GitHub `main`

The `main` branch contains both the editable TypeScript source and the ready-to-serve `site/` directory. The production website needs PHP 8.1+ with cURL, but **does not need Node.js**. Node.js is only used when changing the site locally and rebuilding `site/`.

## cPanel

1. Clone `https://github.com/wordreward22/imc.git` with cPanel Git Version Control into a new directory outside the public document root, such as `/home/ACCOUNT/imc-repo`.
2. Set the IMC domain's document root to the checkout's `site` directory, such as `/home/ACCOUNT/imc-repo/site`. Its `index.html`, `_next/`, `uploads/`, and `api/` must be directly under that root.
3. Keep PHP enabled for the domain. Visit the homepage and an inner page such as `/power-generation/` and check the language switcher.
4. To enable forms, copy [`deploy/imc-config.example.php`](deploy/imc-config.example.php) to `imc-config.php` **one directory above the Git checkout**, such as `/home/ACCOUNT/imc-config.php`. Add the Resend API key and a sender verified in Resend. The config stays outside the document root and the Git checkout.
5. Set PHP `upload_max_filesize` to at least `10M` and `post_max_size` to at least `14M`. Test a contact request and careers CV upload, then confirm delivery to `info@imc.iq`.

For future updates, pull `main` in cPanel. The tracked `site/` folder is already built; cPanel does not run `npm`. If you edit the TypeScript source locally, run `npm run build:site`, commit the changed source and `site/` files, and push them to `main`.

Forms require the private Resend configuration. Without it, the pages still work and forms explain that submissions are not configured.
