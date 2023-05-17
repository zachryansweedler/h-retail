'use client';
import About from "@/components/About";
import Coffee from "@/components/Coffee";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ShowGrid from "@/components/ShowGrid";

export default function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <ShowGrid/>
      <About/>
      <Coffee/>
      <Footer/>
    </>
  )
}
