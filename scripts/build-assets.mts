/**
 * Generates the downloadable resume PDFs and the 1200x630 social share image from
 * src/lib/content.ts, so they always match the website.
 *
 *   npm run assets
 *
 * Needs Google Chrome (or set CHROME_PATH). Outputs:
 *   public/resume/Patrick-Ngenzi-Resume-Cybersecurity.pdf
 *   public/resume/Patrick-Ngenzi-Resume-Network-Security.pdf
 *   public/og/share.png
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import {
  caseStudies,
  certifiedCredentials,
  education,
  experience,
  otherExperience,
  profile,
  projects,
  resumeFiles,
  skillTiers,
  upcomingCredentials,
  type ExperienceItem,
} from "../src/lib/content.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const chrome =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** "(SC-300)" after the full name, unless the name already contains it. */
const short = (c: { name: string; shortName: string }) =>
  /\d/.test(c.shortName) && !c.name.includes(c.shortName) ? ` (${esc(c.shortName)})` : "";

type Variant = {
  key: keyof typeof resumeFiles;
  summary: string;
  /** Bullets matching this pattern move to the top of each role. */
  emphasis: RegExp;
  projectOrder: string[];
  skillOrder: string[];
  /** Max bullets per role; the most relevant (by emphasis) are kept. */
  maxBullets?: number;
};

const securityProjects = [
  "azure-iam-security-architecture",
  "intelligent-security-alert-triage-engine",
  "microsoft-security-lab",
  "enterprise-network-segmentation-lab",
  "network-monitoring-automation",
];

const variants: Variant[] = [
  {
    key: "cybersecurity",
    summary:
      "Security Analyst with 6+ years in IT and security since February 2020. At Near North District School Board (34 schools, 5,000+ devices) I triage security alerts, investigate and contain 150+ malware and security incidents a month, respond to phishing and compromised accounts with Microsoft Defender for Office 365 and Entra ID audit logs, and enforce least privilege, MFA and Conditional Access. Certified in SC-300 and Security+, preparing for SC-200.",
    emphasis: /alert|phishing|compromised|Entra|Defender|account|KQL|Purview|incident|CrowdStrike|Okta/i,
    projectOrder: securityProjects.slice(0, 4),
    skillOrder: ["Security operations", "Identity and email", "Detection and SOC", "Identity"],
    maxBullets: 6,
  },
  {
    key: "network",
    summary:
      "Security Analyst with 6+ years in IT and security since February 2020, focused on network security. At Near North District School Board (34 schools, 5,000+ devices) I review firewall activity in Fortinet FortiAnalyzer, create firewall, device and network policies, isolate IoT devices on VLANs and renew SSL/TLS certificates. At Bell I supported network security across 4 sites, cleaned up FortiGate and Palo Alto policy and segmented wireless traffic with WPA3 and VLANs, and in my lab I built and validated a segmented enterprise network.",
    emphasis: /firewall|Fortinet|FortiAnalyzer|FortiGate|VLAN|WPA3|network|SSL|Palo Alto|Cisco|Aerohive|VPN/i,
    projectOrder: [
      "enterprise-network-segmentation-lab",
      "network-monitoring-automation",
      "azure-iam-security-architecture",
      "intelligent-security-alert-triage-engine",
    ],
    skillOrder: ["Network", "Vulnerability, endpoints and servers", "Security operations", "Identity and email"],
    maxBullets: 6,
  },
  {
    key: "master",
    summary: `${profile.intro} ${profile.summary}`,
    emphasis: /^$/,
    projectOrder: projects.map((p) => p.slug),
    skillOrder: [],
  },
];

const orderBullets = (item: ExperienceItem, variant: Variant) =>
  [
    ...item.highlights.filter((h) => variant.emphasis.test(h)),
    ...item.highlights.filter((h) => !variant.emphasis.test(h)),
  ].slice(0, variant.maxBullets ?? item.highlights.length);

function skillLines(order: string[]) {
  const all = skillTiers.flatMap((tier) => tier.groups.map((g) => ({ ...g, tier: tier.tier })));
  const rank = (domain: string) => {
    const i = order.indexOf(domain);
    return i === -1 ? order.length : i;
  };
  return [...all].sort((a, b) => rank(a.domain) - rank(b.domain));
}

