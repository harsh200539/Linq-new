"use client";
import React from "react";
import { HeroSection } from "./hero-section";
import { WhatWeDo } from "./what-we-do";
import { IndustriesWeServe } from "./IndustriesWeServe";
import { WhyChooseUs } from "./WhyChooseUs";
import { InsightsSection } from "./InsightsSection";
import { CaseStudiesSection } from "./CaseStudiesSection";

export default function LinqHome() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <WhatWeDo />
      </div>
      <CaseStudiesSection />
      <div id="industries">
        <IndustriesWeServe />
      </div>
      <WhyChooseUs />
      <InsightsSection />
    </>
  );
}
