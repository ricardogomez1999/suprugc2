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
            Contactanos!
          </h2>
          <p className="text-gray-700 mb-8 lg:text-xl">
            Llena el formulario y nos pondremos en contacto contigo en menos de
            24 horas. Tambien puedes marcarnos o mandarnos mensaje por WhatsApp
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span>🏢</span> Mexico
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span> +52 56 6771 8892
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
            Mandar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
