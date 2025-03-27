import React from "react";

export default function Competitors() {
  return (
    <div className="lg:col-span-3 lg:rounded-tr-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15">
      <div className="relative h-80 shrink-0">
        <div className="absolute inset-0 bg-[url(#)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat"></div>
        <div className="absolute inset-0 bg-linear-to-t from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"></div>
      </div>
      <div className="relative p-10">
        <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          Stay Ahead of the Competition.
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          Intelligent decision-making
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          With smart integrations using Zapier, Make, and custom APIs, automate
          lead tracking, customer engagement, and business insights in
          real-time.
        </p>
      </div>
    </div>
  );
}
