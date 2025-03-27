import React from "react";

export default function Meeting() {
  return (
    <div
      data-dark="true"
      className="lg:col-span-2 lg:rounded-bl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white ring-1 shadow-xs ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15"
    >
      <div className="relative h-80 shrink-0"></div>
      <div className="relative p-10">
        <h3
          data-dark="true"
          className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
        >
          Smart Scheduling & Meetings
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          Effortless Appointment Booking.
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          Integrate AI-powered scheduling tools to automatically book and manage
          meetings—saving time and eliminating back-and-forth coordination.
        </p>
      </div>
    </div>
  );
}
