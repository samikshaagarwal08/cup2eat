import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
    label: string;
    href: string;
    variant?: "primary" | "secondary" | "light";
    showIcon?: boolean;
    className?: string;
    newTab?: boolean;
}

const variants = {
    primary: "bg-forest text-white hover:bg-green hover:shadow-lg hover:shadow-forest/20",
    secondary: "border border-border-green bg-transparent text-forest hover:bg-soft-green",
    light: "bg-gold text-forest hover:bg-white",
};

// Renders a real link styled as a button (previously an <a> nested inside a
// <button>, which is invalid HTML and breaks keyboard/screen-reader behaviour).
export default function CustomButton({
    label,
    href,
    variant = "primary",
    showIcon = false,
    className,
    newTab = false,
}: CustomButtonProps) {
    const isExternal = /^https?:\/\//.test(href);

    return (
        <Link
            href={href}
            {...(isExternal && { target: newTab ? "_blank" : undefined, rel: "noopener noreferrer" })}
            className={cn(
                "group inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green active:scale-[0.97]",
                variants[variant],
                className
            )}
        >
            {label}
            {showIcon && (
                <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            )}
        </Link>
    );
}
