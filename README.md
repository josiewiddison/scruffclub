# Scruff Club — fictional grooming demo

A responsive static website with a fictional female-owned brand story. No invented testimonials, awards, or certifications. All business details are placeholders. Hero artwork is AI-generated.

## Preview
Open dist/index.html in a browser, or serve dist with a local HTTP server. No installation or build is required.

## Working features
- Section navigation and quote calls to action
- Service links preselect the service and pet type
- Expandable FAQs, keyboard focus styles, responsive layout
- Required-field and email validation; clearly labeled demo confirmation

## Form limitations
app.js prevents submission. No email, database, analytics, appointment booking, or quote calculation is configured. Entries stay in the current page only; the application does not persist them. Use invented data when testing.

For real enquiries, create a form endpoint (for example Formspree), verify the destination email, replace the demo handler with a POST request, and only show success after a successful response. Add pending/error states, server-side validation, spam protection, and a privacy notice covering the chosen provider and retention. Test successful delivery, invalid input, network failures, spam handling, and mobile submission. Never put secret API keys in browser code.

## Store on GitHub
Create an empty private or public GitHub repository and upload this folder's files, including dist. GitHub Desktop can add the folder and publish it. Keep the existing Sites remote separate if using command-line Git; do not overwrite it accidentally. No GitHub repository has been created or connected by this demo task.

## Publish with GitHub + Cloudflare Pages
1. Replace the labeled placeholders and confirm real services, owner biography, opening hours, contact details, and policies. Retain demo labeling until this is a real business site.
2. Push the files to your GitHub repository.
3. In Cloudflare Pages, connect that repository. Select no framework; use no build command and set output directory to dist. Set the production branch to main.
4. Test the assigned pages.dev URL, including form delivery after connecting a provider.
5. Buy your domain. Check both first-year and renewal prices.
6. Add it through the Pages project's Custom domains settings before changing DNS. An apex domain on Pages needs the zone in Cloudflare and the specified nameservers. A subdomain can use the instructed CNAME. Preserve existing email DNS records.
7. Wait for DNS and HTTPS activation, choose your preferred www or apex URL, and redirect the other. Test both URLs and HTTPS.
8. Subsequent pushes to the configured branch deploy updates automatically. Keep backups and review changes before merging.

GitHub is suitable for source storage. GitHub Pages has restrictions on using its free hosting to run an online business; use a business-suitable host for a real commercial launch.

## Budget and ongoing work
Verified September 24, 2026. Cloudflare Pages offers free static hosting with SSL; check current plan limits. Formspree's free tier allows 50 submissions/month across the account; higher volumes or extra features may require a paid tier. Domain cost depends on name and extension: use a planning allowance of roughly $10–$25/year for an ordinary non-premium domain, and verify the actual renewal price before purchase. Business email is optional and billed separately by its provider. No paid service or domain has been purchased.

Renew the domain annually, monitor form delivery and quotas, update hours/services, and periodically check links, phone layouts, and accessibility. There are no framework dependencies to maintain in this static demo.

Sources:
- https://www.cloudflare.com/products/pages/
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://formspree.io/plans/
- https://www.cloudflare.com/domains/
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

## Try these checks
1. Use each header/section link and verify it reaches the correct section.
2. Choose Cat care and verify Cat and Cat coat care are preselected.
3. Submit with empty fields, then an invalid email: browser validation should block both.
4. Enter invented valid details and submit: expect a demo confirmation stating nothing was sent or saved.
5. Open/close each FAQ with mouse and keyboard.
6. Check a phone-sized window and 200% zoom for clipping, readable text, and reachable controls.
7. Use Tab/Shift+Tab to inspect focus order; check the skip link and confirmation focus.