function resumeHtml(variant: Variant) {
  const selectedProjects = variant.projectOrder
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  return `<!doctype html>
<html lang="en-CA"><head><meta charset="utf-8"><title>${esc(profile.name)} – ${esc(profile.headline)}</title>
<style>
  @page { size: Letter; margin: 0.45in 0.55in; }
  * { box-sizing: border-box; }
  body { font-family: "Helvetica Neue", Arial, sans-serif; color: #0b1220; font-size: 9.3pt; line-height: 1.32; margin: 0; }
  h1 { font-size: 21pt; margin: 0; letter-spacing: 0.02em; }
  .headline { font-size: 11.5pt; color: #1d4ed8; font-weight: 600; margin: 2px 0 6px; }
  .contact { color: #334155; font-size: 8.8pt; }
  .contact a { color: inherit; text-decoration: none; }
  h2 { font-size: 10pt; text-transform: uppercase; letter-spacing: 0.1em; color: #0f3d91; border-bottom: 1.2px solid #c7d2e0; padding-bottom: 2px; margin: 10px 0 4px; }
  h3 { font-size: 10pt; margin: 0; }
  .role { margin-bottom: 6px; }
  .role-head { break-after: avoid; }
  .role-head { display: flex; justify-content: space-between; gap: 12px; }
  .meta { color: #475569; font-size: 8.8pt; white-space: nowrap; }
  .note { color: #475569; font-style: italic; font-size: 8.6pt; margin: 1px 0 2px; }
  ul { margin: 3px 0 0; padding-left: 15px; }
  li { margin: 1px 0; }
  .skills p { margin: 2px 0; }
  .muted { color: #475569; }
</style></head><body>
<header>
  <h1>${esc(profile.name.toUpperCase())}</h1>
  <p class="headline">${esc(profile.headline)}</p>
  <p class="contact">${esc(profile.location)} · ${esc(profile.phone)} · <a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a> · ${esc(profile.driversLicence)}<br>
  <a href="${esc(profile.links.portfolio)}">${esc(profile.links.portfolio.replace(/^https:\/\//, "").replace(/\/$/, ""))}</a> · <a href="${esc(profile.links.linkedin)}">linkedin.com/in/patrick-ngenzi-801193134</a> · <a href="${esc(profile.links.github)}">github.com/Ngenzipack</a><br>
  ${esc(profile.availability)}</p>
</header>

<h2>Summary</h2>
<p>${esc(variant.summary)}</p>

<h2>Certifications</h2>
<ul>
${certifiedCredentials.map((c) => `<li><strong>${esc(c.name)}</strong>${short(c)}, ${esc(c.issuer)}${c.earned ? `, ${esc(c.earned.replace(/^Valid /, "valid "))}` : ""}</li>`).join("\n")}
${upcomingCredentials.map((c) => `<li>${esc(c.name)}${short(c)}, ${esc(c.issuer)}: ${c.status.toLowerCase()}${c.target ? `, target ${esc(c.target.replace(/^Late/, "late"))}` : ""}</li>`).join("\n")}
</ul>

<h2>Education</h2>
${education
  .map((e) => `<p><strong>${esc(e.credential)}, ${esc(e.program)}</strong>, ${esc(e.institution)}, ${esc(e.location)}, ${esc(e.period)}${e.coursework?.length ? `<br><span class="muted">Coursework: ${esc(e.coursework.join(", "))}</span>` : ""}</p>`)
  .join("\n")}

<h2>Experience</h2>
${experience
  .map(
    (item) => `<div class="role">
  <div class="role-head"><h3>${esc(item.role)} · ${esc(item.organization)}</h3><span class="meta">${esc(item.location ?? "")} · ${esc(item.period)}</span></div>
  ${item.scope ? `<p class="note">${esc(item.scope)}</p>` : ""}
  ${item.concurrentNote ? `<p class="note">${esc(item.concurrentNote)}</p>` : ""}
  <ul>${orderBullets(item, variant)
    .map((h) => `<li>${esc(h)}</li>`)
    .join("")}</ul>
</div>`,
  )
  .join("\n")}
${otherExperience
  .map(
    (item) => `<div class="role"><div class="role-head"><h3>${esc(item.role)} · ${esc(item.organization)}</h3><span class="meta">${esc(item.location ?? "")} · ${esc(item.period)}</span></div><p class="muted">${esc(item.summary)}</p></div>`,
  )
  .join("\n")}

<h2>${variant.key === "master" ? "Projects" : "Selected projects"}</h2>
<ul>
${selectedProjects.map((p) => `<li><strong>${esc(p.title)}</strong> (${esc(p.period ?? "")}): ${esc(p.description)}</li>`).join("\n")}
</ul>

${variant.key === "master" ? `<h2>Case studies</h2>
<ul>
${caseStudies.filter((c) => !c.draft).map((c) => `<li><strong>${esc(c.title)}</strong> (${esc(c.context)}): ${esc(c.actions.join(" "))} ${esc(c.outcome)}</li>`).join("\n")}
</ul>` : ""}

<h2>Skills</h2>
<div class="skills">
${skillLines(variant.skillOrder)
  .map((g) => `<p><strong>${esc(g.domain)}</strong> <span class="muted">(${esc(g.tier.toLowerCase())})</span>: ${esc(g.items.join(", "))}</p>`)
  .join("\n")}
</div>

</body></html>`;
}

