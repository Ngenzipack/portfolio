import { SafeEmail } from "@/components/profile/safe-email";
import { CredentialList } from "@/components/sections/credential-list";
import { PageIntro, PageShell, SectionHeader } from "@/components/sections/page-shell";
import { buttonVariants } from "@/components/ui/button-variants";
import { assetPath } from "@/lib/asset-path";
import { education, experience, otherExperience, profile, resumeFiles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resume",
  description:
    "Download Patrick Ngenzi's resume as a PDF, in a cybersecurity version or a network security version, or read the summary of roles, certifications and education.",
  path: "/resume/",
});

export default function ResumePage() {
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Resume"
        title="Resume"
        description="Three PDF versions with the same facts: a cybersecurity version, a network security version and a full master version."
        meta={
          <div className="space-y-1.5">
            <p className="text-[var(--foreground)]">{profile.headline}</p>
            <p>{profile.location}</p>
            <SafeEmail className="underline-offset-4 hover:underline" />
          </div>
        }
      />

      <section
        aria-labelledby="download-heading"
        className="grid gap-6 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-8"
      >
        <div className="space-y-2">
          <h2 id="download-heading" className="subhead text-2xl text-[var(--foreground)]">
            Download
          </h2>
          <p className="text-sm text-[var(--muted-foreground)]">
            Choose the version that matches the role. All three are generated from this site, so they always match it.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
          <a
            href={assetPath(resumeFiles.cybersecurity.href)}
            download
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            Cybersecurity (PDF)
          </a>
          <a
            href={assetPath(resumeFiles.network.href)}
            download
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Network security (PDF)
          </a>
          <a
            href={assetPath(resumeFiles.master.href)}
            download
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            Master (PDF)
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Summary" title="Profile" />
        <p className="lead max-w-3xl">{profile.summary}</p>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
            Target roles
          </h3>
          <ul className="flex flex-wrap gap-2">
            {profile.targetRoles.map((role) => (
              <li key={role} className="tag-chip">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Experience" title="Roles" />
        <ol className="space-y-8">
          {experience.map((item) => (
            <li
              key={`${item.role}-${item.organization}`}
              className="grid gap-4 border-b border-[var(--border)] pb-8 md:grid-cols-[11rem_1fr] md:gap-12"
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[var(--foreground)]">{item.period}</p>
                {item.location ? <p className="text-sm text-[var(--muted-foreground)]">{item.location}</p> : null}
              </div>
              <div className="max-w-3xl space-y-3">
                <h3 className="subhead text-xl text-[var(--foreground)]">
                  {item.role}, <span className="text-[var(--accent-strong)]">{item.organization}</span>
                </h3>
                {item.scope ? <p className="text-sm text-[var(--muted-foreground)]">{item.scope}</p> : null}
                {item.concurrentNote ? (
                  <p className="text-sm text-[var(--muted-foreground)]">Concurrent role: {item.concurrentNote}</p>
                ) : null}
                <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--foreground-soft)] marker:text-[var(--accent-strong)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        {otherExperience.map((item) => (
          <p key={item.role} className="max-w-3xl text-sm text-[var(--muted-foreground)]">
            <strong className="font-semibold text-[var(--foreground)]">{item.role}</strong>, {item.organization},{" "}
            {item.period}. {item.summary}
          </p>
        ))}
      </section>

      <section className="space-y-8">
        <SectionHeader eyebrow="Credentials" title="Certifications" />
        <CredentialList compact />
      </section>

      <section className="space-y-6">
        <SectionHeader eyebrow="Education" title="Education" />
        {education.map((item) => (
          <p key={item.program} className="text-base text-[var(--foreground)]">
            <strong className="font-semibold">
              {item.credential}, {item.program}
            </strong>{" "}
            · {item.institution}, {item.location} · {item.period}
          </p>
        ))}
      </section>
    </PageShell>
  );
}
