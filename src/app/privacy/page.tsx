import type { Metadata } from "next";
import { PageShell, PageIntro } from "@/components/sections/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Patrick Ngenzi portfolio website.",
};

export default function PrivacyPage() {
  return (
    <PageShell className="space-y-12 md:space-y-16">
      <PageIntro
        eyebrow="Legal"
        index="Privacy"
        title="Privacy Policy"
        description="I value your privacy and handle inquiry information with care and professional confidentiality."
      />

      <section className="card-surface space-y-5 p-6 md:p-8">
        <h2 className="subhead text-2xl text-[var(--foreground)]">How I handle your information</h2>
        <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
          When you contact me through email or the website form, I use the details you provide
          only to respond to your message, discuss opportunities, and coordinate follow-up.
        </p>
        <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
          I do not sell personal information. I keep communication data only as long as needed
          for professional correspondence, role discussions, or project collaboration.
        </p>
        <p className="text-base leading-relaxed text-[var(--muted-foreground)]">
          If you want your submitted contact information removed from my records, email
          <a href="mailto:ngenzipack@gmail.com" className="ml-1 underline-offset-4 hover:underline text-[var(--foreground)]">
            ngenzipack@gmail.com
          </a>
          .
        </p>
      </section>
    </PageShell>
  );
}
