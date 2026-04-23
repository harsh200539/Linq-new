"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ChevronRight, 
  BarChart3, 
  Globe, 
  Layers 
} from "lucide-react";
import "../css/Hero.css";

export function HeroSection() {
  const sliderImages = [
    { id: 1, src: "/hero/hero-1.webp" },
    { id: 2, src: "/hero/hero-2.webp" },
    { id: 3, src: "/hero/hero-3.webp" },
    { id: 4, src: "/hero/hero-4.webp" },
  ];

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const navCards = [
    {
      title: "Services",
      desc: "Explore our data-driven solutions",
      route: "/services",
      icon: BarChart3
    },
    {
      title: "Industries",
      desc: "Discover sectors we work with globally",
      route: "/industries",
      icon: Globe
    },
    {
      title: "Case Studies",
      desc: "See real-world impact and results",
      route: "/case-studies",
      icon: Layers
    }
  ];

  return (
    <section id="home" className="linq_hero overflow-hidden">
      {/* Background Slider */}
      <div className="linq-hero-slider-bg">
        <div className="linq-hero-slider-wrapper">
          <Slider {...sliderSettings}>
            {sliderImages.map((image) => (
              <div key={image.id} className="linq-hero-slide">
                <Image
                  src={image.src}
                  alt="Hero Background"
                  className="linq-hero-slide-img"
                  fill
                  priority={image.id === 1}
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="linq-hero-overlay"></div>

      <div className="container linq-hero-content">
        <motion.div 
          className="row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="col-12">
            <div className="hero-header-stack">
              <motion.div variants={itemVariants} className="hero-brand">
                LINQ CORPORATE SOLUTIONS PRIVATE LIMITED
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="hero-headline">
                Strategic Consulting <br />
                <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 300 }}>
                  Driven by Data.
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="hero-tagline">
                Transforming complex data into strategic advantages. We empower 
                global organizations through actionable insights and precision execution.
              </motion.p>

              <motion.div variants={itemVariants} className="hero-cta">
                <Link href="/contact" className="btn-premium-lg">
                  Get Started <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>

            {/* Navigation Cards */}
            <div className="hero-nav-grid">
              {navCards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                >
                  <Link href={card.route} className="nav-glass-card">
                    <div className="card-top">
                      <div className="card-icon-blob">
                        <card.icon size={24} />
                      </div>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                    <div className="nav-arrow">
                      <ChevronRight size={24} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

