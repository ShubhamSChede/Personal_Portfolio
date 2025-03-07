'use client';
import React, { useEffect, useRef, useState } from 'react';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';

const Page = () => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Set playback rate
    video.playbackRate = 0.4;
    
    // Event listener for when video can play
    const handleCanPlay = () => {
      setVideoReady(true);
    };
    
    // Event listener for errors
    const handleError = () => {
      console.error('Video failed to load properly');
      setVideoReady(false);
    };
    
    // Add event listeners
    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);
    
    // Attempt to play the video
    video.play().catch(err => {
      console.error('Failed to play video:', err);
      setVideoReady(false);
    });
    
    // Add a timeout fallback in case the video takes too long to load
    const timeoutId = setTimeout(() => {
      if (!videoReady) {
        console.log('Video loading timeout - defaulting to black background');
        setVideoReady(false);
      }
    }, 5000); // 5 second timeout
    
    // Cleanup
    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
      clearTimeout(timeoutId);
    };
  }, [videoReady]);
  
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Video background - only shown when ready */}
      {videoReady && (
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
      )}

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