import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Perks from "@/components/Home/perks";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "LAB1 - Consultoria",
};

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="sobre">
        <Work />
      </section>

      <section id="servicos">
        <TimeLine />
      </section>

      <section id="addons">
        <Platform />
      </section>

      <section id="addons">
        <Perks />
      </section>
    </main>
  );
}

