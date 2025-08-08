'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';
import ExperienceSection from '../components/ExperienceSection';
import HackathonSection from '../components/HackathonSection';
import AcademicSection from '../components/AcademicSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import LoadingScreen from '../components/LoadingScreen';
import Head from 'next/head';

const Page = () => {
  const videoRef = useRef(null);
  const waveRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced GSAP animation for floating wave
  useEffect(() => {
    if (!waveRef.current) return;
    
    // Create a more dynamic wave animation
    const waveTl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    
    // Add multiple animations to create a more complex wave effect
    waveTl.to(waveRef.current, {
      y: "-=35",
      x: "+=15",
      rotation: 3,
      duration: 2.5,
      ease: "sine.inOut"
    })
    .to(waveRef.current, {
      y: "-=15",
      x: "-=20",
      rotation: -2,
      duration: 3,
      ease: "sine.inOut"
    })
    .to(waveRef.current, {
      y: "+=25",
      x: "+=5",
      rotation: 1,
      duration: 2.8,
      ease: "sine.inOut"
    });
    
    return () => {
      // Cleanup animation
      waveTl.kill();
    };
  }, []);

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
    <>
      <Head>
        <title>Shubham Chede | Full Stack Developer Portfolio</title>
        <meta name="description" content="Shubham Chede - Full Stack Developer specializing in Next.js, React Native, Node.js, Supabase, and modern web technologies. View portfolio, projects, and contact Shubham Chede for development opportunities." />
        <meta name="keywords" content="Shubham Chede, Full Stack Developer, Next.js, React Native, Node.js, Supabase, Tailwind, ShadCN, Portfolio, Web Developer, India, Taskaholic, FitTrack, Roshstocks, Technix, Handyman" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="author" content="Shubham Chede" />
        <meta property="og:title" content="Shubham Chede | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Shubham Chede - Full Stack Developer specializing in Next.js, React Native, Node.js, Supabase, and modern web technologies. View portfolio, projects, and contact Shubham Chede for development opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shubhamchede.tech/" />
        <meta property="og:image" content="/images/shubham2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shubham Chede | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Shubham Chede - Full Stack Developer specializing in Next.js, React Native, Node.js, Supabase, and modern web technologies. View portfolio, projects, and contact Shubham Chede for development opportunities." />
        <meta name="twitter:image" content="/images/shubham2.jpg" />
        <link rel="canonical" href="https://shubhamchede.tech/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Shubham Chede',
          url: 'https://shubhamchede.tech/',
          image: '/images/shubham2.jpg',
          sameAs: [
            'https://www.linkedin.com/in/shubham-chede-2957bb278',
            'https://github.com/ShubhamSChede',
            'https://www.instagram.com/shubham.dark/'
          ],
          jobTitle: 'Full Stack Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance'
          },
          description: 'Portfolio of Shubham Chede - Full Stack Developer, Next.js, React Native, Node.js, Supabase, Tailwind, ShadCN.'
        }) }} />
      </Head>
      
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      
      {!isLoading && (
        <div className="relative w-full min-h-screen bg-[#242424] overflow-hidden">
          {/* Custom Cursor */}
          <CustomCursor />
          
          {/* Navigation */}
          <Navbar />

        {/* Content */}
        <div className="relative z-10 pt-12">
          <div id="about">
            <AboutMe />
          </div>
          <div id="tech">
            <TechStack />
          </div>
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="hackathons">
            <HackathonSection />
          </div>
          <div id="projects">
            <ProjectSection />
          </div>
          <div id="academic">
            <AcademicSection />
          </div>
          <div id="contact">
            <ContactMe />
          </div>
          <Footer />
        </div>
        </div>
      )}
    </>
  );
};

export default Page;