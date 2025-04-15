"use client";
import Separator from "./Separator";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Hamburguer from "./Hamburguer";
import BookAppointment from "./BookAppointment";
import LanguageSwitcher from "./LenguageSwitcher";

export default function Header() {
  return (
    <header className=" pt-12 sm:pt-16">
      <div>
        <div className="relative flex justify-between group/row isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)] items-center">
          <Separator />
          <div className="relative flex gap-6 items-center">
            <Logo />
            <div className="relative items-center py-3 md:flex">
              <BookAppointment />
            </div>
          </div>
          <div className=" flex gap-3">
            <div className=" lg:hidden flex">
              <LanguageSwitcher />
            </div>
            <NavBar />
            <Hamburguer />
          </div>
        </div>
      </div>
    </header>
  );
}
