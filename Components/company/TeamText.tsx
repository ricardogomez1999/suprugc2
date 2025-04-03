import React from "react";

export default function TeamText() {
  return (
    <div className="max-w-lg">
      <p className="text-sm/6 text-gray-600">
        Years ago, while working as sales associates at rival companies, Thomas,
        Ben, and Natalie were discussing a big client they had all been
        competing for. Joking about seeing the terms of each other’s offers,
        they had an idea: what if they shared data to win deals and split the
        commission behind their companies’ backs? It turned out to be an
        incredible success, and that idea became the kernel for Radiant.
      </p>
      <p className="mt-8 text-sm/6 text-gray-600">
        Today, Radiant transforms revenue organizations by harnessing illegally
        acquired customer and competitor data, using it to provide extraordinary
        leverage. More than 30,000 companies rely on Radiant to undercut their
        competitors and extort their customers, all through a single integrated
        platform.
      </p>
      <div className="mt-6">
        <a
          className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
          data-headlessui-state=""
          href="#"
        >
          Join us
        </a>
      </div>
    </div>
  );
}
