import Image from "next/image";

import { assetPath } from "@/lib/asset-path";
import { profile } from "@/lib/content";
import { cn } from "@/lib/utils";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

type ProfilePhotoProps = {
  className?: string;
  /** Rendered pixel size used for the image's intrinsic dimensions. */
  size?: number;
  priority?: boolean;
};

/**
 * Headshot slot. Shows the photo set in `profile.photo`, or an initials monogram until then,
 * so the layout looks complete either way.
 */
export function ProfilePhoto({ className, size = 320, priority = false }: ProfilePhotoProps) {
  const frame = cn(
    "relative aspect-square overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--surface-soft)] shadow-sm",
    className,
  );

  if (profile.photo) {
    return (
      <div className={frame}>
        <Image
          src={assetPath(profile.photo)}
          alt={`Headshot of ${profile.name}`}
          width={size}
          height={size}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${profile.name} initials`}
      className={cn(frame, "flex items-center justify-center bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface-soft)]")}
    >
      <span
        aria-hidden
        data-initials={initials}
        className="font-display font-semibold tracking-wide text-[var(--accent-strong)] before:content-[attr(data-initials)]"
      />
    </div>
  );
}
