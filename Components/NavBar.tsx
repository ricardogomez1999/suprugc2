import React from "react";

export default function NavBar() {
  return (
    <nav className="relative  lg:flex">
      <div className=" relative flex group/item">
        <a
          href="#"
          className="flex items-center px-4 py-3 text-base font-bold text-white bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          Pricing
        </a>
      </div>
      <div className=" relative flex group/item">
        <a
          href="#"
          className="flex items-center px-4 py-3 text-base font-bold text-white bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          Company
        </a>
      </div>
      <div className=" relative flex group/item">
        <a
          href="#"
          className="flex items-center px-4 py-3 text-base font-bold text-white bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          Blog
        </a>
      </div>
      <div className=" relative flex group/item">
        <a
          href="#"
          className="flex items-center px-4 py-3 text-base font-bold text-white bg-blend-multiply data-hover:bg-black/[2.5%]"
        >
          Login
        </a>
      </div>
    </nav>
  );
}
