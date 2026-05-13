"use client";

import { Link } from "@/components/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { profile } from "@/lib/content";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .filter(Boolean)
  .slice(0, 2)
  .join("");

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      closeMenu();
    });
  }, [pathname, closeMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        "border-b border-transparent",
        scrolled
          ? "bg-[var(--background)] border-[var(--border)]"
          : "bg-[var(--background)]",
      )}
    >
      <div className="page-gutter-x mx-auto w-full max-w-[var(--container-max)] pt-[env(safe-area-inset-top,0px)]">
        <div className="grid h-[68px] grid-cols-[auto_1fr_auto] items-center gap-4 md:h-[78px] lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            aria-label={`${profile.name} - Home`}
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded-[var(--radius-sm)]"
          >
            <span
              aria-hidden
              className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-transparent bg-gradient-to-br from-[var(--accent)] to-[var(--brand)] font-display text-[13px] font-semibold text-white shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md"
            >
              {initials}
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-[15px] text-[var(--foreground)]">
                P. NGENZI
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                Security &amp; DevSecOps
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden justify-self-center lg:block"
          >
            <ul className="flex items-center gap-0.5 text-[12px] font-semibold uppercase tracking-[0.14em]">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative inline-flex items-center px-3.5 py-2 transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
                        active
                          ? "text-[var(--accent-strong)]"
                          : "text-[var(--muted-foreground)] hover:text-[var(--accent-strong)]",
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden
                        className={cn(
                          "pointer-events-none absolute inset-x-3.5 -bottom-[10px] h-[2px] origin-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--brand)] transition-transform duration-300",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-75",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-[var(--radius-md)] border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)] hover:shadow-lg md:inline-flex"
            >
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)] animate-pulse-ring"
              />
              Available
            </Link>
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 min-h-11 w-11 min-w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background-elev)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden
              >
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="lg:hidden max-h-[min(100dvh,100svh)] overflow-y-auto overscroll-contain border-t border-[var(--border)] bg-[var(--background)]"
        >
          <nav
            aria-label="Mobile navigation"
            className="page-gutter-x mx-auto w-full max-w-[var(--container-max)] py-6"
          >
            <p className="section-eyebrow mb-4">Navigate</p>
            <ul className="grid divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {navItems.map((item, idx) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-baseline justify-between px-1 py-4 transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
                        active
                          ? "text-[var(--foreground)]"
                          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                      )}
                    >
                      <span className="font-display text-2xl">
                        {item.label}
                      </span>
                      <span className="numbered-marker">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex flex-col gap-4 border-t border-[var(--border)] pt-6">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--accent)] bg-[var(--accent)] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white shadow-md transition-transform active:scale-[0.98]"
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--success)] animate-pulse-ring"
                />
                Start a conversation
              </Link>
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                <a
                  href={`mailto:${profile.email}`}
                  className="min-h-11 break-all text-[var(--foreground)] underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
                <span aria-hidden className="hidden sm:inline">
                  &middot;
                </span>
                <span className="w-full sm:w-auto">{profile.location}</span>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
