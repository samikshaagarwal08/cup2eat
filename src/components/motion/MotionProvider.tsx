"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

// LazyMotion + `m` components keep the initial JS small (~5kb instead of ~34kb).
// `reducedMotion="user"` respects the OS "reduce motion" setting.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation} strict>
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LazyMotion>
    );
}
