'use client';
import About from "@/components/About";
import About2 from "@/components/About2";
import Coffee from "@/components/Coffee";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ShowGrid from "@/components/ShowGrid";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ShowGrid/>
      <About/>
      <About2/>
      <Coffee/>
      <Footer/>
    </div>
  )
}
