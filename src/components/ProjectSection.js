'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const projects = [
    {
      id: '01',
      name: 'FitTrack',
      technologies: ['Next.js', 'Express.js', 'MongoDB'],
      screenshot: `/images/01.jpg`,
    },
    {
      id: '02',
      name: 'Wedding Invites Business Website',
      technologies: ['Next.js', 'Tailwind CSS','MongoDB'],
      screenshot: `/images/02.jpg`,
    },
    {
      id: '03',
      name: 'MYTRACKERY',
      technologies: ['React Native', 'Express.js', 'MongoDB'],
      screenshot: `/images/03.jpg`,
    },
    {
      id: '04',
      name: 'TECHNIX 2025',
      technologies: ['Next.js'],
      screenshot: `/images/04.jpg`,
    },
  ];

  return (
    <div className="relative min-h-screen text-white px-4 sm:px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="flex items-center mb-12">
        <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  fill="#FFFFFF" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider">SELECTED PROJECTS</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Project list - Takes up full width on mobile, 3/5 on desktop */}
        <div className="lg:col-span-3 space-y-12 sm:space-y-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
              onMouseLeave={() => !isMobile && setHoveredProject(null)}
              onClick={() => isMobile && setHoveredProject(project.id === hoveredProject ? null : project.id)}
            >
              <div className="flex items-center mb-2 opacity-60">
                <span className="font-mono text-base sm:text-xl">_{project.id}.</span>
              </div>
              <Link href={`/ProjectDetails?id=${project.id}`}>
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter transition-all duration-300 text-gray-600  group-hover:text-green-500 group-hover:bg-clip-text">
                  {project.name}
                </h3>
              </Link>
              <div className="flex flex-wrap mt-2 gap-3 sm:gap-6 opacity-70">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-base sm:text-lg">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Mobile project image (shown inline) */}
              {isMobile && hoveredProject === project.id && (
                <div className="mt-4 h-52 sm:h-64 relative rounded-lg overflow-hidden">
                  <Image 
                    src={`/images/${project.id}.jpg`}
                    alt={project.name}
                    fill
                    style={{objectFit: 'cover'}}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Fixed project image preview - Only on desktop/tablet */}
        {!isMobile && (
          <div className="hidden lg:block lg:col-span-2 relative">
            <div className="sticky top-32">
              {hoveredProject && (
                <div className="w-full h-96 md:h-[28rem] relative transition-all duration-300 opacity-100">
                  <Image 
                    src={`/images/${hoveredProject}.jpg`}
                    alt={projects.find(p => p.id === hoveredProject).name} 
                    fill 
                    style={{objectFit: 'contain'}}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;