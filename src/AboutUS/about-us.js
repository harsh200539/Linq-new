"use client";

import { Navbar } from "../Shared/navbar";
import OurStory from "./OurStory";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import Footer from "../Shared/footer";
import CountUpAnimation from "../Shared/CountUpAnimation";
import {
  ArrowRight, Eye, Target, BarChart2, Code2, ShieldCheck,
  TrendingUp, Lightbulb, Users, Globe, Zap, Heart,
  Award, CheckCircle, Layers, Cpu, Linkedin
} from "lucide-react";

import { DEFAULT_VISION, DEFAULT_VISION_IMAGES } from "../lib/default-data";
import { fetchVision, fetchVisionImages, fetchTimeline } from "../lib/api";
import "../css/AboutUs.css";

const ABOUT_IMAGES = {
  about: "/about/about-1.webp",
  img2: "/about/about-2.webp",
  img3: "/about/about-3.webp",
  Visionimg: "/about/vision.webp",
};

const TEAM_MEMBERS = [
  { name: "Sam Razura", role: "Team Manager", category: "Leadership", image: "/media/career_growth/career-growth-1_cX8JcZj.png" },
  { name: "Alex Smith", role: "Lead Developer", category: "Technical", image: "/media/career_growth/career-growth-1_AmemRLh.png" },
  { name: "Jane Doe", role: "UI Designer", category: "Creative", image: "/media/career_growth/career-growth-1_JtXdMl3.png" },
];

const WHAT_WE_DO = [
  { id: "market-research", icon: BarChart2, title: "Market Research & Analytics", desc: "In-depth data synthesis to provide actionable market intelligence and competitive advantage." },
  { id: "strategic-advisory", icon: Lightbulb, title: "Strategic Advisory", desc: "Expert guidance for future-focused strategies backed by data-driven business decisions." },
  { id: "web-development", icon: Code2, title: "Web Development & SEO", desc: "Full-stack digital solutions to enhance your online presence and organic search equity." },
  { id: "industry-intelligence", icon: TrendingUp, title: "Industry Intelligence", desc: "Bespoke sector-specific intelligence reports for high-stakes decision makers globally." },
  { id: "data-management", icon: ShieldCheck, title: "Data Management", desc: "Centralised, automated ecosystems that clean, integrate, and visualize your core metrics." },
  { id: "marketing-ops", icon: Globe, title: "Marketing & Ops Support", desc: "Fusing marketing strategy with operational frameworks for measurable, trackable growth." },
];

