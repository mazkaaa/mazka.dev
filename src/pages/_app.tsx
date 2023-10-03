import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Hanken_Grotesk } from "next/font/google";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Layout>
      <main className={hanken.className + " w-full h-full"}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </Layout>
  );
}
