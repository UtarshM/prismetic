import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { LenisProvider } from "@/components/lenis-provider";

export const metadata: Metadata = {
  title: { default: "Prismtec | Industrial Filling & Packaging", template: "%s | Prismtec" },
  description: "Premium filling, capping, labelling and turnkey bottling lines for global industries.",
  metadataBase: new URL("https://www.prismtec.com"),
  openGraph: {
    title: "Prismtec | Industrial Filling & Packaging",
    description: "Premium filling, capping, labelling and turnkey bottling lines for global industries.",
    images: ["/prismtec-assets/assets/img/website-banner.webp"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PRISMTECH PACKAGING SOLUTIONS PVT. LTD.",
    email: "info@prismtec.com",
    telephone: "+91-22-49240497",
    url: "https://www.prismtec.com",
  };
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <LenisProvider />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
