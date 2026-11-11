import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const storyCards = [
    {
        image: "/images/ig/chai-cup.jpg",
        imageAlt: "Steaming chai served in a CUP2EAT edible wafer cup",
        tag: "Chai & coffee",
        title: "Sip it. Then snack it.",
        description:
            "Pour in a hot cutting chai or a latte. The crunchy wafer holds up while you sip, then becomes the snack.",
        imagePosition: "50% 30%",
    },
    {
        image: "/images/ig/reel-ice-cream.jpg",
        imageAlt: "Student enjoying ice cream in a CUP2EAT edible cup at a college fest",
        tag: "Ice cream & desserts",
        title: "Eat the cup too",
        description:
            "Chocolate-coated cups turn ice cream scoops and brownies into a dessert with zero waste left behind.",
        imagePosition: "50% 70%",
    },
    {
        image: "/images/pizza-cups.jpg",
        imageAlt: "Cheesy pizza baked inside CUP2EAT edible cups",
        tag: "Snacks & specials",
        title: "Fill it with anything",
        description:
            "From pizza cups to festive specials, cafés use CUP2EAT to create menu items people photograph and share.",
        imagePosition: "center",
    },
];

export default function StorySection() {
    return (
        <section id="story" className="scroll-mt-20 py-20 sm:py-24">
            <div className="container">
                <SectionHeading
                    eyebrow="The CUP2EAT idea"
                    title={
                        <>
                            Not just a cup.
                            <br />
                            <span className="italic text-green">A conversation starter.</span>
                        </>
                    }
                    description="Paper and plastic cups end up in the bin after a single sip. CUP2EAT replaces them with a crunchy cup you finish along with your drink: tasty, eco-friendly and zero waste."
                />

                <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {storyCards.map((card, i) => (
                        <StaggerItem key={card.title} hover className={i === 2 ? "sm:col-span-2 lg:col-span-1" : undefined}>
                            <ProductCard {...card} />
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
