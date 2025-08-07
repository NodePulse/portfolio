"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import Hero from "@/sections/Hero";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false
    })
  }, [])

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
