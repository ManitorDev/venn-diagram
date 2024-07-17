"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const WhatVennSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const img = imgRef.current;

    gsap.fromTo(
      text,
      { opacity: 0, y: 150 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          scrub: 2,
          trigger: text,
          start: "top 80%",
          end: "top center",
        },
      }
    );

    gsap.fromTo(
      img,
      { opacity: 0, x: 150 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        scrollTrigger: {
          scrub: 2,
          trigger: img,
          start: "top 80%",
          end: "top center",
        },
      }
    );
  }, []);

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  return (
    <section className="h-screen w-full relative">
      <section className="w-full md:w-1/2 px-4 pl-8 absolute top-0 md:top-0 mx-auto gap-2 h-screen flex flex-col justify-center items-center">
        <div ref={textRef} className="text-sm">
          <span className="font-bold text-5xl">Usage:</span>
          <span className="text-justify py-5 flex flex-col justify-center items-start">
            To use this site, first of all, you must log in to your account, and
            if you do not have an account, register on the website. Now
            everything is ready! You can give it the numbers in your diagram and
            the site will draw the diagrams for you in full detail so that you
            can easily understand the topic of the Venn diagram lesson and
            drawing the Venn diagram!
            <br />
            When you log into your account. You can enter the chart information
            registration form by using the graph drawing button located in the
            navigation menu of the site. In the section, you specify the number
            of graphs in the first entry and the members of each graph in the
            next entries. And then it is enough to press the confirmation button
            so that the diagram will be drawn quickly and the details table will
            be displayed below it. simply!{" "}
          </span>
          <Link
            href="/register"
            className="py-3 px-6 border-2 border-white rounded-tr-full rounded-bl-full flex justify-center items-center gap-1 "
          >
            Start Now
          </Link>
        </div>
      </section>
      <section className="">
        <Image
          ref={imgRef}
          src="/images/Artboard.png"
          alt="Artboard"
          width={windowWidth}
          height={windowHeight}
          className={`absolute top-0 -right-3 -z-10 h-screen w-full ${
            windowHeight > windowWidth ? "w-[200%]" : "w-full"
          }`}
        />
      </section>
    </section>
  );
};

export default WhatVennSection;
