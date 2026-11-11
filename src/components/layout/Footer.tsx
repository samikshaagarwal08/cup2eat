import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import CurrentYear from "@/components/layout/CurrentYear";

export default function Footer() {
    return (
        <footer className="bg-footer text-footer-text">
            <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
                <div>
                    <Link href="/" className="flex items-center gap-3" aria-label="CUP2EAT home">
                        <Image src="/images/logo.png" alt="" width={44} height={44} className="rounded-full" />
                        <div className="flex flex-col">
                            <span className="font-heading text-xl font-bold tracking-tight text-white">CUP2EAT</span>
                            <span className="text-xs text-footer-text/70">Eat Your Drink</span>
                        </div>
                    </Link>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-footer-text/75">
                        Eco-friendly, 100% edible cups for chai, coffee, ice cream and desserts.
                        Small cup. Big happiness.
                    </p>
                    <Link
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-white"
                    >
                        Follow {site.instagramHandle}
                        <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </div>

                <nav aria-label="Footer">
                    <p className="text-xs font-bold uppercase tracking-[2px] text-white">Explore</p>
                    <ul className="mt-4 space-y-2.5">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-sm text-footer-text/80 transition-colors hover:text-gold">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <p className="text-xs font-bold uppercase tracking-[2px] text-white">Get in touch</p>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <a href={`tel:+91${site.phone}`} className="flex items-center gap-2.5 text-footer-text/80 hover:text-gold">
                                <Phone size={16} className="text-gold" aria-hidden="true" /> {site.phoneDisplay}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 break-all text-footer-text/80 hover:text-gold">
                                <Mail size={16} className="shrink-0 text-gold" aria-hidden="true" /> {site.email}
                            </a>
                        </li>
                        <li className="flex items-center gap-2.5 text-footer-text/80">
                            <MapPin size={16} className="text-gold" aria-hidden="true" /> {site.location} · Delivering all over India
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container py-5">
                    <div className="flex flex-col gap-3 rounded-2xl border border-gold/20 bg-white/[0.03] px-4 py-3.5 sm:flex-row sm:items-center sm:gap-4">
                        <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-gold">
                            <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                            Preview Version
                        </span>
                        <p className="text-xs leading-relaxed text-footer-text/70">
                            This website is a concept preview. Content and features may be updated based on final requirements.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container flex flex-col gap-2 pb-12 pt-5 text-xs sm:pb-24 text-footer-text/60 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © <CurrentYear /> CUP2EAT. All rights reserved. · Founded by {site.founder}
                    </p>
                    <p>
                        Designed and developed by{" "}
                        <Link
                            href="https://www.linkedin.com/in/agarwal-samiksha/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange underline underline-offset-2 hover:text-white"
                        >
                            Samiksha Agarwal
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
