"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Lock, BarChart3, Settings, Check } from "lucide-react";
import styles from "./css/CookieConsent.module.css";

const CONSENT_KEY = "linq_cookie_consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    marketing: false,
    preferences: true,
  });

  useEffect(() => {
    // Check for existing consent
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      // Small delay for entry effect
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
      } catch (e) {
        console.error("Error parsing consent:", e);
      }
    }

    // Listener for reopening from footer
    const handleReopen = () => setShowModal(true);
    window.addEventListener("open-cookie-settings", handleReopen);
    return () => window.removeEventListener("open-cookie-settings", handleReopen);
  }, []);

  const saveConsent = (data) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    setPreferences(data);
    setIsVisible(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true, preferences: true };
    saveConsent(all);
  };

  const handleRejectAll = () => {
    const minimal = { essential: true, analytics: false, marketing: false, preferences: false };
    saveConsent(minimal);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePref = (key) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !showModal && (
          <motion.div
            className={styles.bannerWrapper}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.5 }}
          >
            <div className={styles.banner}>
              <div className={styles.title}>
                <Shield size={20} color="#007bff" />
                Your Privacy Matters
              </div>
              <p className={styles.description}>
                We use cookies to improve your browsing experience, analyze traffic, 
                and personalize content. You can manage your preferences anytime.
              </p>
              <div className={styles.links}>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/cookies">Cookie Policy</Link>
              </div>
              <div className={styles.actions}>
                <button 
                  className={styles.btnPrimary} 
                  onClick={handleAcceptAll}
                >
                  Accept All
                </button>
                <button 
                  className={styles.btnSecondary} 
                  onClick={handleRejectAll}
                >
                  Reject Non-Essential
                </button>
              </div>
              <button 
                className={styles.btnGhost}
                onClick={() => setShowModal(true)}
              >
                Customize Preferences
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <div className={styles.modalOverlay}>
            <motion.div 
              className={styles.modal}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className={styles.modalHeader}>
                <h2>Cookie Preferences</h2>
                <button className={styles.btnClose} onClick={() => setShowModal(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.preferenceItem}>
                  <div className={styles.prefText}>
                    <h4>Essential Cookies</h4>
                    <p>These are necessary for the website to function and cannot be switched off.</p>
                  </div>
                  <label className={styles.switch}>
                    <input type="checkbox" checked disabled />
                    <span className={styles.slider}></span>
                  </label>
                </div>

                <div className={styles.preferenceItem}>
                  <div className={styles.prefText}>
                    <h4>Analytics Cookies</h4>
                    <p>Help us understand how visitors interact with the site, helping us find and fix issues.</p>
                  </div>
                  <label className={styles.switch}>
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics}
                      onChange={() => togglePref('analytics')}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>

                <div className={styles.preferenceItem}>
                  <div className={styles.prefText}>
                    <h4>Marketing Cookies</h4>
                    <p>Used to track visitors across websites to deliver more relevant advertisements.</p>
                  </div>
                  <label className={styles.switch}>
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing}
                      onChange={() => togglePref('marketing')}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>

                <div className={styles.preferenceItem}>
                  <div className={styles.prefText}>
                    <h4>Preference Cookies</h4>
                    <p>Allow the website to remember choices you make (like your user name or language).</p>
                  </div>
                  <label className={styles.switch}>
                    <input 
                      type="checkbox" 
                      checked={preferences.preferences}
                      onChange={() => togglePref('preferences')}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button className={styles.btnSecondary} onClick={handleAcceptAll}>
                  Accept All
                </button>
                <button className={styles.btnPrimary} onClick={handleSavePreferences}>
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
