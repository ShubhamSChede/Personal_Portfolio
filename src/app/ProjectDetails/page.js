'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Loading component to use within Suspense
const LoadingComponent = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center p-4">
      <h1 className="text-2xl sm:text-4xl font-bold mb-6">Loading project details...</h1>
      <Link href="/" className="text-green-400 hover:text-green-300 underline">
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
    '01': {
      id: '01',
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
      images: ['/images/01.jpg','/images/fittrack-1.png', '/images/fittrack-2.png', '/images/fittrack-3.png', '/images/fittrack-4.png', '/images/fittrack-5.png', '/images/fittrack-6.png', '/images/fittrack-7.png', '/images/fittrack-8.png', '/images/fittrack-9.png']
    },
    '02': {
      id: '02',
      name: 'Wedding Invites Business Website',
      fullName: 'Wedding Invites Business Website',
      description: 'A full-stack website for a wedding invites business with an admin panel for managing categories and reviews.',
      technologies: ['Next.js', 'Tailwind CSS'],
      features: [
        'Sections: Home, Categories, Reviews, Terms & Conditions, Order Process',
        'Password-protected Admin Panel for managing categories and reviews',
        'Responsive and modern UI for enhanced user experience'
      ],
      year: '2025',
      link: 'https://roshstocks.vercel.app/',
      github: 'https://github.com/ShubhamSChede/Roshstocks_website',
      images: ['/images/02.jpg','/images/rosh (3).png', '/images/rosh (4).png', '/images/rosh (5).png', '/images/rosh (6).png', '/images/rosh (7).png', '/images/rosh (8).png', '/images/rosh (9).png', '/images/rosh (10).png', '/images/rosh (11).png', '/images/rosh (1).png', '/images/rosh (2).png']
    },
    '03': {
      id: '03',
      name: 'MYTRACKERY',
      fullName: 'MYTRACKERY - Personal Finance & Growth Tracker',
      description: 'A mobile application for expense tracking and personal growth management.',
      technologies: ['React Native', 'Firebase', 'PostgreSQL'],
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
      images: ['/images/03.jpg','/images/Mytrakcery/mt1.jpg', '/images/Mytrakcery/mt2.jpg', '/images/Mytrakcery/mt3.jpg', '/images/Mytrakcery/mt4.jpg', '/images/Mytrakcery/mt5.jpg', '/images/Mytrakcery/mt6.jpg', '/images/Mytrakcery/mt7.jpg', '/images/Mytrakcery/mt8.jpg', '/images/Mytrakcery/mt9.jpg', '/images/Mytrakcery/mt10.jpg', '/images/Mytrakcery/mt11.jpg', '/images/Mytrakcery/mt12.jpg', '/images/Mytrakcery/mt13.jpg', '/images/Mytrakcery/mt14.jpg', '/images/Mytrakcery/mt15.jpg', '/images/Mytrakcery/mt16.jpg',]
    },
    '04': {
      id: '04',
      name: 'TECHNIX 2025',
      fullName: 'TECHNIX 2025 - Technical Event Website',
      description: 'A responsive website for our department\'s technical event, TECH NIX 2025, with a Squid Game-themed UI.  ( under development )',
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
      images: ['/images/04.jpg','/images/t1 (1).png', '/images/t1 (2).png', '/images/t1 (3).png', '/images/t1 (4).png']
    },
    
     '05' : {
      id: '05',
      name: 'Handyman Aggregation System',
      fullName: 'Handyman Aggregation System - A platform for connecting customers with local handyman services.',
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
      images: ['/images/05.png','/images/handyman-1.png', '/images/handyman-2.png', '/images/handyman-3.png', '/images/handyman-4.png',  '/images/handyman-6.png', '/images/handyman-7.png', 
        '/images/handyman-8.png', '/images/handyman-10.jpeg', 
        '/images/handyman-11.png', '/images/handyman-12.png', '/images/handyman-13.png',
        '/images/handyman-14.png'
      ]
    }
  };

  useEffect(() => {
    if (id && projectsData[id]) {
      setProject(projectsData[id]);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center p-4">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6">Loading project details...</h1>
          <Link href="/" className="text-green-400 hover:text-green-300 underline">
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
      className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 py-8 sm:py-16 max-w-7xl mx-auto"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      <Link 
        href="/#projects" 
        className="inline-flex items-center text-green-600 hover:text-green-300 mb-8 sm:mb-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      <motion.div className="flex items-center mb-4 sm:mb-6 opacity-60" variants={fadeInUp}>
        <span className="font-mono text-base sm:text-xl text-blue-400">_{project.id}.</span>
      </motion.div>
      
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 mb-3 sm:mb-4 drop-shadow-xl"
        variants={fadeInUp}
      >
        {project.name}
      </motion.h1>
      
      <motion.h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-gray-300" variants={fadeInUp}>
        {project.fullName}
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-12 lg:mb-16">
        <div className="lg:col-span-2">
          <motion.p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8" variants={fadeInUp}>
            {project.description}
          </motion.p>
          
          <motion.h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4" variants={fadeInUp}>Key Features</motion.h3>
          <motion.ul className="list-disc pl-5 mb-6 sm:mb-8 space-y-1 sm:space-y-2" variants={fadeInUp}>
            {project.features.map((feature, index) => (
              <motion.li key={index} className="text-base sm:text-lg text-gray-300" variants={fadeInUp}>{feature}</motion.li>
            ))}
          </motion.ul>
          
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="text-sm sm:text-base px-3 py-1 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-blue-400/50 shadow-md"
                custom={index}
                variants={techTagVariant}
                initial="hidden"
                animate="visible"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <motion.div className="mb-6 sm:mb-8" variants={fadeInUp}>
            <span className="text-gray-400">Year: </span>
            <span className="text-white">{project.year}</span>
          </motion.div>
          
          <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center border border-green-600 text-green-500 hover:bg-green-600/10 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-300"
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
              className="inline-flex items-center border border-purple-500 text-purple-400 hover:bg-purple-600/10 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-300"
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
            <motion.div className="relative h-60 sm:h-80 w-full rounded-lg shadow-xl mb-6 overflow-hidden bg-gradient-to-br from-blue-400/30 via-purple-500/20 to-green-400/20 backdrop-blur-lg border border-blue-400/20" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <Image 
                src={project.images[0]} // Use the first image directly from the array
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
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Project Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-green-400/10 border border-blue-400/10"
              custom={index}
              variants={galleryImgVariant}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
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
      <motion.div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800" variants={fadeInUp}>
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-green-600 hover:text-green-300 mb-4 sm:mb-0"
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
            className="inline-flex items-center text-green-600 hover:text-green-300"
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