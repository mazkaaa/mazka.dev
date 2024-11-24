interface IRecentWork {
  title: string;
  description: string;
  imageUrl: string[];
  url: string;
  shorthand?: string;
}

export const recentWorkData: IRecentWork[] = [
  {
    title: "SIP HPK",
    description: "SIP-HPK also known as in Bahasa is a sistem informasi pengelolaan hunian pekerja konstruksi. SIP-HPK is a web application that manages housing, water systems, workers, citizens, guests, vendors, and partners who live and work in IKN, Kalimantan.",
    imageUrl: ["/images/sip-hpk.png"],
    url: "https://sip-hpk.vercel.app/",
  },
  // WALLNOTES
  {
    title: "Spendwisx",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    imageUrl: ["/images/wallnotes.png"],
    url: "https://wallnotes.vercel.app/",
  },
  // MARKET INSIGHT
  {
    title: "Market Insight",
    description: "Market Insight & Location Optimizer is a Geospatial Analytics web application that analyzes big data for business opportunity needs, collaborating with Accenture, Indosat, and CARTO.",
    imageUrl: ["/images/market-insight.png"],
    url: "https://market-insight.vercel.app/",
  },
  // TAPERA DIGITAL SERVICE
  {
    title: "Tapera Digital Service",
    description: "Tapera Digital Service is a super-app web application for managing citizen residential house savings for Indonesia citizen, collaborating with BP Tapera.",
    imageUrl: ["/images/tapera-cms.png"],
    url: "https://bp-tapera-cms.vercel.app/",
  },
  // OTENTIKATOR
  {
    title: "GEMPAX",
    description: "GEMPAX is a web application designed to empower users with insights into historical and recent seismic events around the world.",
    imageUrl: ["/images/otentikator.png"],
    url: "https://otentikator.vercel.app/",
  },
];
