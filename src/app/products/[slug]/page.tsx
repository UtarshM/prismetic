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
      <section className="mx-auto max-w-7xl px-6 py-14">
        <SectionTitle title="Product Images" />
        <div className="grid gap-4 md:grid-cols-3">
          {category.items.map((item) => (
            <div key={item.slug} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <Image src={safeAssetSrc(item.image)} alt={item.title} width={800} height={500} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionTitle title="Overview" />
        <p className="text-slate-600">Prismtec offers multiple machine configurations in this category tailored to container type, throughput, and process requirements.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionTitle title="Features" />
        <div className="grid gap-3 md:grid-cols-2">
          {category.items.flatMap((x) => x.points.slice(0, 2)).slice(0, 12).map((point, idx) => <p key={`${point}-${idx}`} className="rounded-lg border border-slate-200 bg-white p-3 text-slate-600">{point}</p>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionTitle title="Technical Specifications" />
        <p className="text-slate-600">Detailed model-wise specs are available below under each machine profile and in downloadable brochures.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionTitle title="Applications" />
        <p className="text-slate-600">Pharmaceutical, Food & Beverage, Cosmetics, Personal Care, Dairy, Home Care, Lubricants, Agrochemical, Nutraceutical, Chemical.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionTitle title="Benefits" />
        <p className="text-slate-600">High accuracy, robust hygiene design, reliable uptime, and quick changeovers for enterprise bottling operations.</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionTitle title="Machine Gallery" />
        <div className="grid gap-4 md:grid-cols-2">
          {category.items.map((item) => (
            <div key={item.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <h4 className="mb-2">{item.title}</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                {item.points.slice(0, 8).map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionTitle title="FAQ" />
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600">Can Prismtec customize output and container formats? Yes, model and tooling are configured to application requirements.</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <SectionTitle title="Inquiry Form" />
        <form className="grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Name" />
          <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Email" />
          <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Phone" />
          <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Country" />
          <textarea className="md:col-span-2 rounded-xl border border-slate-300 bg-white p-3" placeholder="Requirement" />
          <button className="w-fit rounded-xl bg-amber-300 px-5 py-2 font-medium text-black">Submit Inquiry</button>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionTitle title="Related Products" />
        <div className="grid gap-3 md:grid-cols-4">
          {productsByCategory.filter((x) => x.slug !== category.slug).slice(0, 4).map((x) => <a key={x.slug} href={`/products/${x.slug}`} className="rounded-xl border border-slate-200 bg-white p-4">{x.title}</a>)}
        </div>
      </section>
    </div>
  );
}
