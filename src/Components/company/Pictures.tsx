import Image from "next/image";
import React from "react";

export default function Pictures() {
  return (
    <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
      <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
        <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
          <Image
            src="/company1.png"
            alt="company1"
            className=" bg-block size-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
          <Image
            src="/company2.png"
            alt="company2"
            className="block size-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
          <Image
            src="/company3.png"
            alt="company3"
            className="block size-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
          <Image
            src="/company4.png"
            alt="company4"
            className="block size-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
