import type { Metadata } from "next";

import { assetPath } from "@/lib/asset-path";
import { profile } from "@/lib/content";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ngenzi.neotha.com";

/** Full site title, used on the home page and as the default share title. */
export const SITE_TITLE = `${profile.name} | ${profile.headline}`;

export const absoluteUrl = (path: string) => new URL(assetPath(path), SITE_URL).toString();

export const SHARE_IMAGE = {
  url: absoluteUrl("/og/share.png"),
  width: 1200,
  height: 630,
  alt: `${profile.name}, ${profile.headline}`,
};

type PageMetadataInput = {
  /** Short page name, e.g. "About". Omit for the home page. */
  title?: string;
  description: string;
  /** Route path with trailing slash, e.g. "/about/". */
  path: string;
};

/**
 * Builds complete per-page metadata. Next.js replaces (not merges) nested objects such as
 * openGraph, so every page must send its own full set or it inherits the home page's values.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = title ? `${title} | ${profile.name} – ${profile.title}` : SITE_TITLE;
  const url = absoluteUrl(path);

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: `${profile.name} – ${profile.title}`,
      locale: "en_CA",
      type: path === "/" ? "profile" : "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}
