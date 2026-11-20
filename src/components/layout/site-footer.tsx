import { Link } from "@/components/link";
import { SafeEmail } from "@/components/profile/safe-email";
import { profile, socialLinks } from "@/lib/content";

const navigate = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

/** Evaluated once at build time, so the date always matches the deployed build. */
const buildDate = new Date();
const lastUpdated = buildDate.toLocaleDateString("en-CA", { month: "long", year: "numeric" });

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="page-gutter-x mx-auto w-full max-w-[var(--container-max)] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]">
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16 md:py-16">
          <div className="space-y-5">
            <p className="section-eyebrow">Contact</p>
            <p className="subhead text-2xl text-[var(--foreground)] md:text-3xl">
              Hiring a Security Analyst in Ontario? I&apos;d like to hear about the role.
            </p>
            <SafeEmail withArrow className="editorial-link text-base text-[var(--foreground)]" />
          </div>

          <div className="space-y-4">
            <p className="section-eyebrow">Availability</p>
            <div className="space-y-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">
              <p className="text-[var(--foreground)]">{profile.headline}</p>
              <p>{profile.location}</p>
              <p>{profile.availability}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:gap-10">
            <nav aria-label="Footer navigation" className="space-y-4">
              <p className="section-eyebrow">Navigate</p>
              <ul className="space-y-2 text-sm">
                {navigate.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-4">
              <p className="section-eyebrow">Online</p>
              <ul className="space-y-2 text-sm">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline gap-1.5 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden>&rarr;</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] py-6">
          <div className="flex flex-col gap-3 text-xs text-[var(--muted-foreground)] md:flex-row md:items-center md:justify-between">
            <p>&copy; {buildDate.getFullYear()} {profile.name}</p>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <p>Last updated {lastUpdated}</p>
              <Link href="/privacy" className="hover:text-[var(--foreground)]">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
