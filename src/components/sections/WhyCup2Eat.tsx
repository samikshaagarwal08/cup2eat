
import BenefitCard from "@/components/ui/BenefitCard";
import CustomButton from "@/components/ui/CustomButton";

const benefits = [
    {
        icon: "🍪",
        title: "Edible concept",
        description: "The cup becomes part of the treat.",
    },
    {
        icon: "🌱",
        title: "Eco-conscious",
        description: "A thoughtful alternative serving story.",
    },
    {
        icon: "☕",
        title: "Beverage moments",
        description: "Pair with café and event experiences.",
    },
    {
        icon: "🤝",
        title: "Business enquiries",
        description: "Connect for bulk and wholesale details.",
    },
];

export default function WhyCup2Eat() {
    return (
        <section
            id="products"
            className="scroll-mt-20 bg-soft-green py-19"
        >
            <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                {/* Left Content */}
                <div>
                    <p className="text-xs font-extrabold uppercase tracking-[2px] text-green">
                        Why CUP2EAT
                    </p>

                    <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-2px] text-ink sm:text-[48px]">
                        Small cup.
                        <br />
                        Big wow factor.
                    </h2>

                    <p className="mt-4 max-w-125 text-sm leading-7 text-muted sm:text-base">
                        Give customers a reason to pause, taste and talk.
                        CUP2EAT is positioned around edible innovation and
                        a memorable beverage experience. Product specifications
                        and flavour availability can be confirmed with the team.
                    </p>

                    <div className="mt-6">
                        <CustomButton
                            label="Ask about products"
                            href="#contact"
                            showIcon
                        />
                    </div>
                </div>

                {/* Right Benefit Cards */}
                <div className="grid grid-cols-1 gap-3.75 sm:grid-cols-2">
                    {benefits.map((benefit) => (
                        <BenefitCard
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
