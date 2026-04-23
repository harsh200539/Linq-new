"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../Shared/navbar";
import Footer from "../Shared/footer";
import styles from "./css/Legal.module.css";
import { ArrowRight, Mail } from "lucide-react";

const LegalPage = ({ title, lastUpdated, sections }) => {
  return (
    <div className={styles.legalWrapper}>
      <Navbar />
      
      <header className={styles.hero}>
        <div className="container">
          <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
          <h1>{title}</h1>
        </div>
      </header>

      <div className={styles.contentContainer}>
        <aside className={styles.sidebar}>
          <h4>Table of Contents</h4>
          <nav>
            <ul className={styles.sidebarNav}>
              {sections.map((section, idx) => (
                <li key={idx}>
                  <a href={`#section-${idx + 1}`}>
                    {idx + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className={styles.mainContent}>
          {sections.map((section, idx) => (
            <section 
              key={idx} 
              id={`section-${idx + 1}`} 
              className={styles.section}
              data-aos="fade-up"
            >
              <h2>{section.title}</h2>
              {section.content.map((item, cIdx) => (
                <React.Fragment key={cIdx}>
                  {typeof item === "string" ? (
                    <p>{item}</p>
                  ) : (
                    <ul>
                      {item.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </section>
          ))}

          <section className={styles.contactBox} data-aos="zoom-in">
            <div className={styles.contactIcon}>
               <Mail size={32} color="#007bff" />
            </div>
            <h3>Have Questions?</h3>
            <p>Our legal team is here to help with any inquiries regarding our policies.</p>
            <Link href="/contact" className={styles.contactBtn}>
              Contact Our Team <ArrowRight size={18} style={{ marginLeft: "8px" }} />
            </Link>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default LegalPage;
