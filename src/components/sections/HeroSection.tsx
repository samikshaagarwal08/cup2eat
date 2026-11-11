"use client";

import { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "motion/react";
import { BadgeCheck, Leaf, Truck } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";
import { flavours, whatsappLink } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const trust = [
    { icon: BadgeCheck, label: "FSSAI registered" },
    { icon: Truck, label: "Free delivery pan-India" },
    { icon: Leaf, label: "Zero waste" },
];

export default function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const cardY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section ref={ref} className="relative overflow-hidden">
            {/* soft background blobs */}
            <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 size-105 rounded-full bg-gold/25 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-30 bottom-0 size-90 rounded-full bg-soft-green blur-3xl" />

            <div className="container relative grid grid-cols-1 items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24 lg:pt-20">
                <div>
                    <m.p
                        className="eyebrow inline-flex items-center gap-2 rounded-full border border-border-green bg-paper/70 px-3.5 py-1.5"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                    >
                        <span className="size-1.5 rounded-full bg-orange" />
                        Eco-friendly · Edible cups · Zero waste
                    </m.p>

                    <h1 className="mt-5 text-[56px] font-semibold leading-[0.95] tracking-[-2px] text-ink sm:text-7xl lg:text-[88px] lg:tracking-[-3px]">
                        {["Eat", "your"].map((word, i) => (
                            <span key={word} className="inline-block overflow-hidden pb-2 pr-[0.22em] align-bottom">
                                <m.span
                                    className="inline-block"
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.1 }}
                                >
                                    {word}
                                </m.span>
                            </span>
                        ))}
                        <br />
                        <span className="inline-block overflow-hidden pb-2 align-bottom">
                            <m.span
                                className="inline-block italic text-orange"
                                initial={{ y: "110%", rotate: 6 }}
                                animate={{ y: 0, rotate: 0 }}
                                transition={{ duration: 0.9, ease: EASE, delay: 0.32 }}
                            >
                                drink.
                            </m.span>
                        </span>
                    </h1>

                    <m.p
                        className="mt-5 max-w-130 text-base leading-[1.75] text-muted sm:text-[17px]"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
                    >
                        Sip your chai, coffee or ice cream, then eat the cup. CUP2EAT makes crunchy,
                        100% edible cups in Chocolate, Vanilla and Elaichi for cafés, events and
                        businesses that want to serve something memorable, without the plastic.
                    </m.p>

                    <m.div
                        className="mt-7 flex flex-wrap gap-3"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
                    >
                        <CustomButton label="Order on WhatsApp" href={whatsappLink("Hi CUP2EAT! I'd like to place an order.")} showIcon className="text-white!" />
                        <CustomButton label="See bulk prices" href="#business" variant="secondary" />
                    </m.div>

                    <m.ul
                        className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
                        initial="hidden"
                        animate="show"
                        variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } } }}
                    >
                        {trust.map(({ icon: Icon, label }) => (
                            <m.li
                                key={label}
                                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                                className="flex items-center gap-2 text-sm font-semibold text-forest"
                            >
                                <Icon size={18} className="text-green" aria-hidden="true" />
                                {label}
                            </m.li>
                        ))}
                    </m.ul>
                </div>

                {/* Visual */}
                <div className="relative mx-auto w-full max-w-140">
                    <m.div
                        style={{ y: imageY }}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                        className="relative aspect-4/5 overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#e6c28c,#f2e5c8_55%,#b8c5a6)] shadow-[0_40px_80px_-30px_rgba(23,61,44,0.45)] sm:aspect-square lg:aspect-4/5"
                    >
                        <Image
                            src="/images/pizza-cups.jpg"
                            alt="Edible CUP2EAT wafer cups filled with baked cheesy pizza"
                            fill
                            preload
                            sizes="(max-width: 1024px) 92vw, 46vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-forest/55 via-transparent to-transparent" />
                        <p className="absolute left-5 right-28 top-5 font-heading text-2xl font-semibold italic leading-tight text-white sm:left-7 sm:top-7 sm:text-3xl">
                            Your cup is
                            <br />
                            the snack.
                        </p>
                    </m.div>

                    {/* Spinning sticker */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 200, damping: 14 }}
                        className="absolute -right-2 -top-5 size-26 sm:-right-5 sm:size-30"
                    >
                        <m.svg
                            viewBox="0 0 100 100"
                            className="size-full drop-shadow-lg"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            aria-hidden="true"
                        >
                            <defs>
                                <path id="sticker-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                            </defs>
                            <circle cx="50" cy="50" r="49" fill="#173d2c" />
                            <text fill="#f5c77d" fontSize="10" fontWeight="800">
                                <textPath href="#sticker-circle" textLength="224" lengthAdjust="spacing">
                                    SIP • SNACK • REPEAT • EAT YOUR DRINK •
                                </textPath>
                            </text>
                        </m.svg>
                        <span className="absolute inset-0 grid place-items-center text-3xl" aria-hidden="true">♻</span>
                    </m.div>

                    {/* Flavour chip */}
                    <m.div
                        style={{ y: cardY }}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
                        className="absolute -left-3 bottom-16 rounded-2xl border border-border-soft bg-paper/95 p-3.5 shadow-xl backdrop-blur sm:-left-8 sm:bottom-20"
                    >
                        <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-muted">3 flavours · 100 ml</p>
                        <div className="mt-2 flex items-center gap-2">
                            {flavours.map((f, i) => (
                                <m.span
                                    key={f.name}
                                    title={f.name}
                                    className="size-8 rounded-full border-2"
                                    style={{ backgroundColor: f.swatch, borderColor: f.ring }}
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
                                />
                            ))}
                            <span className="ml-1 text-sm font-semibold text-ink">Choc · Vanilla · Elaichi</span>
                        </div>
                    </m.div>

                    {/* Offer chip */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
                        className="absolute -bottom-5 right-4 rounded-2xl bg-forest px-4 py-3 text-white shadow-xl sm:right-8"
                    >
                        <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-gold">Wholesale</p>
                        <p className="font-heading text-2xl font-bold">
                            ₹3,999 <span className="font-sans text-xs font-medium text-footer-text/80">/ 396 cups</span>
                        </p>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
