"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import { 
  FlaskConical, Leaf, Car, Ship, Heart, Plane, 
  Droplet, Tractor, Shield, Bubbles, ShieldCheck 
} from "lucide-react";
import "../css/Industries.css";

const INDUSTRIES = [
  { Icon: Droplet, title: "Oil & Gas", tag: "Energy" },
  { Icon: FlaskConical, title: "Biotechnology", tag: "Tech" },
  { Icon: Leaf, title: "Sustainability", tag: "Green" },
  { Icon: Tractor, title: "Agriculture", tag: "Agri" },
  { Icon: FlaskConical, title: "Pharmaceuticals", tag: "Life Sci" },
  { Icon: Car, title: "Automotive", tag: "Mobility" },
  { Icon: Ship, title: "Deep Sea Mining", tag: "Mining" },
  { Icon: Heart, title: "Healthcare", tag: "Wellness" },
  { Icon: Plane, title: "Aviation", tag: "Aero" },
  { Icon: Shield, title: "Defence", tag: "Security" },
  { Icon: Bubbles, title: "Water Management", tag: "Resource" },
  { Icon: ShieldCheck, title: "Cybersecurity", tag: "Cyber" }
];

export function IndustriesWeServe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="industries" className="id-section">
      <div className="id-container">
        {/* Header Section */}
        <div className="id-header" data-aos="fade-down">
          <div className="id-label">
            <span className="id-label-dot" />
            Global Impact
          </div>
          <h2 className="id-title">
            Industries We <span className="id-gradient-text">Serve & Empower</span>
          </h2>
          <p className="id-subtitle">
            From energy to life sciences, our cross-functional teams build precision frameworks 
            for 12+ industry sectors, driving measurable growth through data and innovation.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="id-grid">
          {INDUSTRIES.map((item, idx) => (
            <div 
              key={idx} 
              className="id-card-wrap" 
              data-aos="fade-up" 
              data-aos-delay={idx * 50}
            >
              <div className="id-card">
                <div className="id-icon-wrap">
                  <item.Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="id-card-title">{item.title}</h3>
                <span className="id-card-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
