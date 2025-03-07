'use client';
import React, { useEffect, useRef, useState } from 'react';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';

const Page = () => {
  const videoRef = useRef(null);
  const [videoPlayable, setVideoPlayable] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Function to check if device can play video properly
  const checkVideoCompatibility = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    // Return false for devices known to have issues
    if (isMobile && isSafari) {
      return false;
    }
    
    return true;
  };

  useEffect(() => {
    setVideoPlayable(checkVideoCompatibility());
    
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
      
      // Handle video loaded successfully
      const handleVideoLoaded = () => {
        setIsLoading(false);
      };
      
      // Handle video failed to load or play
      const handleVideoError = () => {
        console.error('Video failed to load or play');
        setVideoPlayable(false);
        setIsLoading(false);
      };
      
      // After 5 seconds, if video hasn't loaded, consider it failed
      const timeoutId = setTimeout(() => {
        if (isLoading) {
          setVideoPlayable(false);
          setIsLoading(false);
        }
      }, 5000);
      
      videoRef.current.addEventListener('loadeddata', handleVideoLoaded);
      videoRef.current.addEventListener('canplay', handleVideoLoaded);
      videoRef.current.addEventListener('error', handleVideoError);
      
      // Force video to play after loading
      videoRef.current.load();
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Play error:', error);
          setVideoPlayable(false);
        });
      }
      
      return () => {
        clearTimeout(timeoutId);
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
          videoRef.current.removeEventListener('canplay', handleVideoLoaded);
          videoRef.current.removeEventListener('error', handleVideoError);
        }
      };
    }
  }, [isLoading]);

  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Base dark background that's always present */}
      <div className="fixed top-0 left-0 w-full h-full bg-black -z-30" />
      
      {/* Static image fallback for devices that can't play video */}
      {!videoPlayable && (
        <div 
          className="fixed top-0 left-0 w-full h-full -z-20 opacity-20 bg-gradient-to-br from-gray-900 to-black"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/drwljhedb/image/upload/v1741360926/video-thumbnail.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
      {/* Video background - only shown if device is compatible */}
      {videoPlayable && (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover opacity-20" 
            src="https://res.cloudinary.com/drwljhedb/video/upload/v1741360926/geuaxnnj4oqv0hngelbf.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
          >
            <source src="https://res.cloudinary.com/drwljhedb/video/upload/v1741360926/geuaxnnj4oqv0hngelbf.mp4" type="video/mp4" />
          </video>
        </div>
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