"use client";
import Separator from "./Separator";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Hamburguer from "./Hamburguer";
import { useTranslations } from "next-intl";
import BookAppointment from "./BookAppointment";
import LanguageSwitcher from "./LenguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className=" pt-12 sm:pt-16">
      <div>
        <div className="relative flex justify-between group/row isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)] items-center">
          <Separator />
          <div className="relative flex gap-6">
            <Logo />
            <div className="relative hidden items-center py-3 lg:flex">
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
