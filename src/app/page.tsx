import ProductsList from "@/components/ProductList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi proyecto con Next JS",
  description: "Ecommerce basado en Next JS",
};

export default function Home() {
  return (
    <>
      <ProductsList />
    </>
  );
}