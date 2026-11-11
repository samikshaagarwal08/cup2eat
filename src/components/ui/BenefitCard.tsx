import type { LucideIcon } from "lucide-react";

interface BenefitCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
    return (
        <div className="group h-full rounded-[20px] border border-transparent bg-paper p-5.5 transition-colors duration-300 hover:border-border-green">
            <span className="grid size-11 place-items-center rounded-xl bg-soft-green text-green transition-colors duration-300 group-hover:bg-forest group-hover:text-gold">
                <Icon size={21} aria-hidden="true" />
            </span>
            <h3 className="mt-3.5 font-sans text-base font-bold text-ink">{title}</h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{description}</p>
        </div>
    );
}
