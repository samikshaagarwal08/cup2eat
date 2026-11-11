"use client";

import { useState } from "react";
import Image from "next/image";
import { m } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";

interface InstagramReelCardProps {
    url: string;
    poster: string;
    title: string;
}

// Facade pattern: show a lightweight poster image and only load Instagram's
// heavy embed iframe (~1MB of JS) once the visitor actually clicks play.
export default function InstagramReelCard({ url, poster, title }: InstagramReelCardProps) {
    const [playing, setPlaying] = useState(false);
    const match = url.match(/\/(reel|p|tv)\/([^/?#]+)/);
    const embedUrl = match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed` : null;

    return (
        <m.div
            whileHover={playing ? undefined : { y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative aspect-9/16 overflow-hidden rounded-[22px] border border-border-soft bg-forest shadow-sm"
        >
            {playing && embedUrl ? (
                <iframe
                    src={embedUrl}
                    title={title}
                    className="absolute inset-0 size-full bg-white"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                />
            ) : (
                <button
                    type="button"
                    onClick={() => (embedUrl ? setPlaying(true) : window.open(url, "_blank", "noopener"))}
                    className="group absolute inset-0 text-left focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-gold"
                    aria-label={`Play reel: ${title}`}
                >
                    <Image
                        src={poster}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

                    <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-forest shadow-xl backdrop-blur transition-transform duration-300 group-hover:scale-110">
                        <Play size={26} className="ml-1 fill-current" aria-hidden="true" />
                    </span>

                    <span className="absolute inset-x-0 bottom-0 p-4">
                        <span className="block text-sm font-semibold leading-snug text-white">{title}</span>
                        <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-gold">
                            Watch reel <ArrowUpRight size={13} aria-hidden="true" />
                        </span>
                    </span>
                </button>
            )}
        </m.div>
    );
}
