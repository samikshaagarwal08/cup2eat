
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface CustomButtonProps {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
    showIcon?: boolean;
    className?: string;
}

export default function CustomButton({
    label,
    href,
    variant = "primary",
    showIcon = false,
    className = "",
}: CustomButtonProps) {
    return (
        <Button
            className={`h-auto rounded-full px-5 py-3 text-sm font-bold transition-all duration-200 ${variant === "primary"
                ? "bg-forest text-white hover:bg-green"
                : "border border-border-green bg-transparent text-forest hover:bg-soft-green"
                }
                ${className}`}
        >
            <Link href={href} className="flex items-center gap-1.5">
                {label}

                {showIcon && <ArrowUpRight size={16} />}
            </Link>
        </Button>
    );
}
