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
    <div className="space-y-6">
      <Hero 
        title="All Products Overview" 
        subtitle="Explore our comprehensive engineering portfolio, featuring torque capping, modular filling, labeling, and turnkey bottling lines." 
      />

      <section className="section-shell">
        <SectionTitle title="Product Categories" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productsByCategory.map((category) => (
            <Link 
              key={category.slug} 
              href={`/products/${category.slug}`} 
              className="premium-card p-5 group flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 grid grid-cols-3 gap-2">
                  {category.items.slice(0, 3).map((item) => (
                    <div key={item.id} className="relative h-14 overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
                      <Image 
                        src={safeAssetSrc(item.image)} 
                        alt={item.title} 
                        fill 
                        className="object-cover" 
                        sizes="(max-width: 768px) 33vw, 120px" 
                      />
                    </div>
                  ))}
                </div>
                <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {category.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">
                  {category.summary}
                </p>
              </div>
              <div>
                <p className="mt-4 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider">
                  {category.items.length} Machine Models &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sticky Filtering Block */}
      <section className="section-shell pt-0">
        <div className="sticky top-20 z-20 rounded-2xl border border-slate-200/60 bg-white/80 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.03)] backdrop-blur-md">
          <div className="mb-3 flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveCategory("all")} 
              className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.08em] transition-all ${
                activeCategory === "all" ? "premium-chip" : "border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              All Machines ({machineRegistry.length})
            </button>
            {productsByCategory.map((category) => (
              <button 
                key={category.slug} 
                onClick={() => setActiveCategory(category.slug)} 
                className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.08em] transition-all ${
                  activeCategory === category.slug ? "premium-chip" : "border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
          <input 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500/40 focus:bg-white transition-colors" 
            placeholder="Search any machine by name or summary" 
          />
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="All Machine Index" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMachines.map((machine) => (
            <Link 
              key={machine.id} 
              href={`/products/${machine.category}`} 
              className="premium-card p-3 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 overflow-hidden rounded-xl bg-slate-50 border border-slate-100 sm:h-44">
                  <Image 
                    src={safeAssetSrc(machine.image)} 
                    alt={machine.title} 
                    fill 
                    className="object-cover transition duration-500 group-hover:scale-105" 
                    sizes="(max-width: 1024px) 50vw, 25vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                </div>
                <p className="mt-3.5 text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-1">
                  {machine.title}
                </p>
              </div>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                {machine.categoryTitle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0 pb-16">
        <SectionTitle title="Complete Machine Catalog by Category" />
        <div className="space-y-16">
          {productsByCategory.map((category) => (
            <div key={category.slug} className="space-y-6">
              <div className="flex items-center justify-between gap-3 border-l-2 border-blue-600 pl-3">
                <h3 className="text-lg font-bold text-slate-800 sm:text-xl">{category.title}</h3>
                <Link 
                  href={`/products/${category.slug}`} 
                  className="shrink-0 text-[10px] font-bold uppercase tracking-[0.1em] text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Category &rarr;
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                {category.items.map((item) => (
                  <div key={item.id} className="premium-card p-3 flex flex-col justify-between">
                    <div className="relative h-36 overflow-hidden rounded-xl bg-slate-50 border border-slate-100 sm:h-44">
                      <Image 
                        src={safeAssetSrc(item.image)} 
                        alt={item.title} 
                        fill 
                        className="object-cover" 
                        sizes="(max-width: 1024px) 50vw, 25vw" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                    </div>
                    <p className="mt-3 text-xs font-bold text-slate-700 line-clamp-1">{item.title}</p>
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
