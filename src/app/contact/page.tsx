import { Hero, SectionTitle } from "@/components/sections";
import { company, migrated, machineRegistry } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <div>
      <Hero title="Contact Us" subtitle="Premium enterprise contact center with office and factory locations, maps and dedicated forms." />
      <section className="section-shell grid gap-10 md:grid-cols-2">
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
            <form className="premium-card grid gap-3 rounded-2xl p-4">
              <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Company Name" />
              <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Email" />
              <select className="rounded-xl border border-slate-300 bg-white p-3" defaultValue="">
                <option value="" disabled>Select machine of interest</option>
                {machineRegistry.map((m) => <option key={m.id} value={m.title}>{m.title}</option>)}
              </select>
              <textarea className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Message" />
              <button className="premium-cta w-fit px-4 py-2">Submit</button>
            </form>
          </div>

          <div>
            <SectionTitle title="Request Quote" />
            <a href="/request-quote" className="inline-block rounded-xl border border-blue-600 px-4 py-2 text-blue-700">Open Multi-step Quote Form</a>
          </div>

          <div>
            <SectionTitle title="Service Request" />
            <form className="premium-card grid gap-3 rounded-2xl p-4">
              <select className="rounded-xl border border-slate-300 bg-white p-3" defaultValue="">
                <option value="" disabled>Select machine / line</option>
                {machineRegistry.map((m) => <option key={m.id} value={m.title}>{m.title}</option>)}
              </select>
              <input className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Location" />
              <textarea className="rounded-xl border border-slate-300 bg-white p-3" placeholder="Service Issue" />
              <button className="premium-cta w-fit px-4 py-2">Raise Service Request</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <SectionTitle title="Extracted Contact Information" />
        <div className="grid gap-3 md:grid-cols-2">
          {migrated.contactCards.map((c) => <div key={c.text} className="premium-card rounded-xl p-4 text-slate-600"><p className="text-blue-700">{c.title}</p><p>{c.text}</p></div>)}
        </div>
      </section>
    </div>
  );
}
