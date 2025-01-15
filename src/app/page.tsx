import Link from "next/link";

import ProductsList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <h1 className="text-lg text-red-950"> E-commerce </h1>
      <Link prefetch={true} href={"/products"}> Click! </Link>
      <ProductsList/>
    </>
  );
}
