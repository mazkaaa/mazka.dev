/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className="text-white mix-blend-difference text-6xl">Software Engineer</h1>
      </div>
      <div className="absolute right-0 bottom-1/4 w-2/3 lg:bottom-0 lg:w-auto lg:max-w-none lg:h-screen">
        <img src={"/IMG_4452.jpg"} alt="Azka" className="h-full object-cover" />
      </div>
    </div>
  );
}
