import React from "react";
import CallToAction from "./footer/CallToAction";
import FooterMenu from "./footer/FooterMenu";

export default function Footer() {
  return (
    <footer>
      <div className="relative bg-linear-115 from-[#b6e0f4] from-28% via-[#3628c7] via-70% to-[#1d0c8e] sm:bg-linear-145">
        <div className="absolute inset-2 rounded-4xl bg-white/80"></div>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <CallToAction />
            <FooterMenu />
          </div>
        </div>
      </div>
    </footer>
  );
}
