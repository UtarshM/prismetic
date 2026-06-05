import Image from "next/image";
import Link from "next/link";
import { Hero, SectionTitle } from "@/components/sections";
import { migrated, productsByCategory, machineRegistry, industries } from "@/lib/site-data";
import { safeAssetSrc } from "@/lib/assets";
import { 
  Pill, 
  Sparkles, 
  Heart, 
  Droplets, 
  Leaf, 
  GlassWater, 
  Layers, 
  Cpu, 
  Zap, 
  Globe 
} from "lucide-react";

const industryIconMap: Record<string, React.ReactNode> = {
  pharmaceutical: <Pill className="h-6 w-6 text-blue-600" />,
  "food-beverage": <GlassWater className="h-6 w-6 text-blue-600" />,
  cosmetics: <Sparkles className="h-6 w-6 text-blue-600" />,
  "personal-care": <Heart className="h-6 w-6 text-blue-600" />,
  dairy: <GlassWater className="h-6 w-6 text-blue-600" />,
  "home-care": <Leaf className="h-6 w-6 text-blue-600" />,
  lubricants: <Droplets className="h-6 w-6 text-blue-600" />,
  agrochemical: <Leaf className="h-6 w-6 text-blue-600" />,
  nutraceutical: <Pill className="h-6 w-6 text-blue-600" />,
  chemical: <Droplets className="h-6 w-6 text-blue-600" />,
};

