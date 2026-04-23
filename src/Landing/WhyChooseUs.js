"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle2 } from "lucide-react";
import "../css/WhyChooseUs.css";

// Assets
import diffTall from "../images/Modules/diff_tall.png";
import diffHandshake from "../images/Modules/diff_handshake.png";
import diffGrowth from "../images/Modules/diff_growth.png";

export function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="why-choose-us-grid">
          {/* Left Content */}
          <div className="why-choose-us-content" data-aos="fade-right">
            <h2>How LINQ Is Different?</h2>
            <p className="subtitle">
              Here’s why global firms trust us with their most complex operational and research needs:
            </p>

            <div className="why-choose-us-list">
              <div className="why-choose-us-item">
                <div className="why-choose-us-icon-wrapper">
                  <CheckCircle2 size={24} />
                </div>
                <div className="why-choose-us-text">
                  <h3>Expertise You Can Trust</h3>
                  <p>
                    Our team has years of specialized experience across 12+ industries, 
                    delivering data-driven solutions that drive real results.
                  </p>
                </div>
              </div>

              <div className="why-choose-us-item">
                <div className="why-choose-us-icon-wrapper">
                  <CheckCircle2 size={24} />
                </div>
                <div className="why-choose-us-text">
                  <h3>Tailored Solutions</h3>
                  <p>
                    We customize our operational and research services to fit your unique 
                    business challenges, ensuring a perfect match for your goals.
                  </p>
                </div>
              </div>

              <div className="why-choose-us-item">
                <div className="why-choose-us-icon-wrapper">
                  <CheckCircle2 size={24} />
                </div>
                <div className="why-choose-us-text">
                  <h3>Proven Track Record</h3>
                  <p>
                    We’ve helped numerous clients optimize workflows, manage data risks, 
                    and streamline operations—delivering measurable improvements every time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="why-choose-us-image-grid" data-aos="zoom-in">
            <div className="image-tall">
              <Image src={diffTall} alt="Professional Analyst" fill />
            </div>
            <div className="image-square">
              <Image src={diffHandshake} alt="Corporate Collaboration" fill />
            </div>
            <div className="image-square">
              <Image src={diffGrowth} alt="Measurable Growth" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
