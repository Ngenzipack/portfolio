import { SafeEmail } from "@/components/profile/safe-email";
import { MotionReveal } from "@/components/sections/motion-reveal";
import { PageIntro, PageShell } from "@/components/sections/page-shell";
import { buttonVariants } from "@/components/ui/button-variants";
import { profile, socialLinks } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Patrick Ngenzi, Security Analyst in North Bay, Ontario, by email or LinkedIn about Security, SOC, IAM or network security roles across Ontario.",
  path: "/contact/",
});

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
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Contact"
        title="Let's talk about your security role."
        description="Email me directly. This site has no contact form, so every message goes straight to my inbox and I reply by email."
      />

      <MotionReveal>
        <section aria-labelledby="direct-heading" className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
          <div className="space-y-8">
            <h2 id="direct-heading" className="sr-only">
              Direct contact
            </h2>
            <dl className="space-y-6 border-y border-[var(--border)] py-6">
              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Email</dt>
                <dd className="text-lg text-[var(--foreground)]">
                  <SafeEmail className="break-all underline-offset-4 hover:underline" />
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Location</dt>
                <dd className="text-lg text-[var(--foreground)]">{profile.location}</dd>
              </div>
              <div className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">Availability</dt>
                <dd className="text-base text-[var(--foreground)]">{profile.availability}</dd>
              </div>
            </dl>
            <SafeEmail label="Email me" className={buttonVariants({ variant: "primary", size: "lg" })} />
          </div>

          <div className="space-y-4">
            <h2 className="section-eyebrow">Profiles</h2>
            <ul className="space-y-3">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] px-4 py-3 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--accent)]"
                  >
                    <span className="text-[var(--accent-strong)]">
                      <SocialIcon label={item.label} />
                    </span>
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-[var(--muted-foreground)]">{item.handle}</span>
                    <span aria-hidden className="ml-auto">&rarr;</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--muted-foreground)]">
              GitHub has the code for my public projects. LinkedIn has my full work history.
            </p>
          </div>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
