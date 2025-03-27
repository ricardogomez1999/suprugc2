import React from "react";

export default function Hero() {
  return (
    <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
      <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.9]">
        Automate, Innovate, Elevate.
      </h1>
      <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
        Streamline workflows, integrate seamlessly, and scale effortlessly.
      </p>
      <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
        >
          Get started
        </a>
        <a
          href="/pricing"
          className="relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-white/15 ring-1 shadow-md ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base font-medium whitespace-nowrap text-gray-950 data-disabled:bg-white/15 data-disabled:opacity-40 data-hover:bg-white/20"
        >
          See pricing
        </a>
      </div>
    </div>
  );
}
