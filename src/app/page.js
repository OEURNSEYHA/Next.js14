"use client";
import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
function page() {
  return (
    <div>
      
      <Link href="/about"> about </Link> <br />
    
      <ProductCard/>
    </div>
  );
}

export default page;
