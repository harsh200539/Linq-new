"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../css/LandingSections.css";
import "../css/LifeAtLinq.css";

const LIFE_GALLERY = [
  { 
    id: 1, 
    title: "Team-driven culture", 
    tag: "Workplace", 
    image: "/life/team-driven.webp",
    aos: "fade-up"
  },
  { 
    id: 2, 
    title: "Team-building events", 
    tag: "Social", 
    image: "/life/cricket.webp",
    aos: "fade-up"
  },
  { 
    id: 3, 
    title: "Modern infrastructure", 
    tag: "Environment", 
    image: "/life/office-infra.webp",
    aos: "fade-up"
  },
  { 
    id: 4, 
    title: "Learning and growth", 
    tag: "Future", 
    image: "/life/learning-growth.webp",
    aos: "fade-up"
  }
];

export function LifeAtLinq() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="life-at-linq" className="premium-section">
      <div className="container">
        {/* Header Section */}
        <div className="premium-section-header" data-aos="fade-down">
          <div className="premium-label">
            <span className="premium-label-dot" />
            Culture & Community
          </div>
          <h2 className="premium-title">
            Life at <span className="premium-gradient-text">LINQ</span>
          </h2>
          <p className="premium-subtitle">
            We combine professionalism with fun. Our culture is collaborative, inclusive, and energetic. 
            At LINQ, you’ll find a vibrant community where growth and balance coexist.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="life-at-linq-grid">
          {LIFE_GALLERY.map((item, idx) => (
            <div 
              key={item.id} 
              className="life-card-wrap" 
              data-aos={item.aos} 
              data-aos-delay={idx * 100}
            >
              <div className="life-card">
                <div className="life-img-container">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="life-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="life-overlay" />
                </div>
                <div className="life-content">
                  <span className="life-tag">{item.tag}</span>
                  <h3 className="life-card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="life-cta-container" data-aos="fade-up">
          <button
            className="btn-discover"
            onClick={() => router.push("/img-gallery")}
          >
            Discover More in Gallery
          </button>
        </div>
      </div>
    </section>
  );
}