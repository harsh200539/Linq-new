"use client";
import React from "react";
import { CareersSection } from "./CareersSection";
import CareerGrowth from "./career-growth";

export default function CareerPage({ jobs, members }) {
  return (
    <>
      <CareersSection jobs={jobs} />
      <div id="career-growth">
        <CareerGrowth members={members} />
      </div>
    </>
  );
}
