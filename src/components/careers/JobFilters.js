"use client";
import React from 'react';

export default function JobFilters({ searchTerm, onSearchChange }) {
  return (
    <div className="jobs-filter-container mb-5" data-aos="fade-up" data-aos-delay="100">
      <div className="row align-items-center g-3">
        <div className="col-md-9 position-relative">
          <input
            type="text"
            placeholder="Search roles (e.g. 'Developer', 'Sales')..."
            className="job-search-input"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <span className="position-absolute" style={{ left: '26px', top: '50%', transform: 'translateY(-50%)' }}>
            <svg
              className="text-muted"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        
        <div className="col-md-3 d-flex align-items-center justify-content-md-end gap-2 text-sm text-gray-500">
          <span className="fw-medium text-muted">Filter:</span>
          <select className="form-select border-0 bg-light" style={{ width: 'auto' }}>
            <option>All Types</option>
            <option>Full-time</option>
            <option>Contract</option>
            <option>Hybrid</option>
          </select>
        </div>
      </div>
    </div>
  );
}
