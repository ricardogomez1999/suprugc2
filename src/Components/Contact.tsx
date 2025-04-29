import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      className="bg-white lg:h-[800px] md:px-12 lg:px-48 bg-linear-to-b from-white from-50% to-gray-100 sm:bg-linear-150"
      id="contact"
    >
      <div className=" max-w-fit h-full mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className=" p-3 inset-0 py-24 px-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 ">
            Get in touch
          </h2>
          <p className="text-gray-700 mb-8 lg:text-xl">
            Proin volutpat consequat porttitor cras nullam gravida at. Orci
            molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu
            sed malesuada et magna.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span>🏢</span> Saltillo Coahuila
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span> +52 (844)173-7479
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span> ricardo@suprugc.com
            </li>
          </ul>
        </div>

        <form className="space-y-6 flex flex-col justify-center mx-10 h-3/4 p-10 rounded-2xl">
          <ContactForm />
          <button
            type="submit"
            className="bg-[#284F77] hover:bg-[#193653] text-white font-semibold px-6 py-3 rounded-md"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
