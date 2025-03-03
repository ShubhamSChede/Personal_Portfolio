'use client';
import React, { useEffect, useRef } from 'react';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';

const Page = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Reduce video playback speed by 50%
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/backgroundspace.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
      </div>
    </div>
  );
};

export default Page;