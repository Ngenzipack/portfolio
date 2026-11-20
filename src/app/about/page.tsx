import { Link } from "@/components/link";
import { ProfilePhoto } from "@/components/profile/profile-photo";
import { CredentialList } from "@/components/sections/credential-list";
import { MotionReveal } from "@/components/sections/motion-reveal";
import { PageIntro, PageShell, SectionHeader } from "@/components/sections/page-shell";
import { buttonVariants } from "@/components/ui/button-variants";
import { education, incidentSteps, profile } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Patrick Ngenzi: IT System Specialist at Near North District School Board, working toward security leadership, with SC-300, Security+ and a Mohawk College diploma.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="About"
        meta={
          <div className="space-y-1.5">
            <p className="text-[var(--foreground)]">{profile.headline}</p>
            <p>{profile.location}</p>
          </div>
        }
        title="I investigate, automate and harden the systems people rely on every day."
        description={profile.intro}
        aside={<ProfilePhoto size={320} className="w-32 text-4xl sm:w-40 md:w-48 md:text-5xl" />}
      />

      <section aria-labelledby="profile-heading" className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] md:gap-16">
        <h2 id="profile-heading" className="section-eyebrow self-start">
          Profile
        </h2>
        <div className="max-w-3xl space-y-5 text-pretty">
          <MotionReveal>
            <p className="lead">{profile.summary}</p>
          </MotionReveal>
          <MotionReveal delay={0.05}>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
              Before my current role I worked as a Network Specialist at Bell, where I tightened Fortinet and Palo Alto firewall rules and segmented wireless traffic, and as a Technical Support Analyst at SP Data Digital, where I patched servers during the Log4j response.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
              I also build and host websites for my own business and for clients. It is a secondary skill, but it keeps me close to DNS, TLS, access control and change management.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.15}>
            <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
              {profile.whyIWorkInSecurity} {profile.longTermGoal} {profile.beyondTech}
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="space-y-8 md:space-y-10">
        <SectionHeader eyebrow="How I work" title="How I handle an incident" />
        <ol className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--border)] md:grid-cols-3">
          {incidentSteps.map((step) => (
            <li key={step.title} className="flex flex-col gap-3 bg-[var(--background-elev)] p-6">
              <h3 className="subhead text-xl text-[var(--foreground)]">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted-foreground)] md:text-base">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-8 md:space-y-10">
        <SectionHeader eyebrow="Credentials" title="Certifications" />
        <CredentialList />
      </section>

      <section className="space-y-8 md:space-y-10">
        <SectionHeader eyebrow="Education" title="Education" />
        <ul className="space-y-3">
          {education.map((item) => (
            <li
              key={`${item.program}-${item.institution}`}
              className="grid items-baseline gap-4 border-b border-[var(--border)] pb-6 md:grid-cols-[10rem_1fr] md:gap-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
                {item.period}
              </p>
              <div className="space-y-2">
                <h3 className="subhead text-xl text-[var(--foreground)] md:text-2xl">
                  {item.credential}, {item.program}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {item.institution}, {item.location}
                </p>
                {item.coursework?.length ? (
                  <ul aria-label="Relevant coursework" className="flex flex-wrap gap-2 pt-2">
                    {item.coursework.map((course) => (
                      <li key={course} className="tag-chip">
                        {course}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-3xl">
            The full work history is on the experience page.
          </h2>
          <Link href="/experience" className={buttonVariants({ variant: "primary" })}>
            View experience
          </Link>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
