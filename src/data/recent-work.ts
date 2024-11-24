interface IRecentWork {
  title: string;
  description: string;
  image: string;
  url: string;
  shorthand?: string;
}

export const recentWorkData: IRecentWork[] = [
  {
    title: "SIP HPK",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    image: "/images/sip-hpk.png",
    url: "https://sip-hpk.vercel.app/",
  },
  // WALLNOTES
  {
    title: "Wallnotes",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    image: "/images/wallnotes.png",
    url: "https://wallnotes.vercel.app/",
  },
  // MARKET INSIGHT
  {
    title: "Market Insight",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    image: "/images/market-insight.png",
    url: "https://market-insight.vercel.app/",
  },
  // TAPERA DIGITAL SERVICE
  {
    title: "Tapera Digital Service",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    image: "/images/tapera-cms.png",
    url: "https://bp-tapera-cms.vercel.app/",
  },
  // OTENTIKATOR
  {
    title: "Otentikator",
    description: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    image: "/images/otentikator.png",
    url: "https://otentikator.vercel.app/",
  },
];
