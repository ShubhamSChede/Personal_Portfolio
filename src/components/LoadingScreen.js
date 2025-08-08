'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const loadingRef = useRef(null);
  const logoRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const loading = loadingRef.current;
    const logo = logoRef.current;
    const progress = progressRef.current;
    const text = textRef.current;

    // Create loading timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out loading screen
        gsap.to(loading, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete
        });
      }
    });

    // Logo animation
    tl.fromTo(logo,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Text animation
    tl.fromTo(text,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

    // Progress bar animation
    tl.fromTo(progress,
      { width: "0%" },
      { width: "100%", duration: 2, ease: "power2.inOut" },
      "-=0.3"
    );

    // Add floating animation to logo
    gsap.to(logo, {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1
    });

  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed inset-0 z-[9999] bg-[#242424] flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <div
        ref={logoRef}
        className="mb-8"
      >
        <h1
          className="text-4xl md:text-6xl font-bold text-indigo-400"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.08em' }}
        >
          SHUBHAM CHEDE
        </h1>
      </div>

      {/* Loading text */}
      <div
        ref={textRef}
        className="mb-8"
      >
        <p
          className="text-gray-400 text-lg"
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          Loading portfolio...
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
        />
      </div>

      {/* Animated dots */}
      <div className="flex space-x-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;