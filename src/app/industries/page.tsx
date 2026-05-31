import { Hero, SectionTitle } from "@/components/sections";
import { industries, productsByCategory } from "@/lib/site-data";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <div>
      <Hero title="Industries We Serve" subtitle="Application-focused packaging automation tailored for each sector." />
      <section className="section-shell">
        <SectionTitle title="Industry Overview" />
        <div className="grid gap-4 md:grid-cols-2">{industries.map((i) => <Link href={`/industries/${i.slug}`} key={i.slug} className="premium-card rounded-xl p-5">{i.name}</Link>)}</div>
      </section>
      <section className="section-shell pt-0">
        <SectionTitle title="Recommended Machine Families" link="/products" />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">{productsByCategory.map((p) => <Link key={p.slug} href={`/products/${p.slug}`} className="premium-card rounded-xl p-4"><p className="font-semibold">{p.title}</p><p className="text-sm text-slate-500">{p.items.length} machines</p></Link>)}</div>
      </section>
    </div>
  );
}
