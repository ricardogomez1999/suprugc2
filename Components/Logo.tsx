import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="py-3 group/item relative">
      <Link href="/" title="Home">
        <img src="/logo.svg" alt="logo" className="w-24" />
      </Link>
    </div>
  );
}
