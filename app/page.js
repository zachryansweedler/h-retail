'use client';
import About from "@/components/About";
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
      <Coffee/>
      <Footer/>
    </div>
  )
}