export default function HomePage() {
  const featuredMachines = machineRegistry.slice(0, 8);

  return (
    <div className="space-y-6">
      <Hero
        title="Precision Packaging Systems for Global Manufacturing"
        subtitle="Prismtec designs and delivers premium filling, capping, labelling, and complete bottling solutions for regulated industries worldwide."
        cta="/request-quote"
        showImage={true}
      />

      <section className="section-shell">
        <SectionTitle title="About Prismtec" link="/about" />
        <div className="premium-card p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-40 w-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <p className="max-w-5xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-relaxed">
            {migrated.aboutParagraphs[0]}
          </p>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Machine Families" link="/products" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {productsByCategory.map((category) => (
            <Link 
              key={category.slug} 
              href={`/products/${category.slug}`} 
              className="premium-card p-6 group flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-blue-500/5 p-2.5 border border-blue-500/10">
                  <Layers size={18} className="text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {category.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                  {category.summary}
                </p>
              </div>
              <p className="mt-5 text-[10px] font-mono font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1">
                {category.items.length} Machine Models &rarr;
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Featured Machines" link="/products" linkLabel="View All Machines" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredMachines.map((machine) => (
            <Link 
              key={machine.id} 
              href={`/products/${machine.category}`} 
              className="premium-card p-3 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-40 overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                  <Image 
                    src={safeAssetSrc(machine.image)} 
                    alt={machine.title} 
                    fill 
                    className="object-cover transition duration-500 group-hover:scale-105" 
                    sizes="(max-width: 1024px) 50vw, 25vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                </div>
                <p className="mt-3.5 text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-1">
                  {machine.title}
                </p>
              </div>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                {machine.categoryTitle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Industries Overview" link="/industries" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {industries.map((ind) => (
            <div 
              key={ind.slug} 
              className="premium-card p-6 text-center hover:border-blue-500/20 group"
            >
              <div className="mx-auto mb-3 inline-flex rounded-full bg-blue-500/5 p-3.5 border border-blue-500/10 group-hover:bg-blue-500/10 transition duration-300">
                {industryIconMap[ind.slug] || <Cpu className="h-6 w-6 text-blue-600" />}
              </div>
              <p className="text-xs font-bold text-slate-700 group-hover:text-blue-700 transition-colors">
                {ind.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Global Presence Preview" link="/global-presence" />
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.03)] bg-slate-50">
          <Image 
            src="/prismtec-assets/assets/img/Maps.webp" 
            alt="Global presence map" 
            width={1600} 
            height={800} 
            className="w-full h-auto object-cover opacity-90 brightness-95 contrast-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Client Logos" link="/clients" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {migrated.assets.clientLogos.slice(0, 18).map((logo) => (
            <div 
              key={logo} 
              className="premium-card p-5 flex items-center justify-center hover:border-slate-200 hover:bg-slate-50/50 group"
            >
              <Image 
                src={safeAssetSrc(logo)} 
                alt="Client logo" 
                width={120} 
                height={80} 
                className="h-10 w-full object-contain filter grayscale opacity-50 group-hover:opacity-100 transition duration-300" 
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Why Choose Us" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="premium-card p-8 bg-gradient-to-b from-white to-slate-50/60 hover:border-blue-500/20 group">
            <div className="mb-4 inline-flex rounded-xl bg-blue-500/5 p-2.5 border border-blue-500/10 group-hover:bg-blue-500/10 transition duration-300">
              <Cpu size={18} className="text-blue-600" />
            </div>
            <div className="text-[10px] font-bold font-mono text-blue-700 mb-2 tracking-wider">01 / ENGINEERING</div>
            <h4 className="text-base font-bold text-slate-800 mb-2">Engineering-First Design</h4>
            <p className="text-xs leading-relaxed text-slate-500">
              Process-grade reliability with heavy-duty components designed for sustained high-speed operations.
            </p>
          </div>
          <div className="premium-card p-8 bg-gradient-to-b from-white to-slate-50/60 hover:border-blue-500/20 group">
            <div className="mb-4 inline-flex rounded-xl bg-blue-500/5 p-2.5 border border-blue-500/10 group-hover:bg-blue-500/10 transition duration-300">
              <Zap size={18} className="text-blue-600" />
            </div>
            <div className="text-[10px] font-bold font-mono text-blue-700 mb-2 tracking-wider">02 / COMPLIANCE</div>
            <h4 className="text-base font-bold text-slate-800 mb-2">Quality & Scalability</h4>
            <p className="text-xs leading-relaxed text-slate-500">
              Built to conform with strict regulatory standards (FDA, GMP, CE) with full batch tracking capabilities.
            </p>
          </div>
          <div className="premium-card p-8 bg-gradient-to-b from-white to-slate-50/60 hover:border-blue-500/20 group">
            <div className="mb-4 inline-flex rounded-xl bg-blue-500/5 p-2.5 border border-blue-500/10 group-hover:bg-blue-500/10 transition duration-300">
              <Globe size={18} className="text-blue-600" />
            </div>
            <div className="text-[10px] font-bold font-mono text-blue-700 mb-2 tracking-wider">03 / SERVICE</div>
            <h4 className="text-base font-bold text-slate-800 mb-2">Global Lifecycle Support</h4>
            <p className="text-xs leading-relaxed text-slate-500">
              Comprehensive service from design qualification to installations and rapid spare part supply chains.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Testimonials" />
        <div className="premium-card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-slate-50/50 to-slate-100/30">
          <div className="absolute -left-2 -top-8 text-[140px] font-serif text-slate-300/10 leading-none select-none pointer-events-none">&ldquo;</div>
          <p className="text-sm leading-relaxed text-slate-600 italic relative z-10 sm:text-base sm:leading-relaxed">
            &ldquo;Prismtec has consistently delivered robust machinery and responsive engineering support for our line expansion goals. Their servo filling systems are second to none.&rdquo;
          </p>
          <div className="mt-6 border-l-2 border-blue-600 pl-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">
            Production Director, Global Lubricants Leader
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 pb-12">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-blue-500/15 bg-gradient-to-r from-blue-500/5 via-blue-500/2 to-slate-50/30 p-8 shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div>
            <h3 className="text-base font-bold text-slate-900 sm:text-xl">Any Queries? Talk to our sales team today.</h3>
            <p className="mt-1 text-xs text-slate-500">Consult with our engineering team for custom line deployments.</p>
          </div>
          <Link href="/contact" className="premium-cta px-6 py-3.5 text-xs uppercase tracking-wider">
            Contact Now
          </Link>
        </div>
      </section>
    </div>
  );
}
