import type { FlowDiagram } from "@/lib/content";

/**
 * Architecture / data-flow diagram built from HTML so it reflows: stages run left to right
 * on wide screens and top to bottom on phones, and screen readers get an ordered list.
 */
export function FlowDiagramView({ diagram }: { diagram: FlowDiagram }) {
  const last = diagram.stages.length - 1;

  return (
    <figure className="space-y-3">
      <p className="section-eyebrow">{diagram.title}</p>
      <ol className="flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0">
        {diagram.stages.map((stage, idx) => (
          <li key={stage.label} className="flex min-w-0 flex-col items-stretch lg:flex-1 lg:flex-row">
            <div className="flex-1 rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--background-elev)] p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-strong)]">
                {stage.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {stage.nodes.map((node) => (
                  <li
                    key={node}
                    className="rounded-[var(--radius-sm)] bg-[var(--surface-soft)] px-2 py-1.5 text-xs leading-snug text-[var(--foreground)]"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
            {idx < last ? (
              <span
                aria-hidden
                className="flex items-center justify-center py-1 text-[var(--muted-foreground)] lg:px-1.5 lg:py-0"
              >
                <span className="lg:hidden">&darr;</span>
                <span className="hidden lg:inline">&rarr;</span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
      <figcaption className="text-xs leading-relaxed text-[var(--muted-foreground)] md:text-sm">
        {diagram.caption}
      </figcaption>
    </figure>
  );
}
