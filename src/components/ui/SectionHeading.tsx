import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow: string;
    title: React.ReactNode;
    description?: string;
    className?: string;
    tone?: "light" | "dark";
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
    className,
    tone = "light",
}: SectionHeadingProps) {
    const dark = tone === "dark";

    return (
        <Reveal className={cn("mx-auto mb-10 max-w-170 text-center sm:mb-12", className)}>
            <p className={cn("eyebrow", dark && "text-gold")}>{eyebrow}</p>

            <h2
                className={cn(
                    "mt-3 text-[34px] font-semibold leading-[1.08] tracking-[-1px] sm:text-[44px] lg:text-[52px]",
                    dark ? "text-white" : "text-ink"
                )}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={cn(
                        "mt-4 text-[15px] leading-7 sm:text-base",
                        dark ? "text-footer-text/80" : "text-muted"
                    )}
                >
                    {description}
                </p>
            )}
        </Reveal>
    );
}
