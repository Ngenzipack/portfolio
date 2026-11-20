import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { assetPath } from "@/lib/asset-path";
import {
  certifiedCredentials,
  upcomingCredentials,
  type Credential,
} from "@/lib/content";
import { cn } from "@/lib/utils";

function CredentialItem({ credential, compact }: { credential: Credential; compact: boolean }) {
  const variant =
    credential.status === "Certified" ? "success" : credential.status === "In progress" ? "warning" : "muted";
  const date = credential.earned
    ? credential.earned.startsWith("Valid")
      ? credential.earned
      : `Earned ${credential.earned}`
    : credential.target
      ? `Target: ${credential.target}`
      : null;

  return (
    <li className={cn("card-surface flex h-full flex-col gap-3", compact ? "p-4" : "p-5 md:p-6")}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {credential.badgeIcon ? (
            <Image
              src={assetPath(credential.badgeIcon)}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
            />
          ) : null}
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--accent-strong)]">
            {credential.shortName}
          </p>
        </div>
        <Badge variant={variant}>{credential.status}</Badge>
      </div>
      <p className={cn("subhead text-[var(--foreground)]", compact ? "text-base" : "text-lg")}>
        {credential.name}
      </p>
      <p className="text-sm text-[var(--muted-foreground)]">
        {credential.issuer}
        {date ? ` · ${date}` : null}
      </p>
      {!compact && credential.acquiredSkills?.length ? (
        <ul className="flex flex-wrap gap-2">
          {credential.acquiredSkills.map((skill) => (
            <li key={skill} className="tag-chip">
              {skill}
            </li>
          ))}
        </ul>
      ) : null}
      {credential.credentialUrl ? (
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2">
          {[{ label: "Verify credential", href: credential.credentialUrl }, ...(credential.extraLinks ?? [])].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-sm"
            >
              <span>{link.label}</span>
              <span aria-hidden className="arrow">
                &rarr;
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      ) : credential.verificationPlaceholder ? (
        <p className="mt-auto text-xs text-[var(--muted-foreground)]">
          Verification link: {credential.verificationPlaceholder}
        </p>
      ) : null}
    </li>
  );
}

type CredentialListProps = {
  compact?: boolean;
  headingLevel?: "h2" | "h3";
};

/** Certifications split into "Certified" and "In progress and planned". */
export function CredentialList({ compact = false, headingLevel = "h3" }: CredentialListProps) {
  const Heading = headingLevel;
  const groups = [
    { title: "Certified", items: certifiedCredentials },
    { title: "In progress and planned", items: upcomingCredentials },
  ];

  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.title} className="space-y-3">
          <Heading className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
            {group.title}
          </Heading>
          <ul className={cn("grid gap-3", compact ? "sm:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3")}>
            {group.items.map((credential) => (
              <CredentialItem key={credential.name} credential={credential} compact={compact} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
