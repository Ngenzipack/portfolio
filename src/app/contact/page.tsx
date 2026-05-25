import type { Metadata } from "next";
import { Link } from "@/components/link";

import { MotionReveal, Stagger, StaggerItem } from "@/components/sections/motion-reveal";
import { PageIntro, PageShell, SectionHeader } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile, socialLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Patrick Ngenzi for Security Analyst, DevSecOps, IAM, and cloud security opportunities.",
};

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M6.94 8.8H3.56V20h3.38V8.8ZM5.25 3C4.17 3 3.3 3.9 3.3 5s.87 2 1.95 2 1.95-.9 1.95-2-.87-2-1.95-2ZM20.7 13.57c0-3.19-1.7-4.67-3.97-4.67-1.83 0-2.65 1.01-3.1 1.72v-1.47h-3.38V20h3.38v-5.95c0-1.57.3-3.08 2.24-3.08 1.91 0 1.94 1.79 1.94 3.18V20h3.38v-6.43Z" />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.62-4.04-1.62-.55-1.41-1.35-1.78-1.35-1.78-1.1-.75.08-.73.08-.73 1.21.09 1.84 1.26 1.84 1.26 1.08 1.87 2.84 1.33 3.53 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.36-5.47-6.04 0-1.33.47-2.41 1.24-3.26-.12-.31-.54-1.57.12-3.28 0 0 1.02-.33 3.34 1.25a11.43 11.43 0 0 1 6.08 0c2.32-1.58 3.34-1.25 3.34-1.25.66 1.71.24 2.97.12 3.28.77.85 1.24 1.93 1.24 3.26 0 4.69-2.81 5.73-5.49 6.03.43.38.81 1.11.81 2.23v3.31c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  return null;
}

export default function ContactPage() {
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");
  const github = socialLinks.find((link) => link.label === "GitHub");

  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Contact"
        index="Contact"
        title="Contact me directly for security, IAM, cloud, DevSecOps, or network roles."
        description="I respond quickly, keep communication clear, and focus on practical next steps you can execute."
      />

      <section className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <MotionReveal direction="left">
          <div className="space-y-8">
            <Badge variant="muted">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)] animate-pulse-ring"
              />
              Available now
            </Badge>

            <div className="space-y-3">
              <h2 className="subhead text-3xl text-[var(--foreground)] md:text-4xl">
                Direct contact
              </h2>
              <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
                For hiring conversations or project collaboration, email me directly and I will follow up with role-fit context, relevant examples, and next actions.
              </p>
            </div>

            <div className="space-y-5 border-y border-[var(--border)] py-6">
              <div className="space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="editorial-link text-base text-[var(--foreground)]"
                >
                  <span>{profile.email}</span>
                  <span aria-hidden className="arrow">
                    &rarr;
                  </span>
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  Location
                </p>
                <p className="text-base text-[var(--foreground)]">{profile.location}</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="section-eyebrow">Linked profiles</p>
              <ul className="space-y-3">
                {[linkedIn, github]
                  .filter((item): item is NonNullable<typeof item> => Boolean(item))
                  .map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] px-4 py-2 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
                      >
                        <span className="text-[var(--accent-strong)]">
                          <SocialIcon label={item.label} />
                        </span>
                        <span className="font-semibold">{item.label}</span>
                        <span className="text-[var(--muted-foreground)]">
                          {item.handle ?? item.href}
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>
              <p className="text-xs text-[var(--muted-foreground)]">
                GitHub and LinkedIn profiles are linked so you can review live repositories, contribution history, and professional background.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="primary" size="lg">
                <a href={`mailto:${profile.email}`}>Email Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal direction="right">
          <Stagger className="grid gap-3">
            {[
              {
                label: "What you get",
                title: "Clear, practical security execution",
                description:
                  "I focus on controls your team can run in production, not slide-deck recommendations that stop at theory.",
              },
              {
                label: "How I work",
                title: "Structured delivery with measurable outcomes",
                description:
                  "I define scope, map risk, implement controls, validate evidence, and document handoff so your team stays operational.",
              },
              {
                label: "Current focus",
                title: "IAM, cloud security, endpoint defense, and resilient delivery",
                description:
                  "My current role focus stays aligned to Security Analyst, IAM, Cloud Security, SOC/NOC, Network Security, and DevSecOps positions.",
              },
            ].map((item, idx) => (
              <StaggerItem key={item.title}>
                <article className="card-surface flex h-full flex-col gap-4 p-6 md:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="section-eyebrow">{item.label}</p>
                    <span className="numbered-marker">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="subhead text-2xl text-[var(--foreground)] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </MotionReveal>
      </section>

      <section className="space-y-10 md:space-y-14">
        <SectionHeader
          eyebrow="Contact Form"
          index="01"
          title="Send a message"
          description="I keep this form for convenience. Direct email is still the fastest way to reach me."
        />

        <form className="card-surface grid gap-4 p-6 md:grid-cols-2 md:gap-5 md:p-8" action="#" method="post">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-[var(--foreground)]">
              Name
            </label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="subject" className="text-sm font-medium text-[var(--foreground)]">
              Subject
            </label>
            <Input id="subject" name="subject" placeholder="How can I help you?" required />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-[var(--foreground)]">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Share role details, project goals, timeline, or security priorities."
              rows={6}
              required
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[var(--muted-foreground)]">
              This form is ready to connect to your API or email service endpoint.
            </p>
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
