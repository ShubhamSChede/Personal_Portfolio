'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

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
        images: ['/images/fittrack-1.png', '/images/fittrack-2.png', '/images/fittrack-3.png', '/images/fittrack-4.png', '/images/fittrack-5.png', '/images/fittrack-6.png', '/images/fittrack-7.png', '/images/fittrack-8.png', '/images/fittrack-9.png']
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
        images: ['/images/rosh (3).png', '/images/rosh (4).png', '/images/rosh (5).png', '/images/rosh (6).png', '/images/rosh (7).png', '/images/rosh (8).png', '/images/rosh (9).png', '/images/rosh (10).png', '/images/rosh (11).png', '/images/rosh (1).png', '/images/rosh (2).png']
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
        images: ['/images/Mytrakcery/mt1.jpg', '/images/Mytrakcery/mt2.jpg', '/images/Mytrakcery/mt3.jpg', '/images/Mytrakcery/mt4.jpg', '/images/Mytrakcery/mt5.jpg', '/images/Mytrakcery/mt6.jpg', '/images/Mytrakcery/mt7.jpg', '/images/Mytrakcery/mt8.jpg', '/images/Mytrakcery/mt9.jpg', '/images/Mytrakcery/mt10.jpg', '/images/Mytrakcery/mt11.jpg', '/images/Mytrakcery/mt12.jpg', '/images/Mytrakcery/mt13.jpg', '/images/Mytrakcery/mt14.jpg', '/images/Mytrakcery/mt15.jpg', '/images/Mytrakcery/mt16.jpg',]
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
        images: ['/images/t1 (1).png', '/images/t1 (2).png', '/images/t1 (3).png', '/images/t1 (4).png']
    },
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

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 py-8 sm:py-16 max-w-7xl mx-auto">
      <Link 
        href="/#projects" 
        className="inline-flex items-center text-green-600 hover:text-green-300 mb-8 sm:mb-12"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      <div className="flex items-center mb-4 sm:mb-6 opacity-60">
        <span className="font-mono text-base sm:text-xl">_{project.id}.</span>
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-green-600 mb-3 sm:mb-4">
        {project.name}
      </h1>
      
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-gray-300">{project.fullName}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-12 lg:mb-16">
        <div className="lg:col-span-2">
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            {project.description}
          </p>
          
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Key Features</h3>
          <ul className="list-disc pl-5 mb-6 sm:mb-8 space-y-1 sm:space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-base sm:text-lg text-gray-300">{feature}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-gray-200 px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mb-6 sm:mb-8">
            <span className="text-gray-400">Year: </span>
            <span className="text-white">{project.year}</span>
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block border border-green-600 text-green-500 hover:bg-green-600/10 font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-colors duration-300"
          >
            Visit Project
          </a>
        </div>
        
        {/* Featured image - moves to top on mobile, stays sticky on desktop */}
        <div className="order-first lg:order-last mb-8 lg:mb-0 lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <div className="relative h-60 sm:h-80 w-full rounded-lg shadow-xl mb-6 overflow-hidden">
              <Image 
                src={`/images/${project.id}.jpg`} 
                alt={project.name}
                fill
                style={{objectFit: 'cover'}}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Gallery */}
      <div className="mb-12 sm:mb-16">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">Project Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {project.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg relative h-48 sm:h-56 md:h-64">
              <Image 
                src={image} 
                alt={`${project.name} screenshot ${index + 1}`}
                fill
                style={{objectFit: 'contain'}}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-green-600 hover:text-green-300 mb-4 sm:mb-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All Projects
        </Link>
        
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
      </div>
    </div>
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