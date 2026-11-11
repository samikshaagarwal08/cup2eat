"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

/**
 * Counts up the leading number in `value` (e.g. "20+", "100 ml") when it
 * scrolls into view. Non-numeric values render as-is.
 */
export default function CountUp({ value, className }: { value: string; className?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const match = value.match(/^(\d+)(.*)$/);

    useEffect(() => {
        if (!inView || !match || !ref.current) return;
        const [, num, suffix] = match;
        const node = ref.current;
        const controls = animate(0, Number(num), {
            duration: 1.4,
            ease: "easeOut",
            onUpdate: (v) => {
                node.textContent = `${Math.round(v)}${suffix}`;
            },
        });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, value]);

    return (
        <span ref={ref} className={className}>
            {value}
        </span>
    );
}
