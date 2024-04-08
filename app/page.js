
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Image from "next/image";

export default function Home() {
  return (

    <div className="mx-4 lg:mx-20">
     <Hero  />
     <Products />
    </div>
    
    
  );
}
