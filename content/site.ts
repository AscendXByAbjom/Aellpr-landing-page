/**
 * All landing-page copy and CTA wiring lives here.
 *
 * CTAs: the final destinations are not decided yet. Every CTA points at an
 * entry in `ctas`. Use `{ action: "coming-soon" }` to open the app-access
 * dialog, or `{ href: "https://..." }` to link out (external links open in a
 * new tab automatically). Change these when the app/store links are ready.
 */

export type CtaTarget =
  | { action: "coming-soon"; audience?: Audience }
  | { href: string; external?: boolean };

export type Audience = "sender" | "commuter" | "business";

export const BUSINESS_AI_URL = "https://aellpr-dashboard.onrender.com/login";

export const ctas = {
  nav: { label: "Get early access", target: { action: "coming-soon" } },
  send: {
    label: "Send a package",
    target: { action: "coming-soon", audience: "sender" },
  },
  go: {
    label: "Earn as you go",
    target: { action: "coming-soon", audience: "commuter" },
  },
  businessAi: {
    label: "Open Business AI",
    target: { href: BUSINESS_AI_URL, external: true },
  },
} satisfies Record<string, { label: string; target: CtaTarget }>;

/** Toggle the optional "notify me" form inside the coming-soon dialog. */
export const comingSoon = {
  // Waitlist disconnected (Michael, 26 Nov): the apps are being published,
  // and the site is a static export with no server to receive sign-ups.
  showNotifyForm: false,
  eyebrow: "App access",
  title: "Aellpr is almost on its way.",
  body: "This page introduces the Aellpr experience. Live delivery booking and app access links will be added here as soon as they’re available.",
  audiences: {
    sender: "Sending a package",
    commuter: "Carrying on my route",
    business: "Running a business",
  } satisfies Record<Audience, string>,
};

export const site = {
  name: "Aellpr",
  tagline: "Send. Go. Grow.",
  description:
    "Aellpr connects packages with verified commuters already heading across Lagos, lets commuters earn on journeys they already make, and gives business owners an AI workspace for orders and customers.",
  url: "https://aellpr.com",
  locale: "en_NG",
  city: "Lagos, Nigeria",
  year: 2026,
};

export const nav = [
  { label: "Send", href: "#send" },
  { label: "Go", href: "#go" },
  { label: "Business AI", href: "#business-ai" },
  { label: "How it works", href: "#how-it-works" },
];

export const hero = {
  stamp: "Built around Lagos",
  titleA: "Your next move.",
  titleB: "Made possible.",
  kicker: "For your packages. Your journeys. Your business.",
  body: "Send an order across town. Carry a package along your route. Keep your business moving with AI. Meet the three sides of Aellpr.",
  frameCaption: "First stop / Lagos, Nigeria",
  frameCoords: "6.5244° N · 3.3792° E",
  frameLine: "A package going your way.",
  frameLineB: "A journey worth a little more.",
};

export const everyday = {
  label: "The everyday, connected",
  statement:
    "The seller with an order to fulfil. The commuter already heading across the city. The owner building a business. There’s an Aellpr for what comes next.",
  routes: [
    ["Ikeja", "Ikorodu"],
    ["Lagos Island", "Yaba"],
    ["Surulere", "Lekki"],
    ["Gbagada", "Victoria Island"],
    ["Ojota", "Ajah"],
    ["Maryland", "Festac"],
    ["Ikoyi", "Ogba"],
    ["Yaba", "Magodo"],
  ] as [string, string][],
};

export const threeWays = {
  label: "One Aellpr, three ways forward",
  title: ["One Aellpr.", "Three ways forward."],
  cards: [
    {
      id: "send",
      tag: "01 / Aellpr Send",
      title: "Send it.",
      body: ["Connect your package to a verified commuter going in a compatible direction."],
      audience: "For senders & sellers",
      href: "#send",
      tone: "cream",
    },
    {
      id: "go",
      tag: "02 / Aellpr Go",
      title: "Carry it.",
      body: [
        "Find packages that match your planned commute and earn money along the way.",
        "No personal vehicle needed. Just be on the move, have a little extra space, and turn your everyday trips into an opportunity to earn.",
      ],
      audience: "For commuters",
      href: "#go",
      tone: "ink",
    },
    {
      id: "grow",
      tag: "03 / Business AI",
      title: "Grow it.",
      body: [
        "Bring customer conversations, captured orders and business records from your online sales channels into one organised workspace.",
        "Connect the social media platforms you use to sell, including WhatsApp, Facebook, Instagram and TikTok, and manage your customer interactions and sales activities from one place.",
        "Less switching between apps. More control over your business.",
      ],
      audience: "For business owners",
      href: "#business-ai",
      tone: "purple",
    },
  ] as const,
};

