import Image from "next/image";
import React from "react";

export default function Integration() {
  return (
    <div
      data-dark="true"
      className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl group relative flex flex-col rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15"
    >
      <div className="relative h-80 shrink-0">
        <div aria-hidden="true" className="relative h-full overflow-hidden">
          <div className="absolute inset-0 top-8 z-10 flex items-center justify-center">
            <Image src={"/integration.png"} alt="integration" fill />
          </div>
        </div>
      </div>
      <div className="relative p-10">
        <h3
          dark-data="true"
          className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
        >
          Seamless Integrations
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          Connect with your Customers Everywhere.
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          With Zapier, Make, and custom API integrations, automate outreach
          across multiple platforms.
        </p>
      </div>
    </div>
  );
}
