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
import {
  featuredProjects,
  supportingProjects,
  type ProjectItem,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Cybersecurity, IAM, cloud, and DevSecOps case studies by Patrick Ngenzi.",
};

function ProjectArticle({
  project,
  index,
  variant = "featured",
}: {
  project: ProjectItem;
  index: number;
  variant?: "featured" | "supporting";
}) {
  const indexLabel = String(index + 1).padStart(2, "0");
  return (
    <article
      id={project.slug}
      className="scroll-mt-24 border-b border-[var(--border)] py-9 md:py-12"
    >
      <div className="grid gap-10 md:grid-cols-[10rem_1fr] md:gap-14">
        <div className="space-y-4">
          <p className="numbered-marker text-[var(--foreground)]">{indexLabel}</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            {project.category}
          </p>
          {project.period ? (
            <p className="text-sm text-[var(--muted-foreground)]">
              {project.period}
            </p>
          ) : null}
          {project.role ? (
            <p className="text-sm text-[var(--muted-foreground)]">
              Role &middot; {project.role}
            </p>
          ) : null}
          {project.privateCode ? (
            <Badge variant="muted">Public-safe case study</Badge>
          ) : null}
          {project.links?.length ? (
            <div className="flex flex-wrap gap-3 pt-1">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="editorial-link text-sm"
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="arrow">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          <h2
            className={
              variant === "featured"
                ? "subhead text-balance text-3xl text-[var(--foreground)] md:text-[2.6rem]"
                : "subhead text-balance text-2xl text-[var(--foreground)] md:text-3xl"
            }
          >
            {project.title}
          </h2>
          <p className="lead max-w-3xl text-[var(--foreground-soft)]">
            {project.description}
          </p>

          {project.outcomes && project.outcomes.length ? (
            <div className="space-y-4 pt-2">
              <p className="section-eyebrow">Outcomes</p>
              <ul className="space-y-3">
                {project.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex gap-4 border-t border-[var(--border)] pt-3 text-base leading-relaxed text-[var(--foreground-soft)]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-px w-6 shrink-0 bg-[var(--foreground)]"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <ul className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="tag-chip">
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Selected Work"
        index="Projects"
        title="Case studies in cybersecurity, DevSecOps, and secure web operations."
        description="A curated set of projects spanning Azure cloud security, IAM, network segmentation, endpoint/security automation, live client websites, backend/frontend delivery, and server management."
        meta={
          <p>
            Featured work comes first. Client and owner-led platforms are shown as
            public-safe case studies with live links instead of embedded frames.
          </p>
        }
      />

      <section className="space-y-4 md:space-y-6">
        <SectionHeader
          eyebrow="Featured"
          index="01"
          title="Featured projects."
          description="Hands-on work that best represents the cybersecurity-first positioning and supporting production engineering experience."
        />
        <Stagger className="">
          {featuredProjects.map((project, idx) => (
            <StaggerItem key={project.slug}>
              <ProjectArticle project={project} index={idx} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-4 md:space-y-6">
        <SectionHeader
          eyebrow="Supporting"
          index="02"
          title="Supporting work."
          description="Operational security automation, client delivery, and engineering fundamentals."
        />
        <Stagger className="">
          {supportingProjects.map((project, idx) => (
            <StaggerItem key={project.slug}>
              <ProjectArticle
                project={project}
                index={featuredProjects.length + idx}
                variant="supporting"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:pt-16">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-4xl">
            Looking for experience in IAM, cloud, network security, DevSecOps, or client platform operations?
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
