import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "brand" | "accent" | "muted" | "outline" | "success" | "warning";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  brand:
    "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]",
  accent:
    "bg-[var(--accent-soft)] text-[var(--foreground)] border-[var(--border-strong)]",
  muted:
    "bg-[var(--surface-soft)] text-[var(--muted-foreground)] border-[var(--border)]",
  outline:
    "bg-transparent text-[var(--foreground)] border-[var(--foreground)]",
  success:
    "bg-[color:var(--success)]/12 text-[var(--success)] border-[color:var(--success)]/30",
  warning:
    "bg-[color:var(--warning)]/12 text-[var(--warning)] border-[color:var(--warning)]/30",
};

export function Badge({
  className,
  variant = "muted",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-[2px] border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
