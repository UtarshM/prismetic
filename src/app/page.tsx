import Image from "next/image";
import Link from "next/link";
import { Hero, SectionTitle } from "@/components/sections";
import { migrated, productsByCategory } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

export default function HomePage() {
  return (
    <div>
      <Hero title="Precision Packaging Systems for Global Manufacturing" subtitle="Prismtec designs and delivers premium filling, capping, labelling, and complete bottling solutions for regulated industries worldwide." cta="/request-quote" />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle title="About Preview" link="/about" />
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="max-w-5xl text-base leading-relaxed text-slate-600 sm:text-lg">{migrated.aboutParagraphs[0]}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle title="Featured Products" link="/products" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {productsByCategory.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)]">
              <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.items.length} machine variants</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle title="Industries Overview" link="/industries" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
          {migrated.assets.iconImages.slice(0, 10).map((img, index) => (
            <div key={img} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
              <Image src={safeAssetSrc(img)} alt={`Industry icon ${index + 1}`} width={80} height={80} className="mx-auto h-14 w-14 object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle title="Global Presence Preview" link="/global-presence" />
        <Image src="/prismtec-assets/assets/img/Maps.webp" alt="Global presence" width={1600} height={800} className="rounded-3xl border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)]" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle title="Client Logos" link="/clients" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-6">
          {migrated.assets.clientLogos.slice(0, 24).map((logo) => (
            <div key={logo} className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              <Image src={safeAssetSrc(logo)} alt="Client logo" width={120} height={80} className="h-12 w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle title="Why Choose Us" />
        <div className="grid gap-4 md:grid-cols-3 text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_14px_35px_rgba(15,23,42,0.06)]">Engineering-first design with process-grade reliability.</div>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_14px_35px_rgba(15,23,42,0.06)]">Built for quality, scalability, and compliance assurance.</div>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_14px_35px_rgba(15,23,42,0.06)]">Global support with responsive lifecycle service.</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle title="Testimonials" />
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-lg leading-relaxed text-slate-600 shadow-[0_14px_35px_rgba(15,23,42,0.06)]">&quot;Prismtec has consistently delivered robust machinery and responsive engineering support for our line expansion goals.&quot;</div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20">
        <SectionTitle title="CTA" />
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-amber-300/70 bg-[linear-gradient(135deg,#fff8e7_0%,#fff_100%)] p-5 shadow-[0_18px_40px_rgba(217,119,6,0.12)] sm:p-8">
          <p className="text-lg font-medium text-slate-800 sm:text-xl">Any Queries? Talk to our sales team today.</p>
          <Link href="/contact" className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">Contact Now</Link>
        </div>
      </section>
    </div>
  );
}
