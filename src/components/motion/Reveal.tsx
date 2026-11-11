"use client";

import { m, type Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    x?: number;
}

/** Fades and slides its children in once they scroll into view. */
export function Reveal({ children, className, delay = 0, y = 28, x = 0 }: RevealProps) {
    return (
        <m.div
            className={className}
            initial={{ opacity: 0, y, x }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay }}
        >
            {children}
        </m.div>
    );
}

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Staggers the entrance of each <StaggerItem> inside it. */
export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <m.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        >
            {children}
        </m.div>
    );
}

export function StaggerItem({
    children,
    className,
    hover = false,
}: {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}) {
    return (
        <m.div
            className={className}
            variants={item}
            whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
        >
            {children}
        </m.div>
    );
}
