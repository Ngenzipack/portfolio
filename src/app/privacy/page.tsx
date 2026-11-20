import { GA_ID } from "@/lib/analytics-config";
import { SafeEmail } from "@/components/profile/safe-email";
import { PageShell, PageIntro } from "@/components/sections/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How Patrick Ngenzi's portfolio site handles your information: no forms, no tracking cookies, and email replies used only for professional correspondence.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <PageShell className="space-y-12 md:space-y-16">
      <PageIntro
        eyebrow="Legal"
        title="Privacy Policy"
        description="I value your privacy and handle inquiry information with care and professional confidentiality."
      />

      <section className="card-surface space-y-5 p-6 md:p-8">
        <h2 className="subhead text-2xl text-[var(--foreground)]">How I handle your information</h2>
        <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
          This site has no contact form. When you email me, I use the details you provide
          only to respond to your message, discuss opportunities, and coordinate follow-up.
        </p>
        <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
          I do not sell personal information. I keep communication data only as long as needed
          for professional correspondence, role discussions, or project collaboration.
        </p>
        {GA_ID ? (
          <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
            I use Google Analytics to see which pages are visited and how people find the site. It records
            pages viewed, approximate city, device and referring site; Google Analytics 4 does not store IP
            addresses. It does
            not load if your browser sends Global Privacy Control or Do Not Track, and you can also block it
            with any content blocker.
          </p>
        ) : (
          <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
            This site does not use analytics or tracking cookies.
          </p>
        )}
        <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
          If you want your contact information removed from my records, email{" "}
          <SafeEmail className="text-[var(--foreground)] underline-offset-4 hover:underline" />.
        </p>
      </section>
    </PageShell>
  );
}
