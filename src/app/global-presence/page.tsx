import { Hero, SectionTitle } from "@/components/sections";
import { WorldMap } from "@/components/world-map";

const markers = [
  { country: "India", x: 69, y: 52 }, { country: "UAE", x: 61, y: 49 }, { country: "Saudi Arabia", x: 58, y: 50 },
  { country: "Oman", x: 63, y: 51 }, { country: "Qatar", x: 61, y: 50 }, { country: "Kenya", x: 55, y: 62 },
  { country: "South Africa", x: 54, y: 77 }, { country: "Indonesia", x: 77, y: 61 }, { country: "Vietnam", x: 79, y: 54 },
  { country: "Bangladesh", x: 73, y: 53 }, { country: "Nepal", x: 71, y: 50 }, { country: "Sri Lanka", x: 70, y: 57 },
];

export default function GlobalPresencePage() {
  return (
    <div>
      <Hero title="International Installations" subtitle="Interactive world presence with animated country-level installation markers." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Interactive World Map" />
        <WorldMap markers={markers} />
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionTitle title="Country-specific Installation Showcase" />
        <div className="grid gap-3 md:grid-cols-4 text-sm text-slate-600">
          {markers.map((m) => <div key={m.country} className="rounded-xl border border-slate-200 bg-white p-3">{m.country} installation support and commissioning availability.</div>)}
        </div>
      </section>
    </div>
  );
}
