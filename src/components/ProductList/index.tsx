import { getProducts } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsList() {
  
  const data = await getProducts();

  return (
    <main>
      <h1 className="text-xl text-blue-950 text-center mb-3"> NEW ARRIVALS </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-300 p-5 shadow-md rounded-md flex flex-col items-center justify-center gap-5"
          >
            <h2 className="text-lg font-bold">{product.name}</h2>

            <Link href={`/products/${product.id}`}>
           
                <Image
                  className="rounded-md"
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                />
       
            </Link>
            <p className="text-lg text-blue-500"> Price: {product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
