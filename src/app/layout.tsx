import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Analytics } from "@/components/analytics";
import { PageTransition } from "@/components/layout/page-transition";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { assetPath } from "@/lib/asset-path";
import { certifiedCredentials, profile } from "@/lib/content";
import { pageMetadata, SITE_URL } from "@/lib/seo";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    description:
      "Patrick Ngenzi is a Security Analyst in North Bay, Ontario, with 6+ years in IT and security: Entra ID and Microsoft Defender investigations, Fortinet firewall review, and SC-300 and Security+ certifications.",
    path: "/",
  }),
  applicationName: `${profile.name} – ${profile.title}`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
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
  robots: {
    index: true,
    follow: true,
  },
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
  jobTitle: profile.title,
  description: profile.summary,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "North Bay",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Mohawk College" },
  hasCredential: certifiedCredentials.map((credential) => ({
    "@type": "EducationalOccupationalCredential",
    name: credential.name,
    credentialCategory: "certification",
    recognizedBy: { "@type": "Organization", name: credential.issuer },
  })),
  sameAs: [profile.links.linkedin, profile.links.github],
  knowsAbout: [
    "Identity and Access Management",
    "Microsoft Entra ID",
    "Conditional Access",
    "Microsoft Defender for Office 365",
    "Microsoft Sentinel",
    "KQL",
    "Fortinet",
    "Network Security",
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
        <Analytics />
      </body>
    </html>
  );
}
