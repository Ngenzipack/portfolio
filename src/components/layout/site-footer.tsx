import { Link } from "@/components/link";

import { profile, socialLinks } from "@/lib/content";

const navigate = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-[var(--background)]">
      <div className="page-gutter-x mx-auto w-full max-w-[var(--container-max)] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]">
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16 md:py-20">
          <div className="space-y-6">
            <p className="section-eyebrow">Contact</p>
            <p className="headline text-3xl text-[var(--foreground)] md:text-5xl">
              Let&apos;s build security outcomes that protect users and keep your platform moving.
            </p>
            <p className="max-w-md text-base leading-relaxed text-[var(--muted-foreground)]">
              If you need IAM, cloud security, endpoint defense, network hardening, or DevSecOps delivery support, email me directly.
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

          <div className="space-y-4">
            <p className="section-eyebrow">Availability</p>
            <div className="space-y-1.5 text-sm leading-relaxed text-[var(--muted-foreground)]">
              <p className="text-[var(--foreground)]">{profile.shortTitle}</p>
              <address className="space-y-1.5 not-italic">
                <p>{profile.office.room}</p>
                <p>{profile.office.displayAddress}</p>
              </address>
              <p>{profile.location}</p>
              <p>{profile.availability}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:gap-10">
            <div className="space-y-4">
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
            </div>
            <div className="space-y-4">
              <p className="section-eyebrow">Online</p>
              <ul className="space-y-2 text-sm">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-baseline gap-1.5 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden className="text-[10px]">
                        &#8599;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] py-6">
          <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)] md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 Patrick Ngenzi</p>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <p>Last updated: May 2026</p>
              <Link href="/privacy" className="hover:text-[var(--foreground)]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
