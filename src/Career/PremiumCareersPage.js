"use client";
import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import {
  ArrowRight, TrendingUp, Lightbulb, Users, Zap,
  MapPin, Clock, Building, Search, Star,
  FileText, PhoneCall, Video, Trophy, Send,
  Coffee, Globe, Cpu, Heart, Wifi, CheckCircle,
  CodeXml, SquarePen, Headset, BarChart2
} from "lucide-react";
import { Navbar } from "../Shared/navbar";
import Footer from "../Shared/footer";
import JobModal from "./JobModal";
import "../css/Careers.css";

/* ── Static data ── */
const WHY_JOIN = [
  { icon: TrendingUp, title: "Rapid Growth", desc: "Accelerated career paths — most team leads promoted from within in under 18 months." },
  { icon: Globe, title: "Global Exposure", desc: "Work directly on projects spanning 12+ industries across 4 continents." },
  { icon: Lightbulb, title: "Learning Culture", desc: "Dedicated learning budgets, expert mentorship, and quarterly skill-labs." },
  { icon: Zap, title: "Move Fast", desc: "No red tape. Ship ideas to production in weeks, not quarters." },
];

const PERKS = [
  { icon: Coffee, label: "Flexible Hours" },
  { icon: Wifi, label: "Remote-Ready" },
  { icon: Heart, label: "Health Cover" },
  { icon: Cpu, label: "Premium Gear" },
  { icon: Globe, label: "Travel Ops" },
  { icon: CheckCircle, label: "Paid Leave" },
];

const GALLERY_IMAGES = [
  "/about/about-1.webp",
  "/about/about-2.webp",
  "/about/about-3.webp",
];

const OPEN_ROLES = [
  {
    id: 1,
    title: "Web Developer",
    dept: "Engineering",
    location: "Vadodara, India",
    type: "Full-Time",
    icon: CodeXml,
    desc: "Build high-performance, accessible web applications using modern React and Next.js architectures for global enterprise clients.",
  },
  {
    id: 2,
    title: "Market Research Analyst",
    dept: "Research",
    location: "Vadodara, India",
    type: "Full-Time",
    icon: BarChart2,
    desc: "Synthesize complex market data into strategic intelligence reports that directly influence C-suite business decisions.",
  },
  {
    id: 3,
    title: "Content Writer",
    dept: "Creative",
    location: "Remote",
    type: "Full-Time",
    icon: SquarePen,
    desc: "Craft compelling long-form content, thought leadership articles, and data-backed white papers for our global clientele.",
  },
  {
    id: 4,
    title: "Sales Executive",
    dept: "Sales",
    location: "Vadodara, India",
    type: "Full-Time",
    icon: TrendingUp,
    desc: "Drive enterprise-level client acquisition strategies and manage complex, multi-stakeholder sales cycles with precision.",
  },
  {
    id: 5,
    title: "Data Researcher",
    dept: "Research",
    location: "Vadodara, India",
    type: "Full-Time",
    icon: Search,
    desc: "Uncover deep, niche-level intelligence through primary research, expert interviews, and proprietary data sourcing methods.",
  },
  {
    id: 6,
    title: "Calling Team Lead",
    dept: "Operations",
    location: "Vadodara, India",
    type: "Full-Time",
    icon: Headset,
    desc: "Lead and coach a high-performing outbound calling team, optimizing scripts, conversion rates, and pipeline velocity.",
  },
];

const DEPTS = ["All Departments", "Engineering", "Research", "Creative", "Sales", "Operations"];
const LOCS = ["All Locations", "Vadodara, India", "Remote"];
const TYPES = ["All Types", "Full-Time", "Part-Time", "Contract"];

const STEPS = [
  { icon: FileText, title: "Application", desc: "Submit your resume and a short cover note via our portal." },
  { icon: PhoneCall, title: "Screening", desc: "A 20-min call with our talent team to align on expectations." },
  { icon: Video, title: "Interview", desc: "A technical or portfolio review with the hiring manager." },
  { icon: Users, title: "Final Round", desc: "Culture-fit and leadership discussion with senior team." },
  { icon: Trophy, title: "Offer", desc: "Competitive offer issued within 72 hours of final round." },
];

