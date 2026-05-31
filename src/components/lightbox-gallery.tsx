"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type CategoryMap = Record<string, string[]>;

export function LightboxGallery({ categories }: { categories: CategoryMap }) {
  const keys = Object.keys(categories);
  const [active, setActive] = useState(keys[0]);
  const [selected, setSelected] = useState<string | null>(null);
  const items = useMemo(() => categories[active] ?? [], [active, categories]);

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        {keys.map((k) => (
          <button key={k} className={`rounded-full border px-4 py-2 text-sm ${active === k ? "border-amber-300 text-amber-300" : "border-slate-300 text-slate-600"}`} onClick={() => setActive(k)}>
            {k}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-4 md:columns-3">
        {items.map((img, idx) => (
          <button key={`${img}-${idx}`} className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-slate-200" onClick={() => setSelected(img)}>
            <Image src={img} alt={active} width={800} height={600} className="h-auto w-full object-cover transition group-hover:scale-105" />
          </button>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-6" onClick={() => setSelected(null)}>
          <div className="relative max-h-[90vh] w-full max-w-5xl">
            <Image src={selected} alt="Selected gallery" width={1600} height={1000} className="h-auto max-h-[90vh] w-full rounded-xl object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
