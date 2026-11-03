# TRIPDOZ website — GitHub Pages

## Publish
1. Create a **public** GitHub repository named `tripdoz-website`.
2. Select **Add file → Upload files**. Upload the *contents* of this ZIP (index.html, contact.html, privacy.html, terms.html, style.css, script.js, README.md and the assets folder). Commit changes.
3. Open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, branch `main`, folder `/(root)` and Save.
4. Visit `https://YOUR-USERNAME.github.io/tripdoz-website/` after deployment.

## Custom domain
When ready, enter `tripdoz.com` under Settings → Pages → Custom domain and follow GitHub's DNS instructions in GoDaddy. Enable **Enforce HTTPS** once the certificate is available. Do not change GoDaddy DNS before you are ready to connect the domain.

## Important checks before launch
- The category, hero and About photos use Unsplash download endpoints (external URLs). They have **not been downloaded into this package**; test that all photos render. For a dependable production site, download the licensed images and replace these URLs with local assets.
- The three app screenshots **are included locally** in `/assets`.
- Review the Privacy Policy and Terms & Conditions against actual app behavior and applicable law.
- Test the contact form: it uses the visitor's email app, not a server-backed submission service.
- Confirm all navigation and app links.
