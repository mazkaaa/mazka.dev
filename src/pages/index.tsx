/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="h-screen">
          <div className="flex flex-col z-50 h-full justify-center">
            <h1 className="text-white mix-blend-difference text-6xl font-semibold">
              Software Engineer
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-1/4 w-2/3 lg:bottom-0 lg:w-auto lg:max-w-none lg:h-screen -z-10">
        <img src={"/IMG_4452.jpg"} alt="Azka" className="h-full object-cover" />
      </div>
    </>
  );
}
