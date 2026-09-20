import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { site } from "./site";
import { Geist_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  applicationName: "Paul Emas Portfolio",
  authors: [{ name: "Paul Emas" }],
  keywords: [
    "Paul Emas",
    "Senior Frontend Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Vue",
    "Fintech",
    "SaaS",
    "AI-powered products",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    type: "website",
    locale: "en_GB",
    siteName: "Paul Emas",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
