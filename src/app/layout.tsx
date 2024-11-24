import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Hanken_Grotesk } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Azka",
  description: "Hi, I'm Muhammad Azka",
  viewport: "width=device-width, initial-scale=1",
};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={hanken.className + " w-full h-full"}>
      <body>
        <main className={"w-full h-full"}>{children}</main>
      </body>
      <Analytics />
    </html>
  );
}
