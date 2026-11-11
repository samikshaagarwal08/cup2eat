"use client";

import { m } from "motion/react";
import { highlights } from "@/lib/site";

export default function BrandBand() {
    // Render the list twice so the loop is seamless when translating by -50%.
    const items = [...highlights, ...highlights];

    return (
        <section aria-label="CUP2EAT highlights" className="relative z-10 ml-[-5%] w-[110%] -rotate-1 overflow-hidden bg-forest py-4 shadow-lg sm:py-5">
            <ul className="sr-only">
                {highlights.map((h) => (
                    <li key={h}>{h}</li>
                ))}
            </ul>
            <m.div
                aria-hidden="true"
                className="flex w-max items-center gap-8 whitespace-nowrap will-change-transform"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
                {items.map((label, i) => (
                    <span key={i} className="flex items-center gap-8 font-heading text-lg font-semibold italic text-white! sm:text-xl!">
                        {label}
                        <span className="text-sm not-italic text-orange">✦</span>
                    </span>
                ))}
            </m.div>
        </section>
    );
}
