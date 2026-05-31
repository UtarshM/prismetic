import Image from "next/image";
import { notFound } from "next/navigation";
import { Hero, SectionTitle } from "@/components/sections";
import { productsByCategory } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsByCategory.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.title, description: product.summary };
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = productsByCategory.find((p) => p.slug === slug);
  if (!category) notFound();

  return (
    <div>
      <Hero title={category.title} subtitle={category.summary} cta="/request-quote" />

      <section className="section-shell">
        <SectionTitle title="Category Highlights" />
        <div className="grid gap-3 md:grid-cols-3">
          <div className="premium-card rounded-2xl p-5">{category.items.length} machine variants in this category.</div>
          <div className="premium-card rounded-2xl p-5">Original Prismtec machine content and images retained.</div>
          <div className="premium-card rounded-2xl p-5">Inquiry and quote workflow mapped to specific machines.</div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Full Machine Gallery" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <div key={item.id} className="premium-card overflow-hidden rounded-2xl bg-white p-3">
              <div className="relative h-48 overflow-hidden rounded-xl bg-slate-50">
                <Image src={safeAssetSrc(item.image)} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
              <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Machine Detail Cards" />
        <div className="grid gap-4 md:grid-cols-2">
          {category.items.map((item) => (
            <div key={item.id} className="premium-card rounded-2xl p-5">
              <h4 className="mb-2 text-base font-semibold">{item.title}</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                {item.points.slice(0, 10).map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Inquiry Form" />
        <form className="premium-card grid gap-3 rounded-2xl p-5 md:grid-cols-2">
          <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Name" />
          <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Email" />
          <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Phone" />
          <select className="rounded-xl border border-slate-300 bg-white p-3" defaultValue="">
            <option value="" disabled>Select machine</option>
            {category.items.map((machine) => <option key={machine.id} value={machine.title}>{machine.title}</option>)}
          </select>
          <textarea className="md:col-span-2 rounded-xl border border-slate-300 bg-white p-3" placeholder="Requirement" />
          <button className="premium-cta w-fit px-5 py-2">Submit Inquiry</button>
        </form>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Related Product Families" />
        <div className="grid gap-3 md:grid-cols-4">
          {productsByCategory.filter((x) => x.slug !== category.slug).slice(0, 4).map((x) => (
            <a key={x.slug} href={`/products/${x.slug}`} className="premium-card rounded-xl p-4">{x.title}</a>
          ))}
        </div>
      </section>
    </div>
  );
}
