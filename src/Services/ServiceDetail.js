"use client";
import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import { getServiceData } from '../lib/services-data';
import '../css/ServiceDetail.css';

export function ServiceDetail({ serviceId }) {
    const service = getServiceData(serviceId);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (!service) {
        return notFound();
    }

    const Icon = service.icon;

    return (
        <div className="service-detail-wrapper">
            {/* Hero Section */}
            <section className="service-detail-hero">
                <div 
                    className="service-hero-bg" 
                    style={{ backgroundImage: `url(${service.headerImage})` }} 
                />
                <div className="service-hero-overlay" />
                <div className="container service-hero-content text-center">
                    <div className="d-flex justify-content-center" data-aos="fade-down">
                        <div className="service-hero-icon">
                            <Icon size={40} />
                        </div>
                    </div>
                    <h1 className="display-4 fw-bold mb-4" data-aos="fade-up" style={{ fontSize: "3.5rem", fontWeight: "800" }}>
                        {service.title}
                    </h1>
                    <p className="lead mx-auto" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: "800px", color: "#e6f0f7" }}>
                        {service.description}
                    </p>
                </div>
            </section>

            {/* Problem -> Solution Section */}
            <section className="service-detail-section">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h3 className="section-label">The Challenge Context</h3>
                        <h2 className="display-5 fw-bold text-linq-dark">Bridging the Gap</h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="prob-sol-card problem">
                                <h4 className="fw-bold mb-3 text-linq-dark">The Problem</h4>
                                <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                                    {service.problem}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="prob-sol-card solution">
                                <h4 className="fw-bold mb-3 text-linq-dark">The LINQ Solution</h4>
                                <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                                    {service.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="service-detail-section bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
                            <h3 className="section-label">Our Methodology</h3>
                            <h2 className="display-5 fw-bold text-linq-dark mb-4">Strategic Process</h2>
                            <p className="text-muted mb-4">
                                We don't believe in generic templates. Our execution framework ensures every 
                                solution is bespoke, rigorously tested, and aligned with your operational realities.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className="process-timeline">
                                {service.process.map((step, idx) => (
                                    <div className="process-step" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                                        <div className="step-marker">{idx + 1}</div>
                                        <div className="step-content">
                                            <h5 className="fw-bold text-linq-dark mb-2">{step.title}</h5>
                                            <p className="text-muted mb-0">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools & Tech Section */}
            <section className="service-detail-section">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h3 className="section-label">Technical Artillery</h3>
                        <h2 className="display-5 fw-bold text-linq-dark">Tools & Competencies</h2>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                        {service.tools.map((tool, idx) => {
                            const ToolIcon = tool.icon;
                            return (
                                <div className="col" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                                    <div className="tool-card">
                                        <div className="icon-wrapper-small mx-auto">
                                            <ToolIcon size={24} />
                                        </div>
                                        <h5 className="fw-bold mb-0">{tool.name}</h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="service-detail-section">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h3 className="section-label">Why It Matters</h3>
                        <h2 className="display-5 fw-bold text-linq-dark">Core Benefits</h2>
                    </div>
                    <div className="row g-4">
                        {service.benefits?.map((benefit, idx) => (
                            <div className="col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="benefit-card">
                                    <ArrowRight className="check-icon mt-1" size={24} />
                                    <p className="mb-0 fw-bold text-linq-dark" style={{ fontSize: "1.1rem" }}>{benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Preview & CTA Section */}
            <section className="service-detail-section bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="case-preview-card">
                                <div className="case-metric">{service.casePreview.metric}</div>
                                <h4 className="fw-bold mb-3">{service.casePreview.label}</h4>
                                <p className="mb-0 text-white-50">Impact Case: {service.casePreview.company}</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <h2 className="display-5 fw-bold text-linq-dark mb-4">Ready to Transform?</h2>
                            <p className="text-muted mb-4 lead">
                                Leverage our expertise to build resilient, future-ready solutions for your organization.
                            </p>
                            <a href="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg d-inline-flex align-items-center gap-2">
                                Start a Conversation <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="service-detail-section">
                <div className="container" style={{ maxWidth: "800px" }}>
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h2 className="display-5 fw-bold text-linq-dark">Common Questions</h2>
                    </div>
                    <div className="accordion premium-accordion" id="faqAccordion" data-aos="fade-up">
                        {service.faqs?.map((faq, idx) => (
                            <div className="accordion-item" key={idx}>
                                <h2 className="accordion-header" id={`heading${idx}`}>
                                    <button 
                                        className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`} 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target={`#collapse${idx}`} 
                                        aria-expanded={idx === 0 ? "true" : "false"} 
                                        aria-controls={`collapse${idx}`}
                                    >
                                        {faq.q}
                                    </button>
                                </h2>
                                <div 
                                    id={`collapse${idx}`} 
                                    className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`} 
                                    aria-labelledby={`heading${idx}`} 
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
