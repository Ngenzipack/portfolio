import type { Metadata } from "next";
import { Link } from "@/components/link";

import {
  MotionReveal,
  Stagger,
  StaggerItem,
} from "@/components/sections/motion-reveal";
import { PageIntro, PageShell, SectionHeader } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  awards,
  certifications,
  education,
  profile,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Profile, education, and certifications for Patrick Ngenzi - Security Analyst and DevSecOps engineer.",
};

export default function AboutPage() {
  return (
    <PageShell className="space-y-20 md:space-y-28">
      <PageIntro
        eyebrow="Biography"
        index="About"
        meta={
          <div className="space-y-1.5">
            <p className="text-[var(--foreground)]">{profile.shortTitle}</p>
            <p>{profile.location}</p>
          </div>
        }
        title="Cybersecurity professional with practical IAM, cloud, endpoint, and network experience."
        description={profile.intro}
      />

      <section className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <MotionReveal>
          <p className="section-eyebrow">Profile</p>
        </MotionReveal>
        <div className="space-y-6 text-pretty text-[var(--foreground-soft)]">
          <MotionReveal>
            <p className="lead text-balance">{profile.summary}</p>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
              My experience is hands-on: supporting 1,000+ endpoints, mitigating
              150+ monthly security incidents, hardening Azure VMs and NSGs,
              improving Entra ID access controls, cleaning up Fortinet and Palo
              Alto firewall exposure, and documenting work so teams can operate it
              confidently.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
              Alongside security roles, I own Neotha and support live client web
              platforms including neotha.com, nkurunziza.ca, and
              sylvarenovations.ca. That work adds real production ownership:
              frontend, backend, hosting, DNS, SSL/TLS, client support, and server
              management. {profile.beyondTech}
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Focus"
          index="01"
          title="Where the work is strongest."
          description="The site is positioned for cybersecurity-first roles, with DevSecOps and server operations as practical supporting proof."
        />
        <Stagger className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
          {profile.focusAreas.map((area, idx) => (
            <StaggerItem key={area}>
              <article className="flex h-full items-baseline gap-6 bg-[var(--background-elev)] p-6 md:p-8">
                <span className="numbered-marker text-[var(--foreground)] md:text-base">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="subhead text-lg text-[var(--foreground)] md:text-xl">
                  {area}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Academic preparation"
          index="02"
          title="Education."
        />
        <Stagger className="space-y-3">
          {education.map((item) => (
            <StaggerItem key={`${item.degree}-${item.institution}`}>
              <article className="grid items-baseline gap-4 border-b border-[var(--border)] py-6 md:grid-cols-[10rem_1fr_auto] md:gap-10 md:py-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  {item.period ?? "Completed"}
                </p>
                <div className="space-y-2">
                  <h3 className="subhead text-2xl text-[var(--foreground)] md:text-[1.75rem]">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {item.institution}
                  </p>
                  {item.coursework && item.coursework.length ? (
                    <ul className="flex flex-wrap gap-2 pt-2">
                      {item.coursework.map((course) => (
                        <li key={course} className="tag-chip">
                          {course}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Credentials"
          index="03"
          title="Certifications."
          description="Validated security and identity credentials maintained alongside applied practice."
        />
        <Stagger className="grid gap-3 md:grid-cols-3">
          {certifications.map((certification, idx) => (
            <StaggerItem key={certification.name}>
              <article className="flex h-full flex-col justify-between gap-6 border border-[var(--border)] bg-[var(--background-elev)] p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="numbered-marker">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {certification.status ? (
                    <Badge variant="warning">{certification.status}</Badge>
                  ) : (
                    <Badge variant="success">Certified</Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="subhead text-xl text-[var(--foreground)] md:text-[1.4rem]">
                    {certification.name}
                  </h3>
                  {certification.issuer ? (
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {certification.issuer}
                    </p>
                  ) : null}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {awards.length ? (
        <section className="space-y-10 md:space-y-14">
          <SectionHeader
            eyebrow="Recognition"
            index="04"
            title="Highlights."
          />
          <Stagger className="space-y-3">
            {awards.map((award) => (
              <StaggerItem key={`${award.year}-${award.title}`}>
                <article className="grid items-baseline gap-4 border-b border-[var(--border)] py-5 md:grid-cols-[10rem_1fr_auto] md:gap-10 md:py-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    {award.year}
                  </p>
                  <p className="subhead text-lg text-[var(--foreground)] md:text-xl">
                    {award.title}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] md:text-right">
                    {award.issuer}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      ) : null}

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:pt-16">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-4xl">
            Want the longer version, or a copy you can keep?
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/resume">Download Resume</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
