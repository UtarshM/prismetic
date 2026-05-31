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

const categoryAliases: Record<string, string> = {
  "unscrambler": "unscrambler",
  "rinser": "rinser",
  "fillers": "fillers",
  "monoblock-fillers-and-cappers": "monoblock-fillers-cappers",
  "cappers": "cappers",
  "labellers": "labellers",
  "bottling-lines": "bottling-lines",
  "semi-automatic-machines": "semi-automatic-machines",
};

export const productsByCategory = productCategorySlugs.map((slug) => {
  const sourceSlug = Object.keys(categoryAliases).find((k) => categoryAliases[k] === slug) ?? slug;
  const key = sourceSlug;
  const items = content.groupedProducts[key] ?? [];
  return {
    slug,
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    summary: `Prismtec ${slug.replace(/-/g, " ")} portfolio for industrial packaging lines.`,
    items,
  };
});

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
  machines: ["Unscrambler", "Rinser", "Fillers", "Cappers", "Labellers"],
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
