"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
function page() {
  return (
    <div>
      
      ADMIN PAGE
      <Link href="/componenta"> componenta </Link>
      <Link href="/componentb"> componentb </Link>
      <ProductCard />

    </div>
  );
}
export default page;
