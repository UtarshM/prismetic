import Image from "next/image";
import Link from "next/link";

export function Hero({ title, subtitle, cta = "/contact" }: { title: string; subtitle: string; cta?: string }) {
  return <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_right,#f2e7c2,transparent_45%),radial-gradient(circle_at_bottom_left,#eef4ff,transparent_42%)] px-6 py-24"><div className="mx-auto max-w-7xl"><h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">{title}</h1><p className="mt-6 max-w-3xl text-lg text-slate-600">{subtitle}</p><Link href={cta} className="mt-8 inline-block rounded-full border border-amber-400/70 px-6 py-3 text-amber-700 transition hover:bg-amber-400 hover:text-white">Connect with Team</Link></div></section>;
}

export function SectionTitle({ title, link, linkLabel = "View More" }: { title: string; link?: string; linkLabel?: string }) {
  return <div className="mb-8 flex items-end justify-between"><h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>{link ? <Link href={link} className="text-amber-300">{linkLabel}</Link> : null}</div>;
}

export function Card({ title, description, href, image }: { title: string; description: string; href: string; image: string }) {
  return <Link href={href} className="group rounded-2xl border border-slate-200 bg-white p-4 backdrop-blur"><div className="relative h-44 overflow-hidden rounded-xl"><Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" /></div><h3 className="mt-4 text-xl">{title}</h3><p className="mt-2 text-sm text-slate-600">{description}</p></Link>;
}
