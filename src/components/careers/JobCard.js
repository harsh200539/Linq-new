"use client";
import React from 'react';
import Link from 'next/link';

export default function JobCard({ job }) {
  const { id, title, location, jobType, description } = job;
  
  const shortDescription = description?.length > 130 
    ? description.substring(0, 130) + '...' 
    : description;

  return (
    <div className="job-card" data-aos="fade-up">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div className="job-card-icon">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <span className="job-type-pill">
          {jobType || 'Full-time'}
        </span>
      </div>
      
      <h3 className="h4 fw-bold text-dark mb-2">
        {title}
      </h3>
      
      <div className="d-flex align-items-center text-muted small mb-3">
        <svg className="me-1" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {location}
      </div>
      
      <p className="text-muted small mb-4 flex-grow-1">
        {shortDescription}
      </p>
      
      <div className="mt-auto">
        <Link 
          href={`/careers/${id}`}
          className="btn w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
          style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            borderRadius: '16px',
            border: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          View Full Details
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

