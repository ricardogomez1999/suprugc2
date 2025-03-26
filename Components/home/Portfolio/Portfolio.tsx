import React from "react";
import Insight from "./Insight";
import Competitors from "./Competitors";
import Speed from "./Speed";
import Reach from "./Reach";
import SellGlobal from "./SellGlobal";

export default function Portfolio() {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          Sales
        </h2>
        <h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
          Know more about your customers than they do.
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <Insight />
          <Competitors />
          <Speed />
          <Reach />
          <SellGlobal />
        </div>
      </div>
    </div>
  );
}
