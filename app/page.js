'use client';
import About from "@/components/About";
import Coffee from "@/components/Coffee";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ShowGrid from "@/components/ShowGrid";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Hero/>
      <ShowGrid/>
      <About/>
      <Coffee/>
      <Footer/>
    </>
  )
}
