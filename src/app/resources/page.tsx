import Link from "next/link";
import { Hero, SectionTitle } from "@/components/sections";

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
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Download Center" />
        <input className="mb-5 w-full rounded-xl border border-slate-300 bg-white p-3" placeholder="Search brochures, technical documents, certificates, catalogues" />
        <div className="grid gap-4 md:grid-cols-2">{blocks.map((b) => <Link key={b.slug} href={`/resources/${b.slug}`} className="rounded-xl border border-slate-200 bg-white p-5">{b.title}</Link>)}</div>
      </section>
    </div>
  );
}
