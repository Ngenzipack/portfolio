import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[2px] border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--foreground)]",
          "placeholder:text-[var(--muted-foreground)]/70",
          "transition-colors duration-200",
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
Input.displayName = "Input";

export { Input };
