import { Hero, SectionTitle } from "@/components/sections";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { migrated } from "@/lib/site-data";

export default function GalleryPage() {
  return (
    <div>
      <Hero title="Photo Gallery" subtitle="Masonry and lightbox gallery using full Prismtec machine, factory, installation and event visual library." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle title="Gallery" />
        <LightboxGallery categories={{ All: migrated.assets.all, Machines: migrated.assets.machineImages, Factory: migrated.assets.factoryImages, Installations: migrated.assets.eventImages, Events: migrated.assets.eventImages, Clients: migrated.assets.clientLogos }} />
      </section>
    </div>
  );
}
