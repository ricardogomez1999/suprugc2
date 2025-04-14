import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function PricingBanner() {
  const t = useTranslations("PricingBanner");
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
            <div className="-mt-96 lg:-mt-52">
              <div className="-m-2 rounded-4xl bg-white/15 ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
                <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                  <div className="overflow-hidden rounded-3xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                    <Image
                      alt="Roberto Picture"
                      src="/roberto.png"
                      className="aspect-3/4 w-full object-cover"
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
              <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
                <blockquote>
                  <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                    {t("Text")}
                  </p>
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="text-sm/6 font-medium text-white">
                    {t("Name")}
                  </p>
                  <p className="text-sm/6 font-medium">
                    <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                      {t("Position")}
                    </span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
