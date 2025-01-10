import Link from "next/link";
import bgImage from "../imagen.jpg"
import Image from "next/image";


export default function Home() {
  return (
    <>
      <h1> Mi tienda </h1>
      {/* imagen tratada como objeto */}
      {/* <img src={bgImage.src} alt=""/> */}
      <Image src={bgImage} alt="vacio"></Image>
      <Link prefetch={true} href={"/products"}> Haz click aqui </Link>
    </>
  );
}
