import Image from "next/image";
import { Check } from "lucide-react";
import CustomButton from "@/components/ui/CustomButton";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { offers, whatsappLink } from "@/lib/site";

const idealFor = ["Cafés & restaurants", "College fests", "Corporate events", "Weddings & parties", "Gifting", "Food stalls"];

export default function BulkOrders() {
    return (
        <section id="business" className="scroll-mt-20 py-20 sm:py-24">
            <div className="container">
                <div className="grid grid-cols-1 gap-10 rounded-[32px] border border-border-soft bg-paper p-5 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-12">
                    <div>
                        <Reveal>
                            <p className="eyebrow">Wholesale & bulk orders</p>
                            <h2 className="mt-3 text-[34px] font-semibold leading-[1.05] tracking-[-1px] text-ink sm:text-[46px]">
                                Let&apos;s serve
                                <br />
                                <span className="italic text-green">something different.</span>
                            </h2>
                            <p className="mt-4 max-w-140 text-[15px] leading-7 text-muted sm:text-base">
                                Stocking edible cups for your café, stall or event? Pick a pack below or tell us
                                your quantity. Every order is safety packed and delivered free all over India.
                            </p>
                        </Reveal>

                        <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {offers.map((offer) => (
                                <StaggerItem key={offer.name} hover>
                                    <div
                                        className={cn(
                                            "relative h-full rounded-[22px] border p-5 sm:p-6",
                                            offer.featured
                                                ? "border-forest bg-forest text-white shadow-[0_24px_50px_-24px_rgba(23,61,44,0.6)]"
                                                : "border-border-soft bg-cream text-ink"
                                        )}
                                    >
                                        {offer.featured && (
                                            <span className="absolute -top-3 right-5 rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-forest">
                                                Best value
                                            </span>
                                        )}
                                        <p className={cn("text-sm font-semibold", offer.featured ? "text-gold" : "text-green")}>
                                            {offer.name}
                                        </p>
                                        <p className="mt-2 font-heading text-[40px] font-bold leading-none">
                                            {offer.price}
                                        </p>
                                        <p className={cn("mt-1 text-sm", offer.featured ? "text-footer-text/80" : "text-muted")}>
                                            {offer.unit}
                                        </p>
                                        <ul className="mt-5 space-y-2">
                                            {offer.perks.map((perk) => (
                                                <li key={perk} className="flex items-start gap-2 text-[13.5px] leading-snug">
                                                    <Check
                                                        size={16}
                                                        className={cn("mt-0.5 shrink-0", offer.featured ? "text-gold" : "text-green")}
                                                        aria-hidden="true"
                                                    />
                                                    {perk}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>

                        <Reveal className="mt-6" delay={0.1}>
                            <p className="text-xs leading-relaxed text-muted">
                                Prices as listed on CUP2EAT&apos;s Instagram. Limited-period offers; confirm current
                                pricing and stock when you enquire.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <CustomButton
                                    label="Get a bulk quote on WhatsApp"
                                    href={whatsappLink("Hi CUP2EAT! I'd like a bulk quote for edible cups.")}
                                    showIcon
                                    className="text-white!"
                                />
                                <CustomButton label="Send an enquiry" href="#contact" variant="secondary" />
                            </div>
                        </Reveal>
                    </div>

                    <Reveal x={30} y={0} className="flex flex-col gap-4">
                        <div className="relative aspect-1184/1264 overflow-hidden rounded-[24px]">
                            <Image
                                src="/images/wholesale-offer.jpg"
                                alt="CUP2EAT wholesale offer: ₹3,999 for 396 cups in Chocolate, Vanilla and Elaichi, delivery included all over India"
                                fill
                                sizes="(max-width: 1024px) 92vw, 440px"
                                className="object-cover"
                            />
                        </div>
                        <div className="rounded-[20px] bg-soft-green p-5">
                            <p className="text-xs font-bold uppercase tracking-[1.5px] text-forest">Ideal for</p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {idealFor.map((label) => (
                                    <li key={label} className="rounded-full bg-paper px-3 py-1.5 text-[13px] font-semibold text-forest">
                                        {label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
