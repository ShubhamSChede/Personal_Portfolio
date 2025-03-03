'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const ProjectDetails = () => {
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
        images: ['/projects/fittrack-1.jpg', '/projects/fittrack-2.jpg', '/projects/fittrack-3.jpg']
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
        images: ['/projects/wedding-1.jpg', '/projects/wedding-2.jpg', '/projects/wedding-3.jpg']
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
        images: ['/projects/mytrackery-1.jpg', '/projects/mytrackery-2.jpg', '/projects/mytrackery-3.jpg']
    },
    '04': {
        id: '04',
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
        images: ['/projects/technix-1.jpg', '/projects/technix-2.jpg', '/projects/technix-3.jpg']
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
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Loading project details...</h1>
          <Link href="/" className="text-green-400 hover:text-green-300 underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-12 py-16">
      <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      <div className="flex items-center mb-6 opacity-60">
        <span className="font-mono text-xl">_{project.id}.</span>
      </div>
      
      <h1 className="text-7xl font-bold tracking-tighter text-green-400 mb-4">
        {project.name}
      </h1>
      
      <h2 className="text-3xl mb-8 text-gray-300">{project.fullName}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
        <div className="lg:col-span-2">
          <p className="text-xl text-gray-300 mb-8">
            {project.description}
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-lg text-gray-300">{feature}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mb-8">
            <span className="text-gray-400">Year: </span>
            <span className="text-white">{project.year}</span>
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Visit Project
          </a>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="relative h-80 w-full rounded-lg shadow-xl mb-6 overflow-hidden">
              <Image 
                src={`/images/${project.id}.jpg`} 
                alt={project.name}
                fill
                style={{objectFit: 'contain'}}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">Project Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg relative h-64">
              <Image 
                src={image} 
                alt={`${project.name} screenshot ${index + 1}`}
                fill
                style={{objectFit: 'cover'}}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;