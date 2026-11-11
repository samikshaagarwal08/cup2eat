import SectionHeading from "@/components/ui/SectionHeading";
import CustomButton from "@/components/ui/CustomButton";
import InstagramReelCard from "@/components/ui/InstagramReelCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { reels, site } from "@/lib/site";

export default function InstagramShowcase() {
    return (
        <section className="overflow-hidden py-20 sm:py-24">
            <div className="container">
                <SectionHeading
                    eyebrow={`On Instagram · ${site.instagramHandle}`}
                    title={
                        <>
                            Moments worth <span className="italic text-green">sharing.</span>
                        </>
                    }
                    description="Real reactions from college fests, cafés and customers across India. Tap a reel to watch it right here."
                />

                {/* horizontal snap-scroll on mobile, grid from tablet up */}
                <Stagger className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
                    {reels.map((reel) => (
                        <StaggerItem key={reel.url} className="w-[72vw] max-w-75 shrink-0 snap-center sm:w-auto sm:max-w-none">
                            <InstagramReelCard {...reel} />
                        </StaggerItem>
                    ))}
                </Stagger>

                <Reveal className="mt-8 flex justify-center">
                    <CustomButton
                        label={`Follow ${site.instagramHandle} on Instagram`}
                        href={site.instagram}
                        variant="secondary"
                        showIcon
                        newTab
                    />
                </Reveal>
            </div>
        </section>
    );
}
