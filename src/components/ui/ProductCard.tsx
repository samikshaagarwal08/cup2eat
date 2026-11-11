
import Image from "next/image";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
    image: string;
    imageAlt: string;
    tag: string;
    title: string;
    description: string;
}

export default function ProductCard({
    image,
    imageAlt,
    tag,
    title,
    description,
}: ProductCardProps) {
    return (
        <Card className="overflow-hidden rounded-[22px] border-border-soft bg-paper py-0 shadow-none">
            {/* Image */}
            <div className="relative h-60 overflow-hidden bg-[#ead8b8]">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Content */}
            <CardContent className="p-5.5">
                <Badge
                    variant="secondary"
                    className="rounded-none bg-transparent p-0 text-[11px] font-extrabold uppercase tracking-[1px] text-green hover:bg-transparent"
                >
                    {tag}
                </Badge>

                <h3 className="mt-2 text-[22px] font-bold leading-tight text-ink">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-[1.65] text-muted">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}
