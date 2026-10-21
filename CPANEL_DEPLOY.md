# cPanel upload

1. In cPanel, set the domain's document root to the folder where IMC should appear. Keep PHP enabled (8.1 or newer) with the cURL extension.
2. Upload and extract `imc-cpanel-upload.zip` **inside that document root**. `index.html`, `_next/`, `uploads/`, and `api/` should appear directly in it.
3. Visit the homepage and an inner page such as `/power-generation/`. Check English, Arabic, and Kurdish.
4. To enable the forms, put `imc-config.php` in the directory directly above the document root. Start from `deploy/imc-config.example.php`, then enter `resend_api_key` and a verified `from_email`. Keep it outside the web-accessible folder.
5. Set PHP `upload_max_filesize` to at least `10M` and `post_max_size` to at least `14M`, then test a contact request and a careers CV upload. Check that the messages arrive at `info@imc.iq`.

The website itself runs from static files. The PHP file at `/api/submit.php` handles the five forms and sends them through Resend. No Node.js service, database, or build step is needed **on cPanel**. Rebuild on your own computer after future source changes, then replace the deployed files. The Resend configuration stays in place because it is outside the document root.

## Deploy from GitHub instead of uploading the ZIP

The [`codex/cpanel-ready`](https://github.com/wordreward22/imc/tree/codex/cpanel-ready) branch contains the **built website files at the repository root**. The `codex/cpanel-static-deploy` branch contains editable TypeScript source. Select `codex/cpanel-ready` when hosting the website; cPanel does not need to run `npm` or Node.js.

In cPanel Git Version Control, clone `https://github.com/wordreward22/imc.git` into a new empty directory, then use **Manage → Checked-Out Branch** to select `codex/cpanel-ready`. Set the IMC domain's document root to that checkout directory. Its `index.html` and route folders will then be directly under the document root. cPanel [supports switching the checked-out branch](https://docs.cpanel.net/cpanel/files/git-version-control/#manage-repositories). If the account requires the Git checkout to remain outside the document root, cPanel's **Pull or Deploy** option requires a `.cpanel.yml` with the account's actual document-root path; add that after the hosting path is known. The Resend config still belongs one directory above the document root.

After future source edits, rebuild and republish the built files to `codex/cpanel-ready` before pulling updates on cPanel. Updating the TypeScript source branch alone does not update the live files.

To make a fresh ZIP on Windows:

```powershell
.\scripts\package-cpanel.ps1
```
