import React from "react";
import OurMission from "./OurMission";
import Pictures from "./Pictures";

export default function SectionHero() {
  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <OurMission />
      <Pictures />
    </section>
  );
}
