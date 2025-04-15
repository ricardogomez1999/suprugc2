import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BookAppointment() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 py-2 px-3 md:bg-[#284F77] text-sm text-white rounded-lg hover:bg-blue-950 transition"
      >
        <p className=" hidden md:block">{t("QuickQuote")}</p>

        <Image
          src={"/googleCalendar.svg"}
          width={20}
          height={20}
          alt="google icon"
        />
      </button>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-2"
                  >
                    Schedule a Strategy Call
                  </Dialog.Title>
                  <div className="relative">
                    <iframe
                      src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1D_LtFitjPAKNr-gKPAw29URAO8R32NLcranVcgzTFR0noHTLu01Ba-yxpwkllr58znW41U9L6?gv=true"
                      width="100%"
                      height="600"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
