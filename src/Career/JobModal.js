"use client";
import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import {
  X, MapPin, Building, Clock, Send, ArrowRight,
  CodeXml, BarChart2, SquarePen, TrendingUp, Search, Headset
} from "lucide-react";
import "../css/JobModal.css";

/* ── Rich per-role content ── */
const ROLE_DETAILS = {
  1: {
    overview: `We are looking for a talented Web Developer to join our Engineering team and help architect high-performance digital solutions for global enterprise clients. You will collaborate closely with designers, analysts, and product leads to deliver experiences that are fast, accessible, and scalable.

You will own full feature delivery — from technical scoping and architecture decisions all the way through to production deployment — in a culture that prizes ownership, speed, and craft.`,
    responsibilities: [
      "Build and maintain performant web applications using React, Next.js, and TypeScript",
      "Collaborate with UI/UX designers to implement pixel-perfect, accessible interfaces",
      "Optimize applications for maximum speed, scalability, and SEO impact",
      "Integrate third-party APIs, data pipelines, and cloud services (AWS / Azure)",
      "Write clean, well-documented, testable code following established patterns",
      "Participate in code reviews and continuously mentor junior engineers",
      "Work directly with clients to translate business requirements into technical solutions",
    ],
    requirements: [
      "2+ years of professional experience with React, Next.js, or similar frameworks",
      "Strong understanding of HTML5, CSS3, JavaScript (ES6+), and TypeScript",
      "Experience with REST APIs, GraphQL, or real-time data integrations",
      "Familiarity with Git, CI/CD pipelines, and agile methodologies",
      "Excellent problem-solving skills and attention to detail",
      "Strong communication skills — you will regularly interface with clients",
      "Portfolio or GitHub profile demonstrating production-quality work",
    ],
  },
  2: {
    overview: `As a Market Research Analyst at LINQ, you will be the intelligence backbone for some of the world's most demanding enterprise clients. You will synthesize complex, multi-source data into strategic reports that directly guide C-suite decisions across 12+ industries.

This role sits at the intersection of analysis and strategy — you won't just collect data, you will interpret it, challenge it, and craft narratives that change how organizations view their markets.`,
    responsibilities: [
      "Design and execute primary and secondary research studies across global markets",
      "Synthesize multi-source data into concise, executive-ready intelligence reports",
      "Identify market trends, competitive dynamics, and emerging growth opportunities",
      "Conduct expert interviews, surveys, and qualitative research with industry leaders",
      "Collaborate with the Strategy team to translate insights into actionable recommendations",
      "Maintain and expand proprietary databases of industry and competitor intelligence",
      "Present findings to senior client stakeholders with clarity and confidence",
    ],
    requirements: [
      "2+ years of experience in market research, strategy consulting, or business intelligence",
      "Strong analytical skills with proficiency in Excel, Tableau, or similar BI tools",
      "Experience conducting both qualitative and quantitative research methodologies",
      "Excellent written and verbal communication skills — reports must speak for themselves",
      "Ability to distill complex data into clear, compelling narratives",
      "Bachelor's degree in Business, Economics, Statistics, or a related discipline",
      "Curiosity, intellectual rigor, and a passion for understanding markets deeply",
    ],
  },
  3: {
    overview: `We are seeking an exceptional Content Writer to craft the strategic narratives that position LINQ's clients as thought leaders within their industries. You will write long-form reports, white papers, SEO content, and executive communications that set the gold standard for clarity and insight.

Your words will be read by CEOs, analysts, and investors — they must earn that attention immediately.`,
    responsibilities: [
      "Research and write long-form thought leadership content, white papers, and industry reports",
      "Develop SEO-optimised blog content and editorial calendars aligned with business goals",
      "Collaborate with analysts and strategists to translate complex data into clear narratives",
      "Write and refine executive communications, case studies, and product copy",
      "Manage multiple content projects simultaneously without sacrificing quality",
      "Edit and proofread content from other team members to maintain brand voice consistency",
      "Continuously improve content performance through SEO analysis and audience feedback",
    ],
    requirements: [
      "2+ years of professional writing experience, ideally in a B2B or consulting context",
      "Exceptional English writing skills — every sentence must earn its place",
      "Proven experience writing SEO-optimised content that ranks and converts",
      "Ability to understand technical and financial subject matter and simplify it elegantly",
      "Portfolio with demonstrable examples of long-form, data-backed content",
      "Strong research skills and comfort with primary source verification",
      "Self-directed, disciplined, and thrive in a remote-friendly async environment",
    ],
  },
  4: {
    overview: `As a Sales Executive at LINQ, you will drive enterprise-level client acquisition across our most strategic service lines. You will manage the full sales cycle — from prospecting and discovery through to closing and handover — with support from our research and delivery teams.

This is a high-impact, high-ownership role. You will be building lasting client relationships, not just closing deals.`,
    responsibilities: [
      "Prospect, qualify, and convert high-value enterprise leads across target industries",
      "Own and manage a structured pipeline using CRM tools and disciplined follow-up cadences",
      "Conduct value-driven discovery calls and tailored solution presentations",
      "Negotiate complex, multi-service agreements with senior client stakeholders",
      "Collaborate closely with delivery teams to ensure seamless client onboarding",
      "Achieve and exceed quarterly revenue targets and key activity KPIs",
      "Feed market and client feedback into service development and pricing strategy",
    ],
    requirements: [
      "2+ years of B2B sales experience, preferably in consulting, research, or professional services",
      "Proven track record of closing enterprise accounts and managing complex sales cycles",
      "Excellent interpersonal and negotiation skills with C-suite communication confidence",
      "Highly organised, data-driven, and comfortable with CRM platforms (HubSpot, Salesforce)",
      "Hunter mentality with strong pipeline discipline and forecasting accuracy",
      "Bachelor's degree in Business, Marketing, or a related discipline",
      "Ability to thrive in a fast-paced, target-driven environment",
    ],
  },
  5: {
    overview: `As a Data Researcher at LINQ, you will be the engine behind our intelligence products — sourcing, verifying, and structuring the raw data that fuels our client deliverables. You will work across industries, time zones, and databases to uncover information that isn't easy to find — and that's exactly what makes this work so valuable.

Precision and persistence are not optional. They are the job.`,
    responsibilities: [
      "Conduct systematic primary and secondary data collection across defined market segments",
      "Source, verify, and structure data from company websites, databases, and expert networks",
      "Maintain rigorous data quality standards, including source verification and accuracy audits",
      "Organise research output into clean, structured formats ready for analyst use",
      "Support Market Research Analysts with targeted data requests on live projects",
      "Build and maintain curated research databases across assigned industry verticals",
      "Identify and escalate data gaps or inconsistencies that could impact deliverable quality",
    ],
    requirements: [
      "1+ years of experience in a data, research, or information management role",
      "Strong internet research skills with knowledge of advanced search techniques",
      "High attention to detail — accuracy is non-negotiable in this role",
      "Proficiency in Microsoft Excel or Google Sheets for data structuring and cleaning",
      "Ability to work efficiently under deadline pressure while maintaining quality",
      "Excellent documentation habits and a systematic, methodical approach",
      "Curiosity and hunger to learn about new industries and market dynamics",
    ],
  },
  6: {
    overview: `We are looking for an experienced Calling Team Lead to manage and elevate our outbound calling operations. You will combine strategic leadership with hands-on coaching to unlock the full performance potential of your team — improving conversion rates, refining objection-handling scripts, and building a culture of accountability and excellence.

If you thrive on hitting targets and developing people simultaneously, this role was built for you.`,
    responsibilities: [
      "Lead, coach, and performance-manage a team of 6–12 outbound calling professionals",
      "Design, test, and continuously refine call scripts and objection-handling frameworks",
      "Monitor daily KPIs, conversion metrics, and call quality scores using data dashboards",
      "Conduct regular 1-on-1 coaching sessions and weekly team performance reviews",
      "Coordinate with Sales and Research teams to ensure pipeline alignment",
      "Identify training needs and develop internal upskilling programmes",
      "Maintain and improve CRM data hygiene within your team's operational scope",
    ],
    requirements: [
      "3+ years of experience in outbound calling, with 1+ years in a team lead or supervisory role",
      "Demonstrable track record of improving conversion rates and call quality metrics",
      "Strong coaching and mentoring skills — you make the people around you better",
      "Proficiency in CRM and dialler platforms with strong data literacy",
      "Excellent verbal communication and objection-handling skills in English",
      "High emotional intelligence with the ability to motivate under pressure",
      "Structured, target-driven mindset with a bias for action and accountability",
    ],
  },
};

