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
  }, []);

  return (
    <div className="relative w-full">
      {/* Background Fallback - shows when video isn't loaded */}
      {!videoLoaded && (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gray-900 opacity-90" />
      )}
      
      {/* Background Video */}
      <video 
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-20" 
        src="https://res.cloudinary.com/drwljhedb/video/upload/v1741360926/geuaxnnj4oqv0hngelbf.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      />

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