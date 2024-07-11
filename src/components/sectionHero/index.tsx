// This is a client-side component
"use client";

// Importing styles from a CSS module
import styles from "@/styles/sectionHero/style.module.css";

// Importing the Image component from Next.js
import Image from "next/image";

// Importing an icon from React Icons
import { IoIosArrowRoundForward } from "react-icons/io";

// Importing GSAP and its ScrollTrigger plugin
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importing React hooks
import { useRef, useEffect } from "react";

// Registering the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// The SectionHero component
const SectionHero = () => {
  // Creating refs for various HTML elements
  const titleRef = useRef<HTMLSpanElement>(null);
  const diaSpanRef = useRef<HTMLSpanElement>(null);
  const theSpanRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLSpanElement>(null);

  // Using the useEffect hook to create a GSAP timeline
  useEffect(() => {
    // Getting the refs
    const title = titleRef.current;
    const spanEl = diaSpanRef.current;
    const theSpan = theSpanRef.current;
    const desc = descRef.current;

    // Creating a GSAP timeline
    const tl = gsap.timeline();

    // Animating the elements
    tl.fromTo(
      theSpan,
      { opacity: 0, y: -150 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(spanEl, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(
        desc,
        { opacity: 0, x: 150, borderLeft: "0px solid" },
        { opacity: 1, x: 0, borderLeft: "2px solid #fff", duration: 2 }
      );
  }, []);

  // Returning the JSX
  return (
    <div className={`${styles.container}`}>
      {/* Image component */}
      <Image
        src="/images/section-forground-neon.png"
        alt="foreground"
        width={500}
        height={700}
        className={`${styles.imageForeground}`}
      />

      {/* Title container */}
      <div className={`${styles.titleContainer}`}>
        <span ref={theSpanRef} className="text-lg self-start">
          the
        </span>
        <span
          ref={titleRef}
          style={{ WebkitTextStroke: "1px white" }}
          className="text-8xl md:text-[12em] self-center md:self-start font-extrabold text-transparent"
        >
          VENN
        </span>

        <span ref={diaSpanRef} className="text-lg self-end">
          <span className="uppercase text-xl">diagram</span> website
        </span>
      </div>

      {/* Description section */}
      <div className={`${styles.descContainer}`}>
        <div className={`${styles.desc}`}>
          <span
            ref={descRef}
            className="text-sm border-l-2 border-white px-4 text-justify p-2 block w-2/3 mx-auto"
          >
            To use this site, first of all, you must log in to your account, and
            if you do not have an account, register on the website. Now
            everything is ready! You can give it the numbers in your diagram and
            the site will draw the diagrams for you in full detail so that you
            can easily understand the topic of the Venn diagram lesson and
            drawing the Venn diagram!
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="py-3 px-6 border-2 border-white rounded-tr-full rounded-bl-full flex justify-center items-center gap-1 absolute bottom-8 left-8">
        <span>Continue</span>
        <IoIosArrowRoundForward size={22} />
      </button>
    </div>
  );
};

// Exporting the SectionHero component
export default SectionHero;
