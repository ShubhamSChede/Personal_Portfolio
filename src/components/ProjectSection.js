'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const [previewTop, setPreviewTop] = useState(0);
  const cardRefs = useRef([]);
  const [animatingCardId, setAnimatingCardId] = useState(null);
  const router = useRouter();
  
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
      id: '02',
      name: 'Roshstocks',
      description: 'A stock market analysis and portfolio management tool.',
      technologies: ['Next.js', 'Tailwind CSS','MongoDB'],
      screenshot: `/images/02.jpg`,
    },
    {
      id: '03',
      name: 'MYTRACKERY',
      description: 'A mobile app for personal tracking and productivity.',
      technologies: ['React Native', 'Express.js', 'MongoDB'],
      screenshot: `/images/Mytrakcery/mt1.jpg`,
    },
    {
      id: '06',
      name: 'Taskaholic',
      description: 'A productivity app for task management and time tracking.',
      technologies: ['Next.js', 'Supabase', 'TypeScript', 'shadcn'],
      screenshot: `/images/task/task (1).png`,
    },
  ];

  const handleProjectHover = (projectId, event) => {
    if (isMobile) return;
    
    setHoveredProject(projectId);
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    setPreviewTop(rect.top + window.scrollY);
  };

  const handleProjectLeave = () => {
    if (isMobile) return;
    setHoveredProject(null);
  };

  const handleProjectClick = (projectId) => {
    setAnimatingCardId(projectId);
    setTimeout(() => {
      router.push(`/ProjectDetails?id=${projectId}`);
    }, 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 
          className="text-[7vw] md:text-[3vw] font-extrabold text-white drop-shadow-lg tracking-widest text-center leading-none mb-2"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.12em', textShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
        >
          PROJECTS
        </h2>
        <p 
          className="text-indigo-400 text-base md:text-lg font-bold tracking-wide text-center"
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          Some of my recent work
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="glass rounded-xl overflow-hidden border border-white/10 hover:border-indigo-400/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            variants={itemVariants}
            onMouseEnter={(e) => handleProjectHover(project.id, e)}
            onMouseLeave={handleProjectLeave}
            onClick={() => handleProjectClick(project.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.screenshot}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                >
                  {project.name}
                </h3>
                <span 
                  className="text-indigo-400 text-sm font-bold"
                  style={{ fontFamily: 'var(--font-inconsolata)' }}
                >
                  {project.id}
                </span>
              </div>
              
              <p 
                className="text-gray-300 mb-4 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inconsolata)' }}
              >
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-indigo-400/20 text-indigo-400 text-xs rounded-full border border-indigo-400/30"
                    style={{ fontFamily: 'var(--font-inconsolata)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Preview (Desktop Only) */}
      {!isMobile && hoveredProject && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed z-50 pointer-events-none"
            style={{ top: previewTop + 100, right: 50 }}
          >
            <div className="glass rounded-xl p-4 border border-white/20 shadow-2xl">
              <div className="w-64 h-40 rounded-lg overflow-hidden mb-3">
                <Image
                  src={projects.find(p => p.id === hoveredProject)?.screenshot || ''}
                  alt="Preview"
                  width={256}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 
                className="text-white font-bold mb-2"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                {projects.find(p => p.id === hoveredProject)?.name}
              </h4>
              <p 
                className="text-gray-300 text-sm"
                style={{ fontFamily: 'var(--font-inconsolata)' }}
              >
                {projects.find(p => p.id === hoveredProject)?.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};

export default ProjectsSection;