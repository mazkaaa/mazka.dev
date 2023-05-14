import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let scroll: any;
    const scrollContainer = document.querySelector<HTMLElement>("[data-scroll-container]")
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: scrollContainer!,
        smooth: true,
        resetNativeScroll: true,
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });
  
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
