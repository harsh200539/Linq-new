"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Database, Code, BarChart, Lightbulb, ShieldCheck, TrendingUp, HandHeart, Play } from 'lucide-react';
import AOS from 'aos';
import '../css/ServicesHero.css';

export function ServicesHero() {
    // Dynamic Industries for Bento Cycle
    const industries = [
        "Oil & Gas", "Healthcare", "Deep Sea Mining", 
        "Cybersecurity", "Aviation", "Biotechnology", 
        "Automotive", "Defence", "Sustainability"
    ];
    
    // Core Services for Bento Cycle
    const coreServices = [
        { name: "Web Development", icon: Code, desc: "High-Performance Platforms" },
        { name: "Market Research", icon: BarChart, desc: "Actionable Intelligence" },
        { name: "Strategic Advisory", icon: Lightbulb, desc: "Future-Focused Roadmaps" },
        { name: "Data Management", icon: Database, desc: "Centralized Ecosystems" },
        { name: "Industry Intelligence", icon: TrendingUp, desc: "Sector-Specific Reports" },
        { name: "Marketing Ops", icon: HandHeart, desc: "Omnichannel Growth" }
    ];

    const [currentIndIdx, setCurrentIndIdx] = useState(0);
    const [cardAlphaIdx, setCardAlphaIdx] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        
        const mainInterval = setInterval(() => {
            setCurrentIndIdx((prev) => (prev + 1) % industries.length);
            setCardAlphaIdx((prev) => (prev + 1) % coreServices.length);
        }, 3500);

        return () => clearInterval(mainInterval);
    }, [industries.length, coreServices.length]);

    const CardAlphaIcon = coreServices[cardAlphaIdx].icon;

    return (
        <section className="services-hero-wrapper">
            <div className="services-hero-bg-anim">
                <div className="bg-blob bg-blob-1"></div>
                <div className="bg-blob bg-blob-2"></div>
            </div>

            <div className="container services-hero-container">
                <div className="row align-items-center g-5">
                    {/* Left Side: Premium Content */}
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="services-hero-label-wrapper">
                            <div className="pulse-dot me-2"></div>
                            <span className="services-hero-label">LINQ Operations Hub</span>
                        </div>
                        <h1 className="services-hero-title">
                            Architecting <br />
                            <span className="hero-highlight">Global Dominance</span>
                        </h1>
                        <p className="services-hero-description">
                            Experience next-generation business operations. We engineer aggressive frameworks and precision-driven data solutions to accelerate your enterprise pipeline.
                        </p>
                        <div className="hero-btn-group">
                            <Link href="/contact" className="btn-premium-primary">
                                Discuss Project <ArrowRight size={20} className="ms-2" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Bento Box Architecture */}
                    <div className="col-lg-6" data-aos="fade-left">
                        <div className="hero-bento-grid">
                            
                            {/* Bento 1: Live Industry Tracker */}
                            <div className="bento-card bento-industry">
                                <div className="bento-industry-label">Target Sector</div>
                                <h3 className="bento-industry-value" style={{ transition: 'opacity 0.4s ease' }}>
                                    {industries[currentIndIdx]}
                                </h3>
                            </div>

                            {/* Bento 2: Core Service Engine */}
                            <div className="bento-card bento-service">
                                <div className="bento-icon-wrapper">
                                    <CardAlphaIcon size={28} />
                                </div>
                                <div className="bento-service-info">
                                    <h4>{coreServices[cardAlphaIdx].name}</h4>
                                    <p>{coreServices[cardAlphaIdx].desc}</p>
                                </div>
                            </div>

                            {/* Bento 3: Live Pipeline Stats */}
                            <div className="bento-card bento-stats span-2">
                                <div className="bento-stats-header">
                                    <h5>Operational Pipeline</h5>
                                    <div className="bento-pulse-live">
                                        <div className="pulse-dot-green"></div> LIVE
                                    </div>
                                </div>
                                <div className="bento-stats-body">
                                    <div className="stat-row">
                                        <div className="stat-label">Data Integration <span>94%</span></div>
                                        <div className="stat-bar-bg"><div className="stat-bar-fill bar-1"></div></div>
                                    </div>
                                    <div className="stat-row">
                                        <div className="stat-label">Market Intelligence <span>88%</span></div>
                                        <div className="stat-bar-bg"><div className="stat-bar-fill bar-2"></div></div>
                                    </div>
                                    <div className="stat-row">
                                        <div className="stat-label">Global Operations <span>99%</span></div>
                                        <div className="stat-bar-bg"><div className="stat-bar-fill bar-3"></div></div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
