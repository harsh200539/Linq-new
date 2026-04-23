"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GripVertical } from 'lucide-react';

export function BeforeAfterSlider({ before, after }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientPosition) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientPosition - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e) => handleMove(e.clientX);
  const onTouchMove = (e) => handleMove(e.touches[0].clientX);

  return (
    <div className="cs-ba-wrapper" data-aos="zoom-in">
      <div className="cs-ba-container">
        <div className="text-center mb-5">
            <h3 className="fw-bold mb-2">Metrics Comparison</h3>
            <p className="text-muted">Slide to see the shift in performance post-intervention</p>
        </div>

        <div 
          className="cs-slider-main"
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* Before Layer (Bottom) */}
          <div className="cs-ba-side cs-ba-before">
            <div className="cs-ba-content">
              <span className="cs-ba-label">Before Intervetion</span>
              <span className="cs-ba-metric">{before.metric}</span>
              <p className="cs-ba-sub">{before.sub}</p>
              <p className="mt-3 small opacity-50">{before.label}</p>
            </div>
          </div>

          {/* After Layer (Top) */}
          <div 
            className="cs-ba-side cs-ba-after"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="cs-ba-content">
              <span className="cs-ba-label">LINQ Optimized</span>
              <span className="cs-ba-metric">{after.metric}</span>
              <p className="cs-ba-sub">{after.sub}</p>
              <p className="mt-3 small opacity-75">{after.label}</p>
            </div>
          </div>

          {/* Handle */}
          <div 
            className="cs-slider-handle"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="cs-handle-circle">
              <GripVertical size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
