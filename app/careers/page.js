"use client";
import React, { useState, useMemo } from 'react';
import { useGlobalData } from '../../src/context/GlobalDataContext';
import { Navbar } from '../../src/Shared/navbar';
import Footer from '../../src/Shared/footer';
import CareerHero from '../../src/components/careers/CareerHero';
import JobFilters from '../../src/components/careers/JobFilters';
import JobList from '../../src/components/careers/JobList';
import '../../src/css/Careers.css';

export default function CareersPage() {
  const { jobs, loading } = useGlobalData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    return jobs.filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [jobs, searchTerm]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Navbar />
      
      <main className="flex-grow-1">
        <CareerHero />
        
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <JobFilters 
                searchTerm={searchTerm} 
                onSearchChange={setSearchTerm} 
              />
              
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <JobList jobs={filteredJobs} />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
