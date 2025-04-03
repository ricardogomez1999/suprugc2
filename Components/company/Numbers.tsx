import React from "react";

export default function Numbers() {
  return (
    <div className="max-lg:mt-16 lg:col-span-1">
      <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
        The Numbers
      </h2>
      <hr className="mt-6 border-t border-gray-200"></hr>
      <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"></dl>
    </div>
  );
}