export const send = {
  label: "From you to them",
  product: "Aellpr Send",
  audience: "For senders & sellers",
  title: ["Big plans.", "Small package."],
  sub: "Send it with Aellpr.",
  lede: "Your next customer order shouldn’t have to wait for your next free afternoon.",
  body: "Aellpr Send connects packages with verified commuters on compatible routes within Lagos. Add where it’s going, describe what’s inside and review the quote before you submit.",
  steps: [
    {
      title: "Give your package a clear start",
      body: "Add pickup and destination details, photos, weight information and any special handling instructions.",
    },
    {
      title: "Review before you request",
      body: "Check the delivery quote and payment requirements. Matching depends on suitable trips and available capacity.",
    },
    {
      title: "Stay close to the journey",
      body: "Follow delivery status and available tracking updates through pickup and final handover.",
    },
  ],
};

export const go = {
  label: "Already on your way",
  product: "Aellpr Go",
  audience: "For commuters",
  title: ["You have a route.", "Make more of it."],
  lede: "A package going your way could make your everyday journey worth a little more.",
  body: "Tell Aellpr Go where you’re heading, when you’re leaving and what you can carry. Review compatible delivery opportunities and choose the packages that fit your trip.",
  steps: [
    {
      title: "Complete your identity checks",
      body: "Commuter verification includes NIN checks and a current photograph matched against the NIN image.",
    },
    {
      title: "Set a journey that suits you",
      body: "Add route, departure time, transport mode, package preferences and carrying capacity.",
    },
    {
      title: "Check the fit, then carry",
      body: "Review pickup, destination and handling needs. Carry multiple packages when your route and capacity allow.",
    },
  ],
  note: "Earning opportunities depend on compatible requests and available packages.",
};

export const businessAi = {
  label: "The business behind the order",
  product: "Business AI",
  audience: "For business owners",
  title: ["Less admin.", "More business."],
  lede: "From “is this available?” to an order you can review. Keep the conversation moving.",
  body: "Aellpr Business AI brings customer messages, captured orders, sales and customer records into one workspace. Let AI help clarify an enquiry, then check items, price and availability yourself before approving the order.",
  features: [
    {
      tag: "01 / Conversations",
      title: "Keep the context.",
      body: "Read customer, bot and seller messages together. Take over a chat when a personal reply matters, then hand it back to the bot.",
    },
    {
      tag: "02 / Orders",
      title: "You make the call.",
      body: "Correct quantities, variants and prices before approval. Follow-up drafts wait for your review before sending.",
    },
    {
      tag: "03 / Records",
      title: "Know your customers.",
      body: "Keep contact details, notes and preferred contact methods beside the sales they relate to.",
    },
    {
      tag: "04 / Assistance",
      title: "Ask for the next step.",
      body: "Use ordinary language to ask for help or open a supported form. Review the details before an explicit save.",
    },
  ],
  linkNote: "The existing dashboard opens separately. Mobile screen shown is a design concept.",
  planned:
    "Invoice and transaction workflows are planned to help track amounts due, money received and money spent. Sales totals and cash received remain separate. Channel access and AI lookups depend on supported connections and available business data.",
};

export const howItWorks = {
  label: "A clear way forward",
  title: ["Start here.", "Take it from there."],
  tabs: [
    {
      id: "send",
      label: "Send",
      intro: "From a delivery request to a verified handover.",
      steps: [
        {
          tag: "Details",
          title: "Tell us what’s going.",
          body: "Add the package, pickup and destination. Review the quote before you submit.",
        },
        {
          tag: "Match",
          title: "Find a compatible journey.",
          body: "Matching considers the route, timing and carrying requirements. Wait for a confirmed assignment.",
        },
        {
          tag: "Handover",
          title: "Follow it through.",
          body: "See available tracking updates and complete the supported checks at pickup and delivery.",
        },
      ],
    },
    {
      id: "go",
      label: "Go",
      intro: "From a verified profile to a package that fits your trip.",
      steps: [
        {
          tag: "Verify",
          title: "Confirm who you are.",
          body: "Complete NIN checks and a current photo match before you carry anything.",
        },
        {
          tag: "Journey",
          title: "Share where you’re headed.",
          body: "Set your route, departure time, transport mode and what you can carry.",
        },
        {
          tag: "Carry",
          title: "Check the fit, then go.",
          body: "Review pickup, destination and handling needs, then complete the checks at pickup and delivery.",
        },
      ],
    },
    {
      id: "business",
      label: "Business AI",
      intro: "From a customer’s question to an order you’ve approved.",
      steps: [
        {
          tag: "Conversation",
          title: "Let the enquiry come in.",
          body: "AI helps clarify what the customer wants. Step in personally whenever it matters.",
        },
        {
          tag: "Capture",
          title: "Review the captured order.",
          body: "Check items, variants, price and availability. A captured enquiry is not a confirmed sale.",
        },
        {
          tag: "Approve",
          title: "Make the call.",
          body: "Approve the order yourself and keep the customer record beside the sale.",
        },
      ],
    },
  ],
};

