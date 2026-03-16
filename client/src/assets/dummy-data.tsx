import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Asset Upload',
        desc: 'Drag & drop your images or clips. Our AI auto-formats and optimizes them for perfect results.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant AI Generation',
        desc: 'Generate high-quality short videos in seconds using our cutting-edge AI models.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Social-Ready Videos',
        desc: 'Turn product images into engaging, scroll-stopping videos for Instagram, YouTube & more.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try the platform at no cost.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard quality',
            'No watermark',
            'Slower generation speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Creators & small teams.',
        credits: 80,
        features: [
            '80 Credits',
            'HD quality',
            'No watermark',
            'Video generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across teams and agencies.',
        credits: 300,
        features: [
            '300 Credits',
            'FHD quality',
            'No watermark',
            'Fast generation speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work?',
        answer: 'We leverage state-of-the-art diffusion models trained on millions of product images to blend your product into realistic scenes while preserving details, lighting and reflections.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes — you receive full commercial rights to any images and videos generated on the platform. Use them for ads, ecommerce, social media and more.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes — you can cancel from your dashboard. You will retain access through the end of your billing period.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We accept JPG, PNG and WEBP. Outputs are high-resolution PNGs and MP4s optimized for social platforms.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#home" },
            { name: "Features", url: "#features" },
            { name: "Pricing", url: "#pricing" },
            { name: "FAQ", url: "#faq" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
];

export const socialLinks = [
  { name: "X", url: "#" },
  { name: "Github", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "Instagram", url: "#" }
];