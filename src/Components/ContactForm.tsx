import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Nombre
          </label>
          <input
            type="text"
            className="w-full border border-gray-900 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Apellido
          </label>
          <input
            type="text"
            className="w-full border border-gray-900 rounded-md px-4 py-2"
          />
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Email
        </label>
        <input
          type="email"
          className="w-full border border-gray-900 rounded-md px-4 py-2"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Numero de telefono
        </label>
        <input
          type="tel"
          className="w-full border border-gray-900 rounded-md px-4 py-2"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Mensaje
        </label>
        <textarea
          rows={4}
          className="w-full border border-gray-900 rounded-md px-4 py-2"
        />
      </div>
    </>
  );
}
