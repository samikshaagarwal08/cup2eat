
import {
    Card,
    CardContent,
} from "@/components/ui/card";

interface BenefitCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function BenefitCard({
    icon,
    title,
    description,
}: BenefitCardProps) {
    return (
        <Card className="rounded-[18px] border-none bg-paper py-0 shadow-none">
            <CardContent className="p-5.25">
                <span className="text-2xl" aria-hidden="true">
                    {icon}
                </span>

                <h3 className="mt-2.5 text-base font-bold text-ink">
                    {title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
