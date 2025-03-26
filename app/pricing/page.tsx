import Header from "@/Components/Header";
import React from "react";

export default function layout() {
  return (
    <div>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <Header />
        </div>
      </div>
    </div>
  );
}
