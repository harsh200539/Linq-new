"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
    BarChart, Lightbulb, Database, Code, TrendingUp, HandHeart,
    ArrowRight, Factory, Stethoscope, Building2, Landmark, ShieldCheck,
    Droplet, FlaskConical, Leaf, Tractor, Car, Ship, Heart, Plane, Shield, Waves
} from 'lucide-react';
import AOS from 'aos';
import '../css/PremiumServices.css';

// 1. Services Grid (Core)
export function ServicesGrid() {
    const services = [
        { id: "market-research", title: "Market Research & Analytics", icon: BarChart, desc: "In-depth data analysis to provide actionable market insights and competitive intelligence." },
        { id: "strategic-advisory", title: "Strategic Advisory", icon: Lightbulb, desc: "Expert guidance for future-focused strategies and smarter, data-backed business decisions." },
        { id: "data-management", title: "Data Management & Reporting", icon: Database, desc: "Comprehensive solutions for organizing, purifying, and presenting your most critical data." },
        { id: "web-development", title: "Web Development & SEO", icon: Code, desc: "Full-stack digital support to enhance your online presence and organic reach." },
        { id: "industry-intelligence", title: "Industry Intelligence", icon: TrendingUp, desc: "Tailored reports and sector-specific intelligence for high-stakes decision makers." },
        { id: "marketing-ops", title: "Marketing & Ops Support", icon: HandHeart, desc: "Streamlining processes for efficient business operations while enhancing brand visibility." }
    ];

    useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

    return (
        <section className="py-5 premium-services-hub">
            <div className="container py-lg-5">
                <div className="text-center mb-5" data-aos="fade-down">
                    <h2 className="display-4 fw-bold mb-3" style={{ color: "#05243c" }}>Core Competencies</h2>
                    <p className="lead mx-auto text-muted" style={{ maxWidth: "700px" }}>
                        Bespoke solutions architected to drive aggressive growth and operational resilience.
                    </p>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {services.map((item, idx) => (
                        <div className="col" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <Link href={`/services/${item.id}`} className="text-decoration-none text-linq-dark">
                                <div className="premium-service-card">
                                    <div className="service-icon-blob">
                                        <item.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="h5 fw-bold mb-3">{item.title}</h3>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                    <div className="learn-more-link">
                                        Learn More <ArrowRight size={18} className="ms-1" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// 2. Industries Secondary Grid
export function ServicesIndustries() {
    const industries = [
        { icon: Droplet, title: "Oil & Gas" },
        { icon: FlaskConical, title: "Biotechnology" },
        { icon: Leaf, title: "Sustainability" },
        { icon: Tractor, title: "Agriculture" },
        { icon: FlaskConical, title: "Pharmaceuticals" },
        { icon: Car, title: "Automotive" },
        { icon: Ship, title: "Deep Sea Mining" },
        { icon: Heart, title: "Healthcare" },
        { icon: Plane, title: "Aviation" },
        { icon: Shield, title: "Defence" },
        { icon: Waves, title: "Water Management" },
        { icon: ShieldCheck, title: "Cybersecurity" }
    ];

    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

    return (
        <section className="py-5 bg-white overflow-hidden">
            <div className="container py-4">
                <div className="row g-4 justify-content-center">
                    <div className="col-12 text-center mb-4" data-aos="fade-up">
                        <h3 className="h4 fw-bold text-linq-dark">Industries We Serve</h3>
                    </div>

                    <div className="embla w-100" ref={emblaRef} style={{ overflow: 'hidden' }}>
                        <div className="embla__container d-flex" style={{ marginLeft: '-1rem', paddingTop: '20px', paddingBottom: '20px' }}>
                            {industries.map((ind, idx) => (
                                <div className="embla__slide" key={idx} style={{ flex: '0 0 calc(100% / 1)', minWidth: 0, paddingLeft: '1rem' }}>
                                    <style>{`
                                        @media (min-width: 576px) { .embla__slide:nth-child(${idx + 1}) { flex: 0 0 50% !important; } }
                                        @media (min-width: 768px) { .embla__slide:nth-child(${idx + 1}) { flex: 0 0 33.333% !important; } }
                                        @media (min-width: 992px) { .embla__slide:nth-child(${idx + 1}) { flex: 0 0 25% !important; } }
                                    `}</style>
                                    <div className="industry-hover-card mx-2 h-100">
                                        <ind.icon size={36} className="industry-icon" strokeWidth={1.2} />
                                        <h4>{ind.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 3. Process Section
import { Search, Target, Zap, LineChart, Settings } from 'lucide-react';

export function ServicesProcess() {
    const steps = [
        { title: "Discovery", desc: "We perform a deep-dive analysis into your operations and market position.", icon: Search },
        { title: "Blueprint", desc: "Our analysts architect a customized strategic roadmap aligned with your KPIs.", icon: Target },
        { title: "Architecture", desc: "Rigorous development and integration of secure, scalable data ecosystems.", icon: Zap },
        { title: "Analytics", desc: "Comprehensive QA and deployment of real-time monitoring dashboards.", icon: LineChart },
        { title: "Scale", desc: "Continuous operational refinement and strategy iteration based on live data.", icon: Settings }
    ];

    useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

    return (
        <section className="py-5 process-premium-section">
            <div className="container py-lg-5">
                <div className="row justify-content-center mb-5 pb-3 text-center">
                    <div className="col-lg-8" data-aos="fade-down">
                        <div className="d-inline-flex align-items-center bg-white px-3 py-1 rounded-pill mb-3 shadow-sm border">
                            <Zap size={14} className="text-primary me-2" />
                            <span className="text-uppercase fw-bold text-primary" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>Execution Framework</span>
                        </div>
                        <h2 className="display-4 fw-bold mb-3" style={{ color: "#05243c" }}>How We Work</h2>
                        <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
                            We construct resilient ecosystems through a relentless, five-stage framework prioritizing precision, security, and measurable ROI.
                        </p>
                    </div>
                </div>

                <div className="process-grid">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div className="process-card" key={idx} data-step={`0${idx + 1}`} data-aos="fade-up" data-aos-delay={idx * 150}>
                                <div className="process-icon-wrapper">
                                    <Icon size={28} />
                                </div>
                                <h4 className="process-title">{step.title}</h4>
                                <p className="process-desc">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// 4. Tools Marquee
export function ServicesTools() {
    const tools = ["REACT", "NEXT.JS", "PYTHON", "AWS", "AZURE", "FIGMA", "TABLEAU", "HUBSPOT", "SALESFORCE", "SAP", "ORACLE", "GOOGLE CLOUD", "DOCKER", "KUBERNETES", "CLAUDE"];

    return (
        <section className="tools-marquee-section">
            <div className="container text-center mb-4">
                <p className="text-muted fw-bold text-uppercase" style={{ letterSpacing: "2px" }}>Trusted Technologies & Platforms</p>
            </div>
            <div className="marquee-track">
                {/* Double the array for infinite loop effect */}
                {[...tools, ...tools].map((tool, idx) => (
                    <div className="marquee-item" key={idx}>
                        <h4 className="m-0 fw-bold text-muted" style={{ fontSize: "1.5rem" }}>{tool}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}

// 5. Final CTA
export function ServicesCTA() {
    return (
        <section className="py-5" style={{ background: "linear-gradient(135deg, #05243c 0%, #007bff 100%)", color: "white" }}>
            <div className="container py-5 text-center" data-aos="zoom-in-up">
                <h2 className="display-5 fw-bold mb-4">Ready to accelerate your growth?</h2>
                <p className="lead mb-5 mx-auto" style={{ maxWidth: "600px", opacity: 0.9 }}>
                    Partner with our experts to architect the solutions that will drive your organization forward.
                </p>
                <Link href="/contact" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg" style={{ color: "#05243c" }}>
                    Start the Conversation
                </Link>
            </div>
        </section>
    );
}
