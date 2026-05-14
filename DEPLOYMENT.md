# Deployment Guide - Patrick Ngenzi Portfolio

Primary site: <https://ngenzi.neotha.com>
Mirror: <https://ngenzipack.github.io/portfolio/>

The site is a Next.js 16 App Router project that builds to a static export
(`output: "export"`) and is served from Hostinger shared hosting behind
Cloudflare DNS.

---

## Hostinger (primary) - ngenzi.neotha.com

The Hostinger account already has `ngenzi.neotha.com` provisioned as a
subdomain of `neotha.com`, with the document root at:

```
/home/u229578312/domains/neotha.com/public_html/ngenzi
```

### Which IP to use (shared hosting vs VPS)

The **A record in Cloudflare must point to the public IP of the machine that
actually serves your Hostinger *shared* website** for `ngenzi.neotha.com`—the
one where the document root above lives.

- If the A record points to your **VPS** IP, traffic goes to the VPS first.
  Hostinger shared never sees the request, so the portfolio files you
  deployed there will not be used for that hostname (unless you run your own
  reverse proxy on the VPS back to Hostinger, which is unnecessary here).
- If the A record points to your **shared hosting** IP, Cloudflare connects to
  Hostinger’s Apache/nginx, which uses the `Host: ngenzi.neotha.com` header to
  serve `/public_html/ngenzi`.

**Do not assume an IP from old notes or from another subdomain.** In
Hostinger **hPanel** → **Websites** → select the site that hosts `neotha.com`
on the **shared** plan → open **Website details** / **Advanced** / **DNS zone**
(or wherever your plan shows **Website IP** / server address). Use **that**
value as the Cloudflare A record for `ngenzi`.

**Confirmed for this account (2026):** Hostinger **shared** web traffic for
`neotha.com` / subdomains under hPanel resolves from **`212.85.28.100`**.
The separate **VPS** (CloudPanel) uses **`167.88.43.157`** — that must **not**
be the Cloudflare A target for `ngenzi` if you want files from
`public_html/ngenzi` on shared hosting.

If Hostinger ever migrates your site, re-check hPanel for the current website
IP and update Cloudflare accordingly.

### Build and deploy

```bash
# 1. Build a static export with the production canonical URL
npm run build:hostinger

# 2. Strip Next.js internal debug files from the output (optional but tidy)
find out -name "__next*.txt" -delete
find out -name "index.txt" -delete

# 3. Zip the contents of out/ (NOT the out/ directory itself)
cd out
zip -rq "../portfolio_$(date +%Y%m%d_%H%M%S).zip" . -x "*.DS_Store"
cd ..
```

Then deploy the resulting archive via the Hostinger MCP tool
`hosting_deployStaticWebsite` with:

- `domain`: `ngenzi.neotha.com`
- `archivePath`: absolute path to the zip created above

The tool extracts the archive into the subdomain's document root and replaces
the existing files. The shipped `out/.htaccess` enables HTTPS redirects,
gzip, far-future caching for fingerprinted assets, and serves `404.html` for
unknown routes.

---

## Cloudflare DNS / SSL settings (REQUIRED FIRST TIME)

`neotha.com` is delegated to Cloudflare nameservers
(`elma.ns.cloudflare.com`, `dakota.ns.cloudflare.com`), so all DNS and
SSL/TLS settings live in the Cloudflare dashboard, not in Hostinger.

### 1. DNS record for the subdomain

Because `neotha.com` uses **Cloudflare nameservers**, only records in
**Cloudflare → DNS** matter for the public internet. Editing DNS inside
Hostinger alone does not change what visitors resolve until nameservers point
back to Hostinger.

In Cloudflare → DNS, set `ngenzi` to the **shared hosting website IP** from
hPanel (see section above), **not** your VPS IP (`167.88.43.157`):

```
Type: A
Name: ngenzi
Content: 212.85.28.100
Proxy status: Proxied (orange cloud) or DNS only — your choice
TTL: Auto
```

(`212.85.28.100` is the value confirmed from hPanel for this setup; treat
hPanel as authoritative if it ever differs.)

