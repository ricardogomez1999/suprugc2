import React from "react";

export default function Engagement() {
  return (
    <div
      data-dark="true"
      className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15"
    >
      <div className="relative h-80 shrink-0">
        <div className="h-80 bg-[url(/engagement.png)] bg-[size:851px_344px] bg-no-repeat"></div>
        <div className='class="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"'></div>
      </div>
      <div className="relative p-10">
        <h3
          data-dark="true"
          className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
        >
          Build Your Brand & Authority
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          Position Yourself as an Industry Leader.
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          Automate content creation and social media engagement with AI-driven
          posts, helping you establish credibility and grow your audience.
        </p>
      </div>
    </div>
  );
}
