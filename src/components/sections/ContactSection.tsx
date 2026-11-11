"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { ArrowUpRight, AtSign, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { site, whatsappLink } from "@/lib/site";

const enquiryTypes = [
    "Bulk / wholesale order",
    "Café or restaurant enquiry",
    "Event requirement",
    "Product details",
    "Other",
];

const channels = [
    { icon: Phone, label: "Call us", value: site.phoneDisplay, href: `tel:+91${site.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with the team", href: whatsappLink(), external: true },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: AtSign, label: "Instagram", value: `DM ${site.instagramHandle}`, href: site.instagram, external: true },
];

const fieldClass = "h-auto rounded-xl border-border-input bg-white px-3.5 py-3.5 text-sm";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [phone, setPhone] = useState("");
    const [enquiryType, setEnquiryType] = useState(enquiryTypes[0]);
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const whatsappMessage = `
Hello CUP2EAT!

Name: ${name}
Business: ${businessName || "Not provided"}
Phone: ${phone}
Enquiry: ${enquiryType}

Requirement:
${message || "Please share more details."}
    `.trim();

        window.open(whatsappLink(whatsappMessage), "_blank", "noopener,noreferrer");
        setSent(true);
    };

    return (
        <section id="contact" className="scroll-mt-20 bg-forest py-20 sm:py-24">
            <div className="container">
                <SectionHeading
                    tone="dark"
                    eyebrow="Get in touch"
                    title={
                        <>
                            Let&apos;s make your next sip <span className="italic text-gold">special.</span>
                        </>
                    }
                    description="Share your business and order requirement. The CUP2EAT team usually replies the same day."
                />

                <div className="mx-auto grid max-w-280 grid-cols-1 gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                    <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                        {channels.map(({ icon: Icon, label, value, href, external }) => (
                            <StaggerItem key={label} hover>
                                <a
                                    href={href}
                                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                    className="group flex items-center gap-4 rounded-[20px] bg-white/6 p-4 text-white transition-colors hover:bg-white/10"
                                >
                                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gold text-forest">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-xs font-semibold uppercase tracking-[1.5px] text-gold">{label}</span>
                                        <span className="block truncate text-[15px] font-semibold">{value}</span>
                                    </span>
                                    <ArrowUpRight
                                        size={18}
                                        className="shrink-0 text-footer-text/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                                        aria-hidden="true"
                                    />
                                </a>
                            </StaggerItem>
                        ))}
                        <StaggerItem className="sm:col-span-2 lg:col-span-1">
                            <p className="flex items-center gap-2 px-1 pt-1 text-sm text-footer-text/75">
                                <MapPin size={16} className="text-gold" aria-hidden="true" />
                                Based in {site.location}. Delivering all over India.
                            </p>
                        </StaggerItem>
                    </Stagger>

                    <Reveal delay={0.1} className="rounded-[28px] bg-paper p-5 sm:p-8">
                        <h3 className="font-heading text-2xl font-semibold text-ink">Send an enquiry</h3>
                        <p className="mt-1 text-sm text-muted">We&apos;ll open WhatsApp with your details filled in.</p>

                        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                            <label className="sr-only" htmlFor="c-name">Your name</label>
                            <Input id="c-name" autoComplete="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required className={fieldClass} />

                            <label className="sr-only" htmlFor="c-business">Business or café name</label>
                            <Input id="c-business" autoComplete="organization" placeholder="Business / café name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className={fieldClass} />

                            <label className="sr-only" htmlFor="c-phone">Phone number</label>
                            <Input
                                id="c-phone"
                                type="tel"
                                inputMode="tel"
                                autoComplete="tel"
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                pattern="[0-9+\-\s()]{7,20}"
                                title="Enter a valid phone number"
                                className={fieldClass}
                            />

                            <Select value={enquiryType} onValueChange={(value) => setEnquiryType(value ?? enquiryTypes[0])}>
                                <SelectTrigger aria-label="Enquiry type" className={`min-h-11.5 w-full ${fieldClass}`}>
                                    <SelectValue placeholder="Select enquiry type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {enquiryTypes.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {type}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <label className="sr-only" htmlFor="c-message">Your requirement</label>
                            <Textarea
                                id="c-message"
                                placeholder="Tell us your quantity, flavour and delivery city"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="min-h-28 resize-y rounded-xl border-border-input bg-white px-3.5 py-3.5 text-sm sm:col-span-2"
                            />

                            <m.button
                                type="submit"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-4 text-sm font-bold text-white transition-colors hover:bg-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green sm:col-span-2"
                            >
                                Send enquiry on WhatsApp
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </m.button>

                            <AnimatePresence>
                                {sent && (
                                    <m.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        role="status"
                                        className="text-center text-sm font-medium text-green sm:col-span-2"
                                    >
                                        WhatsApp opened in a new tab. Just hit send! 🎉
                                    </m.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
