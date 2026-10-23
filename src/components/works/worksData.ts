export type WorkProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export const worksData: WorkProject[] = [
  {
    id: "01",
    title: "The Handover Expert",
    category: "Web, Content & Performance",
    description: "Generated 30 Lakhs/month in revenue and grew audience to 60k+ followers through complete web development and performance marketing.",
    image: "/images/handover-expert.png",
    href: "/case-studies/handover-expert",
  },
  {
    id: "02",
    title: "Zencraft",
    category: "Content & Social",
    description: "Content-driven digital growth and brand positioning for a luxury interior brand.",
    image: "/images/zencraft.png",
    href: "/case-studies/zencraft",
  },
  {
    id: "03",
    title: "Krimmy Thickshakes",
    category: "Campaign & Content",
    description: "A vibrant digital campaign and social media strategy that brought the brand closer to its audience.",
    image: "/images/krimmy.png",
    href: "/case-studies/krimmy-thickshakes",
  },
  {
    id: "04",
    title: "Bright Arena",
    category: "Brand & Digital",
    description: "A complete brand and website experience for inspired interior spaces.",
    image: "/images/bright-arena.png",
    href: "/case-studies/bright-arena",
  },
  {
    id: "05",
    title: "Apple Interiors",
    category: "Performance Marketing",
    description: "Multi-channel campaigns designed to drive measurable growth and high-quality leads.",
    image: "/images/apple-interiors.png",
    href: "/case-studies/apple-interiors",
  },

];
