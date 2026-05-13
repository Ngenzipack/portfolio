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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career timeline of Patrick Ngenzi across IT support, network specialization, and security operations.",
};

export default function ExperiencePage() {
  return (
    <PageShell className="space-y-20 md:space-y-28">
      <PageIntro
        eyebrow="Career timeline"
        index="Experience"
        title="Career progression through support, network security, IAM, and operations."
        description="Roles spanning public-sector IT, telecom network security, service desk, privacy-sensitive operations, and production support - with measurable risk reduction and reliability outcomes."
      />

      <section className="space-y-2 md:space-y-4">
        <Stagger className="">
          {experience.map((item, idx) => (
            <StaggerItem key={`${item.role}-${item.organization}`}>
              <article className="grid scroll-mt-24 gap-6 border-b border-[var(--border)] py-10 md:grid-cols-[10rem_1fr] md:gap-14 md:py-14">
                <div className="space-y-3">
                  <p className="numbered-marker text-[var(--foreground)]">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    {item.period}
                  </p>
                  {item.location ? (
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {item.location}
                    </p>
                  ) : null}
                  {idx === 0 ? (
                    <Badge variant="success">Current Role</Badge>
                  ) : null}
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-[2rem]">
                      {item.role}
                    </h2>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
                      {item.organization}
                    </p>
                  </div>
                  {item.summary ? (
                    <p className="lead max-w-2xl text-pretty text-[var(--foreground-soft)]">
                      {item.summary}
                    </p>
                  ) : null}
                  <ul className="space-y-3 pt-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-4 border-t border-[var(--border)] pt-3 text-base leading-relaxed text-[var(--foreground-soft)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-px w-6 shrink-0 bg-[var(--foreground)]"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:pt-16">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-4xl">
            Want the full breakdown? Review the resume or contact me directly.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/resume">View Resume</Link>
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
