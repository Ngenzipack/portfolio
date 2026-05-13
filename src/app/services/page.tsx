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
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Security advisory and engineering services from Patrick Ngenzi - identity, cloud, network defense, and DevSecOps.",
};

export default function ServicesPage() {
  return (
    <PageShell className="space-y-20 md:space-y-28">
      <PageIntro
        eyebrow="Practice"
        index="Services"
        title="Security engineering and operations support for teams that need practical results."
        description="Work is organized around identity security, Azure and endpoint hardening, network segmentation, DevSecOps, and secure client platform operations. Each engagement is documented so controls can be operated after delivery."
      />

      <section className="space-y-4 md:space-y-6">
        <SectionHeader
          eyebrow="Service lines"
          index="01"
          title="What I help organizations strengthen."
          description="The focus is job-ready security work: access control, monitoring, remediation, network hardening, automation, and production support."
        />
        <Stagger className="space-y-3">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <article
                id={`service-${service.number}`}
                className="group grid scroll-mt-24 gap-8 border-b border-[var(--border)] py-10 transition-colors hover:border-[var(--foreground)] md:grid-cols-[10rem_1.4fr_1fr] md:gap-14 md:py-14"
              >
                <div className="space-y-3">
                  <p className="numbered-marker text-[var(--foreground)]">
                    {service.number}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Service
                  </p>
                </div>
                <div className="space-y-5">
                  <h2 className="subhead text-balance text-3xl text-[var(--foreground)] md:text-[2.4rem]">
                    {service.title}
                  </h2>
                  <p className="lead max-w-2xl text-pretty text-[var(--foreground-soft)]">
                    {service.description}
                  </p>
                  {service.outcome ? (
                    <p className="border-l border-[var(--foreground)] pl-4 text-sm leading-relaxed text-[var(--foreground)]">
                      {service.outcome}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-3">
                  <p className="section-eyebrow">Capabilities</p>
                  <ul className="space-y-2">
                    {service.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex gap-3 border-t border-[var(--border)] pt-2 text-sm leading-relaxed text-[var(--foreground-soft)]"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-px w-4 shrink-0 bg-[var(--foreground)]"
                        />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="How I work"
          index="02"
          title="A clear, evidence-driven engagement model."
        />
        <Stagger className="grid gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Discover",
              description:
                "Map the environment, identity paths, exposed services, monitoring gaps, and operational constraints before changing controls.",
            },
            {
              number: "02",
              title: "Harden and Validate",
              description:
                "Implement least-privilege controls, hardening steps, automation, or segmentation changes, then validate the result with logs, packet flow, or documented evidence.",
            },
            {
              number: "03",
              title: "Document and Support",
              description:
                "Create runbooks, communicate clearly with technical and non-technical users, and support the team through operation or handoff.",
            },
          ].map((step) => (
            <StaggerItem key={step.number}>
              <article className="flex h-full flex-col gap-4 bg-[var(--background-elev)] p-6 md:p-8">
                <p className="numbered-marker text-[var(--foreground)]">
                  {step.number}
                </p>
                <h3 className="subhead text-xl text-[var(--foreground)] md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:pt-16">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-4xl">
            Need someone who can secure systems and still support the people using them?
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="primary">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">See Case Studies</Link>
            </Button>
          </div>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
