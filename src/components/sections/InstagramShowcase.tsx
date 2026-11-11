
import SectionHeading from "@/components/ui/SectionHeading";
import CustomButton from "@/components/ui/CustomButton";
import InstagramReelCard from "@/components/ui/InstagramReelCard";

const instagramVideos = [
    {
        url: "https://www.instagram.com/reel/DfL86fQyfYT/?utm_source=ig_web_copy_link&exln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
        title: "Brownie cravings just got better! 🍫🤎 Indulge in delicious brownies served in our chocolate-coated edible cups, with different flavours and irresistible combinations. One cup, endless happiness! 😍",
    },
    {
        url: "https://www.instagram.com/reel/Dfmf-ZxS_sr/?utm_source=ig_web_copy_link&srtk=MzRlODBiNWFlZA==",
        title: "Real smiles, honest feedback, and lots of love for CUP2EAT! ❤️",
    },
    {
        url: "https://www.instagram.com/reel/DfeVecPh0dp/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
        title: "Ice cream tastes even better when you can eat the cup too! 🍦🍫❤️",
    },
];

export default function InstagramShowcase() {
    return (
        <section className="py-19">
            <div className="container">
                {/* Section Heading */}
                <SectionHeading
                    eyebrow="From the CUP2EAT journey"
                    title="Moments worth sharing."
                    description="Watch our product showcases, event appearances and the CUP2EAT journey."
                />

                {/* Instagram Reels */}
                <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {instagramVideos.map((video) => (
                        <InstagramReelCard
                            key={video.url}
                            url={video.url}
                            title={video.title}
                        />
                    ))}
                </div>

                {/* Instagram CTA */}
                <div className="mt-6 flex justify-center">
                    <CustomButton
                        label="Follow @cup2eat on Instagram"
                        href="https://www.instagram.com/cup2eat/"
                        variant="secondary"
                        showIcon
                    />
                </div>
            </div>
        </section>
    );
}
