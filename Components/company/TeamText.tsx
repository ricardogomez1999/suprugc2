import React from "react";

export default function TeamText() {
  return (
    <div className="max-w-lg">
      <p className="text-sm/6 text-gray-600">
        What started as a one-person mission is quickly evolving into something
        bigger. SupruGC is growing into a collective of builders, thinkers, and
        problem-solvers who believe in a more intelligent and accessible web.
        We’re building the kind of company we’d want to work with—transparent,
        reliable, and relentlessly focused on delivering real value.
      </p>
      <p className="mt-8 text-sm/6 text-gray-600">
        Whether you’re here for hosting, automation, or custom solutions, know
        this: you’re not just hiring a service. You’re partnering with a growing
        team committed to helping your business thrive.
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
