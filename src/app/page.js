'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import TechStack from '../components/TechStack';
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';
import Head from 'next/head';

const Page = () => {
  const videoRef = useRef(null);
  const waveRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

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
        <meta name="description" content="Portfolio of Shubham Chede - Full Stack Developer, Next.js, React Native, Node.js, Supabase, Tailwind, ShadCN. Explore projects, skills, and contact info." />
        <meta name="keywords" content="Shubham Chede, Full Stack Developer, Next.js, React Native, Node.js, Supabase, Tailwind, ShadCN, Portfolio, Web Developer, India, Taskaholic, FitTrack, Roshstocks, Technix, Handyman" />
        <meta name="author" content="Shubham Chede" />
        <meta property="og:title" content="Shubham Chede | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Shubham Chede - Full Stack Developer, Next.js, React Native, Node.js, Supabase, Tailwind, ShadCN. Explore projects, skills, and contact info." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shubhamchede.tech/" />
        <meta property="og:image" content="/images/shubham2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shubham Chede | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio of Shubham Chede - Full Stack Developer, Next.js, React Native, Node.js, Supabase, Tailwind, ShadCN. Explore projects, skills, and contact info." />
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
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Wave animation */}
        <div 
          ref={waveRef}
          className="fixed w-full h-[400px] left-0 bottom-[-160px] -z-5 opacity-10"
        >
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
            <path 
              fill="#4F46E5" 
              fillOpacity="0.8"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
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
        <div className="relative z-10 pt-12">
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
    </>
  );
};

export default Page;