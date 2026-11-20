import { Link } from "@/components/link";
import { MotionReveal, Stagger, StaggerItem } from "@/components/sections/motion-reveal";
import { PageIntro, PageShell, SectionHeader } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { experience, otherExperience } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Work history of Patrick Ngenzi: IT System Specialist at Near North District School Board, Network Specialist at Bell and Technical Support Analyst at SP Data Digital.",
  path: "/experience/",
});

export default function ExperiencePage() {
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Experience"
        title="6+ years across a school board, telecom and the service desk."
        description="Most recent role first. Each entry lists the work I did and the tools I used."
      />

      <section aria-label="Work history">
        <Stagger>
          {experience.map((item, idx) => (
            <StaggerItem key={`${item.role}-${item.organization}`}>
              <article className="grid gap-6 border-b border-[var(--border)] py-8 md:grid-cols-[11rem_1fr] md:gap-12 md:py-10">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[var(--foreground)]">{item.period}</p>
                  {item.location ? (
                    <p className="text-sm text-[var(--muted-foreground)]">{item.location}</p>
                  ) : null}
                  {idx === 0 ? <Badge variant="success">Current role</Badge> : null}
                </div>
                <div className="max-w-3xl space-y-4">
                  <div className="space-y-1">
                    <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-[1.75rem]">
                      {item.role}
                    </h2>
                    <p className="text-base font-semibold text-[var(--accent-strong)]">
                      {item.organization}
                    </p>
                  </div>
                  {item.concurrentNote ? (
                    <p className="inline-flex rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm text-[var(--foreground)]">
                      Concurrent role: {item.concurrentNote}
                    </p>
                  ) : null}
                  {item.scope ? (
                    <p className="text-base leading-relaxed text-[var(--foreground-soft)]">{item.scope}</p>
                  ) : null}
                  <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-[var(--foreground-soft)] marker:text-[var(--accent-strong)]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Other" title="Other experience" />
        <ul className="space-y-4">
          {otherExperience.map((item) => (
            <li key={item.role} className="max-w-3xl space-y-1">
              <p className="text-base text-[var(--foreground)]">
                <strong className="font-semibold">{item.role}</strong>, {item.organization}
                {item.location ? `, ${item.location}` : null} · {item.period}
              </p>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{item.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-3xl">
            Need this as a document?
          </h2>
          <Link href="/resume" className={buttonVariants({ variant: "primary" })}>
            Get the resume
          </Link>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
