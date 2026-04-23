"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES } from '../lib/case-studies-data';
import { CaseStudyCard } from './CaseStudyCard';
import '../css/CaseStudies.css';

export function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'FinTech', 'Healthcare', 'E-commerce', 'AI & Analytics', 'Consulting'];

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return CASE_STUDIES;
    return CASE_STUDIES.filter(study => 
      study.industry === activeFilter || study.service === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="case-studies" className="cs-section">
      <div className="container">
        <div className="cs-header-wrap" data-aos="fade-up">
          <span className="cs-label">Real Impact. Real Results.</span>
          <h2 className="cs-section-title">See our strategy in action.</h2>
          <p className="cs-section-sub">
            We transform complex organizational data into measurable business growth. 
            Explore how we solve high-stakes challenges across global sectors.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="cs-filter-bar" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`cs-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="cs-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard 
                key={study.slug} 
                study={study} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
