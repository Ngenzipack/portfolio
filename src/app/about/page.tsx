import type { Metadata } from "next";
import Image from "next/image";
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
  credentials,
  education,
  profile,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Patrick Ngenzi: first-person security profile across IAM, cloud security, endpoint defense, networking, and DevSecOps delivery.",
};

export default function AboutPage() {
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Biography"
        index="About"
        meta={
          <div className="space-y-1.5">
            <p className="text-[var(--foreground)]">{profile.shortTitle}</p>
            <p>{profile.location}</p>
          </div>
        }
        title="I build security controls that reduce risk and still fit real operations."
        description={profile.intro}
      />

      <section className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <MotionReveal>
          <p className="section-eyebrow">Profile</p>
        </MotionReveal>
        <div className="space-y-5 text-pretty text-[var(--foreground-soft)]">
          <MotionReveal>
            <p className="lead text-balance">{profile.summary}</p>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
              I have supported <strong>1,000+ endpoints</strong>, mitigated <strong>150+ monthly security incidents</strong>, and helped reduce firewall exposure by <strong>25%</strong> while preserving approved business traffic.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
              Beyond security operations, I deliver production web platforms and support server operations, DNS, SSL/TLS, deployment workflows, and client communication so your team gets outcomes that are both secure and usable.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.15}>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
              {profile.whyIWorkInSecurity}
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Focus"
          index="01"
          title="Where I drive the most impact."
          description="I stay focused on identity, cloud, endpoint, network, and delivery security so your organization can lower risk with measurable progress."
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
          eyebrow="Credentials"
          index="02"
          title="Certifications with status and maintenance dates."
          description="I keep credentials visible because they complement hands-on delivery and give you a quick baseline of my current learning path."
        />

        <Stagger className="grid gap-3 md:grid-cols-3">
          {credentials.map((credential, idx) => (
            <StaggerItem key={credential.name}>
              <article className="card-surface flex h-full flex-col justify-between gap-6 p-6 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="numbered-marker">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <Badge variant={credential.status === "In Progress" ? "warning" : "success"}>
                    {credential.status ?? "Certified"}
                  </Badge>
                </div>
                <Image
                  src={credential.badgeIcon}
                  alt={`Credential badge for ${credential.name}`}
                  width={56}
                  height={56}
                  className="h-14 w-14"
                />
                <div className="space-y-2">
                  <h3 className="subhead text-xl text-[var(--foreground)] md:text-[1.35rem]">
                    {credential.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{credential.issuer}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                    Last updated: {credential.lastUpdated ?? "May 2026"}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Academic preparation"
          index="03"
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

      {awards.length ? (
        <section className="space-y-10 md:space-y-14">
          <SectionHeader
            eyebrow="Recognition"
            index="04"
            title="Selected highlights."
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
            Want the full details for your hiring process?
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/resume">View Resume</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
