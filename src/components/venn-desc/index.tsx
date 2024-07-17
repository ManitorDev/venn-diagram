"use client";
import { useEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const VennDesc = () => {
  const textRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const list = listRef.current;

    gsap.fromTo(
      text,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          scrub: 2,
          trigger: text,
          start: "top 80%",
          end: "top center",
        },
      }
    );

    gsap.fromTo(
      list,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          scrub: 2,
          trigger: list,
          start: "top 80%",
          end: "top center",
        },
      }
    );
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/images/Graphic_Elements.png')",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full flex flex-col md:flex-row justify-between p-6 relative h-[150lvh] md:h-screen text-justify"
    >
      <div
        ref={textRef}
        className="w-full md:w-1/2 absolute top-3 left-6 flex flex-col justify-around items-start gap-3"
      >
        <span className="text-2xl md:text-4xl">What is a Venn diagram?</span>
        <span className="indent-4">
          Venn diagrams are named after the British logician John Venn. In 1880,
          he used Venn diagrams in an article titled &quot;Diagrammatic and
          Mechanical Representation of Propositions and Arguments&quot;, but the
          roots of these types of diagrams are much further back. It goes back
          to at least 600 years ago. Ms. Barron traced the history of the Venn
          diagram in 1969. In this research, Ms. Baron wrote that the Mallorcan
          philosopher and logician &quot;Ramon Loll&quot; used a similar type of
          Venn diagram around 1200. In the 18th century, the Swiss mathematician
          Leonardo Euler invented the Euler diagram, which is known as the most
          direct pioneer of the Venn diagram, and it is interesting that John
          Vann refers to his diagrams as Euler circles, not Venn diagrams! The
          term Venn diagrams was first used by the American philosopher Clarence
          Irving in his book A Survey of Symbolic Logic in 1918. Among the uses
          of the Venn diagram, the following can be mentioned: <br />
        </span>
      </div>
      <div
        ref={listRef}
        className="absolute bottom-7 sm:left-6 md:left-[55%] w-full md:w-[40%]"
      >
        <ul className="list-decimal p-5">
          <li className="p-4">
            Visual organization of information to observe the relationship
            between collections, such as the commonality of songs, their
            association, their differences, etc., which is very helpful in
            elementary to very advanced education levels.
          </li>
          <li className="p-4">
            Venn diagrams can also be used to compare one or more selections,
            because it clearly shows what is common in the selections and what
            distinguishes them from each other, and is very effective in a
            successful selection.
          </li>
          <li className="p-4">
            Mathematicians also use Venn diagrams to solve complex mathematical
            problems
          </li>
          <li className="p-4">
            In the topic of probability, Venn diagrams are very useful for
            showing events and calculating the probability of certain events.
            And in short, Venn diagrams are used not only in mathematics,
            statistics, and logic, but also in sciences such as linguistics (to
            show the similarities and differences between languages), computer
            science, and business.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VennDesc;
