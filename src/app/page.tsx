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
  certifications,
  featuredProjects,
  pillars,
  profile,
  services,
  trustMarkers,
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

export default function Home() {
  return (
    <PageShell className="space-y-16 md:space-y-24">
      <section className="hero-energy grid gap-8 overflow-x-clip pt-2 md:grid-cols-[auto_1fr] md:gap-12 md:pt-4">
        <div className="flex flex-col gap-6 md:max-w-[14rem]">
          <MotionReveal>
            <Badge variant="muted">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]"
              />
              Open to new roles
            </Badge>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <p className="section-eyebrow">Practice</p>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
              {profile.location}
            </p>
          </MotionReveal>
        </div>

        <div className="min-w-0 space-y-8">
          <MotionReveal delay={0.05}>
            <p className="numbered-marker text-[var(--foreground)]">
              Patrick Ngenzi
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h1 className="headline text-balance text-4xl leading-[1.06] text-[var(--foreground)] sm:text-5xl md:text-6xl md:leading-[1.02] lg:text-7xl">
              I secure identity, cloud, endpoint, and network environments.
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="lead max-w-2xl text-pretty text-[var(--foreground-soft)]">
              {profile.intro}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.22}>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild variant="primary" size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact</Link>
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
            <div className="mt-6 flex items-center gap-4 text-[var(--muted-foreground)]">
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
                {metric.value}
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
          title="Practical security work for real operating environments."
          description="I help teams reduce risk across identity, Azure, endpoints, networks, and web platforms. My work is hands-on, documented, and aligned to least privilege, uptime, privacy, and measurable improvement."
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
          eyebrow="Selected Work"
          index="02"
          title="Projects organized for security and DevSecOps roles."
          description="A recruiter-ready view of security architecture, network segmentation, production platform ownership, automation, and client/server operations."
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
          eyebrow="Services"
          index="03"
          title="How I help organizations."
          description="From IAM and cloud hardening to network security, automation, secure deployments, and client platform operations."
          action={
            <Link
              href="/services"
              className="editorial-link text-sm text-[var(--foreground)]"
            >
              <span>All services</span>
              <span aria-hidden className="arrow">
                &rarr;
              </span>
            </Link>
          }
        />

        <Stagger className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <article className="card-surface flex h-full flex-col gap-5 p-6 md:p-8">
                <div className="flex items-baseline justify-between">
                  <p className="numbered-marker text-[var(--foreground)]">
                    {service.number}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                    Service
                  </p>
                </div>
                <h3 className="subhead text-xl text-[var(--foreground)] md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
                  {service.description}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                  {service.capabilities.slice(0, 3).map((capability) => (
                    <li key={capability} className="tag-chip">
                      {capability}
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
          index="04"
          title="Certifications and credentials."
          description="Validated security learning paired with day-to-day operational responsibility."
          action={
            <Link
              href="/about"
              className="editorial-link text-sm text-[var(--foreground)]"
            >
              <span>About me</span>
              <span aria-hidden className="arrow">
                &rarr;
              </span>
            </Link>
          }
        />

        <Stagger className="grid gap-3 md:grid-cols-3">
          {certifications.map((certification, idx) => (
            <StaggerItem key={certification.name}>
              <article className="card-surface flex h-full flex-col justify-between gap-6 p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="numbered-marker">
                    0{idx + 1}
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

      <MotionReveal>
        <section className="flex flex-col gap-6 border-t border-[var(--border)] pt-12 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12 md:pt-16">
          <p className="section-eyebrow">Contact</p>
          <h2 className="subhead min-w-0 text-balance text-2xl text-[var(--foreground)] md:text-4xl">
            For security, DevSecOps, IAM, cloud, or network roles.
          </h2>
          <Button asChild variant="primary" size="lg" className="w-full shrink-0 md:w-auto">
            <Link href="/contact">Start a Conversation</Link>
          </Button>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
