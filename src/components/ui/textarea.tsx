import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-32 w-full rounded-[2px] border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)]",
          "placeholder:text-[var(--muted-foreground)]/70",
          "transition-colors duration-200 resize-y",
          "hover:border-[var(--border-strong)]",
          "focus:border-[var(--foreground)]",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
