"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Hero, SectionTitle } from "@/components/sections";
import { machineRegistry, productsByCategory } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filteredMachines = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return machineRegistry.filter((machine) => {
      const categoryMatch = activeCategory === "all" || machine.category === activeCategory;
      const queryMatch = !normalizedQuery || machine.title.toLowerCase().includes(normalizedQuery) || machine.summary.toLowerCase().includes(normalizedQuery);
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  return (
    <div>
      <Hero title="All Products Overview" subtitle="Premium catalog covering Prismtec machinery portfolios and configurations." />

      <section className="section-shell">
        <SectionTitle title="Product Categories" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productsByCategory.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`} className="premium-card rounded-2xl p-5 transition hover:shadow-[var(--shadow-elevated)]">
              <div className="mb-3 grid grid-cols-3 gap-2">
                {category.items.slice(0, 3).map((item) => (
                  <div key={item.id} className="relative h-20 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                    <Image src={safeAssetSrc(item.image)} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 33vw, 120px" />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.summary}</p>
              <p className="mt-2 text-xs text-amber-700">{category.items.length} machines</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="sticky top-20 z-20 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur">
          <div className="mb-3 flex flex-wrap gap-2">
            <button onClick={() => setActiveCategory("all")} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] ${activeCategory === "all" ? "premium-chip" : "border border-slate-300 text-slate-700"}`}>
              All Machines ({machineRegistry.length})
            </button>
            {productsByCategory.map((category) => (
              <button key={category.slug} onClick={() => setActiveCategory(category.slug)} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] ${activeCategory === category.slug ? "premium-chip" : "border border-slate-300 text-slate-700"}`}>
                {category.title}
              </button>
            ))}
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3" placeholder="Search any machine by name or summary" />
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="All Machine Index" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMachines.map((machine) => (
            <Link key={machine.id} href={`/products/${machine.category}`} className="premium-card rounded-2xl p-3 transition hover:shadow-[var(--shadow-elevated)]">
              <div className="relative h-36 overflow-hidden rounded-xl bg-slate-50 sm:h-44">
                <Image src={safeAssetSrc(machine.image)} alt={machine.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">{machine.title}</p>
              <p className="mt-1 text-xs text-slate-500">{machine.categoryTitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Complete Machine Catalog by Category" />
        <div className="space-y-10">
          {productsByCategory.map((category) => (
            <div key={category.slug}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{category.title}</h3>
                <Link href={`/products/${category.slug}`} className="shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-amber-700 sm:text-sm">View Category</Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                {category.items.map((item) => (
                  <div key={item.id} className="premium-card overflow-hidden rounded-2xl bg-white p-3">
                    <div className="relative h-36 overflow-hidden rounded-xl sm:h-44">
                      <Image src={safeAssetSrc(item.image)} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-700">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
