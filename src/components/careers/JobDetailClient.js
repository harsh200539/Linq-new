"use client";
import React from 'react';
import { Navbar } from '../../Shared/navbar';
import Footer from '../../Shared/footer';
import Link from 'next/link';
import '../../css/Careers.css';

export default function JobDetailClient({ job }) {
  if (!job) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 d-flex align-items-center justify-content-center bg-light py-5 px-3">
          <div className="text-center">
            <h1 className="display-4 fw-bold text-dark mb-3">Job Not Found</h1>
            <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '450px' }}>
              We couldn't find the position you're looking for. It might have been filled or the link might be broken.
            </p>
            <Link 
              href="/careers"
              className="btn btn-linq-primary px-4 py-2"
            >
              <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Careers
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Navbar />
      
      <main className="flex-grow-1 py-5 px-3">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <nav className="mb-4">
            <Link href="/careers" className="text-decoration-none text-primary fw-bold d-inline-flex align-items-center">
              <svg className="me-2" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Job Board
            </Link>
          </nav>

          <div className="row g-4">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
                <div className="job-detail-header p-4 p-md-5">
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="career-tag" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                      {job.jobType || 'Full-time'}
                    </span>
                    <span className="career-tag" style={{ background: 'rgba(56,189,248,0.1)', color: '#38bdf8', borderColor: 'rgba(56,189,248,0.2)' }}>
                      {job.status || 'Active'}
                    </span>
                  </div>
                  <h1 className="display-4 fw-bold mb-3">{job.title}</h1>
                  <div className="d-flex align-items-center opacity-75">
                    <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                </div>

                <div className="card-body p-4 p-md-5">
                  <section className="mb-5">
                    <h2 className="h3 fw-bold text-dark mb-4">Role Overview</h2>
                    <div className="text-secondary lh-lg fs-5">
                      {job.description}
                    </div>
                  </section>

                  <section className="mb-5">
                    <h2 className="h4 fw-bold text-dark mb-4">Key Responsibilities</h2>
                    <ul className="list-group list-group-flush border-0">
                      <li className="list-group-item px-0 py-3 border-0 d-flex align-items-start">
                        <span className="me-3 mt-1 text-primary">●</span>
                        <span className="text-secondary">Take ownership of assigned projects and deliver high-quality results within deadlines.</span>
                      </li>
                      <li className="list-group-item px-0 py-3 border-0 d-flex align-items-start">
                        <span className="me-3 mt-1 text-primary">●</span>
                        <span className="text-secondary">Collaborate with cross-functional teams to ensure seamless integration and operational excellence.</span>
                      </li>
                      <li className="list-group-item px-0 py-3 border-0 d-flex align-items-start">
                        <span className="me-3 mt-1 text-primary">●</span>
                        <span className="text-secondary">Maintain professional standards and contribute to a positive, innovative team culture.</span>
                      </li>
                    </ul>
                  </section>

                  <section className="mb-5">
                    <h2 className="h4 fw-bold text-dark mb-4">Preferred Requirements</h2>
                    <ul className="list-group list-group-flush border-0">
                      <li className="list-group-item px-0 py-2 border-0 d-flex align-items-center">
                        <svg className="me-3 text-success" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-secondary font-medium">Strong communication and analytical skills.</span>
                      </li>
                      <li className="list-group-item px-0 py-2 border-0 d-flex align-items-center">
                        <svg className="me-3 text-success" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-secondary font-medium">Ability to work in a fast-paced environment.</span>
                      </li>
                      <li className="list-group-item px-0 py-2 border-0 d-flex align-items-center">
                        <svg className="me-3 text-success" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-secondary font-medium">Passion for digital transformation and enterprise solutions.</span>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
                <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: '24px', border: '1px solid #f0f0f0' }}>
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold mb-4">Job Summary</h3>
                    
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-light p-2 rounded-3 me-3">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="small text-muted">Location</div>
                        <div className="fw-bold">{job.location}</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-light p-2 rounded-3 me-3">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="small text-muted">Job Type</div>
                        <div className="fw-bold">{job.jobType || job.job_type || 'Full-time'}</div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-light p-2 rounded-3 me-3">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="small text-muted">Posted</div>
                        <div className="fw-bold">Recently</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-top">
                      <h4 className="h6 fw-bold mb-3">How to Apply</h4>
                      <p className="small text-muted mb-3">Reach out via email with your CV and Position ID: #{job.id}</p>
                      <div className="d-grid gap-2">
                        {job.emails && job.emails.map((email, idx) => (
                          <a 
                            key={idx}
                            href={`mailto:${email}?subject=Application for ${job.title} (ID: ${job.id})`}
                            className="btn btn-outline-primary btn-sm text-truncate"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-linq-primary text-white border-0 p-4" style={{ borderRadius: '24px' }}>
                  <h4 className="fw-bold mb-3">Need Help?</h4>
                  <p className="small opacity-75 mb-4">Our HR team is here to assist you throughout the application process.</p>
                  <button className="btn btn-light w-100 fw-bold">Contact Support</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
