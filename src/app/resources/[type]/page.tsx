import Link from "next/link";
import { Hero, SectionTitle } from "@/components/sections";

export default async function ResourceTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const docs = [{ name: "Prismtec Online Catalogue", file: "/prismtec-assets/assets/img/Prismtec-Brochure.pdf" }];

  return (
    <div>
      <Hero title={type.replace(/-/g, " ")} subtitle="Filtered documents and downloadable resources." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Documents" />
        <div className="grid gap-4 md:grid-cols-2">
          {docs.map((d) => (
            <a key={d.file} href={d.file} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white p-4">
              <p>{d.name}</p>
              <p className="mt-1 text-sm text-amber-300">Download PDF</p>
            </a>
          ))}
        </div>
        <div className="mt-6"><Link href="/request-quote" className="text-amber-300">Need a custom technical document? Request a quote.</Link></div>
      </section>
    </div>
  );
}
