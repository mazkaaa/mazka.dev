"use client";

import React, { useCallback, useEffect, useRef } from "react";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Link from "next/link";
import LocomotiveScroll from "locomotive-scroll";
import { recentWorkData } from "@/data/recent-work";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  // const refScrollContainer = useRef(null);
  // const locScroll = useRef<LocomotiveScroll>();

  // useEffect(() => {
  //   async function getLocomotive() {
  //     const Locomotive = (await import("locomotive-scroll")).default;
  //     locScroll.current = new Locomotive({
  //       el: refScrollContainer.current!,
  //       smooth: true,
  //     });
  //   }

  //   getLocomotive();
  //   return () => {
  //     locScroll.current?.destroy();
  //   };
  // }, []);

  const particleOptions: ISourceOptions = {
    zLayers: 100,
    fullScreen: {
      enable: false,
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
    <div className="flex flex-col snap-mandatory snap-y overflow-y-scroll">
      <section id="landing" className="w-screen h-screen snap-center">
        <div className="w-full h-full flex flex-col justify-between text-white p-4 z-50 absolute">
          <header className="flex justify-between tracking-wide">
            <Link
              className="underline-effect-small"
              href={"https://blog.mazka.dev/"}
              target="_blank"
            >
              Blog
            </Link>
            <Link
              className="underline-effect-small"
              href={"https://github.com/mazkaaa"}
              target="_blank"
            >
              Github
            </Link>
          </header>
          <div className="flex flex-col items-center font-semibold text-8xl w-full px-20 gap-y-2">
            <div className="flex flex-row justify-between w-full">
              <span>MUHAMMAD</span>
              <span>AZKA</span>
            </div>
            <div className="flex justify-end w-full">
              <span>SOFTWARE ENGINEER</span>
            </div>
            <div className="flex justify-start w-full">
              <span>& PHOTOGRAPHER.</span>
            </div>
          </div>

          <button
            onClick={() => {
              // locScroll.current?.scrollTo("#aboutme");
              aboutRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="flex justify-center tracking-wide self-center underline-effect-small"
          >
            Learn more
          </button>
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particleOptions}
        />
      </section>

      <section
        ref={aboutRef}
        id="aboutme"
        className="w-screen h-screen snap-center"
      >
        <div className="h-full w-full px-16 flex items-center relative">
          <div className="text-neutral-500 space-y-6 w-2/3 z-20 mix-blend-difference">
            <section className="space-y-2 text-xl tracking-wide uppercase">
              <p>
                <span className="text-white underline-effect-about whitespace-nowrap">
                  Frontend engineer
                </span>{" "}
                and{" "}
                <span className="text-white underline-effect-about whitespace-nowrap">
                  tech enthusiast
                </span>{" "}
                with a flair for{" "}
                <span className="text-white underline-effect-about whitespace-nowrap">
                  visually stunning websites
                </span>
                .
              </p>
              <p>
                I bring designs to life using{" "}
                <span className="text-white underline-effect-about whitespace-nowrap">
                  HTML, CSS, and JavaScript
                </span>
                , always pushing boundaries with new technologies.
              </p>
              <p>
                Specializing in advanced{" "}
                <span className="text-white underline-effect-about whitespace-nowrap">
                  {" "}
                  frontend development
                </span>
                , immersive{" "}
                <span className="text-white underline-effect-about whitespace-nowrap">
                  augmented reality
                </span>{" "}
                experiences and captivating{" "}
                <span className="text-white underline-effect-about whitespace-nowrap">
                  game development
                </span>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <section
        id="recentworks"
        className="container py-6 px-16 max-w-full flex flex-col space-y-4 h-screen snap-start"
      >
        <h3 className="text-xl text-white">recent works</h3>

        <Accordion type="single" collapsible>
          <ul className="text-white flex flex-col">
            {recentWorkData
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((work, index) => (
                <li
                  key={index}
                  className="items-center flex w-full grow space-x-6 cursor-pointer"
                >
                  <span className="font-semibold text-xl">{`0${
                    index + 1
                  }.`}</span>
                  <AccordionItem className="w-full" value={work.title}>
                    <AccordionTrigger className="hover:no-underline">
                      <h1 className="text-8xl tracking-wide uppercase font-bold ">
                        {work.title}
                      </h1>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-xl">{work.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </li>
              ))}
          </ul>
        </Accordion>
      </section>
    </div>
  );
}
