import Image from "next/image";
import Link from "next/link";
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
    <div className="space-y-6">
      <Hero 
        title={category.title} 
        subtitle={category.summary} 
        cta="/request-quote" 
      />

      <section className="section-shell">
        <SectionTitle title="Category Highlights" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="premium-card p-6 text-sm text-slate-600 hover:border-amber-500/25">
            <span className="text-amber-600 font-bold font-mono mr-2">&bull;</span>
            {category.items.length} machine variants in this category.
          </div>
          <div className="premium-card p-6 text-sm text-slate-600 hover:border-amber-500/25">
            <span className="text-amber-600 font-bold font-mono mr-2">&bull;</span>
            Original Prismtec machine content and images retained.
          </div>
          <div className="premium-card p-6 text-sm text-slate-600 hover:border-amber-500/25">
            <span className="text-amber-600 font-bold font-mono mr-2">&bull;</span>
            Inquiry and quote workflow mapped to specific machines.
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Full Machine Gallery" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <div key={item.id} className="premium-card p-3 flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                  <Image 
                    src={safeAssetSrc(item.image)} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition duration-500 group-hover:scale-105" 
                    sizes="(max-width: 1024px) 50vw, 33vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                </div>
                <h3 className="mt-3.5 text-sm font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-3">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Machine Detail Cards" />
        <div className="grid gap-4 md:grid-cols-2">
          {category.items.map((item) => (
            <div key={item.id} className="premium-card p-6 border-l-2 border-l-amber-600 hover:border-amber-500/20">
              <h4 className="mb-3 text-sm font-bold text-slate-800">{item.title}</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                {item.points.slice(0, 10).map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">&bull;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Inquiry Form" />
        <form className="premium-card grid gap-4 p-6 sm:p-8 md:grid-cols-2 bg-slate-50/40 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-32 w-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <input 
            className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 placeholder:text-slate-450 focus:outline-none focus:border-amber-500/40 transition-colors" 
            placeholder="Name" 
          />
          <input 
            className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 placeholder:text-slate-450 focus:outline-none focus:border-amber-500/40 transition-colors" 
            placeholder="Email" 
          />
          <input 
            className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 placeholder:text-slate-450 focus:outline-none focus:border-amber-500/40 transition-colors" 
            placeholder="Phone" 
          />
          <select 
            className="rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-500 focus:outline-none focus:border-amber-500/40 transition-colors" 
            defaultValue=""
          >
            <option value="" disabled className="text-slate-400">Select machine</option>
            {category.items.map((machine) => (
              <option key={machine.id} value={machine.title} className="text-slate-800">
                {machine.title}
              </option>
            ))}
          </select>
          
          <textarea 
            className="md:col-span-2 rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 placeholder:text-slate-450 focus:outline-none focus:border-amber-500/40 transition-colors h-28 resize-none" 
            placeholder="Requirement Details" 
          />
          
          <button className="premium-cta md:col-span-2 w-full sm:w-fit px-6 py-3 text-xs uppercase tracking-wider">
            Submit Inquiry
          </button>
        </form>
      </section>

      <section className="section-shell pt-0 pb-16">
        <SectionTitle title="Related Product Families" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {productsByCategory.filter((x) => x.slug !== category.slug).slice(0, 4).map((x) => (
            <Link 
              key={x.slug} 
              href={`/products/${x.slug}`} 
              className="premium-card p-5 text-center group flex items-center justify-center min-h-[80px]"
            >
              <span className="text-xs font-bold text-slate-600 group-hover:text-amber-700 transition-colors">
                {x.title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
