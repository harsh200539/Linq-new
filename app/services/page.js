"use client";
import React from "react";
import { Navbar } from "../../src/Shared/navbar";
import Footer from "../../src/Shared/footer";
import { ServicesHero } from "../../src/Services/ServicesHero";
import { 
  ServicesGrid, ServicesIndustries, ServicesProcess, ServicesTools, ServicesCTA 
} from "../../src/Services/PremiumModules";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesIndustries />
        <ServicesProcess />
        {/* We can omit Case preview at the top level to avoid clutter, or add it if needed */}
        <ServicesTools />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
