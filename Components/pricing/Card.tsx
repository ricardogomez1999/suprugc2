import { Card } from "@/src/Types";
import React from "react";

type cardProps = {
  card: Card;
  key: number;
};

export default function Card({ card, key }: cardProps) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 ring-1 shadow-2xl ring-black/5">
          <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            {card.title}
          </h2>
          <p className="mt-2 text-sm/6 text-gray-950/75">{card.subtitle}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${card.price}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
              data-headlessui-state=""
              href="#"
            >
              Start a free trial
            </a>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Start selling with:
            </h3>
            <ul className="mt-3 space-y-3">
              <li
                className={
                  card.included1.included
                    ? "flex items-start gap-4 text-sm/6 text-gray-950/75"
                    : "flex items-start gap-4 text-sm/6 text-gray-950/25"
                }
              >
                <span className="inline-flex h-6 items-center">
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="size-[0.9375rem] shrink-0 fill-gray-950/25"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                    ></path>
                  </svg>
                </span>
                {card.included1.description}
              </li>
              <li
                className={
                  card.included2.included
                    ? "flex items-start gap-4 text-sm/6 text-gray-950/75"
                    : "flex items-start gap-4 text-sm/6 text-gray-950/25"
                }
              >
                <span className="inline-flex h-6 items-center">
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="size-[0.9375rem] shrink-0 fill-gray-950/25"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                    ></path>
                  </svg>
                </span>
                {card.included2.description}
              </li>
              <li
                className={
                  card.included3.included
                    ? "flex items-start gap-4 text-sm/6 text-gray-950/75"
                    : "flex items-start gap-4 text-sm/6 text-gray-950/25"
                }
              >
                <span className="inline-flex h-6 items-center">
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="size-[0.9375rem] shrink-0 fill-gray-950/25"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                    ></path>
                  </svg>
                </span>
                {card.included3.description}
              </li>
              <li
                className={
                  card.included4.included
                    ? "flex items-start gap-4 text-sm/6 text-gray-950/75"
                    : "flex items-start gap-4 text-sm/6 text-gray-950/25"
                }
              >
                <span className="inline-flex h-6 items-center">
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="size-[0.9375rem] shrink-0 fill-gray-950/25"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                    ></path>
                  </svg>
                </span>
                <span className="sr-only">Not included:</span>
                {card.included4.description}
              </li>
              <li
                className={
                  card.included5.included
                    ? "flex items-start gap-4 text-sm/6 text-gray-950/75"
                    : "flex items-start gap-4 text-sm/6 text-gray-950/25"
                }
              >
                <span className="inline-flex h-6 items-center">
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="size-[0.9375rem] shrink-0 fill-gray-950/25"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                    ></path>
                  </svg>
                </span>
                {card.included5.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
