import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/react";
import { LocomotiveScrollProvider } from '@/components/context/locomotiveScroll';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocomotiveScrollProvider options={{
      smooth: true
    }}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </LocomotiveScrollProvider>
  );
}
