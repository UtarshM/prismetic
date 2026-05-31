import Image from "next/image";
import Link from "next/link";
import { Hero, SectionTitle } from "@/components/sections";
import { migrated, productsByCategory } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

export default function HomePage() {
  return (
    <div>
      <Hero title="Precision Packaging Systems for Global Manufacturing" subtitle="Prismtec designs and delivers premium filling, capping, labelling, and complete bottling solutions for regulated industries worldwide." cta="/request-quote" />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="About Preview" link="/about" />
        <p className="max-w-5xl text-slate-600">{migrated.aboutParagraphs[0]}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Featured Products" link="/products" />
        <div className="grid gap-4 md:grid-cols-4">
          {productsByCategory.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 backdrop-blur-xl">
              <h3 className="text-lg">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.items.length} machine variants</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Industries Overview" link="/industries" />
        <div className="grid gap-3 md:grid-cols-5">
          {migrated.assets.iconImages.slice(0, 10).map((img) => (
            <div key={img} className="rounded-xl border border-slate-200 bg-white p-3">
              <Image src={safeAssetSrc(img)} alt="industry" width={80} height={80} className="mx-auto h-12 w-12 object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Global Presence Preview" link="/global-presence" />
        <Image src="/prismtec-assets/assets/img/Maps.webp" alt="Global presence" width={1600} height={800} className="rounded-2xl border border-slate-200" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Client Logos" link="/clients" />
        <div className="grid gap-3 grid-cols-3 md:grid-cols-6">
          {migrated.assets.clientLogos.slice(0, 24).map((logo) => (
            <div key={logo} className="rounded-lg border border-slate-200 bg-white p-3">
              <Image src={safeAssetSrc(logo)} alt="Client logo" width={120} height={80} className="h-12 w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Why Choose Us" />
        <div className="grid gap-4 md:grid-cols-3 text-slate-600">
          <div className="rounded-xl border border-slate-200 bg-white p-4">Engineering-first design with process-grade reliability.</div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">Built for quality, scalability, and compliance assurance.</div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">Global support with responsive lifecycle service.</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Testimonials" />
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">&quot;Prismtec has consistently delivered robust machinery and responsive engineering support for our line expansion goals.&quot;</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionTitle title="CTA" />
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-6">
          <p className="text-lg">Any Queries? Talk to our sales team today.</p>
          <Link href="/contact" className="rounded-full bg-amber-300 px-5 py-3 font-medium text-black">Contact Now</Link>
        </div>
      </section>
    </div>
  );
}
