import React from "react";

export default function SellGlobal() {
  return (
    <div className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15">
      <div className="relative h-80 shrink-0">
        <div aria-hidden="true" className="relative size-full">
          <div className="absolute inset-0 bg-[url(/map.png)] bg-[length:530px_430px] bg-[center_-75px] bg-no-repeat [mask-image:linear-gradient(to_bottom,black_50%,transparent)]"></div>
          <div className="absolute inset-0"></div>
        </div>
      </div>
      <div className="relative p-10">
        <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
          Scalability Without Limits.
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          Grow Your Business Globally.
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          Our AI automation and custom-built websites ensure seamless
          scaling—whether you’re a startup or an enterprise.
        </p>
      </div>
    </div>
  );
}
