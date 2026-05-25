import Image from "next/image";
import { Link } from "@/components/link";

import {
  MotionReveal,
  Stagger,
  StaggerItem,
} from "@/components/sections/motion-reveal";
import { PageShell, SectionHeader } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  caseStudies,
  credentials,
  featuredProjects,
  pillars,
  profile,
  technicalSkills,
  trustMarkers,
  type CaseStudy,
  type ProjectItem,
} from "@/lib/content";

function FeaturedProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  return (
    <Link
      href={`/projects#${project.slug}`}
      className="link-card-lift group flex h-full flex-col gap-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] p-6 md:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <span className="numbered-marker text-[var(--foreground)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="max-w-[14rem] text-[10px] font-semibold uppercase leading-snug text-[var(--muted-foreground)]">
            {project.category}
          </p>
        </div>
        <span
          aria-hidden
          className="text-sm text-[var(--muted-foreground)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--foreground)]"
        >
          Read &rarr;
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-3xl">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
          {project.description}
        </p>
      </div>

      {project.outcomes?.[0] ? (
        <p className="mt-auto border-t border-[var(--border)] pt-4 text-sm leading-relaxed text-[var(--foreground-soft)]">
          {project.outcomes[0]}
        </p>
      ) : null}

      <ul className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((technology) => (
          <li key={technology} className="tag-chip">
            {technology}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function CaseStudyCard({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) {
  return (
    <article
      className="card-surface flex h-full flex-col gap-5 p-6 md:p-8"
      id={caseStudy.slug}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="numbered-marker">{String(index + 1).padStart(2, "0")}</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
          Security case study
        </p>
      </div>

      <h3 className="subhead text-2xl text-[var(--foreground)] md:text-3xl">
        {caseStudy.title}
      </h3>

      <div className="space-y-2">
        <h4 className="section-eyebrow">Problem</h4>
        <p className="text-sm leading-relaxed text-[var(--foreground-soft)]">
          {caseStudy.challenge}
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="section-eyebrow">My role and actions</h4>
        <ul className="space-y-2">
          {caseStudy.actions.map((action) => (
            <li
              key={action}
              className="flex gap-3 text-sm leading-relaxed text-[var(--foreground-soft)]"
            >
              <span
                aria-hidden
                className="mt-2 inline-block h-px w-4 shrink-0 bg-[var(--foreground)]"
              />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
        <h4 className="section-eyebrow">Tools used</h4>
        <ul className="flex flex-wrap gap-2">
          {caseStudy.tools.map((tool) => (
            <li key={tool} className="tag-chip">
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <p className="border-t border-[var(--border)] pt-4 text-sm leading-relaxed text-[var(--foreground)]">
        <strong>Outcome:</strong> {caseStudy.outcome}
      </p>
    </article>
  );
}

export default function Home() {
  return (
    <PageShell className="space-y-16 md:space-y-24">
      <section className="hero-energy grid gap-8 overflow-x-clip pt-2 md:pt-4">
        <div className="min-w-0 space-y-7">
          <MotionReveal>
            <Badge variant="muted">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]"
              />
              Open to new roles
            </Badge>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <p className="numbered-marker text-[var(--foreground)]">Patrick Ngenzi</p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h1 className="headline text-balance text-4xl leading-[1.06] text-[var(--foreground)] sm:text-5xl md:text-6xl md:leading-[1.02] lg:text-7xl">
              I help you secure identity, cloud, endpoints, and networks without slowing operations.
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="lead max-w-2xl text-pretty text-[var(--foreground-soft)]">
              {profile.intro}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--muted-foreground)]">
              {profile.whyIWorkInSecurity}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.24}>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild variant="primary" size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Link
                href="/resume"
                className="editorial-link text-sm text-[var(--foreground)]"
              >
                <span>Resume</span>
                <span aria-hidden className="arrow">
                  &rarr;
                </span>
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.32}>
            <div className="mt-4 flex items-center gap-4 text-[var(--muted-foreground)]">
              <span className="scroll-cue">Scroll</span>
            </div>
          </MotionReveal>
        </div>

      </section>

      <section className="grid gap-8 border-y border-[var(--border)] py-8 sm:grid-cols-2 md:grid-cols-4 md:gap-0 md:py-10">
        {trustMarkers.map((metric, idx) => (
          <MotionReveal
            key={metric.label}
            delay={idx * 0.06}
            className={
              idx > 0
                ? "md:border-l md:border-[var(--border)] md:pl-8"
                : "md:pr-8"
            }
          >
            <div className="space-y-2">
              <p className="numbered-marker">{String(idx + 1).padStart(2, "0")}</p>
              <p className="font-display text-4xl text-[var(--foreground)] md:text-5xl">
                <strong>{metric.value}</strong>
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)]">
                {metric.label}
              </p>
              {metric.description ? (
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {metric.description}
                </p>
              ) : null}
            </div>
          </MotionReveal>
        ))}
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Practice"
          index="01"
          title="Security work focused on measurable risk reduction."
          description="I design controls your team can operate, audit, and improve over time, from IAM and cloud hardening to network defense and secure delivery workflows."
        />

        <Stagger className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, idx) => (
            <StaggerItem key={pillar.title}>
              <Link
                href={pillar.href}
                className="link-card-lift group relative flex h-full flex-col gap-5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] p-6 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="numbered-marker text-[var(--foreground)]">
                    0{idx + 1}
                  </span>
                  <span
                    aria-hidden
                    className="inline-block text-[var(--accent-strong)] transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    &rarr;
                  </span>
                </div>
                <h3 className="subhead text-2xl text-[var(--foreground)] md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
                  {pillar.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Project Deep Dives"
          index="02"
          title="Case studies you can quickly map to your security priorities."
          description="Each case study shows the challenge, my execution approach, the tools used, and the measurable security outcome."
        />

        <Stagger className="grid gap-4 md:grid-cols-3">
          {caseStudies.map((caseStudy, idx) => (
            <StaggerItem key={caseStudy.slug}>
              <CaseStudyCard caseStudy={caseStudy} index={idx} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Selected Work"
          index="03"
          title="Projects aligned to your target security and DevSecOps roles."
          description="I organize projects around outcomes so you can quickly evaluate architecture decisions, implementation quality, and operational discipline."
          action={
            <Link
              href="/projects"
              className="editorial-link text-sm text-[var(--foreground)]"
            >
              <span>All projects</span>
              <span aria-hidden className="arrow">
                &rarr;
              </span>
            </Link>
          }
        />

        <Stagger className="grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <StaggerItem key={project.slug}>
              <FeaturedProjectCard project={project} index={idx} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Technical Skills"
          index="04"
          title="Technical strengths organized around business impact."
          description="I use these capabilities to improve your security posture, accelerate incident response, and keep production operations stable."
          action={
            <Link
              href="/skills"
              className="editorial-link text-sm text-[var(--foreground)]"
            >
              <span>Full skills map</span>
              <span aria-hidden className="arrow">
                &rarr;
              </span>
            </Link>
          }
        />

        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((group) => (
            <StaggerItem key={group.title}>
              <article className="card-surface flex h-full flex-col gap-4 p-6">
                <h3 className="subhead text-xl text-[var(--foreground)]">{group.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {group.summary}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {group.items.map((item) => (
                    <li key={item} className="tag-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Credentials"
          index="05"
          title="Credentials and certifications."
          description="I pair formal credential progress with field execution across IAM, cloud security, endpoint operations, and network defense."
          action={
            <Link
              href="/about"
              className="editorial-link text-sm text-[var(--foreground)]"
            >
              <span>About and resume</span>
              <span aria-hidden className="arrow">
                &rarr;
              </span>
            </Link>
          }
        />

        <Stagger className="grid gap-3 md:grid-cols-3">
          {credentials.map((credential, idx) => (
            <StaggerItem key={credential.name}>
              <article className="card-surface flex h-full flex-col justify-between gap-6 p-6 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="numbered-marker">0{idx + 1}</span>
                  <Badge variant={credential.status === "In Progress" ? "warning" : "success"}>
                    {credential.status ?? "Certified"}
                  </Badge>
                </div>
                {credential.badgeIcon ? (
                  <Image
                    src={credential.badgeIcon}
                    alt={`Credential badge for ${credential.name}`}
                    width={56}
                    height={56}
                    className="h-14 w-14"
                  />
                ) : null}
                <div className="space-y-2">
                  <h3 className="subhead text-xl text-[var(--foreground)] md:text-[1.4rem]">
                    {credential.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {credential.issuer}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                    Last updated: {credential.lastUpdated ?? "May 2026"}
                  </p>
                  {credential.acquiredSkills?.length ? (
                    <ul className="flex flex-wrap gap-2 pt-2">
                      {credential.acquiredSkills.map((skill) => (
                        <li key={skill} className="tag-chip">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {credential.credentialUrl ? (
                    <a
                      href={credential.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link text-sm"
                    >
                      <span>View credential</span>
                      <span aria-hidden className="arrow">
                        &rarr;
                      </span>
                    </a>
                  ) : null}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <MotionReveal>
        <section className="flex flex-col gap-6 border-t border-[var(--border)] pt-12 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12 md:pt-16">
          <p className="section-eyebrow">Contact</p>
          <h2 className="subhead min-w-0 text-balance text-2xl text-[var(--foreground)] md:text-4xl">
            If you need practical security outcomes, I can help you move from ideas to verified implementation.
          </h2>
          <Button asChild variant="primary" size="lg" className="w-full shrink-0 md:w-auto">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
