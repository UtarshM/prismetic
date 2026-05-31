import Link from "next/link";
import { Hero, SectionTitle } from "@/components/sections";
import { migrated } from "@/lib/site-data";

const filters = ["Packaging Lines", "Filling Systems", "Labelling Systems", "Automation Projects"];

const projects = migrated.assets.eventImages.slice(0, 8).map((img, i) => ({
  slug: `project-${i + 1}`,
  name: `Installation Project ${i + 1}`,
  category: filters[i % filters.length],
  image: img,
}));

export default function ProjectsPage() {
  return (
    <div>
      <Hero title="Projects & Installations" subtitle="Luxury portfolio layout with category filters and project detail pages." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Filters" />
        <div className="mb-7 flex flex-wrap gap-2">{filters.map((f) => <span key={f} className="rounded-full border border-slate-300 px-4 py-2 text-slate-600">{f}</span>)}</div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => <Link key={p.slug} href={`/projects/${p.slug}`} className="rounded-xl border border-slate-200 bg-white p-5"><p className="text-amber-300">{p.category}</p><h3 className="mt-1 text-xl">{p.name}</h3></Link>)}
        </div>
      </section>
    </div>
  );
}
