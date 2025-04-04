import Image from "next/image";
import React from "react";

export default function TeamImg() {
  return (
    <div className="max-lg:order-first max-lg:max-w-lg">
      <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
        <Image
          alt="company5"
          src="/company5.png"
          className="block size-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
