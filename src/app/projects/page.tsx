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

const projectFocus = [
  {
    label: "Security roles",
    title: "Cloud, IAM, SOC, and network defense",
    description:
      "Azure architecture, Entra ID, Conditional Access, Sentinel detections, segmentation, firewall policy, and security operations.",
  },
  {
    label: "DevSecOps roles",
    title: "Automation, CI/CD, and production ownership",
    description:
      "GitHub Actions, static deployment, monitoring workflows, PowerShell automation, server operations, and controlled change practices.",
  },
  {
    label: "Client delivery",
    title: "Live platforms with real customers",
    description:
      "Neotha, Nkurunziza, and Sylva Renovations show frontend/backend delivery, hosting, DNS, SSL/TLS, troubleshooting, and support.",
  },
];

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
              Project role &middot; {project.role}
            </p>
          ) : null}
          {project.privateCode ? (
            <p className="inline-flex border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase text-[var(--foreground)]">
              Private or client repository
            </p>
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
              <p className="section-eyebrow">What this demonstrates</p>
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
        title="Project case studies organized for hiring review."
        description="A curated set of security, DevSecOps, client platform, and GitHub projects organized around the roles I am targeting: Security Analyst, IAM, Cloud Security, SOC/NOC, Network Security, and DevSecOps."
        meta={
          <p>
            Featured work comes first. Private client work is presented as
            public-safe case studies with live links and clear outcomes.
          </p>
        }
      />

      <section className="grid gap-3 md:grid-cols-3">
        {projectFocus.map((item) => (
          <article
            key={item.title}
            className="border border-[var(--border)] bg-[var(--background-elev)] p-5 md:p-6"
          >
            <div className="space-y-4">
              <p className="text-[10px] font-semibold uppercase text-[var(--muted-foreground)]">
                {item.label}
              </p>
              <div className="space-y-2">
                <h2 className="subhead text-xl text-[var(--foreground)] md:text-2xl">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-4 md:space-y-6">
        <SectionHeader
          eyebrow="Featured"
          index="01"
          title="Best evidence for target roles."
          description="Projects selected to show security architecture, network defense, production ownership, automation, and operational follow-through."
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
          title="Client delivery and engineering fundamentals."
          description="Additional work that shows customer support, production delivery, backend/frontend ownership, GitHub discipline, and programming fundamentals."
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
