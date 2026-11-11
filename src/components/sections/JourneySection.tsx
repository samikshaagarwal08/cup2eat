import Image from "next/image";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { milestones, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const deliveredTo = ["Ghaziabad", "Delhi NCR", "Gurugram", "Vasundhara", "Mumbai", "Odisha"];

export default function JourneySection() {
    return (
        <section id="journey" className="scroll-mt-20 bg-forest py-20 text-white sm:py-24">
            <div className="container">
                <SectionHeading
                    tone="dark"
                    eyebrow="The CUP2EAT journey"
                    title={
                        <>
                            From a big idea
                            <br />
                            <span className="italic text-gold">to cups across India.</span>
                        </>
                    }
                    description="20+ events, college fests and competitions, and a growing list of cities we deliver to."
                />

                <ol className="relative mx-auto max-w-260">
                    {/* timeline spine */}
                    <span aria-hidden="true" className="absolute bottom-0 left-4.75 top-0 w-px bg-white/15 md:left-1/2" />

                    {milestones.map((item, i) => {
                        const flip = i % 2 === 1;
                        return (
                            <li key={item.title} className="relative pb-12 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
                                <span
                                    aria-hidden="true"
                                    className="absolute left-2.5 top-2 grid size-5 place-items-center rounded-full bg-gold ring-6 ring-forest md:left-1/2 md:-translate-x-1/2"
                                >
                                    <span className="size-2 rounded-full bg-forest" />
                                </span>

                                <Reveal
                                    x={flip ? 40 : -40}
                                    y={0}
                                    className={cn("md:text-right", flip && "md:order-2 md:text-left")}
                                >
                                    <p className="text-sm font-bold uppercase tracking-[2px] text-orange">{item.date}</p>
                                    <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-[28px]">{item.title}</h3>
                                    <p className={cn("mt-3 text-[15px] leading-7 text-footer-text/80 md:ml-auto md:max-w-110", flip && "md:ml-0")}>
                                        {item.body}
                                    </p>
                                </Reveal>

                                <Reveal x={flip ? -40 : 40} y={0} delay={0.1} className={cn("mt-5 md:mt-0", flip && "md:order-1")}>
                                    <div className="relative aspect-4/3 overflow-hidden rounded-[22px] bg-white/5">
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            sizes="(max-width: 768px) 85vw, 500px"
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </Reveal>
                            </li>
                        );
                    })}
                </ol>

                <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
                    <Reveal className="relative rounded-[28px] bg-white/6 p-7 sm:p-10">
                        <Quote size={40} className="text-gold" aria-hidden="true" />
                        <blockquote className="mt-4 font-heading text-[22px] font-medium leading-snug sm:text-[28px]">
                            &ldquo;Every event is a milestone for CUP2EAT! From college fests and corporate
                            events to special celebrations, we&apos;re proud to have been a part of so many
                            memorable occasions.&rdquo;
                        </blockquote>
                        <p className="mt-6 text-sm font-semibold text-gold">
                            {site.founder} <span className="font-normal text-footer-text/70">· Founder, CUP2EAT</span>
                        </p>
                    </Reveal>

                    <Reveal delay={0.1} className="rounded-[28px] bg-gold p-7 text-forest sm:p-10">
                        <p className="text-xs font-bold uppercase tracking-[2px]">Recently delivered to</p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                            {deliveredTo.map((city) => (
                                <li key={city} className="rounded-full bg-forest px-3.5 py-1.5 text-sm font-semibold text-gold">
                                    {city}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-[15px] leading-7">
                            Want CUP2EAT in your city? Free delivery included all over India.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
