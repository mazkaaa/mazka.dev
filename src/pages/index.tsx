import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="absolute mix-blend-difference text-gray-300 w-screen h-screen tracking-wide">
        <div className="p-4 w-full h-full flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <Link href={"https://blog.mazka.dev/"} className="">Blog</Link>
            <Link href={"https://github.com/mazkaaa/"}>Github</Link>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="h-screen">
          <div className="flex flex-col z-50 h-full w-full justify-center items-center text-center space-y-2">
            <h3 className="mix-blend-difference text-4xl font-normal text-white">
              Muhammad Azka
            </h3>
            <p className="mix-blend-difference text-sm font-normal text-gray-300 tracking-wider">
              Web Developer / AR Developer / Photographer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
