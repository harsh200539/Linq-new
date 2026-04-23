"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export function CaseStudyCard({ study, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/case-studies/${study.slug}`} className="cs-card text-decoration-none">
        <div className="cs-card-img-wrap">
          {study.image && (
            <img 
              src={study.image} 
              alt={study.title} 
              className="cs-card-img"
            />
          )}
          <div className="cs-card-metric-badge">
            {study.mainMetric}
          </div>
        </div>

        <div className="cs-card-body">
          <span className="cs-card-industry">{study.industry}</span>
          <h3 className="cs-card-title">{study.title}</h3>

          <div className="cs-card-info">
            <div className="cs-info-row">
              <span className="cs-info-label">The Problem</span>
              <p className="cs-info-text">{study.shortProblem}</p>
            </div>
            <div className="cs-info-row">
              <span className="cs-info-label">Our Solution</span>
              <p className="cs-info-text">{study.shortSolution}</p>
            </div>
          </div>

          <div className="cs-card-footer">
            View Case Study <ArrowRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
