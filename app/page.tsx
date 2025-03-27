import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import BrandsBanner from "@/Components/home/BrandsBanner";
import OurOffer from "@/Components/home/OurOffer";
import Outreach from "@/Components/home/Outreach/Outreach";
import Portfolio from "@/Components/home/Portfolio/Portfolio";

export default function Home() {
  return (
    <div className=" overflow-hidden bg-white">
      <div className=" relative">
        <div className=" absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-120 from-[#b6e0f4] from-25% via-[#3628c7] via-70% to-[#1d0c8e] sm:bg-linear-150 "></div>
        <div className=" relative px-6 lg:px-8">
          <div className=" mx-auto max-w-2xl lg:max-w-7xl">
            <Header />
            <Hero />
          </div>
        </div>
      </div>
      <main>
        <BrandsBanner />

        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <OurOffer />
          <Portfolio />
        </div>
        <Outreach />
      </main>
    </div>
  );
}
