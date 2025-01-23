import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Browser from "@/components/Home/Browser";
import Products from "./Products/page";
import Beautyroom from "@/components/Home/Beautyroom";
import ImeGridag from "@/components/Home/Funiro";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Hero/>
    
    <Browser/>
    <Products/>
    <Beautyroom/>
<ImeGridag/>

    </main>
  );
}