export const trust = {
  label: "Care along the way",
  title: ["A better journey", "starts with trust."],
  body: "A package is someone’s order, someone’s work or something they care about. The details matter from the first request to the final handover.",
  pillars: [
    {
      tag: "Identity",
      title: "Know who is carrying.",
      body: "Commuter NIN verification and facial matching help establish who is handling the package.",
    },
    {
      tag: "Visibility",
      title: "Stay informed.",
      body: "Delivery status and available location updates help you follow progress. Delayed updates should be clearly identified.",
    },
    {
      tag: "Handover",
      title: "Check the right package.",
      body: "Review package details and use the pickup and delivery OTPs at pickup and completion.",
    },
  ],
  promises: [
    "No cash for platform delivery charges — payments stay inside Aellpr.",
    "Support will never ask for your password, card PIN or delivery OTP.",
    "Your personal data is handled under the Nigeria Data Protection Act 2023.",
  ],
};

export const faq = {
  label: "Before your next move",
  title: ["A few questions.", "Clear answers."],
  items: [
    {
      q: "What’s the difference between Go, Send and Business AI?",
      a: "Send is for people and businesses sending packages. Go is for verified commuters carrying packages on compatible journeys. Business AI is a separate workspace for customer conversations, orders and business records.",
    },
    {
      q: "Where will Aellpr deliveries operate?",
      a: "The initial focus is within Lagos, including routes such as Ikeja to Ikorodu and Lagos Island to Yaba. Availability depends on supported service areas and compatible commuter trips.",
    },
    {
      q: "Can a commuter carry more than one package?",
      a: "Yes, when the packages fit the commuter’s route, handling preferences and remaining capacity.",
    },
    {
      q: "Does submitting a delivery request confirm a commuter?",
      a: "Submission begins the request process. A compatible trip and available capacity are still needed. Wait for the app to confirm assignment before arranging pickup.",
    },
    {
      q: "Can I take over a Business AI customer conversation?",
      a: "Yes. The workflow lets the seller reply personally, pauses the bot during human handling and provides a way to hand the conversation back.",
    },
    {
      q: "Will AI approve an order for me?",
      a: "No. The request is captured for your review. You check items, price and availability before approval. A captured enquiry is not a confirmed sale.",
    },
    {
      q: "Are the screens on this page live app sessions?",
      a: "They are design previews with illustrative information. They do not book deliveries, send messages or save records. Business AI’s existing dashboard is available through its separate link.",
    },
    {
      q: "Does a Business AI sale automatically book a delivery?",
      a: "Automatic booking into Go or Send is a future integration decision. The three products are introduced together here, but their workflows remain separate.",
    },
  ],
};

export const finalCta = {
  label: "Your next move",
  title: ["What’s next?", "Make it Aellpr."],
  cards: [
    {
      tag: "Aellpr Send / Sender",
      title: "I have a package.",
      cta: "send",
      tone: "orange",
    },
    {
      tag: "Aellpr Go / Commuter",
      title: "I’m already going.",
      cta: "go",
      tone: "ink",
    },
    {
      tag: "Business AI / Business owner",
      title: "I’m building a business.",
      cta: "businessAi",
      tone: "purple",
    },
  ] as const,
};

export const footer = {
  explore: [
    { label: "Aellpr Send", href: "/#send" },
    { label: "Aellpr Go", href: "/#go" },
    { label: "Business AI", href: "/#business-ai" },
  ],
  about: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Trust & care", href: "/#trust" },
    { label: "Questions & answers", href: "/#faq" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
