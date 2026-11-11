
const brandFeatures = [
    {
        icon: "🍪",
        label: "Edible cups",
    },
    {
        icon: "🌿",
        label: "Eco-conscious concept",
    },
    {
        icon: "🎉",
        label: "Made for moments",
    },
    {
        icon: "📦",
        label: "Bulk enquiries welcome",
    },
];

export default function BrandBand() {
    return (
        <section className="bg-forest py-5">
            <div className="container flex flex-wrap items-center justify-around gap-x-5 gap-y-4">
                {brandFeatures.map((feature) => (
                    <div
                        key={feature.label}
                        className="flex items-center gap-2 text-sm font-bold text-white"
                    >
                        <span>{feature.icon}</span>

                        <span className="text-[#f6c77f]">
                            {feature.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
