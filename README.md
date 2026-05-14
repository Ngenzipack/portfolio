# Patrick Ngenzi Portfolio

Professional portfolio for Patrick Ngenzi, focused on cybersecurity, IAM, cloud security, DevSecOps, network security, secure web platforms, and server-management experience.

Live site: [ngenzi.neotha.com](https://ngenzi.neotha.com)

## Overview

This site is a static Next.js portfolio built to present security-focused experience, selected projects, resume details, and direct contact links. It is designed for hiring reviewers and technical stakeholders who need to quickly understand my practical experience across:

- Security operations, endpoint protection, malware response, and vulnerability remediation
- Identity and access management with Microsoft Entra ID, Active Directory, MFA, RBAC, and Conditional Access
- Azure hardening, NSG review, cloud security, and DevSecOps practices
- Network security, firewall policy review, VPN, segmentation, Wireshark, Fortinet, and Palo Alto experience
- Full-stack client web platforms, hosting, DNS, SSL/TLS, customer support, and server management

## Featured Work

- [Neotha](https://www.neotha.com/) - owner-led platform and client-service work covering frontend, backend, hosting, support, and server operations.
- [Nkurunziza](https://nkurunziza.ca/en/) - client web platform with production delivery, frontend/backend work, and hosting support.
- [Sylva Renovations](https://www.sylvarenovations.ca/) - client website project built for a production business presence.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Static export for hosting

## Project Structure

```text
.
├── public/              # Static assets, favicon files, resume, hosting files
├── src/
│   ├── app/             # App Router routes and global styles
│   ├── components/      # Layout, sections, theme, and UI components
│   └── lib/             # Portfolio content and utility helpers
├── next.config.ts       # Static export and deployment configuration
├── package.json         # Scripts and dependencies
└── README.md
```

## Requirements

- Node.js installed locally
- npm

The npm scripts prefer `/opt/homebrew/bin` first so the project uses the local Homebrew Node runtime on macOS. This avoids native SWC/Turbopack signing issues that can happen when another bundled Node runtime is earlier in `PATH`.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

[http://localhost:3000](http://localhost:3000)

Stop the development server with `Ctrl + C`, or stop anything listening on port 3000:

```bash
lsof -tiTCP:3000 -sTCP:LISTEN | xargs kill
```

## Available Scripts

```bash
npm run dev
```

Runs the Next.js development server on port 3000.

```bash
npm run dev:3015
```

Runs the development server on port 3015.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run build:hostinger
```

Builds the static production site for `https://ngenzi.neotha.com`.

```bash
npm run preview
```

Serves the generated `out/` directory locally after a static build.

## Deployment

The site is configured for static export in `next.config.ts`.

For Hostinger deployment:

```bash
npm run build:hostinger
```

The generated static files are written to:

```text
out/
```

Upload the contents of `out/` to the hosting public directory.

## Git

Repository remote:

```bash
git@github.com:Ngenzipack/Ngenzi.git
```

First push from a new machine or branch:

```bash
git push --set-upstream origin main
```

After upstream is set:

```bash
git push
```

## Notes

- The contact page uses direct email and LinkedIn links only.
- No backend email form is included.
- Resume download assets live under `public/resume/`.
- Generated folders such as `.next/`, `out/`, and `node_modules/` are ignored by Git.
