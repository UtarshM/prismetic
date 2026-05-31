import Link from "next/link";
import Image from "next/image";
import { Hero, SectionTitle } from "@/components/sections";
import { productsByCategory } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

export default function ProductsPage() {
  return (
    <div>
      <Hero title="All Products Overview" subtitle="Premium catalog covering Prismtec machinery portfolios and configurations." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Product Categories" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
}
