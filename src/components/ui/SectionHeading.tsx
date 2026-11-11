
interface SectionHeadingProps {
    eyebrow: string;
    title: React.ReactNode;
    description?: string;
    className?: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
    className = "",
}: SectionHeadingProps) {
    return (
        <div
            className={`mx-auto mb-9.5 max-w-167.5 text-center ${className}`}
        >
            <p className="text-xs font-extrabold uppercase tracking-[2px] text-green">
                {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-2px] text-ink sm:text-4xl lg:text-[48px]">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                    {description}
                </p>
            )}
        </div>
    );
}
