import { Link } from "@/components/link";
import { MotionReveal } from "@/components/sections/motion-reveal";
import { PageIntro, PageShell, SectionHeader } from "@/components/sections/page-shell";
import { buttonVariants } from "@/components/ui/button-variants";
import { skillTiers } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Skills",
  description:
    "Patrick Ngenzi's security skills by depth: daily hands-on Entra ID, Defender for Office 365, Intune and FortiAnalyzer, plus lab work in Sentinel, KQL and Azure networking.",
  path: "/skills/",
});

export default function SkillsPage() {
  return (
    <PageShell className="space-y-14 md:space-y-20">
      <PageIntro
        eyebrow="Skills"
        title="Skills grouped by how deeply I use them."
        description="Daily tools from my current role come first, then what I have built in labs, projects and previous roles, then what I know well enough to work with."
      />

      <nav aria-label="Skill tiers">
        <ul className="flex flex-wrap gap-2">
          {skillTiers.map((tier, idx) => (
            <li key={tier.tier}>
              <a
                href={`#tier-${idx}`}
                className="inline-flex min-h-11 items-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--background-elev)] px-4 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
              >
                {tier.tier}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {skillTiers.map((tier, idx) => (
        <section key={tier.tier} className="space-y-8">
          <SectionHeader id={`tier-${idx}`} eyebrow="Depth" title={tier.tier} description={tier.description} />
          <div className="grid gap-4 md:grid-cols-2">
            {tier.groups.map((group) => (
              <article key={group.domain} className="card-surface space-y-4 p-6">
                <h3 className="subhead text-lg text-[var(--foreground)]">{group.domain}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="tag-chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ))}

      <MotionReveal>
        <section className="grid gap-6 border-t border-[var(--border)] pt-12 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
          <h2 className="subhead text-balance text-2xl text-[var(--foreground)] md:text-3xl">
            See these skills applied in real projects.
          </h2>
          <Link href="/projects" className={buttonVariants({ variant: "primary" })}>
            View projects
          </Link>
        </section>
      </MotionReveal>
    </PageShell>
  );
}
