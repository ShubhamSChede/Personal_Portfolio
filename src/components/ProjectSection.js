'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const [previewTop, setPreviewTop] = useState(0);
  const cardRefs = useRef([]);
  
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
  
  // Animation on scroll
  useEffect(() => {
    // Animation function
    const animateOnScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );
      
      const projectItems = document.querySelectorAll('.project-item');
      projectItems.forEach((item) => {
        observer.observe(item);
      });
      
      return () => {
        projectItems.forEach((item) => observer.unobserve(item));
      };
    };
    
    const cleanup = animateOnScroll();
    return cleanup;
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
      name: 'Roshstocks',
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
    {
      id: '05',
      name: 'Handyman',
      technologies: ['Next.js', 'MongoDB'],
      screenshot: `/images/05.png`,
    },
    {
      id: '06',
      name: 'Task-o-holic',
      technologies: ['Next.js', 'Tailwind CSS', 'ShadCN', 'Supabase'],
      screenshot: `/images/task/task (1).png`,
    }
  ];

  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
    }),
    hover: { scale: 1.02, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', zIndex: 2 },
  };
  const techTagVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
  };

  // Update preview position when hoveredProject changes
  useEffect(() => {
    if (!isMobile && hoveredProject) {
      const idx = projects.findIndex(p => p.id === hoveredProject);
      if (cardRefs.current[idx]) {
        const cardRect = cardRefs.current[idx].getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        setPreviewTop(cardRect.top - sectionRect.top - 280);
      }
    }
  }, [hoveredProject, isMobile]);

  return (
    <motion.div
      className="relative min-h-screen text-white px-4 sm:px-6 md:px-12 py-24 max-w-7xl mx-auto"
      ref={sectionRef}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex items-center mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out stack-section"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 text-blue-400 animate-pulse">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
          SELECTED PROJECTS
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Project list - Takes up full width on mobile, 3/5 on desktop */}
        <div className="lg:col-span-3 space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={el => cardRefs.current[index] = el}
              className="project-item group cursor-pointer relative p-6 rounded-xl transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
              onMouseLeave={() => !isMobile && setHoveredProject(null)}
              onClick={() => isMobile && setHoveredProject(project.id === hoveredProject ? null : project.id)}
            >
              {/* Project border that appears on hover */}
              <motion.div 
                className="absolute inset-0 rounded-xl border-2 border-blue-400/0 transition-colors duration-300"
                initial={{ borderColor: 'rgba(96, 165, 250, 0)' }}
                whileHover={{ borderColor: 'rgba(96, 165, 250, 0.2)' }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="flex items-center mb-4 opacity-60">
                <span className="font-mono text-base sm:text-xl text-blue-400">_{project.id}.</span>
              </div>
              
              <Link href={`/ProjectDetails?id=${project.id}`} className="block relative">
                <motion.h3
                  className="project-title text-4xl sm:text-6xl md:text-6xl font-bold tracking-tighter mb-6 transition-all duration-300 text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-500 group-hover:bg-clip-text drop-shadow-xl"
                  initial={{ backgroundPosition: '100%' }}
                  whileHover={{ backgroundPosition: '0%' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {project.name}
                </motion.h3>
                
                {/* Gradient underline that appears on hover */}
                <motion.div 
                  className="h-[2px] w-0 bg-gradient-to-r from-blue-400 to-green-500 mt-1"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
              
              <div className="flex flex-wrap mt-6 gap-3 sm:gap-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="text-sm px-3 py-1 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-blue-400/50 shadow-md"
                    custom={techIndex}
                    variants={techTagVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              {/* Mobile project image (shown inline) */}
              {isMobile && hoveredProject === project.id && (
                <motion.div
                  className="mt-8 h-52 sm:h-64 relative rounded-lg overflow-hidden project-image-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg blur opacity-30"></div>
                  <div className="relative rounded-lg overflow-hidden border border-blue-400/20">
                    <Image
                      src={project.screenshot}
                      alt={project.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg shadow-xl"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Fixed project image preview - Only on desktop/tablet */}
        {!isMobile && (
          <div className="hidden lg:block lg:col-span-2 relative">
            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  key={hoveredProject}
                  className="w-full h-[28rem] absolute left-0 project-preview-container flex flex-col justify-end pointer-events-none"
                  style={{ top: previewTop, zIndex: 30 }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  {/* Double layered gradient border effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 rounded-xl blur-md"
                    animate={{ 
                      opacity: [0.3, 0.5, 0.3],
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 6, 
                      ease: 'easeInOut' 
                    }}
                  />
                  
                  {/* Inner border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border border-blue-400/30 z-10"
                    animate={{ 
                      boxShadow: ['0 0 10px rgba(59, 130, 246, 0.3)', '0 0 25px rgba(59, 130, 246, 0.5)', '0 0 10px rgba(59, 130, 246, 0.3)']
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: 'easeInOut'
                    }}
                  />
                  
                  {/* Image container with glass effect */}
                  <div className="relative rounded-xl overflow-hidden backdrop-blur-sm bg-gray-900/60 h-full flex items-center justify-center p-4">
                    <Image
                      src={projects.find(p => p.id === hoveredProject).screenshot}
                      alt={projects.find(p => p.id === hoveredProject).name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-lg"
                      priority={true}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  
                  {/* Project name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <div className="text-sm text-gray-400 font-mono">_{hoveredProject}</div>
                    <div className="text-2xl font-bold text-white">
                      {projects.find(p => p.id === hoveredProject).name}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Add animation styles
const styleSheet = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.project-preview-container {
  animation: float 6s ease-in-out infinite;
}
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = styleSheet;
  document.head.appendChild(style);
}

export default ProjectsSection;