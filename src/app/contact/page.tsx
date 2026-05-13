import type { Metadata } from "next";
import { Link } from "@/components/link";

import { MotionReveal, Stagger, StaggerItem } from "@/components/sections/motion-reveal";
import { PageIntro, PageShell } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile, socialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Patrick Ngenzi for security analyst, DevSecOps, IAM, and cloud security opportunities.",
};

export default function ContactPage() {
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");
  const github = socialLinks.find((link) => link.label === "GitHub");

  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Contact"
        index="Contact"
        title="Reach out for security, DevSecOps, IAM, cloud, or network roles."
        description="No form or backend is used on this static portfolio. The fastest way to connect is direct email or LinkedIn."
      />

      <section className="grid gap-12 md:grid-cols-[1fr_1.25fr] md:gap-16">
        <MotionReveal direction="left">
          <div className="space-y-10">
            <div className="space-y-5">
              <Badge variant="muted">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)] animate-pulse-ring"
                />
                Available now
              </Badge>
              <p className="lead text-pretty text-[var(--foreground-soft)]">
                {profile.availability}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="primary" size="lg">
                  <a href={`mailto:${profile.email}`}>Email Patrick</a>
                </Button>
                {linkedIn ? (
                  <Button asChild variant="outline" size="lg">
                    <a
                      href={linkedIn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>

            <dl className="grid gap-6 border-t border-[var(--border)] pt-6">
              <div className="flex flex-col gap-1">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="editorial-link text-base text-[var(--foreground)]"
                  >
                    <span>{profile.email}</span>
                    <span aria-hidden className="arrow">
                      &rarr;
                    </span>
                  </a>
                </dd>
              </div>

              <div className="flex flex-col gap-1">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  Location
                </dt>
                <dd className="text-base text-[var(--foreground)]">
                  {profile.location}
                </dd>
              </div>

              <div className="flex flex-col gap-1">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  Practice
                </dt>
                <dd className="text-base text-[var(--foreground)]">
                  {profile.shortTitle}
                </dd>
              </div>
            </dl>

            <div className="space-y-3 border-t border-[var(--border)] pt-6">
              <p className="section-eyebrow">Online</p>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group inline-flex items-baseline gap-3 text-base text-[var(--foreground)]"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                        {link.label}
                      </span>
                      <span className="border-b border-transparent transition-colors group-hover:border-[var(--foreground)]">
                        {link.handle ?? link.href}
                      </span>
                      <span aria-hidden className="text-xs text-[var(--muted-foreground)]">
                        &#8599;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal direction="right">
          <Stagger className="grid gap-3">
            {[
              {
                label: "Hiring focus",
                title: "Cybersecurity-first roles",
                description:
                  "Security Analyst, IAM Analyst, Cloud Security Analyst, DevSecOps, SOC/NOC, and Network Security Administrator opportunities.",
              },
              {
                label: "Technical strengths",
                title: "Identity, cloud, endpoint, and network defense",
                description:
                  "Entra ID, Active Directory, MFA, Conditional Access, Azure VM/NSG hardening, Defender, ESET, SolarWinds, Fortinet, Palo Alto, VPN, and Wireshark.",
              },
              {
                label: "Production ownership",
                title: "Client platforms and server management",
                description:
                  "Owner-led Neotha work adds frontend, backend, hosting, DNS, SSL/TLS, customer support, and server operations experience.",
              },
            ].map((item, idx) => (
              <StaggerItem key={item.title}>
                <article className="card-surface flex h-full flex-col gap-4 p-6 md:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="section-eyebrow">{item.label}</p>
                    <span className="numbered-marker">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="subhead text-2xl text-[var(--foreground)] md:text-3xl">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </MotionReveal>
      </section>

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:pt-16">
          <div className="space-y-2">
            <p className="section-eyebrow">Online presence</p>
            <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-4xl">
              Review the case studies, resume, LinkedIn, and GitHub profile.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/projects">View Projects</Link>
            </Button>
            {github ? (
              <Button asChild variant="outline">
                <a href={github.href} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            ) : null}
          </div>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