const TESTIMONIALS = [
  { initial: "S", name: "Shriya Mehta", role: "Lead Analyst", quote: "LINQ gave me the opportunity to lead a project within my first four months. The pace of growth here is unmatched anywhere I've worked before." },
  { initial: "A", name: "Arjun Kapoor", role: "Web Developer", quote: "What sets LINQ apart is ownership culture — my code ships directly to global clients and I can see the impact it makes in real time." },
  { initial: "P", name: "Priya Sharma", role: "Content Strategist", quote: "The mentorship and learning culture pushed me to grow faster than any formal training programme ever could. Truly world-class environment." },
];

/* ── Component ── */
export default function PremiumCareersPage({ initialJobs = [] }) {
  const [dept, setDept] = useState("All Departments");
  const [loc, setLoc] = useState("All Locations");
  const [type, setType] = useState("All Types");
  const [query, setQuery] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 });
    // Auto-cycle hiring steps highlight
    const id = setInterval(() => {
      setActiveStep(prev => (prev + 1) % STEPS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  // Build final jobs list — merge API jobs with static fallback
  const allJobs = useMemo(() => {
    if (initialJobs && initialJobs.length > 0) {
      return initialJobs.map(j => ({
        id: j.id,
        title: j.title,
        dept: j.department || "Operations",
        location: j.location || "Vadodara, India",
        type: j.job_type || j.jobType || "Full-Time",
        icon: Headset,
        desc: j.description || "",
      }));
    }
    return OPEN_ROLES;
  }, [initialJobs]);

  const filtered = useMemo(() => {
    return allJobs.filter(j => {
      const matchDept = dept === "All Departments" || j.dept === dept;
      const matchLoc = loc === "All Locations" || j.location === loc;
      const matchType = type === "All Types" || j.type === type;
      const matchQuery = !query || j.title.toLowerCase().includes(query.toLowerCase());
      return matchDept && matchLoc && matchType && matchQuery;
    });
  }, [allJobs, dept, loc, type, query]);

  return (
    <div className="cr-page">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="cr-hero">
        <div className="cr-hero-orbs">
          <div className="cr-orb cr-orb-1" />
          <div className="cr-orb cr-orb-2" />
          <div className="cr-orb cr-orb-3" />
        </div>

        <div className="cr-hero-inner" data-aos="fade-up">
          <div className="cr-label">
            <span className="cr-dot" />
            We&apos;re Hiring
          </div>
          <h1 className="cr-hero-title">
            Build the Future{" "}
            <span className="cr-grad">With Data</span>
          </h1>
          <p className="cr-hero-sub">
            Join LINQ — the precision-built internal engine of IQHUB — and work on
            real problems for real global enterprises. No fluff, no bureaucracy.
            Just meaningful work, aggressive growth, and world-class people.
          </p>
          <div className="cr-hero-ctas">
            <a href="#open-roles" className="cr-btn-primary">
              View Open Roles <ArrowRight size={18} />
            </a>
            <Link href="/life-at-linq" className="cr-btn-ghost">
              Life at LINQ
            </Link>
          </div>

          <div className="cr-hero-badges" data-aos="fade-up" data-aos-delay="200">
            <div className="cr-badge">
              <Users size={16} className="cr-badge-icon" />
              <span>150+ Team Members</span>
            </div>
            <div className="cr-badge">
              <Globe size={16} className="cr-badge-icon" />
              <span>15+ Industries</span>
            </div>
            <div className="cr-badge">
              <TrendingUp size={16} className="cr-badge-icon" />
              <span>Fast Career Growth</span>
            </div>
            <div className="cr-badge">
              <Star size={16} className="cr-badge-icon" />
              <span>5★ Culture Rating</span>
            </div>
          </div>
        </div>

        <div className="cr-scroll-cue">
          <div className="cr-scroll-mouse">
            <div className="cr-scroll-wheel" />
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── 2. WHY JOIN US ── */}
      <section className="cr-why">
        <div className="cr-container">
          <div className="text-center" data-aos="fade-down">
            <div className="cr-label" style={{ margin: "0 auto 20px", display: "inline-flex" }}>
              <span className="cr-dot" />
              Why LINQ
            </div>
            <h2 className="cr-title">
              Why Join <span className="cr-grad">Our Team</span>
            </h2>
            <p className="cr-sub" style={{ maxWidth: 600, margin: "0 auto" }}>
              We don&apos;t just offer jobs. We offer a platform to define your career on your terms.
            </p>
          </div>
          <div className="cr-why-grid">
            {WHY_JOIN.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="cr-why-card" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="cr-why-icon"><Icon size={24} /></div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. LIFE AT LINQ ── */}
      <section className="cr-life">
        <div className="cr-container">
          <div className="text-center" data-aos="fade-down">
            <div className="cr-label" style={{ margin: "0 auto 20px", display: "inline-flex" }}>
              <span className="cr-dot" />
              Our Culture
            </div>
            <h2 className="cr-title">
              Life at <span className="cr-grad">LINQ</span>
            </h2>
          </div>
          <div className="cr-life-grid">
            <div className="cr-life-text" data-aos="fade-right">
              <h3>
                A Culture Built on{" "}
                <span className="cr-grad">Trust & Ownership</span>
              </h3>
              <p>
                At LINQ we believe the best work happens when talented people are given
                real responsibility from day one. No micro-management. No politics.
                Just a high-performance team that holds each other to the highest standard
                while genuinely looking out for one another.
              </p>
              <div className="cr-life-perks">
                {PERKS.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="cr-perk">
                      <Icon size={16} />
                      {p.label}
                    </div>
                  );
                })}
              </div>
              <div className="mt-5">
                <Link href="/img-gallery" className="cr-btn-primary" style={{ display: "inline-flex", padding: "14px 32px" }}>
                  Explore Full Gallery <ArrowRight size={18} className="ms-2" />
                </Link>
              </div>
            </div>
            <div className="cr-life-mosaic" data-aos="fade-left">
              {GALLERY_IMAGES.map((src, idx) => (
                <div key={idx} className="cr-mosaic-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Life at LINQ ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OPEN ROLES ── */}
      <section className="cr-roles" id="open-roles">
        <div className="cr-container">
          <div className="text-center" data-aos="fade-down">
            <div className="cr-label" style={{ margin: "0 auto 20px", display: "inline-flex" }}>
              <span className="cr-dot" />
              Open Positions
            </div>
            <h2 className="cr-title">
              Find Your <span className="cr-grad">Perfect Role</span>
            </h2>
            <p className="cr-sub" style={{ maxWidth: 560, margin: "0 auto" }}>
              Every role at LINQ is an opportunity to lead, innovate, and make a tangible impact.
            </p>
          </div>

          {/* Filter bar */}
          <div className="cr-filter-bar" data-aos="fade-up">
            <input
              type="text"
              className="cr-filter-search"
              placeholder="🔍  Search roles..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <select className="cr-filter-select" value={dept} onChange={e => setDept(e.target.value)}>
              {DEPTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select className="cr-filter-select" value={loc} onChange={e => setLoc(e.target.value)}>
              {LOCS.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <select className="cr-filter-select" value={type} onChange={e => setType(e.target.value)}>
              {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <span className="cr-roles-count">{filtered.length} role{filtered.length !== 1 ? "s" : ""} found</span>
          </div>

          {/* Job cards */}
          <div className="cr-jobs-grid">
            {filtered.length === 0 ? (
              <div className="cr-no-roles">
                <Search size={40} style={{ color: "var(--cr-muted)" }} />
                <p>No roles match your current filters. Try broadening your search.</p>
              </div>
            ) : (
              filtered.map((job, idx) => {
                const Icon = job.icon;
                return (
                  <div
                    key={job.id}
                    className="cr-job-card"
                    data-aos="fade-up"
                    data-aos-delay={(idx % 2) * 100}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="cr-job-header">
                      <div className="cr-job-icon-wrap"><Icon size={22} /></div>
                      <span className="cr-job-type-badge">{job.type}</span>
                    </div>
                    <div className="cr-job-title">{job.title}</div>
                    <div className="cr-job-meta">
                      <span><Building size={13} /> {job.dept}</span>
                      <span><MapPin size={13} /> {job.location}</span>
                      <span><Clock size={13} /> Immediate</span>
                    </div>
                    <p className="cr-job-desc">{job.desc}</p>
                    <div className="cr-job-footer">
                      <button
                        className="cr-apply-btn"
                        onClick={(e) => { e.stopPropagation(); setSelectedJob(job); }}
                      >
                        View Details <ArrowRight size={14} />
                      </button>
                      <a
                        href={`mailto:hr.ds@linq-corporate.com?subject=Application for ${job.title}`}
                        className="cr-btn-ghost"
                        onClick={(e) => e.stopPropagation()}
                        style={{ fontSize: "0.82rem", padding: "8px 18px", borderRadius: "50px" }}
                      >
                        Apply <Send size={13} />
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* ── 5. HIRING PROCESS ── */}
      <section className="cr-process">
        <div className="cr-container">
          <div className="text-center" data-aos="fade-down">
            <div className="cr-label" style={{ margin: "0 auto 20px", display: "inline-flex" }}>
              <span className="cr-dot" />
              Our Process
            </div>
            <h2 className="cr-title">
              How We <span className="cr-grad">Hire</span>
            </h2>
            <p className="cr-sub" style={{ maxWidth: 560, margin: "0 auto" }}>
              A transparent, respectful, and fast hiring process — from first contact to offer in under 2 weeks.
            </p>
          </div>
          <div 
            className="cr-process-track" 
            data-aos="fade-up"
            style={{ "--total-steps": STEPS.length }}
          >
            <div className="cr-process-line">
              <div className="cr-process-fill" />
            </div>
            <div className="cr-steps">
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className={`cr-step ${activeStep === idx ? "active" : ""}`}
                  >
                    <div className="cr-step-bubble"><Icon size={24} /></div>
                    <div className="cr-step-title">{step.title}</div>
                    <div className="cr-step-desc">{step.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section className="cr-testimonials">
        <div className="cr-container">
          <div className="text-center" data-aos="fade-down">
            <div className="cr-label" style={{ margin: "0 auto 20px", display: "inline-flex" }}>
              <span className="cr-dot" />
              Team Voices
            </div>
            <h2 className="cr-title">
              Hear it From <span className="cr-grad">Our People</span>
            </h2>
          </div>
          <div className="cr-testi-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="cr-testi-card" data-aos="fade-up" data-aos-delay={idx * 120}>
                <div className="cr-testi-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f5a623" />)}
                </div>
                <p className="cr-testi-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="cr-testi-author">
                  <div className="cr-testi-avatar">{t.initial}</div>
                  <div>
                    <div className="cr-testi-name">{t.name}</div>
                    <div className="cr-testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <section className="cr-cta">
        <div className="cr-cta-glow" />
        <div className="cr-container cr-cta-inner" data-aos="zoom-in-up">
          <div className="cr-label" style={{ margin: "0 auto 24px", display: "inline-flex" }}>
            <span className="cr-dot" />
            Join Us
          </div>
          <h2>
            Ready to Build Something <span className="cr-grad">Meaningful?</span>
          </h2>
          <p>
            We&apos;re always looking for brilliant minds who want to do the best work of their career.
            If that sounds like you — let&apos;s talk.
          </p>
          <div className="cr-cta-btns">
            <a href="#open-roles" className="cr-btn-primary">
              View All Openings <ArrowRight size={18} />
            </a>
            <a href="mailto:hr.ds@linq-corporate.com" className="cr-btn-ghost">
              Email HR Directly
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── JOB MODAL ── */}
      {selectedJob && (
        <JobModal
          job={selectedJob}
          allJobs={allJobs}
          onClose={() => setSelectedJob(null)}
          onSelectJob={(job) => setSelectedJob(job)}
        />
      )}
    </div>
  );
}
