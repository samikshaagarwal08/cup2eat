import Image from "next/image";

interface ProductCardProps {
    image: string;
    imageAlt: string;
    tag: string;
    title: string;
    description: string;
    imagePosition?: string;
}

export default function ProductCard({
    image,
    imageAlt,
    tag,
    title,
    description,
    imagePosition = "center",
}: ProductCardProps) {
    return (
        <article className="group h-full overflow-hidden rounded-[24px] border border-border-soft bg-paper transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(23,61,44,0.35)]">
            <div className="relative aspect-3/4 overflow-hidden bg-[#ead8b8]">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{ objectPosition: imagePosition }}
                />
            </div>

            <div className="p-6">
                <p className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-green">{tag}</p>
                <h3 className="mt-2 text-[24px] font-semibold leading-tight text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted">{description}</p>
            </div>
        </article>
    );
}
