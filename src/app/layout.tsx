import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { PageTransition } from "@/components/layout/page-transition";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { assetPath } from "@/lib/asset-path";
import { profile } from "@/lib/content";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ngenzi.neotha.com";

const absoluteAssetUrl = (path: string) =>
  new URL(assetPath(path), SITE_URL).toString();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Patrick Ngenzi - Cybersecurity, IAM, Cloud Security & DevSecOps",
    template: "%s - Patrick Ngenzi",
  },
  description:
    "Portfolio of Patrick Ngenzi - cybersecurity, IAM, cloud security, network security, DevSecOps, secure web platforms, and server-management experience.",
  applicationName: "Patrick Ngenzi Portfolio",
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    "Patrick Ngenzi",
    "Security Analyst",
    "IAM Analyst",
    "Cloud Security Analyst",
    "SOC Analyst",
    "NOC Analyst",
    "DevSecOps",
    "Cybersecurity",
    "Network Security Administrator",
    "Identity and Access Management",
    "Microsoft Entra ID",
    "Conditional Access",
    "Azure Security",
    "Microsoft Sentinel",
    "Cloud Security",
    "Network Defense",
    "Fortinet",
    "Palo Alto",
    "Ontario Canada",
    "Neotha",
    "Server Management",
    "Secure Web Platforms",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  manifest: assetPath("/favicon/site.webmanifest"),
  icons: {
    icon: [
      {
        url: assetPath("/favicon/favicon-16x16.png"),
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: assetPath("/favicon/favicon-32x32.png"),
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: assetPath("/favicon/favicon.ico"),
    apple: assetPath("/favicon/apple-touch-icon.png"),
  },
  openGraph: {
    title: "Patrick Ngenzi - Cybersecurity, IAM, Cloud Security & DevSecOps",
    description:
      "IAM, cloud security, network defense, DevSecOps, client platform, and server-management experience.",
    url: SITE_URL,
    siteName: "Patrick Ngenzi Portfolio",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: absoluteAssetUrl("/favicon/android-chrome-512x512.png"),
        width: 512,
        height: 512,
        alt: "Patrick Ngenzi - Security Analyst & DevSecOps",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Patrick Ngenzi - Cybersecurity, IAM, Cloud Security & DevSecOps",
    description:
      "IAM, cloud security, network defense, DevSecOps, client platform, and server-management experience.",
    images: [absoluteAssetUrl("/favicon/android-chrome-512x512.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeInitScript = `
(function(){
  try {
    var key='portfolio-theme';
    var stored=localStorage.getItem(key);
    var systemDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolved=(stored==='dark'||stored==='light')?stored:(systemDark?'dark':'light');
    var d=document.documentElement;
    if(resolved==='dark'){d.classList.add('dark');}
    d.style.colorScheme=resolved;
  } catch(e){}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  jobTitle: profile.shortTitle,
  description: profile.summary,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: profile.office.streetAddress,
    addressLocality: profile.office.addressLocality,
    addressRegion: profile.office.addressRegion,
    postalCode: profile.office.postalCode,
    addressCountry: profile.office.addressCountry,
  },
  sameAs: [
    profile.links.linkedin,
    profile.links.github,
  ],
  knowsAbout: [
    "Identity and Access Management",
    "Microsoft Entra ID",
    "Conditional Access",
    "Microsoft Azure",
    "Microsoft Sentinel",
    "Network Security",
    "Fortinet",
    "Palo Alto",
    "DevSecOps",
    "Zero Trust",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} min-h-dvh`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="relative flex min-h-dvh flex-col">
            <SiteHeader />
            <PageTransition>
              <div id="main-content">{children}</div>
            </PageTransition>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
