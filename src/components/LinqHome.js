// import { AboutUs } from "./components/about-us";
// import { CareersSection } from "./components/careers-section";
// import { ContactUs } from "./components/contact-us";
// import { Footer } from "./components/footer";
// import { HeroSection } from "./components/hero-section";
// import { IndustriesWeServe } from "./components/industries-we-serve";
// import { LifeAtLinq } from "./components/life-at-linq";
// import { Navbar } from "./components/navbar";
// import { WhatWeDo } from "./components/what-we-do";

import { AboutUs } from "./about-us";
import { CareersSection } from "./CareersSection";
import { ContactUs } from "./contact-us";
import Footer from "./footer";

import { HeroSection } from "./hero-section";
import { IndustriesWeServe } from "./IndustriesWeServe";
import { LifeAtLinq } from "./life-at-linq";
import { Navbar } from "./navbar";
import { WhatWeDo } from "./what-we-do";


export default function LinqHome() {
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
