'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { magneticEffect } from '../utils/gsapAnimations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const links = navLinksRef.current;

    // Initial navbar animation
    gsap.fromTo(nav, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
    );

    // Logo animation with bounce effect
    if (logo) {
      gsap.fromTo(logo,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 }
      );
      
      // Add magnetic effect to logo
      magneticEffect(logo);
    }

    // Stagger animate nav links
    if (links.length > 0) {
      gsap.fromTo(links,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.7 }
      );
      
      // Add magnetic effect to nav links
      links.forEach(link => {
        if (link) magneticEffect(link);
      });
    }
  }, []);

  // Smooth scroll function for navigation links
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo - Centered on mobile */}
        <div className="flex-1 md:flex-none">
          <Link href="/" className="text-white font-bold text-xl md:text-2xl block text-center md:text-left">
            <span 
              ref={logoRef}
              className="text-indigo-400 cursor-pointer"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
            >
              SHUBHAM CHEDE
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            ref={el => navLinksRef.current[0] = el}
            onClick={() => scrollToSection('about')} 
            className="text-white hover:text-indigo-400 transition-colors hover:scale-105 transform duration-200"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            About
          </button>
          <button 
            ref={el => navLinksRef.current[1] = el}
            onClick={() => scrollToSection('tech')} 
            className="text-white hover:text-indigo-400 transition-colors hover:scale-105 transform duration-200"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Tech Stack
          </button>
          <button 
            ref={el => navLinksRef.current[2] = el}
            onClick={() => scrollToSection('experience')} 
            className="text-white hover:text-indigo-400 transition-colors hover:scale-105 transform duration-200"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Experience
          </button>
          <button 
            ref={el => navLinksRef.current[3] = el}
            onClick={() => scrollToSection('hackathons')} 
            className="text-white hover:text-indigo-400 transition-colors hover:scale-105 transform duration-200"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Hackathons
          </button>
          <button 
            ref={el => navLinksRef.current[4] = el}
            onClick={() => scrollToSection('projects')} 
            className="text-white hover:text-indigo-400 transition-colors hover:scale-105 transform duration-200"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Personal Projects
          </button>
          <button 
            ref={el => navLinksRef.current[5] = el}
            onClick={() => scrollToSection('academic')} 
            className="text-white hover:text-indigo-400 transition-colors hover:scale-105 transform duration-200"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Academic
          </button>
          <button 
            ref={el => navLinksRef.current[6] = el}
            onClick={() => scrollToSection('contact')} 
            className="text-white hover:text-indigo-400 transition-colors hover:scale-105 transform duration-200"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Contact me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex-1 md:flex-none flex justify-end">
          <button 
            className="md:hidden text-white focus:outline-none p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#242424] border-t border-white/10">
          <div className="flex flex-col px-6 py-6 space-y-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white text-center py-3 hover:text-indigo-400 transition-colors text-lg font-medium"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tech')}
              className="text-white text-center py-3 hover:text-indigo-400 transition-colors text-lg font-medium"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              Tech Stack
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-white text-center py-3 hover:text-indigo-400 transition-colors text-lg font-medium"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('hackathons')}
              className="text-white text-center py-3 hover:text-indigo-400 transition-colors text-lg font-medium"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              Hackathons
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white text-center py-3 hover:text-indigo-400 transition-colors text-lg font-medium"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              Personal Projects
            </button>
            <button 
              onClick={() => scrollToSection('academic')}
              className="text-white text-center py-3 hover:text-indigo-400 transition-colors text-lg font-medium"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              Academic
            </button>
            <button
              onClick={() => scrollToSection('contact')}
             className="text-white text-center py-3 hover:text-indigo-400 transition-colors text-lg font-medium"
             style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;