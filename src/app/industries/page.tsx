import { Hero, SectionTitle } from "@/components/sections";
import { industries } from "@/lib/site-data";
import Link from "next/link";

export default function IndustriesPage() {
  return <div><Hero title="Industries We Serve" subtitle="Application-focused packaging automation tailored for each sector." /><section className="mx-auto max-w-7xl px-6 py-16"><SectionTitle title="Industry Overview" /><div className="grid gap-4 md:grid-cols-2">{industries.map((i)=><Link href={`/industries/${i.slug}`} key={i.slug} className="glass rounded-xl p-5">{i.name}</Link>)}</div></section></div>;
}
