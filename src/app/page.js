'use client';
import React, { useEffect, useRef } from 'react';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';

const Page = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4
const Page = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video 
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-20" 
        src="https://res.cloudinary.com/drwljhedb/video/upload/v1741360926/geuaxnnj4oqv0hngelbf.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 pt-24">
        <div id="about" className="py-12">
          <AboutMe />
        </div>
        <div id="tech" className="py-12">
          <TechStack />
        </div>
        <div id="projects" className="py-12">
          <ProjectSection />
        </div>
        <div id="contact" className="py-12">
          <ContactMe />
        </div>
      </div>
    </div>
  );
};;
    }
  }, []);

  return (
    <div className="relative w-full">
      {/* Background Video */}
      <video 
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-20" 
        src="https://res.cloudinary.com/drwljhedb/video/upload/v1741360926/geuaxnnj4oqv0hngelbf.mp4" 
        autoPlay 
        loop 
        muted 
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