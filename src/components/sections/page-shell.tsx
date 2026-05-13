import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
};

type PageIntroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  index?: string;
  meta?: React.ReactNode;
  className?: string;
  align?: "left" | "split";
};

const widthClass: Record<NonNullable<PageShellProps["width"]>, string> = {
  default: "max-w-[var(--container-max)]",
  wide: "max-w-[1400px]",
  narrow: "max-w-5xl",
};

export function PageShell({ children, className, width = "default" }: PageShellProps) {
  return (
    <main
      className={cn(
        "page-gutter-x mx-auto w-full flex-1",
        "py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] md:py-10 lg:py-12",
        widthClass[width],
        className,
      )}
    >
      {children}
    </main>
  );
}

export function PageIntro({
  title,
  description,
  eyebrow,
  index,
  meta,
  className,
  align = "split",
}: PageIntroProps) {
  if (align === "split") {
    return (
      <section
        className={cn(
          "relative grid gap-7 border-b border-[var(--border)] pb-8 md:grid-cols-[auto_1fr] md:gap-12 md:pb-10",
          className,
        )}
      >
        <div className="flex min-w-0 flex-col gap-3 md:max-w-[12rem]">
          {eyebrow ? (
            <p className="section-eyebrow">{eyebrow}</p>
          ) : null}
          {index ? (
            <p className="numbered-marker text-[var(--foreground)]">{index}</p>
          ) : null}
          {meta ? <div className="text-sm text-[var(--muted-foreground)]">{meta}</div> : null}
        </div>
        <div className="min-w-0 space-y-5">
          <h1 className="headline text-balance text-4xl text-[var(--foreground)] md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="lead max-w-3xl text-pretty text-[var(--foreground-soft)]">
              {description}
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative space-y-4 border-b border-[var(--border)] pb-7 md:pb-9",
        className,
      )}
    >
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h1 className="headline text-balance text-4xl text-[var(--foreground)] md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="lead max-w-3xl text-pretty text-[var(--foreground-soft)]">
          {description}
        </p>
      ) : null}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  index?: string;
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  index,
  className,
  action,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4 border-b border-[var(--border)] pb-5 md:grid md:grid-cols-[auto_1fr_auto] md:items-end md:gap-10 md:pb-6",
        className,
      )}
    >
      <div className="flex flex-col gap-2 md:max-w-[10rem]">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        {index ? (
          <p className="numbered-marker text-[var(--foreground)]">{index}</p>
        ) : null}
      </div>
      <div className="min-w-0 space-y-3">
        <h2 className="subhead text-balance text-2xl text-[var(--foreground)] sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--muted-foreground)]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <div className="w-full shrink-0 pt-1 md:w-auto md:justify-self-end md:self-end md:pt-0">
          {action}
        </div>
      ) : null}
    </header>
  );
}
