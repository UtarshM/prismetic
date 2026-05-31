import Link from "next/link";
import Image from "next/image";
import { Hero, SectionTitle } from "@/components/sections";
import { productsByCategory } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

export default function ProductsPage() {
  return (
    <div>
      <Hero title="All Products Overview" subtitle="Premium catalog covering Prismtec machinery portfolios and configurations." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle title="Product Categories" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {productsByCategory.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-3 grid grid-cols-3 gap-2">
                {category.items.slice(0, 3).map((item) => (
                  <div key={item.slug} className="relative h-20 overflow-hidden rounded-lg border border-slate-200">
                    <Image src={safeAssetSrc(item.image)} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 33vw, 120px" />
                  </div>
                ))}
              </div>
              <h3 className="text-xl">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.summary}</p>
              <p className="mt-2 text-xs text-amber-300">{category.items.length} machines</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <SectionTitle title="All Product Images" />
        <div className="space-y-10">
          {productsByCategory.map((category) => (
            <div key={category.slug}>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">{category.title}</h3>
                <Link href={`/products/${category.slug}`} className="shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-amber-700 sm:text-sm">
                  View Category
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                {category.items.map((item) => (
                  <div key={item.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                    <div className="relative h-36 overflow-hidden rounded-xl sm:h-44">
                      <Image src={safeAssetSrc(item.image)} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-slate-700">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
