import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Hanken_Grotesk } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Muhammad Azka",
  description: "Hi, I'm Muhammad Azka",
  // viewport: "width=device-width, initial-scale=1",
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
    <html lang="en" className={hanken.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="overflow-y-scroll">{children}</main>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
