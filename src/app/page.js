'use client';
import React, { useEffect, useRef, useState } from 'react';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';

const Page = () => {
  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState('loading'); // 'loading', 'playing', 'error'

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
      
      // Handle successful video loading
      videoRef.current.addEventListener('playing', () => {
        setVideoStatus('playing');
        console.log('Video is playing');
      });
      
      // Handle video load errors
      videoRef.current.addEventListener('error', () => {
        setVideoStatus('error');
        console.error('Video failed to load');
      });

      // Force play attempt
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.error('Play attempt failed:', err);
          // Don't set error state here, the error event will handle it
        }
      };
      
      playVideo();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('playing', () => {});
        videoRef.current.removeEventListener('error', () => {});
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-900">
      {/* Background Video */}
      <video 
        ref={videoRef}
        className={`fixed top-0 left-0 w-full h-full object-cover -z-10 ${
          videoStatus === 'playing' ? 'opacity-20' : 'opacity-0'
        }`}
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