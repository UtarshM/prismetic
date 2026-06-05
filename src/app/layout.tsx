import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { LenisProvider } from "@/components/lenis-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-tech",
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="en" className={`${plusJakartaSans.variable} ${orbitron.variable}`}>
      <body className="bg-white text-slate-900 antialiased selection:bg-blue-600/20 selection:text-slate-900">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
        <LenisProvider />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

