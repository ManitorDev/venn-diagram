"use client";
import Image from "next/image";

const WhatVennSection = () => {
  return (
    <section className="h-screen w-full relative">
      <section className="w-full md:w-1/2 px-4 pl-8 absolute top-0 md:top-1/4 mx-auto gap-2 h-screen flex flex-col justify-center items-center">
        <div className="text-sm">
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
            {innerWidth > innerHeight ? (
              <>
                <br /> Venn diagrams are named after the British logician John
                Venn. In 1880, he used Venn diagrams in an article titled
                &quot;Diagrammatic and Mechanical Representation of Propositions
                and Arguments&quot;, but the roots of these types of diagrams
                are much further back. It goes back to at least 600 years ago.
                Ms. Barron traced the history of the Venn diagram in 1969. In
                this research, Ms. Baron wrote that the Mallorcan philosopher
                and logician &quot;Ramon Loll&quot; used a similar type of Venn
                diagram around 1200. In the 18th century, the Swiss
                mathematician Leonardo Euler invented the Euler diagram, which
                is known as the most direct pioneer of the Venn diagram, and it
                is interesting that John Vann refers to his diagrams as Euler
                circles, not Venn diagrams! The term Venn diagrams was first
                used by the American philosopher Clarence Irving in his book A
                Survey of Symbolic Logic in 1918. Among the uses of the Venn
                diagram, the following can be mentioned: <br />
              </>
            ) : (
              ""
            )}
          </span>
          <button className="py-3 px-6 border-2 border-white rounded-tr-full rounded-bl-full flex justify-center items-center gap-1 ">
            Start Now
          </button>
        </div>
      </section>
      <section className="">
        <Image
          src="/images/Artboard .png"
          alt="Artboard"
          width={innerWidth}
          height={innerHeight}
          className={`absolute top-0 -right-3 -z-10 h-screen ${
            innerHeight > innerWidth ? "w-[200%]" : "w-full"
          }`}
        />
      </section>
    </section>
  );
};

export default WhatVennSection;
