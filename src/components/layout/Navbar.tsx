"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));

    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <m.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "sticky top-0 z-50 w-full border-b backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300",
                scrolled || isMenuOpen
                    ? "border-border-soft bg-cream/90 shadow-[0_8px_30px_-12px_rgba(23,61,44,0.18)]"
                    : "border-transparent bg-cream/70"
            )}
        >
            <nav
                className={cn(
                    "container flex items-center justify-between transition-[height] duration-300",
                    scrolled ? "h-16" : "h-19.5"
                )}
                aria-label="Main navigation"
            >
                <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="CUP2EAT home" onClick={closeMenu}>
                    <m.span whileHover={{ rotate: -12, scale: 1.08 }} className="block">
                        <Image src="/images/logo.png" alt="" width={38} height={38} className="rounded-full" />
                    </m.span>
                    <span className="font-heading text-2xl font-bold tracking-tight text-forest">CUP2EAT</span>
                </Link>

                <div className="hidden items-center gap-1 lg:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="group relative rounded-full px-3.5 py-2 text-sm font-semibold text-ink transition-colors hover:text-green"
                        >
                            {link.label}
                            <span className="absolute inset-x-3.5 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="hidden items-center gap-1.5 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white! transition-all duration-200 hover:bg-green hover:shadow-md lg:inline-flex"
                >
                    Order now
                    <ArrowUpRight size={16} aria-hidden="true" />
                </Link>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="inline-flex size-11 items-center justify-center rounded-xl border border-border-soft text-forest transition-colors hover:bg-soft-green lg:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <m.span
                            key={isMenuOpen ? "close" : "open"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </m.span>
                    </AnimatePresence>
                </button>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <m.div
                        id="mobile-navigation"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-border-soft bg-cream lg:hidden"
                    >
                        <m.div
                            className="container flex flex-col gap-1 py-4"
                            initial="hidden"
                            animate="show"
                            variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
                        >
                            {navLinks.map((link) => (
                                <m.div
                                    key={link.label}
                                    variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="block rounded-xl px-4 py-3 text-base font-semibold text-ink transition-colors hover:bg-soft-green hover:text-green"
                                    >
                                        {link.label}
                                    </Link>
                                </m.div>
                            ))}

                            <m.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                <Link
                                    href="#contact"
                                    onClick={closeMenu}
                                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green"
                                >
                                    Order now
                                    <ArrowUpRight size={16} aria-hidden="true" />
                                </Link>
                            </m.div>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </m.header>
    );
}
