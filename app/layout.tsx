import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Inter } from "next/font/google";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: `${siteConfig.positioning} Specializing in high-performance web platforms and autonomous AI systems.`,
  authors: [{ name: siteConfig.name, url: "https://whiteowllabs.in" }],
  keywords: [
    "White Owl Labs",
    "Software Engineering Studio",
    "Enterprise AI Solutions",
    "Autonomous Agents",
    "RAG Systems",
    "Next.js Development Studio",
    "Web Performance Optimization"
  ],
  metadataBase: new URL("https://whiteowllabs.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whiteowllabs.in",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.positioning,
    siteName: siteConfig.name,
    images: [
      {
        url: "/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "White Owl Labs - Software & AI Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.positioning,
    images: ["/logo-dark.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${dmSans.variable} ${inter.variable} light h-full antialiased`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: "https://whiteowllabs.in",
              logo: "https://whiteowllabs.in/logo-light.png",
              description: siteConfig.positioning,
              email: siteConfig.contact.email,
              telephone: siteConfig.contact.phone,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone,
                contactType: "Customer Support",
                email: siteConfig.contact.email,
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                siteConfig.contact.github,
              ],
              knowsAbout: [
                "Full-Stack Web Development",
                "Next.js App Router",
                "TypeScript",
                "Artificial Intelligence",
                "Enterprise RAG Models",
                "Autonomous Agents",
                "Cloud Distributed Systems"
              ],
            }),
          }}
        />
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = saved || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        {/* Skip to main content link for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded-md font-medium text-sm shadow-md focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
