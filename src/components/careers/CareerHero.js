"use client";
import React from 'react';

export default function CareerHero() {
  return (
    <section className="careers-hero text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <h1 className="mb-4">Careers at LINQ</h1>
            <p className="lead mb-5 text-light">
              Join our mission to connect global industries through innovation and excellence. 
              Discover opportunities that challenge and inspire you.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <span className="career-tag">Work from Home</span>
              <span className="career-tag">Global Impact</span>
              <span className="career-tag">Growth Mindset</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
