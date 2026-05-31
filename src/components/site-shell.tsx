"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { company } from "@/lib/site-data";

const nav = [
  ["/", "Home"], ["/about", "About"], ["/products", "Products"], ["/industries", "Industries"], ["/clients", "Clients"], ["/projects", "Projects"], ["/resources", "Resources"], ["/gallery", "Gallery"], ["/global-presence", "Global Presence"], ["/contact", "Contact"], ["/request-quote", "Request Quote"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.webp" alt="Prismtec logo" width={210} height={70} priority className="h-14 w-auto object-contain" />
          </Link>
          <nav className="hidden gap-5 text-sm md:flex">
            {nav.map(([href, label]) => (
              <Link key={href} href={href} className={`transition ${pathname === href ? "text-amber-300" : "text-slate-600 hover:text-slate-900"}`}>{label}</Link>
            ))}
          </nav>
        </div>
      </header>
      <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>{children}</motion.main>
      <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6">
          <div>
            <Image src="/logo.webp" alt="Prismtec logo" width={210} height={70} className="mb-3 h-14 w-auto object-contain" />
            <p className="text-amber-300">{company.name}</p>
            <p>{company.headOffice}</p>
          </div>
          <div>
            <p>{company.email}</p>
            <p>{company.phones.join(" / ")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
