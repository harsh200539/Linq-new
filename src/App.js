import { AboutUs } from "./components/about-us";
import { CareersSection } from "./components/careers-section";
import { ContactUs } from "./components/contact-us";
import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { IndustriesWeServe } from "./components/industries-we-serve";
import { LifeAtLinq } from "./components/life-at-linq";
import { Navbar } from "./components/navbar";
import { WhatWeDo } from "./components/what-we-do";


export function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-linq-white text-linq-black">
      <Navbar />
      <main className="flex-grow-1">
        <HeroSection />
        <AboutUs />
        <WhatWeDo />
        <IndustriesWeServe />
        <LifeAtLinq />
        <CareersSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
