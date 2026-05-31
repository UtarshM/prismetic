import Link from "next/link";
import { Hero, SectionTitle } from "@/components/sections";
import { productsByCategory } from "@/lib/site-data";

const blocks = [
  { slug: "brochures", title: "Brochures" },
  { slug: "technical-documents", title: "Technical Documents" },
  { slug: "certificates", title: "Certificates" },
  { slug: "catalogues", title: "Catalogues" },
];

export default function ResourcesPage() {
  return (
    <div>
      <Hero title="Downloads & Catalogues" subtitle="Enterprise download center with search and type filters." />
      <section className="section-shell">
        <SectionTitle title="Download Center" />
        <input className="mb-5 w-full rounded-xl border border-slate-300 bg-white p-3" placeholder="Search brochures, technical documents, certificates, catalogues" />
        <div className="grid gap-4 md:grid-cols-2">{blocks.map((b) => <Link key={b.slug} href={`/resources/${b.slug}`} className="premium-card rounded-xl p-5">{b.title}</Link>)}</div>
      </section>
      <section className="section-shell pt-0">
        <SectionTitle title="Machine Documentation Coverage" />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">{productsByCategory.map((p) => <Link key={p.slug} href={`/products/${p.slug}`} className="premium-card rounded-xl p-4"><p className="font-semibold">{p.title}</p><p className="text-sm text-slate-500">Brochures + technical assets</p></Link>)}</div>
      </section>
    </div>
  );
}
