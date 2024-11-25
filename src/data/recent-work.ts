interface IRecentWork {
  title: string;
  description: string[];
  imageUrl?: string[];
  url: string;
  shorthand?: string;
  durationWork?: string
  expertises?: string[]
  clients?: string[]
}

export const recentWorkData: IRecentWork[] = [
  {
    title: "SIP HPK",
    description: ["SIP-HPK also known as in Bahasa is a sistem informasi pengelolaan hunian pekerja konstruksi. SIP-HPK is a web application that manages housing, water systems, workers, citizens, guests, vendors, and partners who live and work in IKN, Kalimantan."],
    imageUrl: ["/works/SIP HPK-01.png", "/works/SIP HPK-03.png"],
    url: "https://sip-hpk.vercel.app/",
    clients: ["Nusantara Capital City"],
    expertises: ["React", "Next.js", "Frontend", "HTML", "Typescript", "Tailwind"]
  },
  // WALLNOTES
  {
    title: "Spendwisx",
    description: ["lorem ipsum dolor sit amet consectetur adipiscing elit"],
    url: "https://wallnotes.vercel.app/",
    expertises: ["React", "Next.js", "Frontend", "HTML", "Typescript", "Tailwind"]
  },
  // MARKET INSIGHT
  {
    title: "Market Insight",
    description: ["Market Insight & Location Optimizer is a Geospatial Analytics web application that analyzes big data for business opportunity needs, collaborating with Accenture, Indosat, and CARTO.", " I'm Leading custom apps reporting projects for Market Insight development, collaborating with Indosat and CARTO, with the initiative initiated by Accenture. Simultaneously, served as the Indonesian representative for custom apps collaboration with Accenture."],
    imageUrl: ["/works/MI-01.png", "/works/MI-02.png"],
    url: "https://market-insight.vercel.app/",
    clients: ["Indosat Ooredoo Hutchison"],
    expertises: ["React", "Frontend", "HTML", "Typescript"]
  },
  // TAPERA DIGITAL SERVICE
  {
    title: "Tapera Digital Service",
    description: ["Tapera Digital Service is a super-app web application for managing citizen residential house savings for Indonesia citizen, collaborating with BP Tapera."],
    imageUrl: ["/works/TDS-04.png", "/works/TDS-02.png"],
    url: "https://bp-tapera-cms.vercel.app/",
    clients: ["Badan Pengelola Tabungan Perumahan Rakyat"],
    expertises: ["React", "Next.js", "Frontend", "HTML", "Typescript", "Tailwind"]
  },
  // OTENTIKATOR
  {
    title: "GEMPAX",
    description: ["GEMPAX is a web application designed to empower users with insights into historical and recent seismic events around the world."],
    imageUrl: ["/works/GEMPAX-01.png"],
    url: "https://otentikator.vercel.app/",
    expertises: ["React", "Next.js", "Frontend", "HTML", "Typescript", "Tailwind"]
  },
];