After saving, wait a few minutes and confirm with
`dig +short A ngenzi.neotha.com` (you will still see Cloudflare anycast IPs if
**Proxied** is on—that is normal; the origin IP is configured in the Cloudflare
record behind the scenes).

### 2. SSL/TLS encryption mode (this is what is currently broken)

`https://ngenzi.neotha.com` currently returns Cloudflare error **525**
(SSL handshake failed with origin). The same is true for `dev.neotha.com`,
`cloud.neotha.com`, `drop.neotha.com`, etc., so this is a zone-level
problem, not specific to this deploy.

Pick ONE of the two paths below.

#### Option A - Quickest fix (less secure transport between Cloudflare and Hostinger)

In Cloudflare → SSL/TLS → Overview:

- Set **Encryption mode** to `Flexible`.

This makes Cloudflare → browser HTTPS, and Cloudflare → origin HTTP. The
site becomes reachable immediately. Acceptable for a marketing/portfolio
site, not ideal for sites that handle credentials.

#### Option B - Recommended (end-to-end TLS)

1. In Hostinger hPanel → `ngenzi.neotha.com` → Security → SSL, install the
   free Let's Encrypt certificate for `ngenzi.neotha.com`.
2. In Cloudflare → SSL/TLS → Overview, set **Encryption mode** to `Full`
   (or `Full (strict)` once the cert is verified live).

This keeps end-to-end TLS between Cloudflare and Hostinger.

### 3. Other Cloudflare settings worth confirming

- SSL/TLS → Edge Certificates → **Always Use HTTPS** → On
- SSL/TLS → Edge Certificates → **Automatic HTTPS Rewrites** → On
- Speed → Optimization → **Brotli** → On
- Caching → Configuration → **Browser Cache TTL** → Respect Existing Headers

The shipped `.htaccess` already sends `Cache-Control: public, max-age=31536000, immutable`
for fingerprinted assets, so Cloudflare and the browser cache them correctly.

---

## SEO checklist (all currently shipped)

- `metadataBase` set to `https://ngenzi.neotha.com` and a canonical link on
  every page.
- Open Graph (`og:title`, `og:description`, `og:url`, `og:image`) and a
  Twitter card.
- `robots.txt` → allow everything, points to sitemap.
- `sitemap.xml` → 8 routes (`/`, `/about`, `/services`, `/projects`,
  `/experience`, `/skills`, `/resume`, `/contact`).
- JSON-LD `Person` schema injected as a real `<script type="application/ld+json">`
  in initial HTML, with sameAs links to LinkedIn and GitHub.
- Favicon/icon assets and theme-color metadata.
- Reduced-motion respect on every animation.

After the SSL fix, submit the sitemap in Google Search Console:

```
https://ngenzi.neotha.com/sitemap.xml
```

---

## What you should still do manually

1. **Apply the Cloudflare SSL change above** (Option A or Option B). Without
   it the site will keep returning a 525.
2. **Add the resume PDF.** Drop the file at
   `portfolio/public/resume/Patrick-Ngenzi-Resume.pdf`, then re-deploy.
   The "Download PDF" button on `/resume/` already points there.
3. **Verify Google Search Console ownership** (the existing
   `google-site-verification` TXT record is already on the apex
   `neotha.com`). For the subdomain you may want a separate property:
   add it as `https://ngenzi.neotha.com/` and verify via DNS TXT or by
   uploading the verification HTML file (drop it in `portfolio/public/`).
4. **Submit the sitemap** at
   `https://ngenzi.neotha.com/sitemap.xml` in Search Console once SSL
   works.
5. (Optional) **Bing Webmaster Tools** - similar flow.

---

## Re-deploy any time

```bash
npm run build:hostinger
cd out && zip -rq ../portfolio_$(date +%Y%m%d_%H%M%S).zip . -x "*.DS_Store" && cd ..
# then call hosting_deployStaticWebsite via the Hostinger MCP with the new zip
```

---

## GitHub Pages mirror (already configured)

The `.github/workflows/deploy.yml` workflow rebuilds the same site with
`NEXT_PUBLIC_BASE_PATH=/portfolio` so it is also published at
<https://ngenzipack.github.io/portfolio/> on every push to `main`. To enable
it: GitHub repo → Settings → Pages → Build and deployment → GitHub Actions.
