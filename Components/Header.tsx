import React from "react";
import Separator from "./Separator";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className=" pt-12 sm:pt-16">
      <div>
        <div className="relative flex justify-between group/row isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
          <Separator />
          <div className="relative flex gap-6">
            <Logo />
            <div className="relative hidden items-center py-3 lg:flex">
              <a
                href=""
                className="flex items-center gap-1 rounded-full bg-blue-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-blue-950/30"
              >
                Please click here for a quick quote
              </a>
            </div>
          </div>

          <NavBar />
        </div>
      </div>
    </header>
  );
}
