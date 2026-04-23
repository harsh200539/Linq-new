"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../Shared/navbar';
import Footer from '../Shared/footer';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Counter } from './Counter';
import { CASE_STUDIES } from '../lib/case-studies-data';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Zap, 
  TrendingUp, 
  BarChart3,
  ChevronLeft,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import '../css/CaseStudies.css';

export function CaseStudyDetail({ study }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!study) return null;

  // Find 2 related case studies (excluding current)
  const relatedStudies = CASE_STUDIES.filter(s => s.slug !== study.slug).slice(0, 2);

  return (
    <div className="cs-detail-page bg-white">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="cs-detail-hero">
        <div className="container">
          <Link href="/case-studies" className="text-decoration-none d-inline-flex align-items-center gap-2 mb-4 text-muted hover-blue">
            <ChevronLeft size={16} /> Back to Case Studies
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="cs-hero-industry">{study.industry}</span>
            <h1 className="cs-hero-title mb-3">{study.title}</h1>
            <p className="fs-5 text-secondary opacity-75 max-w-600 mb-5">
              {study.subtitle}
            </p>
            
            <div className="mt-5">
              <span className="cs-big-metric">
                <Counter value={parseInt(study.heroMetric)} suffix={study.heroMetric.includes('%') ? '%' : ''} />
              </span>
              <p className="cs-big-metric-label">{study.heroMetricLabel}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Problem & Solution ─── */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="p-lg-5 p-4 bg-light rounded-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4 text-danger">
                  <Target size={32} />
                  <h3 className="fw-900 mb-0">The Problem</h3>
                </div>
                <p className="fs-5 text-secondary leading-relaxed">
                  {study.problem}
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="p-lg-5 p-4 border rounded-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-4 text-primary">
                  <Zap size={32} />
                  <h3 className="fw-900 mb-0">Our Solution</h3>
                </div>
                <p className="fs-5 text-secondary leading-relaxed mb-4">
                  {study.solution}
                </p>
                <div className="d-flex flex-wrap gap-2 mt-auto pt-3">
                  {study.tools.map(tool => (
                    <span key={tool} className="cs-tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Process Step Flow ─── */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-6 fw-900">Strategic Methodology</h2>
            <p className="text-muted">How we architected the solution from inception to deployment.</p>
          </div>
          
          <div className="cs-step-grid">
            {study.process.map((step, idx) => (
              <div key={idx} className="cs-step-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="cs-step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Results / Metrics ─── */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-6 fw-900">Quantifiable Impact</h2>
            <p className="text-muted">The measurable value delivered to the organization.</p>
          </div>

          <div className="row g-4">
            {study.results.map((result, idx) => (
              <div key={idx} className="col-lg-4" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="text-center p-5 border rounded-4 hover-shadow transition">
                  <span className="display-3 fw-950 text-secondary d-block mb-3">
                    <Counter value={result.value} suffix={result.suffix} />
                  </span>
                  <h4 className="fw-bold mb-2">{result.label}</h4>
                  <p className="text-muted mb-0">{result.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── Before/After Slider ─── */}
      <section className="py-5 bg-light">
        <div className="container py-lg-5">
          <BeforeAfterSlider 
            before={study.beforeAfter.before}
            after={study.beforeAfter.after}
          />
        </div>
      </section>

      {/* ─── Related Case Studies ─── */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="d-flex align-items-center justify-content-between mb-5" data-aos="fade-up">
            <h2 className="display-6 fw-900 mb-0">Related Case Studies</h2>
            <Link href="/case-studies" className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2">
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="row g-4">
            {relatedStudies.map((rel, idx) => (
              <div key={rel.slug} className="col-lg-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                <Link href={`/case-studies/${rel.slug}`} className="text-decoration-none group">
                  <div className="p-4 border rounded-4 hover-shadow transition d-flex align-items-center gap-4 bg-white">
                    <div className="bg-light rounded-3 p-3 text-primary group-hover-bg-primary group-hover-text-white transition">
                      <Briefcase size={32} />
                    </div>
                    <div>
                      <span className="text-primary fw-bold small text-uppercase letter-1 mb-1 d-block">{rel.mainMetric}</span>
                      <h4 className="fw-bold text-dark mb-0">{rel.title}</h4>
                    </div>
                    <ChevronLeft size={24} className="ms-auto rotate-180 text-muted" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-5 bg-primary text-white text-center rounded-5 mx-3 mb-5 overflow-hidden position-relative shadow-2xl">
          <div className="position-absolute inset-0 opacity-10 bg-radial-gradient"></div>
          <div className="container position-relative z-1 py-5" data-aos="zoom-up">
              <h2 className="display-4 fw-900 mb-4">Want similar results?</h2>
              <p className="fs-4 opacity-75 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                  Let’s architect a data strategy that transforms your organizational performance.
              </p>
              <Link href="/contact" className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold text-primary shadow-lg hover-scale">
                  Get Started <ArrowRight className="ms-2" size={24} />
              </Link>
          </div>
      </section>

      <Footer />
    </div>
  );
}
