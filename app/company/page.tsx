import Header from "@/Components/Header";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0 bg-linear-115 from-[#b6e0f4] from-28% via-[#3628c7] via-70% to-[#1d0c8e] rotate-[-10deg] rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <Header />
        </div>
      </div>
    </div>
  );
}
