export const APP_CONFIG = {
  brand: {
    name: "ሀበሻ Dev",
    description: "Ethiopia's Tech Community",
    colors: {
      primary: "#009B3A", // Ethiopian Green
      secondary: "#FEDD00", // Ethiopian Yellow
      accent: "#EF2118", // Ethiopian Red
    },
  },
  theme: {
    default: "light",
    storageKey: "theme",
  },
  social: {
    discord: "https://discord.com/channels/854810300876062770/910267624301162507",
    github: "/",
    telegram: "/",
    linkedin: "/",
    twitter: "/",
  },
  api: {
    baseUrl: "/api",
  },
} as const;

export const IMAGES = {
  // Illustrations
  hero: "https://illustrations.popsy.co/amber/digital-transformation.svg",
  ecosystem: "https://illustrations.popsy.co/amber/startup.svg",
  community: "https://illustrations.popsy.co/amber/group-chat.svg",
  events: "https://illustrations.popsy.co/amber/developer.svg",
  success: "https://illustrations.popsy.co/amber/success.svg",
  remoteWork: "https://illustrations.popsy.co/amber/remote-work.svg",
  globalBusiness: "https://illustrations.popsy.co/amber/global-business.svg",
  teamWork: "https://illustrations.popsy.co/amber/team-work.svg",

  // Patterns & Backgrounds
  pattern:
    "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 25L100 75L50 100L0 75L0 25L50 0Z' fill='%23009B3A' fill-opacity='0.1'/%3E%3C/svg%3E",
} as const;

export const CONTENT = {
  stats: [
    { value: "20K+", label: "Ethiopian Developers" },
    { value: "50K+", label: "Local Projects" },
    { value: "100+", label: "Tech Meetups" },
    { value: "13+", label: "Regional Hubs" },
  ],
  values: [
    {
      icon: "coffee",
      title: "Ethiopian Tech Excellence",
      description:
        "Bringing the rich heritage of Ethiopian innovation to the global tech stage.",
      image: IMAGES.remoteWork,
    },
    {
      icon: "world",
      title: "Local to Global",
      description:
        "Connecting Ethiopian developers with international opportunities while celebrating our unique perspective.",
      image: IMAGES.globalBusiness,
    },
    {
      icon: "mountain",
      title: "Rising Together",
      description:
        "Building the future of Ethiopian technology through community collaboration and support.",
      image: IMAGES.teamWork,
    },
  ],
  recommendedContent: [
    {
      title: "Ethiopian Tech Ecosystem",
      description: "Discover the growing tech landscape in Ethiopia",
      image: IMAGES.ecosystem,
      tag: "Tech Scene",
    },
    {
      title: "Local Success Stories",
      description: "Ethiopian developers making waves in tech",
      image: IMAGES.success,
      tag: "Inspiration",
    },
    {
      title: "Community Events",
      description: "Tech meetups and conferences in Ethiopia",
      image: IMAGES.events,
      tag: "Events",
    },
  ],
} as const;
