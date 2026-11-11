
"use client";

import { FormEvent, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const WHATSAPP_NUMBER = "919818192575";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [phone, setPhone] = useState("");
    const [enquiryType, setEnquiryType] = useState(
        "Bulk / wholesale order"
    );
    const [message, setMessage] = useState("");

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

        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="contact"
            className="scroll-mt-20 bg-forest py-19"
        >
            <div className="container">
                {/* Section Heading */}
                <SectionHeading
                    eyebrow="Get in touch"
                    title="Let's make your next sip special."
                    description="Share your business and order requirement. We'll connect you with the CUP2EAT team."
                    className="[&_h2]:text-white [&_p:last-child]:text-[#d1d9ce]"
                />

                {/* Contact Form */}
                <div className="mx-auto max-w-180 rounded-[24px] bg-paper p-5 sm:p-7.5">
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 gap-3.25 sm:grid-cols-2"
                    >
                        {/* Name */}
                        <Input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            className="h-auto rounded-xl border-border-input bg-white px-3.5 py-3.5 text-sm"
                        />

                        {/* Business Name */}
                        <Input
                            type="text"
                            placeholder="Business / café name"
                            value={businessName}
                            onChange={(event) =>
                                setBusinessName(event.target.value)
                            }
                            className="h-auto rounded-xl border-border-input bg-white px-3.5 py-3.5 text-sm"
                        />

                        {/* Phone */}
                        <Input
                            type="tel"
                            placeholder="Phone number"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            required
                            pattern="[0-9+\-\s()]{7,20}"
                            title="Enter a valid phone number"
                            className="h-auto rounded-xl border-border-input bg-white px-3.5 py-3.5 text-sm"
                        />

                        {/* Enquiry Type */}
                        <Select
                            value={enquiryType}
                            onValueChange={(value) => setEnquiryType(value || "")}
                        >
                            <SelectTrigger className="h-auto min-h-11.5 w-full rounded-xl border-border-input bg-white px-3.5 py-3.5 text-sm">
                                <SelectValue placeholder="Select enquiry type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Bulk / wholesale order">
                                    Bulk / wholesale order
                                </SelectItem>

                                <SelectItem value="Café or restaurant enquiry">
                                    Café or restaurant enquiry
                                </SelectItem>

                                <SelectItem value="Event requirement">
                                    Event requirement
                                </SelectItem>

                                <SelectItem value="Product details">
                                    Product details
                                </SelectItem>

                                <SelectItem value="Other">
                                    Other
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Requirement */}
                        <Textarea
                            placeholder="Tell us about your quantity and requirement"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            className="min-h-25 resize-y rounded-xl border-border-input bg-white px-3.5 py-3.5 text-sm sm:col-span-2"
                        />

                        {/* Submit */}
                        <Button
                            type="submit"
                            className="h-auto w-full rounded-full bg-forest px-5 py-3.5 text-sm font-bold text-white! transition-colors hover:bg-green sm:col-span-2"
                        >
                            Send enquiry on WhatsApp ↗
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
