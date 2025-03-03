'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
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
    <div className="relative flex min-h-screen text-white p-12">
      <div className="w-full md:w-2/3">
        <div className="flex items-center mb-12">
          <div className="w-10 h-10 mr-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    fill="#FFFFFF" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold tracking-wider">SELECTED PROJECTS</h2>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-center mb-2 opacity-60">
                <span className="font-mono text-xl">_{project.id}.</span>
              </div>
              <Link href={`/ProjectDetails?id=${project.id}`}>
                <h3 className="text-8xl font-bold tracking-tighter transition-all duration-300 text-gray-600 group-hover:text-green-400">
                  {project.name}
                </h3>
              </Link>
              <div className="flex flex-wrap mt-2 gap-6 opacity-70">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {hoveredProject && (
        <div className="fixed top-1/2 right-12 transform -translate-y-1/2 w-1/3 h-96 transition-all duration-300 opacity-100">
          <div className="relative w-full h-full">
            <Image 
              src={`/images/${hoveredProject}.jpg`}
              alt={projects.find(p => p.id === hoveredProject).name} 
              fill 
              style={{objectFit: 'contain'}}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;