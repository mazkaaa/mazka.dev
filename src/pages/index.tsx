import React, { useCallback, useEffect, useRef } from 'react'
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  // const refScrollContainer = useRef(null);

  // useEffect(() => {
  //   async function getLocomotive() {
  //     const Locomotive = (await import("locomotive-scroll")).default;
  //     new Locomotive({
  //       el: refScrollContainer.current!,
  //       smooth: true,
  //     });
  //   }

  //   getLocomotive();
  // }, []);

  const particleOptions: ISourceOptions = {
    zLayers: 100,
    fullScreen: {
      enable: false
    },
    particles: {
      collisions: {
        enable: true,
      },
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "edge",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 23.976023976023978,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 170,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 300,
          line_linked: {
            opacity: 0.3,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 3,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  const particlesInit = useCallback(async (engine: Engine) => {

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      //await console.log(container);
    },
    []
  );

  return (
    <div className="w-full h-full">
      <section className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-between text-white p-4 absolute z-50">
          <header className="flex justify-between tracking-wide">
            <Link href={"https://blog.mazka.dev/"}>Blog</Link>
            <Link href={"https://github.com/mazkaaa"}>Github</Link>
          </header>
          <div className="flex flex-col items-center">
            <span className="text-white text-3xl tracking-wide">
              Muhammad Azka
            </span>
            <span className="text-gray-400 text-sm tracking-wider">
              Web Developer / AR Developer / Photographer
            </span>
          </div>
          <div className="flex justify-center tracking-wide">Learn more</div>
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particleOptions}
        />
      </section>
      <section className="container mt-20 mx-auto p-4 max-w-7xl flex space-x-12">
        <div className="max-w-xl text-white space-y-4">
          <h1 className="text-6xl font-bold tracking-wide">
            Hi, I&apos;m Azka
          </h1>
          <section className="space-y-2">
            <p>
              a frontend developer, tech enthusiast, augmented reality
              developer, game developer, and photographer.
            </p>
            <p>
              With a passion for creating visually stunning websites and
              seamless user experiences, I bring designs to life using HTML,
              CSS, and JavaScript. I&apos;m always exploring new technologies
              and frameworks to push boundaries. Additionally, I specialize in
              developing immersive augmented reality experiences and crafting
              captivating games.
            </p>
          </section>
        </div>
        <div className="w-1/2">
          <Image src={"/IMG_4452.jpg"} width={1080} height={1085} alt="Azka" />
        </div>
      </section>
      <section className="container mt-36 mx-auto p-4 max-w-7xl flex flex-col space-y-8">
        <h3 className="text-xl text-white">recent works</h3>
        <ul className="text-white tracking-wide uppercase font-bold flex flex-col space-y-2">
          <li className="inline-flex items-center space-x-6 cursor-pointer">
            <span className="font-semibold text-xl">01. </span>
            <span className="text-9xl">SIP HPK</span>
          </li>
          <li className="inline-flex items-center space-x-6 cursor-pointer">
            <span className="font-semibold text-xl">02. </span>
            <span className="text-9xl">wallnotes</span>
          </li>
          <li className="inline-flex items-center space-x-6 cursor-pointer">
            <span className="font-semibold text-xl">03. </span>
            <span className="text-9xl">market insight</span>
          </li>
          <li className="inline-flex items-center space-x-6 cursor-pointer">
            <span className="font-semibold text-xl">04. </span>
            <span className="text-9xl">BP Tapera CMS</span>
          </li>
          <li className="inline-flex items-center space-x-6 cursor-pointer">
            <span className="font-semibold text-xl">05. </span>
            <span className="text-9xl">otentikator</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
