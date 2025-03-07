'use client';
import React, { useEffect, useRef, useState } from 'react';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';

const Page = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
      
      // Add event listeners to handle video loading
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
      });
      
      videoRef.current.addEventListener('error', () => {
        console.error('Video failed to load');
        setVideoLoaded(false);
      });
    }

    // Force re-render optimization for iOS and Safari
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current) {
        videoRef.current.play().catch(e => console.error('Play error:', e));
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="relative w-full bg-black min-h-screen">
      {/* Fixed dark overlay to ensure consistent background */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80 -z-20" />
      
      {/* Background Video with wrapper */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Additional dark backdrop that stays regardless of video state */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{ 
            filter: 'brightness(0.4) contrast(1.2)',
            mixBlendMode: 'overlay'
          }}
          src="https://res.cloudinary.com/drwljhedb/video/upload/v1741360926/geuaxnnj4oqv0hngelbf.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 pt-24">
        <div id="about">
          <AboutMe />
        </div>
        <div id="tech">
          <TechStack />
        </div>
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="contact">
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default Page;