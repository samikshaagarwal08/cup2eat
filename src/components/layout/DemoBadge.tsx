"use client";

import { m } from "motion/react";

export default function DemoBadge() {
    return (
        <m.div
            role="note"
            aria-label="This website is a demo preview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
            className="pointer-events-none fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border border-white/15 bg-forest/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-gold shadow-[0_8px_24px_-8px_rgba(16,43,31,0.6)] backdrop-blur-md sm:bottom-7 sm:left-7"
        >
            <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inset-0 animate-ping rounded-full bg-orange/70 [animation-duration:2s]" />
                <span className="relative size-2 rounded-full bg-orange" />
            </span>
            Demo Preview
        </m.div>
    );
}
