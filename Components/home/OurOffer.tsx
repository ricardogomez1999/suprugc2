import React from "react";

export default function OurOffer() {
  return (
    <div className="overflow-hidden">
      <div className="pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            Take a look at what we can do for you.
          </h2>
          <div
            className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem] relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]"
            style={{ width: 1216, height: 768 }}
          >
            <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] ring-1 shadow-xs ring-black/5 [--padding:--spacing(2)]"></div>
            <img
              src="https://res.cloudinary.com/dnrdf85ss/image/upload/v1743020831/Screenshot_2025-03-26_at_2.26.08_p.m._vcx0oh.png"
              className="h-full rounded-[var(--radius)] ring-1 shadow-2xl ring-black/10"
              alt="image offer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
