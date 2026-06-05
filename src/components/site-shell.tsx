"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Layers, Phone, Mail } from "lucide-react";
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

  // Close dropdown on route change
  useEffect(() => {
    setProductsOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/80 shadow-[0_8px_32px_rgba(15,23,42,0.03)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:py-5">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Image 
                src="/logo.webp" 
                alt="Prismtec logo" 
                width={200} 
                height={60} 
                priority 
                className="h-9 w-auto object-contain sm:h-12 brightness-105 contrast-110" 
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-[14px] md:flex font-medium">
            {nav.map(([href, label]) => (
              <Link 
                key={href} 
                href={href} 
                className={`nav-link text-slate-600 hover:text-slate-900 transition-colors py-1 ${
                  pathname === href ? "active font-bold text-amber-700" : ""
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1.5 py-1 transition-colors hover:text-slate-900 ${
                  pathname.startsWith("/products") ? "font-bold text-amber-700" : "text-slate-600"
                }`}
                onClick={() => setProductsOpen((prev) => !prev)}
              >
                Products <ChevronDown size={14} className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {productsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-11 w-[820px] rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                  >
                    <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 font-mono">
                        <Layers size={14} className="text-amber-600" />
                        Machine Navigator
                      </div>
                      <Link 
                        href="/products" 
                        className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1 group"
                        onClick={() => setProductsOpen(false)}
                      >
                        View All Products
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {groupedMachines.map((group) => (
                        <div key={group.slug} className="rounded-xl border border-slate-100 bg-slate-50/30 p-4 transition-all hover:border-amber-500/10 hover:bg-slate-50/70">
                          <Link 
                            href={`/products/${group.slug}`} 
                            className="text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                            onClick={() => setProductsOpen(false)}
                          >
                            {group.title}
                          </Link>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {group.items.slice(0, 4).map((machine) => (
                              <span key={machine.id} className="premium-chip px-2 py-0.5 text-[9px]">{machine.title}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/request-quote" className="premium-cta px-5 py-2 text-xs uppercase tracking-wider">
              Get Quote
            </Link>
          </nav>

          <button 
            type="button" 
            className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50/50 p-2 text-slate-600 hover:text-slate-900 md:hidden" 
            onClick={() => setMenuOpen((prev) => !prev)} 
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="border-t border-slate-200 bg-white px-6 py-4 md:hidden overflow-hidden"
            >
              <nav className="grid gap-2">
                {nav.map(([href, label]) => (
                  <Link 
                    key={href} 
                    href={href} 
                    onClick={() => setMenuOpen(false)} 
                    className={`rounded-xl px-4 py-2.5 text-sm transition-colors ${
                      pathname === href ? "bg-amber-500/5 font-bold text-amber-700" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <Link 
                  href="/products" 
                  onClick={() => setMenuOpen(false)} 
                  className={`rounded-xl px-4 py-2.5 text-sm transition-colors ${
                    pathname.startsWith("/products") ? "bg-amber-500/5 font-bold text-amber-700" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  All Products
                </Link>
                
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 mt-2">
                  <button 
                    type="button" 
                    className="flex w-full items-center justify-between px-1 py-1 text-sm font-semibold text-slate-700" 
                    onClick={() => setMobileExpanded((prev) => (prev === "machines" ? null : "machines"))}
                  >
                    Machine Navigator <ChevronDown size={14} className={`transition-transform duration-200 ${mobileExpanded === "machines" ? "rotate-180" : ""}`} />
                  </button>
                  
                  {mobileExpanded === "machines" && (
                    <div className="mt-3 grid gap-2 pl-2 border-l border-slate-200">
                      {groupedMachines.map((group) => (
                        <div key={group.slug} className="p-2">
                          <Link 
                            href={`/products/${group.slug}`} 
                            onClick={() => setMenuOpen(false)} 
                            className="text-xs font-semibold text-slate-600 hover:text-amber-600"
                          >
                            {group.title}
                          </Link>
                          <p className="mt-0.5 text-[10px] text-slate-400">{group.items.length} machines available</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  href="/request-quote" 
                  onClick={() => setMenuOpen(false)} 
                  className="premium-cta mt-4 px-4 py-3 text-center text-xs uppercase tracking-wider"
                >
                  Get Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <motion.main 
        initial={{ opacity: 0, y: 12 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.main>

      <footer className="border-t border-slate-100 bg-slate-50 px-6 py-16 text-sm text-slate-500 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="max-w-xs space-y-4">
              <Image 
                src="/logo.webp" 
                alt="Prismtec logo" 
                width={200} 
                height={60} 
                className="h-10 w-auto object-contain" 
              />
              <p className="text-xs leading-relaxed text-slate-400">
                Precision packaging automation systems engineering for global chemical, agrochemical, and pharmaceutical industries.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 font-mono">Head Office</h4>
              <p className="text-xs leading-relaxed text-slate-500">{company.headOffice}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 font-mono">Factory Address</h4>
              <p className="text-xs leading-relaxed text-slate-500">{company.factory}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800 font-mono">Get in Touch</h4>
              <div className="space-y-2.5">
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-amber-600 transition-colors">
                  <Mail size={12} className="text-amber-600" />
                  {company.email}
                </a>
                {company.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-amber-600 transition-colors">
                    <Phone size={12} className="text-amber-600" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-slate-400 font-mono">
              &copy; {new Date().getFullYear()} {company.name}. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-[11px] font-mono text-slate-400">
              <Link href="/products" className="hover:text-amber-600 transition-colors">Products</Link>
              <span>&middot;</span>
              <Link href="/contact" className="hover:text-amber-600 transition-colors">Inquire</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
