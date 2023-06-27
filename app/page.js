'use client';
import About from "@/components/About";
import About2 from "@/components/About2";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LetsChat from "@/components/LetsChat";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <About/>
      <About2/>
      <LetsChat/>
      <Footer/>
    </div>
  )
}
