export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  titleLight: string;
  titleDark: string;
  description: string;
  slug: string;
  href: string;
  colSpan: string;
  image: string;
  tags: string[];
};

export const servicesData: ServiceItem[] = [
  {
    id: "content-creation",
    number: "01",
    title: "CONTENT CREATION",
    titleLight: "Content",
    titleDark: "Creation",
    description: "Create content that captures attention, builds connection, and keeps your brand moving.",
    slug: "content-creation",
    href: "/services/content-creation",
    colSpan: "lg:col-span-6",
    image: "/images/services/tcg-content-creation.webp",
    tags: ["Strategy", "Copywriting", "Video", "Design", "Storytelling"],
  },
  {
    id: "social-media",
    number: "02",
    title: "SOCIAL MEDIA MANAGEMENT",
    titleLight: "Social Media",
    titleDark: "Management",
    description: "Build an active social presence with strategy, consistency, and content that people remember.",
    slug: "social-media-management",
    href: "/services/social-media-management",
    colSpan: "lg:col-span-6",
    image: "/images/services/tcg-social-media-management.webp",
    tags: ["Community", "Growth", "Engagement", "Analytics", "Campaigns"],
  },
  {
    id: "lead-generation",
    number: "03",
    title: "LEAD GENERATION",
    titleLight: "Lead",
    titleDark: "Generation",
    description: "Transform audience attention into highly qualified leads for your business.",
    slug: "lead-generation",
    href: "/services/lead-generation",
    colSpan: "lg:col-span-3",
    image: "/images/services/tcg-lead-generation.webp",
    tags: ["Funnels", "Conversion", "B2B", "Targeting", "Email"],
  },
  {
    id: "influencer-marketing",
    number: "04",
    title: "INFLUENCER MARKETING",
    titleLight: "Influencer",
    titleDark: "Marketing",
    description: "Connect your brand with creators who influence the right audience.",
    slug: "influencer-marketing",
    href: "/services/influencer-marketing",
    colSpan: "lg:col-span-3",
    image: "/images/services/tcg-influencer-marketing.webp",
    tags: ["Outreach", "Partnerships", "UGC", "Campaigns", "Creators"],
  },
  {
    id: "web-development",
    number: "05",
    title: "WEB DESIGN & DEVELOPMENT",
    titleLight: "Web Design",
    titleDark: "& Development",
    description: "Design and build digital experiences that look exceptional and perform.",
    slug: "web-design-development",
    href: "/services/web-design-development",
    colSpan: "lg:col-span-6",
    image: "/images/services/tcg-web-development.webp",
    tags: ["UI/UX", "Frontend", "Backend", "Performance", "SEO Optimized"],
  },
  {
    id: "seo",
    number: "06",
    title: "SEO",
    titleLight: "Search Engine",
    titleDark: "Optimization",
    description: "Increase visibility, attract the right audience, and grow organically.",
    slug: "seo",
    href: "/services/seo",
    colSpan: "lg:col-span-6",
    image: "/images/services/tcg-search-engine-optimization.webp",
    tags: ["On-Page", "Off-Page", "Technical", "Keywords", "Local"],
  },
  {
    id: "digital-marketing",
    number: "07",
    title: "DIGITAL MARKETING",
    titleLight: "Digital",
    titleDark: "Marketing",
    description: "Bring strategy, creative, media, and performance together to drive measurable growth.",
    slug: "digital-marketing",
    href: "/services/digital-marketing",
    colSpan: "lg:col-span-6",
    image: "/images/services/tcg-digital-marketing.webp",
    tags: ["Strategy", "PPC", "Social Ads", "Data", "Growth"],
  }
];
