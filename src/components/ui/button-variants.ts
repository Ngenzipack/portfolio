import { cva } from "class-variance-authority";

/** Kept outside button.tsx so server components can build button classes for plain links. */
export const buttonVariants = cva(
  [
    "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] border text-[12px] font-semibold uppercase tracking-[0.14em]",
    "select-none transition-all duration-200",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "border-[var(--accent)] bg-[var(--accent)] text-[var(--background)] shadow-md hover:border-[var(--accent-strong)] hover:bg-[var(--accent-strong)] hover:shadow-lg",
        accent:
          "border-[var(--foreground)] bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
        outline:
          "border-[var(--accent)] bg-[var(--background-elev)] text-[var(--foreground)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-strong)]",
        ghost:
          "border-transparent text-[var(--foreground)] hover:bg-[var(--surface-soft)]",
        soft:
          "border-[var(--border-strong)] bg-[var(--surface-soft)] text-[var(--foreground)] hover:border-[var(--foreground)]",
        danger:
          "border-[var(--danger)] bg-[var(--danger)] text-white hover:opacity-90",
        link:
          "h-auto border-transparent p-0 text-[var(--foreground)] tracking-normal text-sm normal-case underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-11 px-4 py-2 text-[11px]",
        default: "h-11 px-6 py-2.5",
        lg: "h-12 px-8 py-3 text-[12px]",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);