const VALUES = [
  { icon: Zap, title: "Agility", desc: "We move fast without breaking things. Speed and precision are non-negotiable at LINQ." },
  { icon: ShieldCheck, title: "Integrity", desc: "Every decision, at every level, is guided by ethical principles and absolute transparency." },
  { icon: Users, title: "Collaboration", desc: "The best ideas emerge from diverse perspectives converging on a common goal." },
  { icon: Cpu, title: "Innovation", desc: "We are relentless in our pursuit of better tools, better methods, and better outcomes." },
  { icon: Heart, title: "Empathy", desc: "We understand our clients needs deeply before we architect any solution for them." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to a premium standard because our clients deserve nothing less." },
];

const WHY_US = [
  { icon: BarChart2, title: "Data-Driven Approach", desc: "Every recommendation and strategy we build is firmly anchored in rigorous, real-world data analysis.", num: "01" },
  { icon: Globe, title: "12+ Industry Expertise", desc: "From Deep Sea Mining to Cybersecurity, our analysts carry verified, cross-sector domain knowledge.", num: "02" },
  { icon: Layers, title: "Scalable Solutions", desc: "Our architectures are engineered from day one to grow seamlessly with your organization.", num: "03" },
  { icon: CheckCircle, title: "Proven Track Record", desc: "500+ completed projects and 15K+ satisfied clients across the global enterprise landscape.", num: "04" },
  { icon: Zap, title: "Agile Execution", desc: "We move at market speed, delivering pilot results in weeks, not months.", num: "05" },
  { icon: ShieldCheck, title: "Compliance-First", desc: "All data pipelines and advisory engagements are built to meet GDPR, HIPAA, and SOC 2 standards.", num: "06" },
];

export function AboutUs({ initialVision = null, initialVisionImages = [], initialTimeline = [] }) {
  const [vision, setVision] = useState(initialVision || DEFAULT_VISION);
  const [visionImages] = useState(initialVisionImages.length > 0 ? initialVisionImages : DEFAULT_VISION_IMAGES);
  const [timelineData, setTimelineData] = useState(initialTimeline.length > 0 ? initialTimeline : []);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });

    const loadData = async () => {
      try {
        const [freshVision, , freshTimeline] = await Promise.all([
          fetchVision(),
          fetchVisionImages(),
          fetchTimeline(),
        ]);
        if (freshVision) setVision(freshVision);
        if (freshTimeline && freshTimeline.length > 0) setTimelineData(freshTimeline);
      } catch (e) {
        console.error("Failed to load About Us data:", e);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <Navbar />

      {/* ─── 1. HERO ─── */}
      <section className="au-section au-hero">
        <div className="au-hero-bg">
          <div className="au-hero-orb au-hero-orb-1" />
          <div className="au-hero-orb au-hero-orb-2" />
          <div className="au-hero-orb au-hero-orb-3" />
        </div>
        <div className="au-hero-content au-container" data-aos="fade-up">
          <div className="au-label">
            <span className="au-label-dot" />
            About LINQ Corporate
          </div>
          <h1 className="au-hero-title">
            We Are The <span className="au-gradient-text">Internal Engine</span>
            <br />Of Global Industry
          </h1>
          <p className="au-hero-sub">
            LINQ is not a service agency — we are the precision-built internal engine of IQHUB,
            serving 12+ global sectors with data-driven operations, creative services, and
            deep-dive strategic intelligence.
          </p>
          <div className="au-hero-cta-row">
            <Link href="/services" className="au-btn-primary">
              Explore Our Services <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="au-btn-ghost">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="au-scroll-indicator">
          <div className="au-scroll-mouse">
            <div className="au-scroll-wheel" />
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── 2. WHO WE ARE ─── */}
      <section className="au-section au-who">
        <div className="au-container">
          <div className="au-who-grid">
            <div className="au-who-text" data-aos="fade-right">
              <div className="au-label">
                <span className="au-label-dot" />
                Who We Are
              </div>
              <h2>
                Connecting Industries,{" "}
                <span className="au-gradient-text">Ideas & Opportunities</span>{" "}
                Worldwide
              </h2>
              <p>
                Founded as the dedicated internal unit of IQHUB, LINQ has rapidly
                evolved into a cross-functional powerhouse. We embed ourselves deeply
                inside our clients&apos; realities — combining domain expertise, precision
                analytics, and bold creative thinking to deliver outcomes that move markets.
              </p>
              <div className="au-stats-row">
                <div className="au-stat-box" data-aos="zoom-in" data-aos-delay="100">
                  <div className="au-stat-number">
                    <CountUpAnimation end={500} suffix="+" />
                  </div>
                  <div className="au-stat-label">Projects</div>
                </div>
                <div className="au-stat-box" data-aos="zoom-in" data-aos-delay="200">
                  <div className="au-stat-number">
                    <CountUpAnimation end={150} suffix="+" />
                  </div>
                  <div className="au-stat-label">Experts</div>
                </div>
                <div className="au-stat-box" data-aos="zoom-in" data-aos-delay="300">
                  <div className="au-stat-number">
                    <CountUpAnimation end={15} suffix="+" />
                  </div>
                  <div className="au-stat-label">Industries</div>
                </div>
              </div>
            </div>
            <div className="au-who-image-wrap" data-aos="fade-left">
              <Image
                src={ABOUT_IMAGES.about}
                alt="LINQ Team at Work"
                width={600}
                height={420}
                style={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OUR STORY (Enhanced Timeline) ─── */}
      <OurStory initialTimeline={timelineData} />

      {/* ─── 4. VISION + MISSION ─── */}
      <section className="au-section au-vm" id="vision">
        <div className="au-container">
          <div className="text-center" data-aos="fade-down">
            <div className="au-label" style={{ margin: "0 auto 20px" }}>
              <span className="au-label-dot" />
              Our Foundation
            </div>
            <h2 className="au-section-title">
              Vision &amp; <span className="au-gradient-text">Mission</span>
            </h2>
            <p className="au-section-sub" style={{ margin: "0 auto" }}>
              {vision ? vision.subtitle : "Connecting global industries through ideas that drive opportunity."}
            </p>
          </div>
          <div className="au-vm-container">
            <div className="au-vm-card vision-card" data-aos="fade-right">
              <div className="au-vm-content">
                <div className="au-vm-icon"><Eye size={32} /></div>
                <h3>Our Vision</h3>
                <p>
                  {vision ? vision.description : "To be the most trusted, precision-driven intelligence and operations partner for global enterprises across 20+ industry sectors by 2030."}
                </p>
                <div className="au-vm-footer">
                  <span>2030 Milestone</span>
                  <div className="au-vm-progress"><div className="fill" style={{ width: "65%" }}></div></div>
                </div>
              </div>
            </div>



            <div className="au-vm-card mission-card" data-aos="fade-left">
              <div className="au-vm-content">
                <div className="au-vm-icon"><Target size={32} /></div>
                <h3>Our Mission</h3>
                <p>
                  {vision ? vision.description_extended : "To deliver measurable business impact through rigorous data operations, strategic advisory, and deep-sector intelligence — powered by world-class talent and a culture of relentless excellence."}
                </p>
                <ul className="au-vm-list">
                  <li><CheckCircle size={14} /> Data Rigor</li>
                  <li><CheckCircle size={14} /> Global Scale</li>
                  <li><CheckCircle size={14} /> Impact First</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT WE DO ─── */}
      <section className="au-section au-what">
        <div className="au-container">
          <div className="text-center" data-aos="fade-down">
            <div className="au-label" style={{ margin: "0 auto 20px" }}>
              <span className="au-label-dot" />
              What We Do
            </div>
            <h2 className="au-section-title">
              Core <span className="au-gradient-text">Competencies</span>
            </h2>
            <p className="au-section-sub" style={{ margin: "0 auto" }}>
              Six precision-built service lines, engineered to drive aggressive and measurable organizational growth.
            </p>
          </div>
          <div className="au-what-grid">
            {WHAT_WE_DO.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  href={`/services/${item.id}`}
                  key={idx}
                  className="text-decoration-none"
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <div className="au-what-card" style={{ cursor: "pointer" }}>
                    <div className="au-what-icon"><Icon size={24} /></div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div style={{ marginTop: "20px", fontSize: "0.85rem", fontWeight: 700, color: "#007bff", display: "flex", alignItems: "center", gap: "6px" }}>
                      Learn More <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. VALUES / CULTURE ─── */}
      <section className="au-section au-values">
        <div className="au-container">
          <div className="text-center" data-aos="fade-down">
            <div className="au-label" style={{ margin: "0 auto 20px" }}>
              <span className="au-label-dot" />
              Our Culture
            </div>
            <h2 className="au-section-title">
              Values That <span className="au-gradient-text">Drive Us</span>
            </h2>
            <p className="au-section-sub" style={{ margin: "0 auto" }}>
              These aren&apos;t just words on a wall. They are the operating principles that govern every decision we make.
            </p>
          </div>
          <div className="au-values-grid">
            {VALUES.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  className="au-value-card"
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <div className="au-value-icon"><Icon size={26} /></div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 8. WHY CHOOSE US ─── */}
      <section className="au-section au-why">
        <div className="au-container">
          <div className="text-center" data-aos="fade-down">
            <div className="au-label" style={{ margin: "0 auto 20px" }}>
              <span className="au-label-dot" />
              Why LINQ
            </div>
            <h2 className="au-section-title">
              The LINQ <span className="au-gradient-text">Difference</span>
            </h2>
            <p className="au-section-sub" style={{ margin: "0 auto" }}>
              Six concrete, provable reasons why leading enterprises choose LINQ as their growth partner.
            </p>
          </div>
          <div className="au-why-grid">
            {WHY_US.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  className="au-why-card"
                  key={idx}
                  data-number={item.num}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                >
                  <div className="au-why-icon"><Icon size={24} /></div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA ─── */}
      <section className="au-section au-cta">
        <div className="au-cta-bg" />
        <div className="au-container au-cta-content" data-aos="zoom-in-up">
          <div className="au-label" style={{ margin: "0 auto 24px", display: "inline-flex" }}>
            <span className="au-label-dot" />
            Ready to Start?
          </div>
          <h2>
            Let&apos;s Build Something <span className="au-gradient-text">Extraordinary</span>
          </h2>
          <p>
            Partner with LINQ to architect resilient, data-driven frameworks that position your
            organization at the forefront of your industry.
          </p>
          <div className="au-hero-cta-row">
            <Link href="/contact" className="au-btn-primary">
              Start The Conversation <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="au-btn-ghost">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}