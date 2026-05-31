"use client";

import { useState } from "react";
import { Hero, SectionTitle } from "@/components/sections";
import { Button } from "@/components/ui/button";

const steps = ["Industry", "Product Type", "Production Capacity", "Country", "Contact Information"];

export default function RequestQuotePage() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/quote", { method: "POST", body: JSON.stringify(data) });
    if (res.ok) setSent(true);
  }

  return <div><Hero title="Get a Quote" subtitle="Lead-ready multi-step inquiry designed for enterprise sales workflows." /><section className="mx-auto max-w-4xl px-6 py-16"><SectionTitle title={`Step ${step + 1}: ${steps[step]}`} /><form onSubmit={submit} className="glass rounded-2xl p-6"><div className="space-y-3">{step===0&&<input name="industry" className="w-full rounded-xl bg-slate-100 p-3" placeholder="Industry" required/>}{step===1&&<input name="productType" className="w-full rounded-xl bg-slate-100 p-3" placeholder="Product Type" required/>}{step===2&&<input name="capacity" className="w-full rounded-xl bg-slate-100 p-3" placeholder="Production Capacity" required/>}{step===3&&<input name="country" className="w-full rounded-xl bg-slate-100 p-3" placeholder="Country" required/>}{step===4&&<><input name="name" className="w-full rounded-xl bg-slate-100 p-3" placeholder="Name" required/><input name="email" type="email" className="w-full rounded-xl bg-slate-100 p-3" placeholder="Email" required/><input name="phone" className="w-full rounded-xl bg-slate-100 p-3" placeholder="Phone" required/></>}</div><div className="mt-5 flex gap-3">{step>0&&<Button type="button" onClick={()=>setStep(step-1)} variant="outline">Back</Button>}{step<4?<Button type="button" onClick={()=>setStep(step+1)}>Next</Button>:<Button>Submit Quote</Button>}</div>{sent&&<p className="mt-4 text-emerald-300">Quote request submitted successfully.</p>}</form></section></div>;
}
