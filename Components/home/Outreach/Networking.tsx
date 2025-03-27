import Image from "next/image";
import React from "react";

export default function Networking() {
  return (
    <div
      data-dark="true"
      className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15 justify-between"
    >
      <div className="relative h-80 shrink-0">
        <div className="h-80 bg-[url(/chatbot.svg)] bg-[size:860px_320px] bg-no-repeat"></div>
        <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"></div>
      </div>
      <div className="relative px-10 py-8">
        <h3
          data-dark="true"
          className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
        >
          Networking
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          Respond at the Speed of AI.
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          Our smart chatbots and automated workflows analyze customer
          interactions in real time, ensuring fast, accurate responses and
          improved engagement.
        </p>
      </div>
    </div>
  );
}
