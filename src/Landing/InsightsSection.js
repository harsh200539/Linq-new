"use client";
import React from "react";
import Image from "next/image";
import "../css/InsightsSection.css";

// Assets
import insightMeeting from "../images/Modules/insight_meeting.png";
import insightChart from "../images/Modules/insight_chart.png";
import insightDesk from "../images/Modules/insight_desk.png";
import insightPresenter from "../images/Modules/insight_presenter.png";
import insightAnalyst from "../images/Modules/insight_analyst.png";
import insightFuture from "../images/Modules/insight_future.png";

const INSIGHTS_DATA = [
  {
    id: 1,
    image: insightMeeting,
    title: "The Future of Strategic Advisory in a Data-Driven World",
    excerpt: "How global firms are leveraging real-time analytics to make smarter, faster business decisions in 2026.",
    author: "Jonathan Wills",
    date: "19 Jan 2026"
  },
  {
    id: 2,
    image: insightChart,
    title: "Emerging Trends in Market Research & Intelligence",
    excerpt: "Exploring the shift towards interactive data visualizations and predictive modeling in industry reporting.",
    author: "Sarah Chen",
    date: "12 Feb 2026"
  },
  {
    id: 3,
    image: insightDesk,
    title: "Optimization Strategies for Large-Scale Event Operations",
    excerpt: "A deep dive into how logistics and operational support are evolving to handle complex global gatherings.",
    author: "Michael Beck",
    date: "05 Mar 2026"
  },
  {
    id: 4,
    image: insightPresenter,
    title: "Data Privacy and Risk Management in Healthcare",
    excerpt: "Understanding the critical balance between accessibility and security in managing sensitive clinical data.",
    author: "Priya Sharma",
    date: "22 Mar 2026"
  },
  {
    id: 5,
    image: insightAnalyst,
    title: "Sustainability Trends in Modern Business Intelligence",
    excerpt: "How companies are integrating ESG metrics into their core performance reporting frameworks.",
    author: "James Wilson",
    date: "10 Apr 2026"
  },
  {
    id: 6,
    image: insightFuture,
    title: "Expanding Horizons: New Opportunities in Deep Sea Mining",
    excerpt: "Analyzing the operational and environmental challenges of the next frontier in resource extraction.",
    author: "Alex Rivera",
    date: "28 Apr 2026"
  }
];

export function InsightsSection() {
  return (
    <section id="insights" className="insights-section">
      <div className="container">
        <div className="insights-header" data-aos="fade-up">
          <h2>Insights and Industry Expertise</h2>
          <p>
            Stay informed with the latest strategic trends, research insights, and data-driven 
            strategies to help optimize your global business operations.
          </p>
        </div>

        <div className="insights-grid">
          {INSIGHTS_DATA.map((insight, index) => (
            <div 
              key={insight.id} 
              className="insight-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="insight-image-wrapper">
                <Image src={insight.image} alt={insight.title} fill />
              </div>
              <div className="insight-card-content">
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <div className="insight-card-footer">
                  <div className="insight-author">
                    <div className="author-avatar">
                      <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        {insight.author.charAt(0)}
                      </span>
                    </div>
                    <span className="author-name">{insight.author}</span>
                  </div>
                  <span className="insight-date">{insight.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
