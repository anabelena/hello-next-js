import { products } from "@/data/products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      { products, message: "Products loaded" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error" }, 
      { status: 500 });
  }
}
