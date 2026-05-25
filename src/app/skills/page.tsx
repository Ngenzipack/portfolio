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
import { skillCategories, technicalSkills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills across IAM, cloud security, MaaS360 endpoint management, network defense, DevSecOps, and secure platform delivery.",
};

export default function SkillsPage() {
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Capabilities"
        index="Skills"
        title="Technical skills mapped to outcomes you can use in production."
        description="I organize my skills around what helps your team most: secure access, resilient cloud operations, endpoint visibility, network hardening, and reliable delivery."
      />

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Technical Skills"
          index="01"
          title="Curated strengths"
          description="This view highlights the tools and workflows I use most often when building practical security outcomes."
        />
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((group) => (
            <StaggerItem key={group.title}>
              <article className="card-surface flex h-full flex-col gap-4 p-6">
                <h2 className="subhead text-xl text-[var(--foreground)]">{group.title}</h2>
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

      <section className="space-y-2">
        <SectionHeader
          eyebrow="Full Capability Map"
          index="02"
          title="Detailed domain coverage"
          description="The full view includes additional infrastructure, automation, and operational depth from enterprise and client-platform work."
        />
        <Stagger>
          {skillCategories.map((skillGroup, idx) => (
            <StaggerItem key={skillGroup.category}>
              <article className="grid gap-6 border-b border-[var(--border)] py-8 md:grid-cols-[10rem_1fr_1.4fr] md:gap-10 md:py-10">
                <div className="space-y-3">
                  <p className="numbered-marker text-[var(--foreground)]">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Domain
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="subhead text-2xl text-[var(--foreground)] md:text-[1.75rem]">
                    {skillGroup.category}
                  </h3>
                  {skillGroup.description ? (
                    <p className="max-w-md text-base leading-relaxed text-[var(--muted-foreground)]">
                      {skillGroup.description}
                    </p>
                  ) : null}
                </div>
                <ul className="flex flex-wrap content-start gap-2">
                  {skillGroup.items.map((item) => (
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

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:pt-16">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-4xl">
            See these skills in real project decisions and measurable outcomes.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/projects">Explore Projects</Link>
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
