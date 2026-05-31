import Image from "next/image";
import Link from "next/link";
import { Hero, SectionTitle } from "@/components/sections";
import { migrated, productsByCategory, machineRegistry } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";

export default function HomePage() {
  const featuredMachines = machineRegistry.slice(0, 8);

  return (
    <div>
      <Hero
        title="Precision Packaging Systems for Global Manufacturing"
        subtitle="Prismtec designs and delivers premium filling, capping, labelling, and complete bottling solutions for regulated industries worldwide."
        cta="/request-quote"
      />

      <section className="section-shell">
        <SectionTitle title="About Prismtec" link="/about" />
        <div className="premium-card rounded-3xl p-5 sm:p-8">
          <p className="max-w-5xl text-base leading-relaxed text-slate-600 sm:text-lg">{migrated.aboutParagraphs[0]}</p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Machine Families" link="/products" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {productsByCategory.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`} className="premium-card rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
              <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.items.length} machines</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Featured Machines" link="/products" linkLabel="View All Machines" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredMachines.map((machine) => (
            <Link key={machine.id} href={`/products/${machine.category}`} className="premium-card rounded-2xl p-3 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]">
              <div className="relative h-40 overflow-hidden rounded-xl bg-slate-50">
                <Image src={safeAssetSrc(machine.image)} alt={machine.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">{machine.title}</p>
              <p className="mt-1 text-xs text-slate-500">{machine.categoryTitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Industries Overview" link="/industries" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
          {migrated.assets.iconImages.slice(0, 10).map((img, index) => (
            <div key={img} className="premium-card rounded-2xl p-4 text-center">
              <Image src={safeAssetSrc(img)} alt={`Industry icon ${index + 1}`} width={80} height={80} className="mx-auto h-14 w-14 object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Global Presence Preview" link="/global-presence" />
        <Image src="/prismtec-assets/assets/img/Maps.webp" alt="Global presence" width={1600} height={800} className="rounded-3xl border border-slate-200 shadow-[var(--shadow-elevated)]" />
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Client Logos" link="/clients" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-6">
          {migrated.assets.clientLogos.slice(0, 24).map((logo) => (
            <div key={logo} className="premium-card rounded-xl p-4">
              <Image src={safeAssetSrc(logo)} alt="Client logo" width={120} height={80} className="h-12 w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Why Choose Us" />
        <div className="grid gap-4 md:grid-cols-3 text-slate-600">
          <div className="premium-card rounded-2xl bg-gradient-to-b from-white to-slate-50 p-6">Engineering-first design with process-grade reliability.</div>
          <div className="premium-card rounded-2xl bg-gradient-to-b from-white to-slate-50 p-6">Built for quality, scalability, and compliance assurance.</div>
          <div className="premium-card rounded-2xl bg-gradient-to-b from-white to-slate-50 p-6">Global support with responsive lifecycle service.</div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Testimonials" />
        <div className="premium-card rounded-2xl bg-white p-8 text-lg leading-relaxed text-slate-600">
          &quot;Prismtec has consistently delivered robust machinery and responsive engineering support for our line expansion goals.&quot;
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="CTA" />
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-amber-300/70 bg-[linear-gradient(135deg,#fff8e7_0%,#fff_100%)] p-5 shadow-[0_18px_40px_rgba(217,119,6,0.12)] sm:p-8">
          <p className="text-lg font-medium text-slate-800 sm:text-xl">Any Queries? Talk to our sales team today.</p>
          <Link href="/contact" className="premium-cta px-6 py-3 text-sm uppercase tracking-[0.08em]">Contact Now</Link>
        </div>
      </section>
    </div>
  );
}
