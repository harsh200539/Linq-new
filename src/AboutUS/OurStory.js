"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { DEFAULT_TIMELINE } from "../lib/default-data";

function OurStory({ initialTimeline = [] }) {
  const [timelineData] = useState(
    initialTimeline.length > 0 ? initialTimeline : DEFAULT_TIMELINE
  );
  const [activeYear, setActiveYear] = useState(0);
  const timelineRef = useRef(null);

  const handleYearClick = useCallback((index) => {
    setActiveYear(index);
  }, []);

  useEffect(() => {
    if (timelineData.length === 0) return;
    const interval = setInterval(() => {
      setActiveYear((prev) => (prev + 1) % timelineData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [timelineData.length]);

  if (timelineData.length === 0) return null;

  const activeItem = timelineData[activeYear];
  const progressPct = timelineData.length > 1
    ? (activeYear / (timelineData.length - 1)) * 100
    : 100;

  const renderHeadline = (headline) =>
    headline.split("<highlight>").map((part, i) => {
      if (i === 0) return part;
      const [hi, rest] = part.split("</highlight>");
      return (
        <span key={i}>
          <span className="au-gradient-text">{hi}</span>
          {rest}
        </span>
      );
    });

  return (
    <section className="au-section au-story">
      <div className="au-container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <div className="au-label" style={{ margin: "0 auto 20px", display: "inline-flex", background: "rgba(0,210,255,0.1)", borderColor: "rgba(0,210,255,0.25)", color: "#00d2ff" }}>
            <span className="au-label-dot" style={{ background: "#00d2ff" }} />
            Our Journey
          </div>
          <h2 className="au-section-title" style={{ color: "#e8f4f8" }}>
            The <span className="au-gradient-text">LINQ Story</span>
          </h2>
        </div>

        {/* Content */}
        <div className="au-story-grid" data-aos="fade-up">
          {/* Left — Text */}
          <div className="au-story-left">
            <p style={{ color: "#007bff", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
              {activeItem.year} — {activeItem.title}
            </p>
            <h2>{renderHeadline(activeItem.headline)}</h2>
            <p>{activeItem.description}</p>
          </div>

          {/* Right — Image */}
          <div className="au-story-image">
            <img
              src={activeItem.thumbnail}
              alt={activeItem.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s ease" }}
            />
          </div>
        </div>

        {/* Timeline Bar */}
        <div 
          className="au-timeline-bar" 
          ref={timelineRef} 
          data-aos="fade-up" 
          data-aos-delay="200"
          style={{ "--total-items": timelineData.length }}
        >
          <div className="au-timeline-line">
            <div
              className="au-timeline-progress"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="au-timeline-items">
            {timelineData.map((item, idx) => (
              <div
                key={item.id || idx}
                className={`au-timeline-node ${activeYear === idx ? "active" : ""}`}
                onClick={() => handleYearClick(idx)}
              >
                <div className="au-timeline-dot" />
                <div className="au-timeline-year">{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;