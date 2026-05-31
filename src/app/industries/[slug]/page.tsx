import { notFound } from "next/navigation";
import { Hero, SectionTitle } from "@/components/sections";
import { industries } from "@/lib/site-data";

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();
  return <div><Hero title={i.name} subtitle={i.overview} cta="/request-quote" /><section className="mx-auto max-w-7xl px-6 py-16"><SectionTitle title="Challenges" />{i.challenges.map((c)=><p key={c} className="mb-3 glass rounded-xl p-4">{c}</p>)}<SectionTitle title="Prismtec Solutions" />{i.solutions.map((s)=><p key={s} className="mb-3 glass rounded-xl p-4">{s}</p>)}<SectionTitle title="Recommended Machines" /><p className="text-slate-600">{i.machines.join(" • ")}</p><SectionTitle title="Case Study" /><p className="text-slate-600">{i.caseStudy}</p></section></div>;
}
