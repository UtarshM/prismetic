import { Hero, SectionTitle } from "@/components/sections";
import { company, migrated } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <div>
      <Hero title="Contact Us" subtitle="Premium enterprise contact center with office and factory locations, maps and dedicated forms." />
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2">
        <div>
          <SectionTitle title="Office Locations" />
          <p className="text-slate-600">Head Office: {company.headOffice}</p>
          <p className="mt-3 text-slate-600">Factory Location: {company.factory}</p>
          <SectionTitle title="Sales Contacts" />
          <p className="text-slate-600">{company.email} / {company.phones[0]}</p>
          <SectionTitle title="Service Contacts" />
          <p className="text-slate-600">{company.supportEmail} / {company.phones[1]}</p>
          <SectionTitle title="Map Integration" />
          <iframe title="Prismtec map" className="h-80 w-full rounded-xl border border-slate-200" loading="lazy" src="https://www.google.com/maps/embed/v1/search?q=58,+1st+Floor,+Universal+Industrial+Estate,+IB+Patel+Rd,+Sonawala+Industry+Estate,+Goregaon,+Mumbai,+Maharashtra+400063&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
        </div>

        <div className="space-y-8">
          <div>
            <SectionTitle title="General Inquiry" />
            <form className="grid gap-3">
              <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Company Name" />
              <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Email" />
              <textarea className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Message" />
              <button className="w-fit rounded-xl bg-amber-300 px-4 py-2 text-black">Submit</button>
            </form>
          </div>

          <div>
            <SectionTitle title="Request Quote" />
            <a href="/request-quote" className="inline-block rounded-xl border border-amber-300 px-4 py-2 text-amber-300">Open Multi-step Quote Form</a>
          </div>

          <div>
            <SectionTitle title="Service Request" />
            <form className="grid gap-3">
              <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Machine / Line" />
              <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Location" />
              <textarea className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Service Issue" />
              <button className="w-fit rounded-xl bg-amber-300 px-4 py-2 text-black">Raise Service Request</button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionTitle title="Extracted Contact Information" />
        <div className="grid gap-3 md:grid-cols-2">
          {migrated.contactCards.map((c) => <div key={c.text} className="rounded-xl border border-slate-200 bg-white p-4 text-slate-600"><p className="text-amber-300">{c.title}</p><p>{c.text}</p></div>)}
        </div>
      </section>
    </div>
  );
}
