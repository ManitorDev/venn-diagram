import styles from "@/styles/sectionHero/style.module.css";
import Image from "next/image";

const SectionHero = () => {
  return (
    <div className={`${styles.container}`}>
      <Image
        src="/images/section-forground-neon.png"
        alt="foreground"
        width={500}
        height={700}
        className={`${styles.imageForeground}`}
      />

      <div className={`${styles.titleContainer}`}>
        <span className="text-lg self-start">the</span>
        <span
          style={{ WebkitTextStroke: "1px white" }}
          className="text-8xl md:text-9xl self-center md:self-start font-extrabold text-transparent"
        >
          VENN
        </span>

        <span className="text-lg self-end">
          <span className="uppercase text-xl">diagram</span> website
        </span>
      </div>
    </div>
  );
};

export default SectionHero;
