'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0;
    let mouseY = 0;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Animate cursor
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out"
      });

      // Animate follower with delay
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3
      });
    };

    // Hover effects for interactive elements
    const handleHoverEnter = () => {
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(follower, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleHoverLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    return () => {
      // Restore default cursor
      document.body.style.cursor = 'auto';
      
      // Remove event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-400 rounded-full pointer-events-none z-[9999] opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference'
        }}
      />
      
      {/* Cursor follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-indigo-400/50 rounded-full pointer-events-none z-[9998] opacity-0"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default CustomCursor;