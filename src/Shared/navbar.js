"use client";

import { Menu, X } from "lucide-react"
import logo from '../images/Logo/logo-light.webp'
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function Navbar({ bgColor }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const normalizedPath = pathname?.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const isHomePage = normalizedPath === '/' || normalizedPath === '/home' || normalizedPath === '/about-us' || normalizedPath === '/services' || normalizedPath === '/careers' || normalizedPath === '/contact' || normalizedPath === '/life-at-linq' || normalizedPath === '/case-studies';

  const dispatchScroll = (pathOrId) => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('linq-manual-scroll', { detail: pathOrId }));
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className="navbar navbar-expand-lg navbar-dark navbar_linq py-3 fixed-top"
      style={bgColor ? { background: bgColor, backgroundColor: bgColor } : {}}
      ref={navbarRef}
    >
      <div className="container">
        <Link href="/home" onClick={() => setIsOpen(false)}>
          <Image
            src={logo}
            width={120}
            height={48}
            style={{ cursor: 'pointer', height: 'auto' }}
            alt="LINQ Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              {isMounted ? (
                <Link
                  href="/home"
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              ) : (
                <button
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => { router.push("/home"); setIsOpen(false); }}
                >
                  Home
                </button>
              )}
            </li>
            <li className="nav-item mx-2">
              {isMounted ? (
                <Link
                  href="/about-us"
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              ) : (
                <button
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => { router.push("/about-us"); setIsOpen(false); }}
                >
                  About Us
                </button>
              )}
            </li>
            <li className="nav-item mx-lg-2 mt-2 mt-lg-0">
              {isMounted ? (
                <Link
                  href="/services"
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              ) : (
                <button
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => { router.push("/services"); setIsOpen(false); }}
                >
                  Services
                </button>
              )}
            </li>
            <li className="nav-item mx-lg-2 mt-2 mt-lg-0">
              {isMounted ? (
                <Link
                  href="/life-at-linq"
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => setIsOpen(false)}
                >
                  Life at LINQ
                </Link>
              ) : (
                <button
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => { router.push("/life-at-linq"); setIsOpen(false); }}
                >
                  Life at LINQ
                </button>
              )}
            </li>
            <li className="nav-item mx-lg-2 mt-2 mt-lg-0">
              {isMounted ? (
                <Link
                  href="/case-studies"
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => setIsOpen(false)}
                >
                  Case Studies
                </Link>
              ) : (
                <button
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => { router.push("/case-studies"); setIsOpen(false); }}
                >
                  Case Studies
                </button>
              )}
            </li>
            <li className="nav-item mx-lg-2 mt-2 mt-lg-0">
              {isMounted ? (
                <Link
                  href="/careers"
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
              ) : (
                <button
                  className="nav-link text-linq-white bg-transparent border-0"
                  onClick={() => { router.push("/careers"); setIsOpen(false); }}
                >
                  Careers
                </button>
              )}
            </li>
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0">
              {isMounted ? (
                <Link
                  href="/contact"
                  className="btn btn-primary rounded-pill px-4 py-2 fw-semibold text-white shadow-sm"
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'linear-gradient(90deg, #007bff 0%, #00d2ff 100%)', border: 'none' }}
                >
                  Get in Touch
                </Link>
              ) : (
                <button
                  className="btn btn-primary rounded-pill px-4 py-2 fw-semibold text-white shadow-sm"
                  onClick={() => { router.push("/contact"); setIsOpen(false); }}
                  style={{ background: 'linear-gradient(90deg, #007bff 0%, #00d2ff 100%)', border: 'none' }}
                >
                  Get in Touch
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
