import { Cookie, Droplets, Leaf, ShieldCheck, Sprout, Truck } from "lucide-react";
import BenefitCard from "@/components/ui/BenefitCard";
import CustomButton from "@/components/ui/CustomButton";
import CountUp from "@/components/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { flavours, specs } from "@/lib/site";

const benefits = [
    { icon: Cookie, title: "100% edible", description: "Crunchy wafer cup you finish with your drink." },
    { icon: Droplets, title: "Leak-proof", description: "Holds hot chai and coffee without going soggy." },
    { icon: Leaf, title: "Eco-friendly", description: "Biodegradable with zero waste. No plastic, no paper." },
    { icon: Sprout, title: "Pure veg", description: "Made for every customer and every occasion." },
    { icon: ShieldCheck, title: "FSSAI registered", description: "Licensed for wholesale and retail supply." },
    { icon: Truck, title: "Safety packed", description: "Sealed cartons delivered free all over India." },
];

export default function WhyCup2Eat() {
    return (
        <section id="products" className="scroll-mt-20 bg-soft-green py-20 sm:py-24">
            <div className="container">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <div className="lg:sticky lg:top-28">
                        <Reveal>
                            <p className="eyebrow">Why CUP2EAT</p>
                            <h2 className="mt-3 text-[38px] font-semibold leading-[1.05] tracking-[-1px] text-ink sm:text-[52px]">
                                Small cup.
                                <br />
                                <span className="italic text-green">Big happiness.</span>
                            </h2>
                            <p className="mt-4 max-w-120 text-[15px] leading-7 text-muted sm:text-base">
                                Give customers a reason to pause, taste and talk. Each CUP2EAT cup holds 100 ml
                                and comes in three signature flavours, ready for your counter, stall or event.
                            </p>
                        </Reveal>

                        <Stagger className="mt-8 space-y-3">
                            {flavours.map((f) => (
                                <StaggerItem key={f.name}>
                                    <div className="group flex items-center gap-4 rounded-2xl bg-paper/70 p-3.5 pr-5 transition-colors hover:bg-paper">
                                        <span
                                            className="size-12 shrink-0 rounded-full border-4 transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110"
                                            style={{
                                                background: `radial-gradient(circle at 30% 30%, ${f.ring}, ${f.swatch} 70%)`,
                                                borderColor: f.ring,
                                            }}
                                            aria-hidden="true"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-ink">{f.name}</h3>
                                            <p className="text-[13.5px] leading-snug text-muted">{f.note}</p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>

                        <Reveal className="mt-8" delay={0.1}>
                            <CustomButton label="Ask about flavours" href="#contact" showIcon className="text-white!" />
                        </Reveal>
                    </div>

                    <div>
                        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {specs.map((s) => (
                                <StaggerItem key={s.label}>
                                    <div className="h-full rounded-[20px] bg-forest p-4 text-center text-white sm:p-5">
                                        <CountUp value={s.value} className="block font-heading text-[26px] font-bold leading-none text-gold sm:text-[28px]" />
                                        <span className="mt-2 block text-xs font-medium text-footer-text/80">{s.label}</span>
                                    </div>
                                </StaggerItem>
                            ))}
                        </Stagger>

                        <Stagger className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {benefits.map((b) => (
                                <StaggerItem key={b.title} hover>
                                    <BenefitCard {...b} />
                                </StaggerItem>
                            ))}
                        </Stagger>
                    </div>
                </div>
            </div>
        </section>
    );
}
