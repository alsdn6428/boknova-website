# DrawWise Website

Static marketing, support, privacy, and terms site for the DrawWise iOS app.
Plain HTML, CSS, and a small amount of JavaScript. No build step, no npm, no backend.

## Files

```
website/
├── index.html          Home (App Store Marketing URL)
├── support.html        Support + FAQ (App Store Support URL)
├── privacy.html        Privacy Policy (App Store Privacy Policy URL)
├── terms.html          Terms of Use
├── favicon.svg         Placeholder favicon
├── .nojekyll           Tells GitHub Pages to serve files as-is
└── assets/
    ├── css/styles.css
    └── js/main.js      Mobile navigation toggle only
```

## Before publishing: values to replace

Search the HTML for `REPLACE`, `UPDATE`, and `VERIFY` comments.

| What | Where | How |
| --- | --- | --- |
| Support email `support@drawwise.app` | All pages | Find and replace `support@drawwise.app` across the folder (updates both `mailto:` links and visible text). |
| App Store button | `index.html` hero | After release, replace the disabled "App Store — Coming Soon" button with a link to your App Store page (example in the comment). |
| Effective dates | `privacy.html`, `terms.html` | Update the `<time>` text and `datetime` attribute when the documents change. |
| Analytics and service providers | `privacy.html` sections 5 and 7 | Name the analytics, crash-reporting, hosting, and database providers the app actually uses. |
| Optional profile fields | `privacy.html` section 1 | Keep the nickname/region bullet only if the released app collects them. |

Make sure the support email inbox actually exists before submitting to App Store review.

## Preview locally

Open `index.html` directly in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy to GitHub Pages

### Option A: dedicated repository (simplest)

1. Create a new GitHub repository, for example `drawwise-website`.
2. Copy the **contents** of this `website/` folder to the root of that repository (including the hidden `.nojekyll` file) and push.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Source: Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
5. After a minute the site is live at `https://<username>.github.io/drawwise-website/`.

### Option B: inside this app repository

GitHub Pages can only serve from the repository root or a `/docs` folder.
Rename or copy this folder to `docs/`, push, then in **Settings → Pages** choose branch `main`, folder `/docs`.

### Custom domain (optional)

1. In **Settings → Pages → Custom domain**, enter your domain (for example `drawwise.app`) and save. GitHub adds a `CNAME` file.
2. At your DNS provider, add the records GitHub shows (a `CNAME` to `<username>.github.io` for a subdomain, or GitHub's `A` records for an apex domain).
3. Enable **Enforce HTTPS** once the certificate is issued.

## Deploy to Vercel

1. Push the repository to GitHub (either this repository or a dedicated one).
2. At <https://vercel.com/new>, import the repository.
3. Configure the project:
   - **Framework Preset:** Other
   - **Root Directory:** `website` (or leave blank if the files are at the repository root)
   - **Build Command:** leave empty
   - **Output Directory:** leave empty (defaults to the root directory)
4. Click **Deploy**. The site is served at `https://<project>.vercel.app`.
5. To use a custom domain, open **Project → Settings → Domains**, add the domain, and follow the DNS instructions.

Vercel also serves the pages without the `.html` extension only if you add a `vercel.json` with `"cleanUrls": true`; the links in this site use `.html` so no configuration is required.

## App Store Connect URLs

Replace `https://YOUR-DOMAIN` with your deployed address:

| App Store Connect field | URL |
| --- | --- |
| Marketing URL | `https://YOUR-DOMAIN/` |
| Support URL | `https://YOUR-DOMAIN/support.html` |
| Privacy Policy URL | `https://YOUR-DOMAIN/privacy.html` |
| Terms of Use (EULA) | `https://YOUR-DOMAIN/terms.html` — add it to the app description or the License Agreement field |
