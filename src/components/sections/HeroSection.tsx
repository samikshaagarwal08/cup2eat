
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";

export default function HeroSection() {
    return (
        <section className="container grid grid-cols-1 items-center gap-7.5 py-12 md:grid-cols-2 md:gap-13.75 md:py-12 lg:py-17.5">
            {/* Hero Content */}
            <div>
                <p className="text-xs font-extrabold uppercase tracking-[2px] text-green">
                    A little bite. A big idea.
                </p>

                <h1 className="mt-4.5 text-[48px] font-bold leading-[0.98] tracking-[-2.8px] text-ink sm:text-6xl md:text-[64px] lg:text-[78px] lg:tracking-[-4px]">
                    Eat your
                    <br />
                    <span className="text-orange">drink.</span>
                </h1>

                <p className="mt-5 max-w-122.5 text-base leading-[1.7] text-muted sm:text-[17px]">
                    Meet the cup that makes your sip more memorable. CUP2EAT
                    brings edible cups to cafés, events and businesses looking
                    for a fun, thoughtful serving experience.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6.75 flex flex-wrap gap-3">
                    <CustomButton
                        label="Explore the cups"
                        href="#products"
                        showIcon
                    />

                    <CustomButton
                        label="Enquire for bulk"
                        href="#contact"
                        variant="secondary"
                    />
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex min-h-85 items-center justify-center overflow-hidden rounded-8 bg-[linear-gradient(135deg,#e6c28c,#f2e5c8_55%,#b8c5a6)] sm:min-h-100 md:min-h-110">
                <Image
                    src="/images/cup-product-display.jpg"
                    alt="CUP2EAT edible cup product display"
                    width={6000}
                    height={6000}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-[90%] w-[90%] object-contain mix-blend-multiply"
                />

                {/* Circular Sticker */}
                <div className="absolute right-11.25 top-11.25 grid size-21.25 rotate-[9deg] place-items-center rounded-full border border-dashed border-green bg-paper text-center text-xs font-black leading-tight text-green sm:right-15 sm:top-15 sm:size-25">
                    SIP
                    <br />
                    SNACK
                    <br />
                    REPEAT ♻
                </div>
            </div>
        </section>
    );
}
