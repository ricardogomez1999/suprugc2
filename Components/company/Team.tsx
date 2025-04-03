import React from "react";
import TeamImg from "./TeamImg";
import TeamText from "./TeamText";

export default function Team() {
  return (
    <div className="mt-32 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          Meet the team
        </h2>
        <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
          Founded by an all-star team.
        </h3>
        <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
          Radiant is founded by two of the best sellers in the business and
          backed by investors who look the other way.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <TeamText />
          <TeamImg />
        </div>
      </div>
    </div>
  );
}
