import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero({ 
  title, 
  subtitle, 
  cta = "/request-quote", 
  showImage = false, 
  imageSrc = "/hero_machinery.png" 
}: { 
  title: string; 
  subtitle: string; 
  cta?: string; 
  showImage?: boolean; 
  imageSrc?: string; 
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/50 bg-[radial-gradient(circle_at_top_right,rgba(227,30,36,0.04)_0%,transparent_45%),radial-gradient(circle_at_bottom_left,rgba(0,89,163,0.03)_0%,transparent_45%)] px-6 py-20 sm:py-28 lg:py-36">
      {/* Cyber Grid Background */}
      <div className="cyber-grid" />
      
      {/* Glowing Blob Orbs */}
      <div className="glow-blob glow-red w-[350px] h-[350px] top-1/4 right-1/10" />
      <div className="glow-blob glow-blue w-[400px] h-[400px] bottom-1/4 left-1/10" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className={`grid gap-12 lg:gap-8 ${showImage ? "lg:grid-cols-12 items-center" : ""}`}>
          <div className={showImage ? "lg:col-span-7 space-y-6" : "max-w-4xl space-y-6"}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/10 bg-blue-500/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700 font-mono">
              <Sparkles size={10} className="text-blue-600 animate-pulse" />
              Prismtec Precision Engineering
            </div>
            
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient-blue block">{title}</span>
            </h1>
            
            <p className="max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base sm:leading-relaxed">
              {subtitle}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link href={cta} className="premium-cta px-6 py-3 text-xs uppercase tracking-wider">
                Connect with Team
                <ArrowRight size={14} className="ml-2" />
              </Link>
              
              {showImage && (
                <Link href="/products" className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center">
                  Explore Products
                </Link>
              )}
            </div>
          </div>

          {showImage && (
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/50 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.04)] backdrop-blur-md">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-100">
                  <Image 
                    src={imageSrc} 
                    alt="Prismtec packaging machinery render" 
                    fill 
                    priority
                    className="object-cover" 
                    sizes="(max-width: 1024px) 100vw, 50vw" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* Decorative Tech Elements */}
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border border-blue-500/5 bg-blue-500/1 pointer-events-none -z-10 blur-[1px]" />
              <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full border border-blue-500/5 bg-blue-500/1 pointer-events-none -z-10 blur-[1px]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ title, link, linkLabel = "View More" }: { title: string; link?: string; linkLabel?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-slate-100 pb-4">
      <div className="flex items-center gap-3">
        <div className="h-6 w-[3px] rounded bg-gradient-to-b from-blue-600 to-red-500" />
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">{title}</h2>
      </div>
      {link && (
        <Link 
          href={link} 
          className="shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group"
        >
          {linkLabel}
          <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </Link>
      )}
    </div>
  );
}

export function Card({ title, description, href, image }: { title: string; description: string; href: string; image: string }) {
  return (
    <Link 
      href={href} 
      className="group premium-card p-4 shadow-[0_10px_30px_rgba(15,23,42,0.02)]"
    >
      <div className="relative h-44 overflow-hidden rounded-xl bg-slate-100">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition duration-500 group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
      </div>
      <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">{description}</p>
    </Link>
  );
}
