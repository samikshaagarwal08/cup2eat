
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";

const storyCards = [
    {
        image: "/images/cup-product-display.jpg",
        imageAlt: "CUP2EAT edible cups showcased",
        tag: "Sip differently",
        title: "A unique experience",
        description:
            "Turn a familiar tea, coffee or dessert moment into something people remember and share.",
    },
    {
        image: "/images/cup-promo.jpg",
        imageAlt: "CUP2EAT product and promotional offer",
        tag: "For businesses",
        title: "Made to make an impression",
        description:
            "Explore edible cups for cafés, hospitality, events, gifting and business requirements.",
    },
    {
        image: "/images/cup-event.jpg",
        imageAlt: "CUP2EAT at a brand event",
        tag: "Take it to events",
        title: "Serve something new",
        description:
            "Bring a fun product concept to exhibitions, stalls, gatherings and customer experiences.",
    },
];

export default function StorySection() {
    return (
        <section id="story" className="scroll-mt-20 py-19">
            <div className="container">
                {/* Section Heading */}
                <SectionHeading
                    eyebrow="The CUP2EAT idea"
                    title={
                        <>
                            Not just a cup.
                            <br />
                            A conversation starter.
                        </>
                    }
                    description="Enjoy your beverage, then enjoy the cup. Whether it's a café counter, a celebration or a brand activation, edible cups add a playful twist to the ordinary."
                />

                {/* Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {storyCards.map((card) => (
                        <ProductCard
                            key={card.title}
                            image={card.image}
                            imageAlt={card.imageAlt}
                            tag={card.tag}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
