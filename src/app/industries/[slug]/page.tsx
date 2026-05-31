import { notFound } from "next/navigation";
import { Hero, SectionTitle } from "@/components/sections";
import { industries, productsByCategory } from "@/lib/site-data";
import Link from "next/link";

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();

  const recommended = productsByCategory.flatMap((category) => category.items.slice(0, 1)).slice(0, 8);

  return (
    <div>
      <Hero title={i.name} subtitle={i.overview} cta="/request-quote" />
      <section className="section-shell">
        <SectionTitle title="Challenges" />
        {i.challenges.map((c) => <p key={c} className="mb-3 premium-card rounded-xl p-4">{c}</p>)}
        <SectionTitle title="Prismtec Solutions" />
        {i.solutions.map((s) => <p key={s} className="mb-3 premium-card rounded-xl p-4">{s}</p>)}
      </section>
      <section className="section-shell pt-0">
        <SectionTitle title="Recommended Machines" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{recommended.map((m) => <Link key={m.id} href={`/products/${m.category}`} className="premium-card rounded-xl p-4 text-sm font-medium">{m.title}</Link>)}</div>
      </section>
      <section className="section-shell pt-0">
        <SectionTitle title="Case Study" />
        <p className="premium-card rounded-xl p-4 text-slate-600">{i.caseStudy}</p>
      </section>
    </div>
  );
}
