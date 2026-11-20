import Image from "next/image";

import { Link } from "@/components/link";
import { FlowDiagramView } from "@/components/sections/flow-diagram";
import { MotionReveal } from "@/components/sections/motion-reveal";
import { PageIntro, PageShell, SectionHeader } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { assetPath } from "@/lib/asset-path";
import {
  projects,
  publishedCaseStudies,
  tracks,
  type CaseStudy,
  type ProjectItem,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Security projects by Patrick Ngenzi, grouped by identity and access, cloud and SOC, network security, and web and DevSecOps, with architecture diagrams and GitHub links.",
  path: "/projects/",
});

function ExternalLinks({ links }: { links: NonNullable<ProjectItem["links"]> }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noopener noreferrer" className="editorial-link text-sm">
            <span>{link.label}</span>
            <span aria-hidden className="arrow">
              &rarr;
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectArticle({ project }: { project: ProjectItem }) {
  return (
    <article id={project.slug} className="scroll-mt-32 space-y-6 border-b border-[var(--border)] py-9 md:py-12">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted-foreground)]">
        <span className="font-semibold text-[var(--accent-strong)]">{project.category}</span>
        {project.period ? <span>{project.period}</span> : null}
        {project.role ? <span>Role: {project.role}</span> : null}
        {project.featured ? <Badge variant="accent">Featured</Badge> : null}
        {project.privateCode ? <Badge variant="muted">Private code</Badge> : null}
      </div>

      <div className="max-w-3xl space-y-4">
        <h3
          className={
            project.featured
              ? "subhead text-balance text-2xl text-[var(--foreground)] md:text-[2rem]"
              : "subhead text-balance text-xl text-[var(--foreground)] md:text-2xl"
          }
        >
          {project.title}
        </h3>
        <p className="lead">{project.description}</p>
      </div>

      {project.outcomes?.length ? (
        <div className="space-y-3">
          <h4 className="section-eyebrow">What I did</h4>
          <ul className="grid gap-3 md:grid-cols-3">
            {project.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="border-t border-[var(--border)] pt-3 text-sm leading-relaxed text-[var(--foreground-soft)]"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.diagram ? <FlowDiagramView diagram={project.diagram} /> : null}

      {project.media?.length ? (
        <div className="space-y-3">
          <h4 className="section-eyebrow">Screenshots</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {project.media.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)]"
              >
                <a href={assetPath(item.src)} target="_blank" rel="noopener noreferrer" className="block">
                  <Image
                    src={assetPath(item.src)}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="h-auto w-full border-b border-[var(--border)]"
                  />
                  <span className="sr-only"> (opens full-size image in a new tab)</span>
                </a>
                {item.caption ? (
                  <figcaption className="px-3 py-2 text-xs text-[var(--muted-foreground)] md:text-sm">
                    {item.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      ) : null}

      <ul aria-label="Technologies" className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology} className="tag-chip">
            {technology}
          </li>
        ))}
      </ul>

      {project.links?.length ? <ExternalLinks links={project.links} /> : null}
    </article>
  );
}

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article id={caseStudy.slug} className="card-surface scroll-mt-32 space-y-4 p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="muted">Case study</Badge>
        <span className="text-sm text-[var(--muted-foreground)]">{caseStudy.context}</span>
      </div>
      <h3 className="subhead text-xl text-[var(--foreground)] md:text-2xl">{caseStudy.title}</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <h4 className="section-eyebrow">Problem</h4>
          <p className="text-sm leading-relaxed text-[var(--foreground-soft)]">{caseStudy.challenge}</p>
          <h4 className="section-eyebrow pt-3">Outcome</h4>
          <p className="text-sm leading-relaxed text-[var(--foreground-soft)]">{caseStudy.outcome}</p>
        </div>
        <div className="space-y-2">
          <h4 className="section-eyebrow">What I did</h4>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--foreground-soft)] marker:text-[var(--accent-strong)]">
            {caseStudy.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul aria-label="Tools" className="flex flex-wrap gap-2">
        {caseStudy.tools.map((tool) => (
          <li key={tool} className="tag-chip">
            {tool}
          </li>
        ))}
      </ul>
    </article>
  );
}

const byFeatured = (a: ProjectItem, b: ProjectItem) => Number(Boolean(b.featured)) - Number(Boolean(a.featured));

export default function ProjectsPage() {
  const groups = tracks.map((track) => ({
    track,
    projects: projects.filter((p) => p.track === track.id).sort(byFeatured),
    caseStudies: publishedCaseStudies.filter((c) => c.track === track.id),
  }));

  return (
    <PageShell className="space-y-12 md:space-y-16">
      <PageIntro
        eyebrow="Projects"
        title="Security projects, grouped by the role they support."
        description="Jump to the area you are hiring for. Featured projects include an architecture diagram; private and client code is described without exposing client details."
      />

      <nav
        aria-label="Project categories"
        className="sticky top-[68px] z-30 border-b border-[var(--border)] bg-[var(--background)] py-3 md:top-[78px]"
      >
        <ul className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
          {groups.map(({ track, projects: items, caseStudies }) => (
            <li key={track.id} className="shrink-0">
              <a
                href={`#track-${track.id}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--background-elev)] px-4 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
              >
                {track.label}
                <span className="text-xs font-normal text-[var(--muted-foreground)]">
                  {items.length + caseStudies.length}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {groups.map(({ track, projects: items, caseStudies }) => (
        <section key={track.id} className="space-y-2">
          <SectionHeader
            id={`track-${track.id}`}
            eyebrow="Track"
            title={track.label}
            description={track.description}
          />
          {items.map((project) => (
            <ProjectArticle key={project.slug} project={project} />
          ))}
          {caseStudies.length ? (
            <div className="space-y-4 pt-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          ) : null}
        </section>
      ))}

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-3xl">
            Want to talk through one of these projects?
          </h2>
          <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
            Contact me
          </Link>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
