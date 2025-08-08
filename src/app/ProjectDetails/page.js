'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Loading component to use within Suspense
const LoadingComponent = () => (
  <div className="min-h-screen bg-[#242424] text-white flex items-center justify-center">
    <div className="text-center p-4">
      <h1 
        className="text-2xl sm:text-4xl font-bold mb-6"
        style={{ fontFamily: 'var(--font-bebas)' }}
      >
        Loading project details...
      </h1>
      <Link 
        href="/" 
        className="text-indigo-400 hover:text-indigo-300 underline"
        style={{ fontFamily: 'var(--font-inconsolata)' }}
      >
        Back to Projects
      </Link>
    </div>
  </div>
);

// ProjectContent component that uses useSearchParams
const ProjectContent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [project, setProject] = useState(null);

  const projectsData = {
     '47293': {
       id: '47293',
      name: 'FitTrack',
      fullName: 'FitTrack - Comprehensive Fitness Tracker',
      description: 'A fitness tracking application with real-time insights and an intuitive dashboard.',
      technologies: ['Next.js', 'Express.js', 'MongoDB'],
      features: [
        'User profile management with BMI calculation',
        'Fitness dashboard with daily steps, active minutes, and calories burned',
        'Exercise tracking with workout distribution visualization',
        'Food logging with automatic protein count calculation',
        'Sleep tracking with trend visualization',
        'Community chatroom using Socket.io',
        'Gamification features with badge rewards',
        'Two-factor authentication (2FA)',
        'Light/dark mode for UI customization'
      ],
      year: '2025',
      link: 'https://fitness-tracker-seven-lime.vercel.app/',
      github: 'https://github.com/ShubhamSChede/FitTrack',
      images: [ '/images/01.jpg', '/images/fittrack-1.png', '/images/fittrack-2.png', '/images/fittrack-3.png', '/images/fittrack-4.png', '/images/fittrack-5.png', '/images/fittrack-6.png', '/images/fittrack-7.png', '/images/fittrack-8.png', '/images/fittrack-9.png']
    },
         '85617': {
       id: '85617',
       name: 'Roshstocks',
      fullName: 'Wedding Invitation Website',
      description: 'A stock market analysis and portfolio management tool with real-time data and insights.',
      technologies: ['Next.js', 'Tailwind CSS','MongoDB'],
      features: [
        'Developed a full-stack website for a wedding invites business, featuring 4+ sections like Home, Categories, Reviews, and Process.',
        'Designed a user-friendly interface to showcase dynamic categories and client testimonials.',
        'Implemented a password-protected Admin Panel for securely managing categories, including uploading and editing invites.',
        'Enabled admin control over moderating user reviews to maintain quality and authenticity across the platform.'
      ],
      year: '2025',
      link: 'https://roshstocks.vercel.app/',
      github: 'https://github.com/ShubhamSChede/Roshstocks_website',
      images: ['/images/02.jpg','/images/rosh (1).png', '/images/rosh (2).png', '/images/rosh (3).png', '/images/rosh (4).png', '/images/rosh (5).png', '/images/rosh (6).png', '/images/rosh (7).png', '/images/rosh (8).png', '/images/rosh (9).png', '/images/rosh (10).png', '/images/rosh (11).png']
    },
         '92148': {
       id: '92148',
      name: 'MYTRACKERY',
      fullName: 'MYTRACKERY - Personal Finance & Growth Tracker',
      description: 'A mobile application for expense tracking and personal growth management.',
      technologies: ['React Native', 'Express.js', 'MongoDB'],
      features: [
        'Categorized expense tracking with add, view, and delete functionality',
        'Visual spending insights with pie charts and bar graphs',
        'Monthly journal for tracking mood, productivity, and health',
        'Yearly financial statistics and spending categories',
        'PDF export for financial reports',
        'Automatic login/logout and recent expenses snapshot'
      ],
      year: '2025',
      link: 'https://my-trackery-website.vercel.app/',
      github: 'https://github.com/ShubhamSChede/MyTrackery_Fullstack',
      images: ['/images/Mytrakcery/mt1.jpg', '/images/Mytrakcery/mt2.jpg', '/images/Mytrakcery/mt3.jpg', '/images/Mytrakcery/mt4.jpg', '/images/Mytrakcery/mt5.jpg', '/images/Mytrakcery/mt6.jpg', '/images/Mytrakcery/mt7.jpg', '/images/Mytrakcery/mt8.jpg', '/images/Mytrakcery/mt9.jpg', '/images/Mytrakcery/mt10.jpg', '/images/Mytrakcery/mt11.jpg', '/images/Mytrakcery/mt12.jpg', '/images/Mytrakcery/mt13.jpg', '/images/Mytrakcery/mt14.jpg', '/images/Mytrakcery/mt15.jpg', '/images/Mytrakcery/mt16.jpg']
    },
         '63842': {
       id: '63842',
      name: 'TECHNIX 2025',
      fullName: 'TECHNIX 2025 - Technical Event Website',
      description: 'A responsive website for our department\'s technical event, TECH NIX 2025, with a Squid Game-themed UI.',
      technologies: ['Next.js'],
      features: [
        'Fast performance and seamless navigation',
        'Squid Game-themed UI with interactive elements',
        'Attractive and dynamic UI design',
        'Mobile responsiveness for accessibility',
        'Animations and visual effects for enhanced interaction'
      ],
      year: '2025',
      link: 'https://technix-2025.vercel.app/',
      github: 'https://github.com/ShubhamSChede/Technix_2025',
      images: ['/images/04.jpg', '/images/t1 (1).png', '/images/t1 (2).png', '/images/t1 (3).png', '/images/t1 (4).png']
    },
         '19576': {
       id: '19576',
       name: 'Handyman',
      fullName: 'Handyman Aggregation System - Service Marketplace',
      description: 'A platform for connecting customers with local handyman services.',
      technologies: ['Next.js', 'MongoDB'],
      features: [
        'AI-Powered Real-Time Matching – Our recommendation system suggests the best service provider based on availability, reviews, expertise, and distance.',
 'Freedom of Choice – Unlike other platforms, users can handpick their preferred service provider instead of being randomly assigned.',
 'Seamless Booking & Scheduling – Instant and scheduled bookings with real-time availability.',
'Auto Location Tracking – Detects user location for precise service matching.',
 'Vendor Empowerment – Service providers have full control over their working hours and bookings.',
'Secure Transactions – Payments via UPI, credit/debit cards, and wallets for a hassle-free experience.',
 'Localized Services – Tailored to Goa\'s unique market, with the potential to scale beyond.'
      ],
      year: '2025',
      link: 'https://handyman-aggregation-system.vercel.app/',
      github: 'https://github.com/ShubhamSChede/Handyman',
      images: ['/images/05.png','/images/handyman-1.png', '/images/handyman-2.png', '/images/handyman-3.png', '/images/handyman-4.png', '/images/handyman-6.png', '/images/handyman-7.png', '/images/handyman-8.png', '/images/handyman-10.jpeg', '/images/handyman-11.png', '/images/handyman-12.png', '/images/handyman-13.png', '/images/handyman-14.png']
    },
         '74329': {
       id: '74329',
      name: 'Taskaholic',
      fullName: 'Taskaholic - Secure Task Management Platform',
      description: 'Taskaholic is a powerful, secure, and intuitive task management platform designed to help individuals and teams stay organized and productive.',
      technologies: ['Next.js', 'Supabase', 'TypeScript', 'shadcn'],
      features: [
        '🔐 Authentication & Security: Secure login with two-factor authentication (2FA)',
        '📊 Dashboard: Overview of total tasks, completion rate, task status, recent tasks',
        '📝 My Tasks: Create and manage tasks with title, description, due date, priority, tags',
        '👥 My Organizations: Join/create collaborative groups with task templates',
        '📈 Statistics: Visual insights into task completion rates and trends',
        '🙍‍♂ My Profile: Update personal details including full name and avatar URL',
        '🔄 Task Types: Support for both personal tasks and organization-wide collaborative tasks',
        '✅ Create Task Features: Add tasks with priority levels and customizable tags',
        '🎯 Task Management: Sort, organize, and track tasks with comprehensive filtering'
      ],
      year: '2025',
      link: 'https://task-o-holic.vercel.app/',
      github: 'https://github.com/ShubhamSChede/Task-o-holic',
      images: ['/images/task/task (1).png', '/images/task/task (2).png', '/images/task/task (3).png', '/images/task/task (4).png', '/images/task/task (5).png', '/images/task/task (6).png', '/images/task/task (7).png', '/images/task/task (8).png', '/images/task/task (9).png', '/images/task/task (10).png', '/images/task/task (11).png', '/images/task/task (12).png']
    },
         '50864': {
       id: '50864',
       name: 'CareerConnection',
      fullName: 'CareerConnection - AI-Powered Job Platform',
      description: 'A comprehensive job platform connecting students with companies through AI-powered screening and preparation tools.',
      technologies: ['Next.js', 'Express.js', 'MongoDB', 'Gemini API'],
      features: [
        'Secure Authentication System',
        'Resume Scanner: Upload PDF and auto-parse data',
        'Aptitude Prep with fresh questions via Gemini API',
        'Custom Code Compiler - mini LeetCode with test cases',
        'HR Interview Simulator - AI feedback and scoring',
        'Job Listings - browse and apply directly',
        'Preparation Material Section - PDFs and study guides',
        'Admin Dashboard for job posting',
        'Aptitude-based screening with recruiter routing'
      ],
      year: '2025',
      link: 'https://careerconnections.vercel.app/',
      github: 'https://github.com/ShubhamSChede/CareerConnection',
      images: ['/images/cc/cc1.jpeg', '/images/cc/cc2.jpeg', '/images/cc/cc3.jpeg', '/images/cc/cc4.jpeg', '/images/cc/cc5.jpeg', '/images/cc/cc6.jpeg', '/images/cc/cc7.jpeg', '/images/cc/cc8.jpeg', '/images/cc/cc9.jpeg', '/images/cc/cc10.jpeg', '/images/cc/cc11.jpeg', '/images/cc/cc12.jpeg', '/images/cc/cc13.jpeg']
    },
    '39485': {
      id: '39485',
      name: 'Career Path',
      fullName: 'Career Path - AI-Powered Career Development Platform',
      description: 'A comprehensive career development platform with AI-driven insights, interactive learning paths, and professional networking features.',
      technologies: ['Next.js', 'React', 'MongoDB', 'Mongoose', 'Supabase', 'Google Gemini AI', 'Three.js', 'GSAP', 'TailwindCSS', 'Chart.js', 'React-Leaflet', 'Bootstrap'],
      features: [
        'AI-powered career assessment test with personality-based recommendations',
        'Interactive job marketplace with AI-driven job matching and recommendations',
        'Real-time interview simulator with speech recognition and AI feedback',
        'Gamified learning roadmaps (Super Mario themed) with video resources and quizzes',
        'Professional learning paths with structured modules and practice questions',
        'Interactive job market map with geographical visualization using Leaflet',
        'AI-powered resource finder with educational content recommendations',
        'User profile management with skills, qualifications, and interests tracking',
        'Meeting scheduler for career counseling sessions',
        'Saved jobs functionality with personalized dashboard',
        'Comprehensive authentication system with secure login/signup',
        'Three.js animated landing page with particle effects and GSAP animations',
        'Responsive design with Bootstrap and TailwindCSS integration',
        'Career path visualization with detailed insights and recommendations'
      ],
      year: '2025',
      link: 'https://careerpath-platform.vercel.app/',
      github: 'https://github.com/ShubhamSChede/CareerPath',
      images: ['/images/careerpath/cp (1).png', '/images/careerpath/cp (2).png', '/images/careerpath/cp (3).png', '/images/careerpath/cp (4).png', '/images/careerpath/cp (5).png', '/images/careerpath/cp (6).png', '/images/careerpath/cp (7).png', '/images/careerpath/cp (8).png', '/images/careerpath/cp (9).png', '/images/careerpath/cp (10).png', '/images/careerpath/cp (11).png', '/images/careerpath/cp (12).png', '/images/careerpath/cp (13).png']
    },
  };

  useEffect(() => {
    if (id && projectsData[id]) {
      setProject(projectsData[id]);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#242424] text-white flex items-center justify-center">
        <div className="text-center p-4">
          <h1 
            className="text-2xl sm:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Loading project details...
          </h1>
          <Link 
            href="/" 
            className="text-indigo-400 hover:text-indigo-300 underline"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.12 } },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const techTagVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
  };
  const galleryImgVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08, duration: 0.5 } }),
  };

  return (
    <motion.div
      className="min-h-screen bg-[#242424] text-white px-4 sm:px-8 md:px-12 py-8 sm:py-16 max-w-7xl mx-auto"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      <Link 
        href="/#projects" 
        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 sm:mb-12"
        style={{ fontFamily: 'var(--font-inconsolata)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      <motion.div 
        className="flex items-center mb-4 sm:mb-6 opacity-60" 
        variants={fadeInUp}
        style={{ fontFamily: 'var(--font-inconsolata)' }}
      >
        <span className="text-base sm:text-xl text-indigo-400">_{project.id}.</span>
      </motion.div>
      
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-indigo-400 mb-4"
        variants={fadeInUp}
        style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
      >
        {project.fullName}
      </motion.h1>
      
      <motion.h2 
        className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-gray-300" 
        variants={fadeInUp}
        style={{ fontFamily: 'var(--font-inconsolata)' }}
      >
        {project.fullName}
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-12 lg:mb-16">
        <div className="lg:col-span-2">
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8" 
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            {project.description}
          </motion.p>
          
          <motion.h3 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4" 
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Key Features
          </motion.h3>
          <motion.ul 
            className="list-disc pl-5 mb-6 sm:mb-8 space-y-1 sm:space-y-2" 
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            {project.features.map((feature, index) => (
              <motion.li key={index} className="text-base sm:text-lg text-gray-300" variants={fadeInUp}>{feature}</motion.li>
            ))}
          </motion.ul>
          
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="text-sm sm:text-base px-3 py-1 glass rounded-lg border border-white/10 hover:border-indigo-400/50 transition-all duration-300"
                custom={index}
                variants={techTagVariant}
                initial="hidden"
                animate="visible"
                style={{ fontFamily: 'var(--font-inconsolata)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            className="mb-6 sm:mb-8" 
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            <span className="text-gray-400">Year: </span>
            <span className="text-white">{project.year}</span>
          </motion.div>
          
          <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center glass border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-300"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Project
            </a>
            
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center glass border border-purple-400 text-purple-400 hover:bg-purple-400/10 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-300"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View on GitHub
            </a>
          </motion.div>
        </div>
        
        {/* Featured image - moves to top on mobile, stays sticky on desktop */}
        <motion.div className="order-first lg:order-last mb-8 lg:mb-0 lg:col-span-1" variants={fadeInUp}>
          <div className="lg:sticky lg:top-24">
            <motion.div 
              className="relative h-60 sm:h-80 w-full rounded-lg shadow-xl mb-6 overflow-hidden glass border border-white/10" 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7 }}
            >
              <Image 
                src={project.images[0]}
                alt={project.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                priority={true}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Project Gallery */}
      <motion.div className="mb-12 sm:mb-16" variants={fadeInUp}>
        <h3 
          className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          Project Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg relative h-48 sm:h-56 md:h-64 glass border border-white/10"
              custom={index}
              variants={galleryImgVariant}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.25)' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Image 
                src={image} 
                alt={`${project.name} screenshot ${index + 1}`}
                fill
                style={{objectFit: 'contain'}}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Bottom navigation */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10" 
        variants={fadeInUp}
        style={{ fontFamily: 'var(--font-inconsolata)' }}
      >
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-4 sm:mb-0"
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
          All Projects
        </Link>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
          >
            Visit Live Site
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300"
          >
            View Code
            <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectDetails = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <ProjectContent />
    </Suspense>
  );
};

export default ProjectDetails;