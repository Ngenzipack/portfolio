import { Link } from "@/components/link";
import { ProfilePhoto } from "@/components/profile/profile-photo";
import { SafeEmail } from "@/components/profile/safe-email";
import { CredentialList } from "@/components/sections/credential-list";
import {
  MotionReveal,
  Stagger,
  StaggerItem,
} from "@/components/sections/motion-reveal";
import { PageShell, SectionHeader } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { assetPath } from "@/lib/asset-path";
import {
  certifiedCredentials,
  credentials,
  focusAreas,
  homeProjects,
  profile,
  resumeFiles,
  tracks,
  trustMarkers,
  type ProjectItem,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  description:
    "Patrick Ngenzi is a Security Analyst in North Bay, Ontario, with 6+ years in IT and security: Entra ID and Microsoft Defender investigations, Fortinet firewall review, and SC-300 and Security+ certifications.",
  path: "/",
});

const inProgress = credentials.find((c) => c.status === "In progress");

function ProjectCard({ project }: { project: ProjectItem }) {
  const track = tracks.find((t) => t.id === project.track);
  return (
    <Link
      href={`/projects#${project.slug}`}
      className="link-card-lift group flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] p-6"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-strong)]">
        {track?.label}
      </p>
      <h3 className="subhead text-balance text-xl text-[var(--foreground)] md:text-2xl">
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
        {project.description}
      </p>
      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.technologies.slice(0, 4).map((technology) => (
          <li key={technology} className="tag-chip">
            {technology}
          </li>
        ))}
      </ul>
      <span className="editorial-link self-start text-sm">
        <span>Read the project</span>
        <span aria-hidden className="arrow">
          &rarr;
        </span>
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <PageShell className="space-y-16 md:space-y-24">
      <section
        aria-labelledby="hero-name"
        className="hero-energy grid items-center gap-10 overflow-x-clip pt-2 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:gap-12 md:pt-6"
      >
        <div className="min-w-0 space-y-6">
          <MotionReveal>
            <Badge variant="muted">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              Open to Security Analyst roles across Ontario
            </Badge>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <h1 id="hero-name" className="space-y-3">
              <span className="headline block text-[2.75rem] leading-[1.02] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                {profile.name}
              </span>
              <span className="sr-only">, </span>
              <span className="block text-lg font-semibold leading-snug text-[var(--accent-strong)] sm:text-xl md:text-2xl">
                {profile.headline}
              </span>
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <p className="lead max-w-2xl text-pretty">{profile.intro}</p>
          </MotionReveal>

          <MotionReveal delay={0.14}>
            <div className="space-y-4">
              <div>
                <h2 className="sr-only">Top skills</h2>
                <ul className="flex flex-wrap gap-2">
                  {profile.topSkills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--background-elev)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="sr-only">Certifications</h2>
                <ul className="flex flex-wrap gap-2">
                  {certifiedCredentials.map((credential) => (
                    <li key={credential.name}>
                      <Badge variant="success" title={credential.name}>
                        <span aria-hidden>&#10003;</span>
                        {credential.shortName}
                      </Badge>
                    </li>
                  ))}
                  {inProgress ? (
                    <li>
                      <Badge variant="warning" title={inProgress.name}>
                        {inProgress.shortName} in progress
                      </Badge>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.18}>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
              <a
                href={assetPath(resumeFiles.cybersecurity.href)}
                download
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Download resume (PDF)
              </a>
              <Link href="/projects" className="editorial-link self-start text-sm sm:self-auto">
                <span>View projects</span>
                <span aria-hidden className="arrow">
                  &rarr;
                </span>
              </Link>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delay={0.1} className="order-first w-24 sm:w-32 md:order-none md:mx-auto md:w-full md:max-w-[20rem]">
          <ProfilePhoto priority size={480} className="text-3xl sm:text-4xl md:text-7xl" />
        </MotionReveal>
      </section>

      <section aria-labelledby="glance-heading" className="space-y-6">
        <h2 id="glance-heading" className="sr-only">
          At a glance
        </h2>
        <dl className="grid gap-6 border-y border-[var(--border)] py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {trustMarkers.map((metric, idx) => (
            <div
              key={metric.label}
              className={idx > 0 ? "space-y-2 lg:border-l lg:border-[var(--border)] lg:pl-8" : "space-y-2 lg:pr-8"}
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                {metric.label}
              </dt>
              <dd className="font-display text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
                {metric.value}
              </dd>
              <dd className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                {metric.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-8 md:space-y-10">
        <SectionHeader
          eyebrow="Focus"
          title="Where I add the most value"
          description="The security work I do every week, and where each area shows up in my projects and experience."
        />
        <Stagger className="grid gap-4 md:grid-cols-2">
          {focusAreas.map((area) => (
            <StaggerItem key={area.title}>
              <Link
                href={area.href}
                className="link-card-lift group flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] p-6"
              >
                <h3 className="subhead flex items-center justify-between gap-4 text-xl text-[var(--foreground)] md:text-2xl">
                  {area.title}
                  <span
                    aria-hidden
                    className="text-[var(--accent-strong)] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </h3>
                <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
                  {area.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-8 md:space-y-10">
        <SectionHeader
          eyebrow="Selected work"
          title="Featured security projects"
          description="One project each for identity, security operations and network security."
          action={
            <Link href="/projects" className="editorial-link text-sm">
              <span>All projects</span>
              <span aria-hidden className="arrow">
                &rarr;
              </span>
            </Link>
          }
        />
        <Stagger className="grid gap-4 lg:grid-cols-3">
          {homeProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-8 md:space-y-10">
        <SectionHeader eyebrow="Credentials" title="Certifications" />
        <CredentialList compact />
      </section>

      <MotionReveal>
        <section className="flex flex-col gap-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="space-y-2">
            <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-3xl">
              Hiring for a security role?
            </h2>
            <p className="max-w-xl text-base text-[var(--muted-foreground)]">{profile.availability}</p>
          </div>
          <SafeEmail label="Email me" className={buttonVariants({ variant: "primary", size: "lg" })} />
        </section>
      </MotionReveal>
    </PageShell>
  );
}
