
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";

export default function BulkOrders() {
    return (
        <section
            id="business"
            className="scroll-mt-20 py-19"
        >
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-8 rounded-[28px] border border-border-soft bg-paper p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:gap-7.5 lg:p-10.5">
                    {/* Content */}
                    <div>
                        <p className="text-xs font-extrabold uppercase tracking-[2px] text-green">
                            Wholesale & bulk orders
                        </p>

                        <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-2px] text-ink sm:text-[42px]">
                            Let&apos;s serve
                            <br />
                            something different.
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                            Looking to stock edible cups or use them for your
                            café, event or business? Tell us your quantity and
                            requirement. We&apos;ll connect you with the CUP2EAT
                            team for current pricing and availability.
                        </p>

                        {/* Pricing */}
                        <div className="mt-5">
                            <p className="text-[38px] font-black text-forest">
                                ₹3,999
                                <span className="ml-2 text-[13px] font-semibold text-muted">
                                    Instagram-listed offer · 396 cups*
                                </span>
                            </p>

                            <p className="mt-2 text-xs leading-relaxed text-muted">
                                *Price shown as seen in the supplied Instagram
                                screenshot. Please confirm current offer, pack
                                details and availability.
                            </p>
                        </div>

                        <div className="mt-6">
                            <CustomButton
                                label="Request a bulk quote"
                                href="#contact"
                                showIcon
                            />
                        </div>
                    </div>

                    {/* Product Image */}
                    <div className="relative h-60 overflow-hidden rounded-[20px] sm:h-67.5">
                        <Image
                            src="/images/cup-promo.jpg"
                            alt="CUP2EAT edible cups promotional offer"
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
