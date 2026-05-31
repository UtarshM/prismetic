import { content } from "@/content";

export const productCategorySlugs = [
  "unscrambler",
  "rinser",
  "fillers",
  "monoblock-fillers-cappers",
  "cappers",
  "labellers",
  "bottling-lines",
  "semi-automatic-machines",
] as const;

export type ProductCategorySlug = (typeof productCategorySlugs)[number];

const categoryMeta: Record<ProductCategorySlug, { title: string; summary: string }> = {
  unscrambler: { title: "Unscrambler", summary: "Bottle orientation and infeed automation systems." },
  rinser: { title: "Rinser", summary: "Container cleaning and rinsing platforms." },
  fillers: { title: "Fillers", summary: "Liquid and powder filling systems for diverse viscosities." },
  "monoblock-fillers-cappers": { title: "Monoblock Fillers & Cappers", summary: "Integrated fill-cap compact machine platforms." },
  cappers: { title: "Cappers", summary: "Torque-controlled capping and sealing automation." },
  labellers: { title: "Labellers", summary: "Sticker and sleeve labeling machines." },
  "bottling-lines": { title: "Bottling Lines", summary: "Turnkey integrated bottling line deployments." },
  "semi-automatic-machines": { title: "Semi Automatic Machines", summary: "Flexible semi-automatic packaging systems." },
};

const aliasToCanonical: Record<string, ProductCategorySlug> = {
  unscrambler: "unscrambler",
  rinser: "rinser",
  fillers: "fillers",
  "monoblock-fillers-and-cappers": "monoblock-fillers-cappers",
  "monoblock-fillers-cappers": "monoblock-fillers-cappers",
  cappers: "cappers",
  labellers: "labellers",
  "bottling-lines": "bottling-lines",
  "semi-automatic-machines": "semi-automatic-machines",
};

export type Machine = {
  id: string;
  slug: string;
  title: string;
  category: ProductCategorySlug;
  categoryTitle: string;
  image: string;
  summary: string;
  points: string[];
  video: string | null;
  href: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeTitle(value: string) {
  return value
    .replace(/\s+/g, " ")
    .replace(/[—–]/g, "-")
    .trim();
}

const allMachines: Machine[] = content.productDetails
  .map((item) => {
    const canonicalCategory = aliasToCanonical[item.categorySlug || ""];
    if (!canonicalCategory) return null;

    const title = normalizeTitle(item.title);
    const slug = slugify(title || item.slug);

    return {
      id: `${canonicalCategory}:${slug}`,
      slug,
      title,
      category: canonicalCategory,
      categoryTitle: categoryMeta[canonicalCategory].title,
      image: item.image,
      summary: item.summary?.trim() || title,
      points: [...new Set(item.points.map((p) => p.trim()).filter(Boolean))],
      video: item.video,
      href: item.href,
    } satisfies Machine;
  })
  .filter((v): v is Machine => Boolean(v));

const dedupedMap = new Map<string, Machine>();
for (const machine of allMachines) {
  const existing = dedupedMap.get(machine.id);
  if (!existing) {
    dedupedMap.set(machine.id, machine);
    continue;
  }

  const better = machine.points.length > existing.points.length ? machine : existing;
  dedupedMap.set(machine.id, better);
}

export const machineRegistry = [...dedupedMap.values()].sort((a, b) => a.title.localeCompare(b.title));

export const productsByCategory = productCategorySlugs.map((slug) => ({
  slug,
  title: categoryMeta[slug].title,
  summary: categoryMeta[slug].summary,
  items: machineRegistry.filter((machine) => machine.category === slug),
}));

export const industries = [
  "pharmaceutical",
  "food-beverage",
  "cosmetics",
  "personal-care",
  "dairy",
  "home-care",
  "lubricants",
  "agrochemical",
  "nutraceutical",
  "chemical",
].map((slug) => ({
  slug,
  name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  overview: `Prismtec provides tailored automation and compliance-ready primary packaging for ${slug.replace(/-/g, " ")} manufacturers.`,
  challenges: ["High throughput with precision", "SKU changeover complexity", "Regulatory consistency"],
  solutions: ["Servo filling and capping", "Recipe-based controls", "Integrated line-level automation"],
  machines: machineRegistry.slice(0, 8).map((m) => m.title),
  caseStudy: "Installation improved uptime and throughput while reducing manual intervention.",
}));

export const company = {
  name: "PRISMTECH PACKAGING SOLUTIONS PVT. LTD.",
  email: "info@prismtec.com",
  supportEmail: "enquiry@prismtec.com",
  phones: ["+91-22-49240497", "+91-22-26850330", "+91-7738333265"],
  headOffice: "Universal Industrial Estate, 58, 1st Floor I.B. Patel Road, Goregaon (East) Mumbai - 400 063.",
  factory: "Plot No. A - 240, T.T.C. Industrial Area, M.I.D.C. Mahape, Navi Mumbai - 400710, Maharashtra, INDIA",
};

export const countries = ["India", "UAE", "Saudi Arabia", "Oman", "Qatar", "Kenya", "South Africa", "Indonesia", "Vietnam", "Bangladesh", "Nepal", "Sri Lanka"];

export const migrated = content;
