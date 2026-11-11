// Brand content sourced from https://www.instagram.com/cup2eat/ (Nov 2026).
// Keep every piece of copy, pricing and contact data here so it can be
// updated in one place once the client confirms details.

export const site = {
    name: "CUP2EAT",
    tagline: "Eat Your Drink",
    description:
        "CUP2EAT makes 100% edible cups for chai, coffee, ice cream and desserts. Eco-friendly, zero waste, FSSAI registered and delivered all over India.",
    founder: "Varun Khera",
    location: "Ghaziabad, Uttar Pradesh",
    phone: "9818192575",
    phoneDisplay: "+91 98181 92575",
    whatsapp: "919818192575",
    email: "Varunkhera6@gmail.com",
    instagram: "https://www.instagram.com/cup2eat/",
    instagramHandle: "@cup2eat",
} as const;

export const whatsappLink = (text = "Hi CUP2EAT! I'd like to know more about your edible cups.") =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const navLinks = [
    { label: "Our idea", href: "#story" },
    { label: "Flavours", href: "#products" },
    { label: "Bulk orders", href: "#business" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
];

export const highlights = [
    "100% edible cups",
    "Eco-friendly",
    "Zero waste",
    "FSSAI registered",
    "Free delivery all over India",
    "Chai · Coffee · Ice cream",
    "Safety packing",
    "Made for events",
];

export const flavours = [
    {
        name: "Chocolate",
        note: "Rich cocoa wafer, a favourite with coffee and ice cream.",
        swatch: "#5b3423",
        ring: "#8a5a3f",
    },
    {
        name: "Vanilla",
        note: "Light, crisp and sweet. Lets the drink do the talking.",
        swatch: "#f1dcae",
        ring: "#d9bd84",
    },
    {
        name: "Elaichi",
        note: "Cardamom-spiced and made for a proper cutting chai.",
        swatch: "#c8c486",
        ring: "#a7a35f",
    },
];

export const specs = [
    { value: "100 ml", label: "Cup capacity" },
    { value: "3", label: "Signature flavours" },
    { value: "20+", label: "Events & fests" },
    { value: "Pan-India", label: "Delivery included" },
];

export const offers = [
    {
        name: "Wholesale classic pack",
        price: "₹3,999",
        unit: "for 396 cups",
        perks: [
            "100 ml capacity",
            "Chocolate, Vanilla & Elaichi",
            "Perfect for chai, coffee & ice cream",
            "Delivery included all over India",
        ],
        featured: true,
    },
    {
        name: "Chocolate-coated cups",
        price: "₹4,000",
        unit: "for 200 pieces",
        perks: [
            "Premium chocolate coating",
            "Built for desserts & brownies",
            "Great for cafés & events",
            "Safety packed & sealed",
        ],
        featured: false,
    },
];

export const milestones = [
    {
        date: "Apr 2025",
        title: "Startup Mahakumbh, Bharat Mandapam",
        body: "Walked the floor at India's biggest startup gathering in New Delhi. \"This year: visitor. Very soon to be exhibitor.\"",
        image: "/images/ig/startup-mahakumbh.jpg",
        alt: "Founder Varun Khera at Startup Mahakumbh 2025, Bharat Mandapam",
    },
    {
        date: "Nov 2025",
        title: "1st position at SPECTRA 2025",
        body: "Won the business plan competition at IPEM Ghaziabad's inter-institutional management fest. One of 20+ certificates since.",
        image: "/images/ig/certificate.jpg",
        alt: "Certificate of achievement awarded to Varun Khera at SPECTRA 2025",
    },
    {
        date: "2026",
        title: "College fests & corporate events",
        body: "Official snacking partner for LSR's COMQUEST'26-27, plus stalls at fests like JIMS Fiesta serving hundreds of students.",
        image: "/images/event-stall.jpg",
        alt: "CUP2EAT stall at a college event",
    },
    {
        date: "Nov 2026",
        title: "Shipping across India",
        body: "From Ghaziabad to Odisha, Mumbai and Gurugram. Orders are safety packed, sealed and dispatched every week.",
        image: "/images/ig/dispatch-odisha.jpg",
        alt: "Sealed CUP2EAT carton being dispatched to Odisha",
    },
];

export const reels = [
    {
        url: "https://www.instagram.com/reel/Dfmf-ZxS_sr/",
        poster: "/images/ig/reel-lsr-feedback.jpg",
        title: "Real smiles & honest feedback from LSR",
    },
    {
        url: "https://www.instagram.com/reel/DfeVecPh0dp/",
        poster: "/images/ig/reel-ice-cream.jpg",
        title: "Ice cream tastes better when you eat the cup too",
    },
    {
        url: "https://www.instagram.com/reel/DfL86fQyfYT/",
        poster: "/images/ig/reel-brownies.jpg",
        title: "Brownies in a chocolate-coated edible cup",
    },
    {
        url: "https://www.instagram.com/reel/DfgoS52S2a3/",
        poster: "/images/ig/reel-lsr-love.jpg",
        title: "The girls at Lady Shri Ram College loved it",
    },
];
