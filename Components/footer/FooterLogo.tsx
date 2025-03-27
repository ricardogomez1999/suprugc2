import React from "react";
import FooterNav from "./FooterNav";

export default function FooterLogo() {
  return (
    <div className="group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
      <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
        <div className="col-span-2 flex">
          <svg
            width="127"
            height="34"
            viewBox="0 0 127 34"
            className="h-9 overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              opacity="1"
              style={{
                transform: "none",
                transformOrigin: "17.0005px 17.0005px",
              }}
            >
              <path d="M19.5986 18.5005C18.7702 19.9354 16.9354 20.427 15.5005 19.5986C14.0656 18.7701 13.574 16.9354 14.4024 15.5005C15.2309 14.0656 17.0656 13.574 18.5005 14.4024C19.9354 15.2308 20.427 17.0656 19.5986 18.5005Z" />
            </g>
            <g
              opacity="1"
              style={{ transform: "none", transformOrigin: "17px 17.0004px" }}
            >
              <path d="M23.2324 10.2074C22.6801 11.1639 21.4569 11.4917 20.5003 10.9394C19.5437 10.3871 19.216 9.16395 19.7683 8.20736C20.3205 7.25078 21.5437 6.92303 22.5003 7.47531C23.4569 8.0276 23.7846 9.25078 23.2324 10.2074Z" />
            </g>
          </svg>
        </div>
        <FooterNav />
      </div>
    </div>
  );
}
