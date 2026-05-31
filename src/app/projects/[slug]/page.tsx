import Image from "next/image";
import { Hero, SectionTitle } from "@/components/sections";
import { migrated } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = Number(slug.replace("project-", "")) - 1;
  const gallery = migrated.assets.eventImages.slice(Math.max(0, idx), Math.max(0, idx) + 6);

  return (
    <div>
      <Hero title={`Project ${idx + 1} Installation`} subtitle="Project portfolio details with challenge, solution, results and technologies used." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Gallery" />
        <div className="grid gap-3 md:grid-cols-3">{gallery.map((img) => <Image key={img} src={safeAssetSrc(img)} alt="Project image" width={700} height={500} className="rounded-lg border border-slate-200" />)}</div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-8"><SectionTitle title="Challenges" /><p className="text-slate-600">Complex line balance, multi-SKU requirements, and strict quality consistency under throughput targets.</p></section>
      <section className="mx-auto max-w-7xl px-6 py-8"><SectionTitle title="Solution" /><p className="text-slate-600">Integrated Prismtec automation architecture with synchronized machine handshakes and operator-friendly controls.</p></section>
      <section className="mx-auto max-w-7xl px-6 py-8"><SectionTitle title="Results" /><p className="text-slate-600">Higher OEE, lower manual handling, improved fill/cap/label consistency.</p></section>
      <section className="mx-auto max-w-7xl px-6 pb-20"><SectionTitle title="Technologies Used" /><p className="text-slate-600">PLC-HMI automation, servo motion control, smart sensors, modular conveyors.</p></section>
    </div>
  );
}
