import React from "react";

export default function Separator() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
    >
      <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
      <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
      <div className="absolute inset-x-0 bottom-0 hidden  border-b border-black/5 group-last/row:block"></div>
      <div className="absolute inset-x-0 bottom-2 hidden  border-b border-black/5 group-last/row:block"></div>
    </div>
  );
}
