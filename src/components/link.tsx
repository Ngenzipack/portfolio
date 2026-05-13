import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * Static export: default `prefetch={false}` avoids RSC `__next.*.txt` requests
 * that do not exist on Apache and show as 404 in the browser console.
 */
export function Link({
  prefetch = false,
  ...props
}: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
