"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { company } from "@/lib/site-data";

const nav = [
  ["/", "Home"], ["/about", "About"], ["/products", "Products"], ["/industries", "Industries"], ["/clients", "Clients"], ["/projects", "Projects"], ["/resources", "Resources"], ["/gallery", "Gallery"], ["/global-presence", "Global Presence"], ["/contact", "Contact"], ["/request-quote", "Request Quote"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <Link href="/" className="flex items-center">
            <Image src="/logo.webp" alt="Prismtec logo" width={210} height={70} priority className="h-11 w-auto object-contain sm:h-14" />
          </Link>
          <nav className="hidden items-center gap-6 text-[15px] md:flex">
            {nav.map(([href, label]) => (
              <Link key={href} href={href} className={`transition ${pathname === href ? "font-semibold text-amber-700" : "text-slate-600 hover:text-slate-900"}`}>{label}</Link>
            ))}
            <Link href="/request-quote" className="rounded-full border border-amber-400 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-400 hover:text-white">
              Get Quote
            </Link>
          </nav>
          <button
            type="button"
            className="inline-flex items-center rounded-lg border border-slate-300 p-2 text-slate-700 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
            <nav className="grid gap-2">
              {nav.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm ${pathname === href ? "bg-amber-50 font-semibold text-amber-800" : "text-slate-700"}`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
      <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>{children}</motion.main>
      <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-10 text-sm text-slate-600 sm:px-6 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6">
          <div>
            <Image src="/logo.webp" alt="Prismtec logo" width={210} height={70} className="mb-3 h-11 w-auto object-contain sm:h-14" />
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
