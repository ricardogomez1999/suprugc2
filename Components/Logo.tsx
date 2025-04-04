import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="py-3 group/item relative">
      <Link href="/" title="Home">
        <Image src="/logo.svg" alt="logo" width={100} height={100} />
      </Link>
    </div>
  );
}
