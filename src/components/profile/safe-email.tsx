import { profile } from "@/lib/content";

type SafeEmailProps = {
  className?: string;
  /** Visible text. Defaults to the email address. */
  label?: string;
  /** Append the site's standard arrow. */
  withArrow?: boolean;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Email link that stays readable behind Cloudflare. Cloudflare's Email Address Obfuscation
 * rewrites addresses to "[email protected]" unless they sit between email_off comments,
 * which React cannot emit directly, so the link is rendered as raw HTML.
 */
export function SafeEmail({ className, label, withArrow = false }: SafeEmailProps) {
  const email = escapeHtml(profile.email);
  const text = escapeHtml(label ?? profile.email);
  const arrow = withArrow ? ' <span aria-hidden="true" class="arrow">&rarr;</span>' : "";
  const html = `<!--email_off--><a href="mailto:${email}" class="${escapeHtml(className ?? "")}"><span>${text}</span>${arrow}</a><!--/email_off-->`;

  return <span className="contents" dangerouslySetInnerHTML={{ __html: html }} />;
}
