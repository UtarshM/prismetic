import Image from "next/image";
import { Hero, SectionTitle } from "@/components/sections";
import { migrated } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <div>
      <Hero title="About Prismtech" subtitle="Company story, mission, vision and manufacturing commitment from the original Prismtec profile." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Company Story" />
        <div className="grid gap-6 md:grid-cols-2">
          <Image src="/prismtec-assets/assets/img/about-us/About-us-image.webp" alt="About Prismtec" width={900} height={700} className="rounded-xl border border-slate-200" />
          <div className="space-y-4 text-slate-600">{migrated.aboutParagraphs.slice(0, 2).map((p) => <p key={p}>{p}</p>)}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionTitle title="Mission" />
        <p className="text-slate-600">{migrated.aboutParagraphs[2]}</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionTitle title="Vision" />
        <p className="text-slate-600">{migrated.aboutParagraphs[3]}</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionTitle title="Timeline" />
        <p className="text-slate-600">Established in 2002 and scaled into a globally trusted packaging equipment manufacturer.</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10 grid gap-4 md:grid-cols-2">
        <div><SectionTitle title="Manufacturing Facility" /><p className="text-slate-600">Precision-built production and assembly workflows for primary packaging machinery.</p></div>
        <div><SectionTitle title="R&D Team" /><p className="text-slate-600">Application-focused innovation with quality and uptime as core outcomes.</p></div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionTitle title="Quality Commitment" />
        <p className="text-slate-600">{migrated.aboutParagraphs[4]}</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionTitle title="Certifications" />
        <p className="text-slate-600">Documentation and quality records are available in the resources section.</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionTitle title="Global Reach" />
        <p className="text-slate-600">{migrated.aboutParagraphs[5]}</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionTitle title="Leadership Message" />
        <p className="text-slate-600">Reliability, honesty, and engineering excellence guide every Prismtec partnership.</p>
      </section>
    </div>
  );
}
