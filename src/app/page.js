'use client';
import React from 'react';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';

const Page = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/bg.jpg)' }}
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