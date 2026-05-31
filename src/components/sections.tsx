import Image from "next/image";
import Link from "next/link";

export function Hero({ title, subtitle, cta = "/contact" }: { title: string; subtitle: string; cta?: string }) {
  return <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,#f8efd6,transparent_45%),radial-gradient(circle_at_bottom_left,#e8f1ff,transparent_45%)] px-4 py-16 sm:px-6 sm:py-20 md:py-28"><div className="mx-auto max-w-7xl"><p className="mb-4 inline-flex rounded-full border border-amber-300/70 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-800 sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.22em]">Prismtec Packaging Solutions</p><h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-6xl lg:text-7xl">{title}</h1><p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">{subtitle}</p><Link href={cta} className="mt-7 inline-block rounded-full border border-amber-500 bg-amber-50 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-amber-800 transition hover:bg-amber-500 hover:text-white sm:mt-9 sm:px-7 sm:py-3 sm:text-sm">Connect with Team</Link></div></section>;
}

export function SectionTitle({ title, link, linkLabel = "View More" }: { title: string; link?: string; linkLabel?: string }) {
  return <div className="mb-6 flex items-end justify-between gap-3 sm:mb-8"><h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">{title}</h2>{link ? <Link href={link} className="shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-amber-700 sm:text-sm">{linkLabel}</Link> : null}</div>;
}

export function Card({ title, description, href, image }: { title: string; description: string; href: string; image: string }) {
  return <Link href={href} className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(15,23,42,0.12)]"><div className="relative h-44 overflow-hidden rounded-xl"><Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" /></div><h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></Link>;
}
