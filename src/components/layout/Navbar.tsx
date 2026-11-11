
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
    { label: "Our idea", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Bulk orders", href: "#business" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border-soft bg-cream/95 backdrop-blur-md">
            <nav
                className="container flex h-19.5 items-center justify-between"
                aria-label="Main navigation"
            >
                {/* Brand Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2.5"
                    aria-label="CUP2EAT home"
                    onClick={closeMenu}
                >
                    <Image src="/images/logo.png" alt="CUP2EAT logo" width={32} height={32} />


                    <span className="text-2xl font-black tracking-[-1px] text-forest">
                        CUP2EAT
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-semibold text-ink transition-colors duration-200 hover:text-green"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <Link
                    href="#contact"
                    className="hidden items-center gap-1.5 rounded-full bg-forest px-5 py-3 text-sm font-bold text-white! transition-all duration-200 hover:bg-green hover:shadow-md md:inline-flex"
                >
                    Let&apos;s talk
                    <ArrowUpRight size={16} />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-soft text-forest transition-colors hover:bg-soft-green md:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            <div
                id="mobile-navigation"
                className={`overflow-hidden border-t border-border-soft bg-cream transition-all duration-300 ease-in-out md:hidden ${isMenuOpen
                        ? "max-h-100 opacity-100"
                        : "max-h-0 border-transparent opacity-0"
                    }`}
            >
                <div className="container flex flex-col gap-1 py-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className="rounded-xl px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-soft-green hover:text-green"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="#contact"
                        onClick={closeMenu}
                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green"
                    >
                        Let&apos;s talk
                        <ArrowUpRight size={16} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
