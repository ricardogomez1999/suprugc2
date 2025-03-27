import React from "react";

export default function FooterNav() {
  return (
    <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">Product</h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="/pricing"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="#"
            >
              Analysis
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="#"
            >
              API
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">Company</h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="#"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="/company"
            >
              Company
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">Support</h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="#"
            >
              Help center
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="#"
            >
              Community
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm/6 font-medium text-gray-950/50">Company</h3>
        <ul className="mt-6 space-y-4 text-sm/6">
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="#"
            >
              Terms of service
            </a>
          </li>
          <li>
            <a
              className="font-medium text-gray-950 data-hover:text-gray-950/75"
              data-headlessui-state=""
              href="#"
            >
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
