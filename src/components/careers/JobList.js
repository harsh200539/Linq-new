"use client";
import React from 'react';
import JobCard from './JobCard';

export default function JobList({ jobs }) {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center py-5 bg-white rounded-4 border-2 border-dashed border-light">
        <div className="mb-3 text-muted opacity-25">
          <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="h5 fw-bold text-dark mb-2">No positions found</h3>
        <p className="text-muted mx-auto px-4" style={{ maxWidth: '400px' }}>
          We couldn't find any job openings matching your search. Try adjusting your filters or check back later!
        </p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {jobs.map((job) => (
        <div key={job.id} className="col-md-6 col-lg-4">
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
}
