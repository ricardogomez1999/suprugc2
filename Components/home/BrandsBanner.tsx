import brands from "@/src/Data/indext";
import Image from "next/image";
import React from "react";

export default function BrandsBanner() {
  return (
    <div className="mt-10 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4">
          {brands.map((brand, index) => (
            <Image
              src={brand.image}
              alt={brand.name}
              width={100}
              height={100}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
