"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { company, productsByCategory } from "@/lib/site-data";

const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/industries", "Industries"],
  ["/clients", "Clients"],
  ["/projects", "Projects"],
  ["/resources", "Resources"],
  ["/gallery", "Gallery"],
  ["/global-presence", "Global Presence"],
  ["/contact", "Contact"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const groupedMachines = useMemo(() => productsByCategory, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <Link href="/" className="flex items-center">
            <Image src="/logo.webp" alt="Prismtec logo" width={210} height={70} priority className="h-11 w-auto object-contain sm:h-14" />
          </Link>

          <nav className="hidden items-center gap-5 text-[15px] md:flex">
            {nav.map(([href, label]) => (
              <Link key={href} href={href} className={`transition ${pathname === href ? "font-semibold text-amber-700" : "text-slate-600 hover:text-slate-900"}`}>
                {label}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1 transition ${pathname.startsWith("/products") ? "font-semibold text-amber-700" : "text-slate-600 hover:text-slate-900"}`}
                onClick={() => setProductsOpen((prev) => !prev)}
              >
                Products <ChevronDown size={16} />
              </button>
              {productsOpen ? (
                <div className="absolute right-0 top-10 w-[840px] rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_48px_rgba(15,23,42,0.14)]">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">Machine Navigator</p>
                    <Link href="/products" className="text-sm font-semibold text-amber-700">View All Machines</Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {groupedMachines.map((group) => (
                      <div key={group.slug} className="rounded-xl border border-slate-200 p-3">
                        <Link href={`/products/${group.slug}`} className="text-sm font-semibold text-slate-900">{group.title}</Link>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {group.items.slice(0, 6).map((machine) => (
                            <span key={machine.id} className="premium-chip px-2 py-1 text-[11px]">{machine.title}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <Link href="/request-quote" className="premium-cta px-4 py-2 text-sm transition hover:opacity-90">Get Quote</Link>
          </nav>

          <button type="button" className="inline-flex items-center rounded-lg border border-slate-300 p-2 text-slate-700 md:hidden" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
            <nav className="grid gap-2">
              {[...nav].map(([href, label]) => (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={`rounded-lg px-3 py-2 text-sm ${pathname === href ? "bg-amber-50 font-semibold text-amber-800" : "text-slate-700"}`}>
                  {label}
                </Link>
              ))}
              <Link href="/products" onClick={() => setMenuOpen(false)} className={`rounded-lg px-3 py-2 text-sm ${pathname.startsWith("/products") ? "bg-amber-50 font-semibold text-amber-800" : "text-slate-700"}`}>
                All Products
              </Link>
              <div className="rounded-lg border border-slate-200 p-2">
                <button type="button" className="flex w-full items-center justify-between px-1 py-1 text-sm font-medium text-slate-800" onClick={() => setMobileExpanded((prev) => (prev === "machines" ? null : "machines"))}>
                  Machine Navigator <ChevronDown size={16} />
                </button>
                {mobileExpanded === "machines" ? (
                  <div className="mt-2 grid gap-2">
                    {groupedMachines.map((group) => (
                      <div key={group.slug} className="rounded-lg border border-slate-200 p-2">
                        <Link href={`/products/${group.slug}`} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-slate-900">{group.title}</Link>
                        <p className="mt-1 text-xs text-slate-500">{group.items.length} machines</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <Link href="/request-quote" onClick={() => setMenuOpen(false)} className="premium-cta mt-1 px-3 py-2 text-center text-sm">Get Quote</Link>
            </nav>
          </div>
        ) : null}
      </header>

      <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        {children}
      </motion.main>

      <footer className="border-t border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-10 text-sm text-slate-600 sm:px-6 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6">
          <div className="max-w-md">
            <Image src="/logo.webp" alt="Prismtec logo" width={210} height={70} className="mb-3 h-11 w-auto object-contain sm:h-14" />
            <p className="font-semibold text-amber-700">{company.name}</p>
            <p className="mt-1">{company.headOffice}</p>
          </div>
          <div>
            <p>{company.email}</p>
            <p>{company.phones.join(" / ")}</p>
            <Link href="/products" className="mt-2 inline-block font-medium text-amber-700">Explore All Machines</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
