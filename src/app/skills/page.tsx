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
} from "@/components/sections/page-shell";
import { Button } from "@/components/ui/button";
import { skillCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Capability map across cloud security, identity, network defense, DevSecOps, and modern web engineering.",
};

export default function SkillsPage() {
  return (
    <PageShell className="space-y-20 md:space-y-28">
      <PageIntro
        eyebrow="Capabilities"
        index="Skills"
        title="Capabilities across security operations, IAM, cloud, networks, DevSecOps, and server management."
        description="A consolidated view of the platforms, tools, and professional strengths used across job roles, client platforms, and lab projects."
      />

      <section className="space-y-2">
        <Stagger>
          {skillCategories.map((skillGroup, idx) => (
            <StaggerItem key={skillGroup.category}>
              <article className="grid gap-6 border-b border-[var(--border)] py-10 md:grid-cols-[10rem_1fr_1.4fr] md:gap-12 md:py-12">
                <div className="space-y-3">
                  <p className="numbered-marker text-[var(--foreground)]">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Domain
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="subhead text-2xl text-[var(--foreground)] md:text-[1.75rem]">
                    {skillGroup.category}
                  </h2>
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
            See these skills applied across security projects and live client platforms.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/projects">Explore Projects</Link>
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
