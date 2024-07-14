import SectionHero from "@/components/sectionHero";
import Image from "next/image";
import WhatVennSection from "../components/whatVennSection";
import VennDesc from "@/components/venn-desc";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <WhatVennSection />
      <VennDesc />
    </main>
  );
}