/* ── Default fallback for API-driven roles ── */
const DEFAULT_DETAILS = {
  overview: "This is an exciting opportunity to join the LINQ team and contribute to world-class deliverables for global enterprise clients. In this role you will be given real ownership from day one in a high-performance, collaborative environment.",
  responsibilities: [
    "Deliver high-quality work aligned with client and team expectations",
    "Collaborate closely with cross-functional teams to meet project milestones",
    "Continuously improve your craft through learning and iteration",
    "Maintain clear communication with team leads and clients",
  ],
  requirements: [
    "Relevant experience or degree in the field",
    "Strong communication and collaboration skills",
    "A growth mindset and ability to adapt quickly",
    "Passion for doing excellent, meaningful work",
  ],
};

/* ── JobModal component ── */
export default function JobModal({ job, allJobs, onClose, onSelectJob }) {
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const details = ROLE_DETAILS[job?.id] || DEFAULT_DETAILS;

  const otherRoles = allJobs.filter(j => j.id !== job?.id).slice(0, 3);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 240);
  }, [onClose]);

  // ESC key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [handleClose]);

  if (!mounted || !job) return null;

  const Icon = job.icon || Headset;
  const applyHref = `mailto:hr.ds@linq-corporate.com?subject=Application for ${job.title}`;

  const modal = (
    <div
      className={`jm-backdrop${closing ? " jm-closing" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Job details: ${job.title}`}
    >
      <div className={`jm-modal${closing ? " jm-closing" : ""}`}>

        {/* Close */}
        <div className="jm-close">
          <button className="jm-close-btn" onClick={handleClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* ── 1. HEADER ── */}
        <div className="jm-header">
          <div className="jm-icon-wrap"><Icon size={26} /></div>

          <div className="jm-header-top">
            <div>
              <h2 className="jm-title">{job.title}</h2>
              <div className="jm-meta-row">
                <span className="jm-meta-item"><Building size={14} /> {job.dept}</span>
                <span className="jm-meta-item"><MapPin size={14} /> {job.location}</span>
                <span className="jm-meta-item"><Clock size={14} /> Immediate Start</span>
                <span className="jm-type-badge">{job.type}</span>
              </div>
            </div>
            <a href={applyHref} className="jm-apply-btn">
              Apply Now <Send size={15} />
            </a>
          </div>
        </div>

        {/* ── 2. ROLE CONTENT ── */}
        <div className="jm-content">
          {/* Overview */}
          <div className="jm-section">
            <div className="jm-section-label">Role Overview</div>
            {details.overview.split("\n\n").map((para, i) => (
              <p key={i} className="jm-overview" style={{ marginBottom: i < details.overview.split("\n\n").length - 1 ? "16px" : 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Responsibilities */}
          <div className="jm-section">
            <h3 className="jm-section-title">Key Responsibilities</h3>
            <ul className="jm-list">
              {details.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>

          {/* Requirements */}
          <div className="jm-section">
            <h3 className="jm-section-title">Requirements</h3>
            <ul className="jm-list">
              {details.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
        </div>

        {/* ── 3. MID CTA STRIP ── */}
        <div className="jm-cta-strip">
          <div className="jm-cta-strip-text">
            <h4>Sounds like the right fit?</h4>
            <p>Send us your resume and a short note on why you&apos;re perfect for this role.</p>
          </div>
          <a href={applyHref} className="jm-cta-strip-btn">
            Apply for this Role <ArrowRight size={16} />
          </a>
        </div>

        {/* ── 4. MORE ROLES ── */}
        {otherRoles.length > 0 && (
          <div className="jm-more">
            <div className="jm-more-header">
              <div className="jm-more-title">Explore More Opportunities</div>
              <span className="jm-more-count">{otherRoles.length} more roles</span>
            </div>
            <div className="jm-more-grid">
              {otherRoles.map((r) => {
                const RIcon = r.icon || Headset;
                return (
                  <div
                    key={r.id}
                    className="jm-role-mini"
                    onClick={() => onSelectJob(r)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter") onSelectJob(r); }}
                  >
                    <div className="jm-role-mini-icon"><RIcon size={18} /></div>
                    <div className="jm-role-mini-title">{r.title}</div>
                    <div className="jm-role-mini-meta">{r.dept} · {r.location}</div>
                    <div className="jm-role-mini-cta">
                      View Role <ArrowRight size={12} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile sticky footer */}
        <div className="jm-sticky-footer">
          <a href={applyHref} className="jm-apply-btn">
            Apply Now <Send size={15} />
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