function shareHtml() {
  const certs = certifiedCredentials.map((c) => c.shortName);
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body { font-family: "Helvetica Neue", Arial, sans-serif; color: #f8fafc;
    background: radial-gradient(ellipse 70% 60% at 15% 20%, rgba(96,165,250,0.22), transparent 60%),
                radial-gradient(ellipse 60% 55% at 90% 85%, rgba(45,212,191,0.18), transparent 60%), #07111f; }
  .wrap { box-sizing: border-box; height: 100%; padding: 72px 84px; display: flex; flex-direction: column; justify-content: space-between; }
  .mono { width: 76px; height: 76px; border-radius: 14px; background: linear-gradient(135deg, #60a5fa, #2dd4bf); color: #07111f; font-weight: 700; font-size: 32px; display: flex; align-items: center; justify-content: center; }
  h1 { font-size: 78px; margin: 26px 0 8px; letter-spacing: -0.01em; }
  .headline { font-size: 34px; color: #93c5fd; font-weight: 600; margin: 0; }
  .row { display: flex; justify-content: space-between; align-items: flex-end; gap: 32px; }
  .chips { display: flex; gap: 12px; }
  .chip { border: 2px solid rgba(74,222,128,0.55); color: #bbf7d0; border-radius: 6px; padding: 8px 16px; font-size: 22px; font-weight: 600; }
  .url { font-size: 24px; color: #cbd5e1; }
</style></head><body><div class="wrap">
  <div><div class="mono">PN</div><h1>${esc(profile.name)}</h1><p class="headline">${esc(profile.headline)}</p></div>
  <div class="row"><div class="chips">${certs.map((c) => `<span class="chip">✓ ${esc(c)}</span>`).join("")}</div>
  <span class="url">${esc(profile.location)} · ngenzi.neotha.com</span></div>
</div></body></html>`;
}

const work = mkdtempSync(join(tmpdir(), "portfolio-assets-"));
const chromeBase = ["--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars", `--user-data-dir=${join(work, "profile")}`];

try {
  mkdirSync(join(root, "public/resume"), { recursive: true });
  mkdirSync(join(root, "public/og"), { recursive: true });

  for (const variant of variants) {
    const html = join(work, `${variant.key}.html`);
    writeFileSync(html, resumeHtml(variant));
    const out = join(root, "public", resumeFiles[variant.key].href);
    execFileSync(chrome, [...chromeBase, "--no-pdf-header-footer", `--print-to-pdf=${out}`, pathToFileURL(html).href], { stdio: "ignore" });
    console.log(`wrote ${out}`);
  }

  const shareFile = join(work, "share.html");
  writeFileSync(shareFile, shareHtml());
  const shareOut = join(root, "public/og/share.png");
  execFileSync(chrome, [...chromeBase, "--window-size=1200,630", `--screenshot=${shareOut}`, pathToFileURL(shareFile).href], { stdio: "ignore" });
  console.log(`wrote ${shareOut}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
