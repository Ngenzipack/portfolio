import type { Metadata } from "next";
import { Link } from "@/components/link";

import {
  MotionReveal,
  Stagger,
  StaggerItem,
} from "@/components/sections/motion-reveal";
import {
  PageIntro,
  PageShell,
  SectionHeader,
} from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/asset-path";
import {
  certifications,
  education,
  experience,
  profile,
  skillCategories,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Patrick Ngenzi - Security Analyst, DevSecOps Engineer focused on IAM, Azure cloud security, and network defense.",
};

const RESUME_DOCX = assetPath("/resume/Security.docx");

export default function ResumePage() {
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Curriculum vitae"
        index="Resume"
        title="Resume for cybersecurity, IAM, cloud, DevSecOps, and network security roles."
        description="A web-friendly summary of my hiring profile. Download the Microsoft Word resume, or browse the role highlights below."
        meta={
          <div className="space-y-1.5">
            <p className="text-[var(--foreground)]">{profile.shortTitle}</p>
            <p>{profile.location}</p>
            <p>{profile.email}</p>
          </div>
        }
      />

      <MotionReveal>
        <section className="grid gap-6 border border-[var(--border)] bg-[var(--background-elev)] p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-8">
          <div className="space-y-2">
            <p className="section-eyebrow">Download</p>
            <p className="subhead text-2xl text-[var(--foreground)] md:text-[1.75rem]">
              Get a copy of the resume for your hiring process.
            </p>
            <p className="text-sm text-[var(--muted-foreground)]">
              The downloadable Word file is the current resume used for hiring
              conversations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary" size="lg">
              <a href={RESUME_DOCX} download>
                Download Resume
              </a>
            </Button>
          </div>
        </section>
      </MotionReveal>

      <section className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <MotionReveal>
          <p className="section-eyebrow">Profile</p>
        </MotionReveal>
        <div className="space-y-5">
          <MotionReveal>
            <p className="lead text-[var(--foreground-soft)]">
              {profile.summary}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <ul className="grid gap-2 border-t border-[var(--border)] pt-5 sm:grid-cols-2">
              {profile.targetRoles.map((role) => (
                <li
                  key={role}
                  className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]"
                >
                  <span
                    aria-hidden
                    className="inline-block h-px w-4 bg-[var(--foreground)]"
                  />
                  {role}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Credentials"
          index="01"
          title="Education and certifications."
        />
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <MotionReveal>
            <div className="space-y-6">
              <p className="section-eyebrow">Education</p>
              <div className="space-y-4">
                {education.map((item) => (
                  <div
                    key={`${item.degree}-${item.institution}`}
                    className="space-y-2 border-b border-[var(--border)] pb-4 last:border-b-0"
                  >
                    <p className="subhead text-xl text-[var(--foreground)]">
                      {item.degree}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {item.institution}
                      {item.period ? ` - ${item.period}` : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.05}>
            <div className="space-y-6">
              <p className="section-eyebrow">Certifications</p>
              <ul className="space-y-3">
                {certifications.map((certification) => (
                  <li
                    key={certification.name}
                    className="flex flex-col gap-1 border-b border-[var(--border)] pb-3 last:border-b-0 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="space-y-0.5">
                      <p className="text-base text-[var(--foreground)]">
                        {certification.name}
                      </p>
                      {certification.issuer ? (
                        <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                          {certification.issuer}
                        </p>
                      ) : null}
                    </div>
                    {certification.status ? (
                      <Badge variant="warning">{certification.status}</Badge>
                    ) : (
                      <Badge variant="success">Certified</Badge>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Experience"
          index="02"
          title="Roles and impact."
        />
        <Stagger>
          {experience.map((item, idx) => (
            <StaggerItem key={`${item.role}-${item.organization}`}>
              <article className="grid gap-6 border-b border-[var(--border)] py-8 md:grid-cols-[10rem_1fr] md:gap-12 md:py-10">
                <div className="space-y-2">
                  <p className="numbered-marker text-[var(--foreground)]">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    {item.period}
                  </p>
                  {item.location ? (
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {item.location}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="subhead text-xl text-[var(--foreground)] md:text-2xl">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
                      {item.organization}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-[var(--foreground-soft)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--foreground)]"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Capabilities"
          index="03"
          title="Skills snapshot."
        />
        <Stagger className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
          {skillCategories.map((skillGroup) => (
            <StaggerItem key={skillGroup.category}>
              <div className="flex h-full flex-col gap-4 bg-[var(--background-elev)] p-6 md:p-8">
                <p className="subhead text-lg text-[var(--foreground)] md:text-xl">
                  {skillGroup.category}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="tag-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:pt-16">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-4xl">
            Ready to talk about a role or engagement?
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={RESUME_DOCX} download>
                Download Resume
              </a>
            </Button>
          </div>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
