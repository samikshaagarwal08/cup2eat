
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-footer text-footer-text">
            <div className="container">
                <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                        aria-label="CUP2EAT home"
                    >
                        <Image src="/images/logo.png" alt="CUP2EAT logo" width={32} height={32} />

                        <div className="flex flex-col">
                            <span className="text-base font-extrabold tracking-tight text-white">
                                CUP2EAT
                            </span>

                            <span className="text-xs text-footer-text/70">
                                Eat Your Drink
                            </span>
                        </div>
                    </Link>

                    {/* Copyright */}
                    <p className="text-sm leading-relaxed text-footer-text/80">
                        © {new Date().getFullYear()} CUP2EAT. All rights reserved.
                    </p>

                    {/* Instagram */}
                    <Link
                        href="https://www.instagram.com/cup2eat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#f5c77d] transition-colors hover:text-white"
                    >
                        Instagram
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-white/10 py-4 flex flex-row justify-between gap-2">
                    <p className="text-center text-xs text-footer-text/60">
                        A little bite. A big idea.
                    </p>
                    <p className="text-center text-xs text-footer-text/60">
                        Designed and developed by{" "}
                        <Link href="https://www.linkedin.com/in/agarwal-samiksha/" target="_blank" rel="noopener noreferrer" className="text-orange! underline hover:text-white">
                        Samiksha Agarwal
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
