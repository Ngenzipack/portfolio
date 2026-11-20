"use client";

import { useEffect } from "react";

import { GA_ID } from "@/lib/analytics-config";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Loads Google Analytics only when NEXT_PUBLIC_GA_ID is set at build time, and never for
 * visitors who send Global Privacy Control or Do Not Track. Same env variable as the
 * Sylva Renovations and Neotha sites.
 */
export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
    if (nav.globalPrivacyControl || navigator.doNotTrack === "1") return;

    window.dataLayer = window.dataLayer ?? [];
    // gtag expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    const gtag: (...args: unknown[]) => void = function () { window.dataLayer!.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
