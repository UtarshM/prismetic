"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Hero, SectionTitle } from "@/components/sections";
import { migrated } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

const filters = ["Food", "Pharma", "Cosmetics", "Chemical", "Industrial"] as const;

export default function ClientsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("Food");
  const logos = useMemo(() => migrated.assets.clientLogos.filter((_, i) => filters[i % filters.length] === active), [active]);

  return (
    <div>
      <Hero title="Client Portfolio" subtitle="Premium logo showcase from Prismtec installations and industry partners." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Filters" />
        <div className="mb-8 flex flex-wrap gap-2">{filters.map((f) => <button key={f} onClick={() => setActive(f)} className={`rounded-full border px-4 py-2 ${active === f ? "border-amber-300 text-amber-300" : "border-slate-300 text-slate-600"}`}>{f}</button>)}</div>
        <div className="grid gap-3 grid-cols-3 md:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo} className="rounded-lg border border-slate-200 bg-white p-3">
              <Image src={safeAssetSrc(logo)} alt="Client logo" width={140} height={90} className="h-14 w-full object-contain" />
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionTitle title="Client Success Stories" />
        <div className="grid gap-4 md:grid-cols-3 text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-white p-4">Food: Improved throughput and reduced filling variation in a multi-SKU bottling line.</div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">Pharma: Enhanced capping consistency and line traceability for regulated production.</div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">Industrial: Upgraded automation and uptime with robust material handling integration.</div>
        </div>
      </section>
    </div>
  );
}
