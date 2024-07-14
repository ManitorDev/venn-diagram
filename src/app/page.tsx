import SectionHero from "@/components/sectionHero";
import Image from "next/image";
import WhatVennSection from "../components/whatVennSection";
import VennDesc from "@/components/venn-desc";
import SendComment from "@/components/sendFeedback";
import RegisterBanner from "@/components/registerBanner/insex";

export default function Home() {
  return (
    <main>
      <SectionHero />
      <WhatVennSection />
      <VennDesc />
      <SendComment />
      <RegisterBanner />
    </main>
  );
}
