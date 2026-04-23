"use client";
import {
  BarChart,
  Lightbulb,
  Database,
  Code,
  TrendingUp,
  HandHeart,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from 'aos';
import "../css/LandingSections.css";

export function WhatWeDo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="id-section bg-white">
      <div className="id-container">
        <div className="premium-section-header" data-aos="fade-down">
          <div className="premium-label">
            <span className="premium-label-dot" />
            Core Capabilities
          </div>
          <h2 className="premium-title">
            What We <span className="premium-gradient-text">Do</span>
          </h2>
          <p className="premium-subtitle">
            We specialize in delivering data-driven insights, strategic advisory, and global research services. 
            Our core solutions are designed to drive measurable growth.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mb-5" data-aos="fade-up">
          {[
            { id: "market-research", title: "Market Research & Analytics", icon: BarChart, desc: "In-depth data analysis to provide actionable market insights and competitive intelligence." },
            { id: "strategic-advisory", title: "Strategic Advisory", icon: Lightbulb, desc: "Expert guidance for future-focused strategies and smarter, data-backed business decisions." },
            { id: "data-management", title: "Data Management & Reporting", icon: Database, desc: "Comprehensive solutions for organizing, purifying, and presenting your most critical data." },
            { id: "web-development", title: "Web Development & SEO", icon: Code, desc: "Full-stack digital support to enhance your online presence and organic reach." },
            { id: "industry-intelligence", title: "Industry Intelligence", icon: TrendingUp, desc: "Tailored reports and sector-specific intelligence for high-stakes decision makers." },
            { id: "marketing-ops", title: "Marketing & Ops Support", icon: HandHeart, desc: "Streamlining processes for efficient business operations while enhancing brand visibility." }
          ].map((item, idx) => (
            <div className="col" key={idx}>
              <Link href={`/services/${item.id}`} className="text-decoration-none">
                <div className="card h-100 p-4 linq-card" style={{ cursor: "pointer" }}>
                  <div className="icon-wrapper">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="h5 fw-bold mb-2 text-linq-dark">{item.title}</h3>
                  <p className="card-text text-muted">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
