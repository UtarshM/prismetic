"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Marker = { country: string; x: number; y: number };

export function WorldMap({ markers }: { markers: Marker[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
      <div className="relative aspect-[16/8] w-full">
        <Image src="/prismtec-assets/assets/img/Maps.webp" alt="Prismtec global installation map" fill className="object-cover opacity-80" sizes="100vw" />
        {markers.map((m) => (
          <motion.div
            key={m.country}
            className="absolute"
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <div className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_20px_#d4af37]" />
            <span className="ml-2 whitespace-nowrap text-xs text-slate-700">{m.country}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
