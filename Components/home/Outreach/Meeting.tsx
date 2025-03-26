import React from "react";

export default function Meeting() {
  return (
    <div
      data-dark="true"
      className="lg:col-span-2 lg:rounded-bl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15"
    >
      <div className="relative h-80 shrink-0">
        <div
          aria-hidden="true"
          className="isolate mx-auto grid h-full grid-cols-1"
        >
          <div className="z-10 col-start-1 row-start-1">
            <div className="mx-auto flex size-full max-w-md items-center justify-around">
              <img
                src="#"
                alt=""
                className="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
              />
              <img
                src="#"
                alt=""
                className="size-20 rounded-full bg-white/15 ring-4 ring-white/10"
              />
            </div>
          </div>
          <div className="z-10 col-start-1 row-start-1 flex items-center justify-center">
            <div className="flex size-6 items-center justify-center rounded-full bg-linear-to-t from-green-500 to-green-300 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="size-4 fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-10">
        <h3
          data-dark="true"
          className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
        >
          Meetings
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          Smart call scheduling
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          Automatically insert intro calls into your leads' calendars without
          their consent.
        </p>
      </div>
    </div>
  );
}
