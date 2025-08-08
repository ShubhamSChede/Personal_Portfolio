'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const academicProjects = [
  {
    id: 1,
    title: "Mosaic Generator",
    semester: "Semester 6",
    subject: "Image Processing & Vision Project",
    description: "A comprehensive mosaic generation system that creates artistic mosaics from RGB images using dynamic color mapping and various visual effect filters.",
    objectives: [
      "Color Mosaic Generation with RGB images through dynamic color mapping",
      "Fixed Block Size (16×16) for balanced resolution suitable for most images", 
      "Visual Effect Filters including sepia, vintage, pop art for artistic enhancement",
      "Quality Metrics evaluation using SSIM, MSE, and PSNR for numerical fidelity assessment",
      "Step-by-Step Processing Workflow: Upload → Preprocess → Generate → Enhance",
      "Job Status Tracking with real-time progress updates and output management"
    ],
    techStack: {
      backend: ["Python 3.6+", "Flask", "Flask-CORS", "NumPy", "Pillow (PIL)", "OpenCV (cv2)", "scikit-image", "matplotlib"],
      frontend: ["Next.js", "Tailwind CSS", "React Hooks", "Fetch API"]
    },
    reportLink: "/IPV_PROJECT_REPORT.pdf",
    images: [
      "/images/careerpath/mos (1).png",
      "/images/careerpath/mos (2).png", 
      "/images/careerpath/mos (3).png",
      "/images/careerpath/mos (4).png"
    ]
  },
  {
    id: 2,
    title: "Project 2",
    semester: "Semester 7",
    subject: "Coming Soon",
    description: "Academic project details will be added soon.",
    objectives: ["Coming Soon"],
    techStack: {
      backend: ["TBD"],
      frontend: ["TBD"]
    },
    reportLink: "#",
    images: ["/images/placeholder.jpg"]
  },
  {
    id: 3,
    title: "Project 3",
    semester: "Semester 8",
    subject: "Coming Soon", 
    description: "Academic project details will be added soon.",
    objectives: ["Coming Soon"],
    techStack: {
      backend: ["TBD"],
      frontend: ["TBD"]
    },
    reportLink: "#",
    images: ["/images/placeholder.jpg"]
  }
];

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AcademicSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [selectedProject, setSelectedProject] = useState(0);
  const sectionRef = useRef(null);

  // Initialize image indices for all projects
  useEffect(() => {
    const initialIndices = {};
    academicProjects.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, []);

  // Auto-slide images for each project
  useEffect(() => {
    const intervals = {};
    
    academicProjects.forEach(project => {
      intervals[project.id] = setInterval(() => {
        setCurrentImageIndex(prev => ({
          ...prev,
          [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
        }));
      }, 3000 + (project.id * 500)); // Stagger the intervals
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.fromTo(section.querySelector('h2'),
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate project cards
      const cards = section.querySelectorAll('.project-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2
          className="text-[7vw] md:text-[3vw] font-extrabold text-indigo-400 drop-shadow-lg tracking-widest text-center leading-none mb-4"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.12em', textShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
        >
          ACADEMIC PROJECTS
        </h2>
        <motion.span
          className="text-gray-400 font-inconsolata text-sm md:text-base font-medium block mb-6"
          style={{ fontFamily: 'var(--font-inconsolata)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          University coursework and research projects
        </motion.span>

        {/* Project Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {academicProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedProject === index
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'glass text-indigo-400 hover:text-white hover:bg-indigo-500/20'
              }`}
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Project Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="project-card"
        >
          {selectedProject < academicProjects.length && (
            <>
              {/* Top Section: Project Header & Image */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-8">
              {/* Left: Project Header (1/3) */}
              <div className="lg:col-span-1 space-y-4">
                <div className="glass rounded-xl p-6">
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                  >
                    {academicProjects[selectedProject].title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span
                      className="text-indigo-400 text-sm font-semibold px-3 py-1 glass rounded-full"
                      style={{ fontFamily: 'var(--font-inconsolata)' }}
                    >
                      {academicProjects[selectedProject].semester}
                    </span>
                    <span
                      className="text-purple-400 text-sm font-semibold px-3 py-1 glass rounded-full"
                      style={{ fontFamily: 'var(--font-inconsolata)' }}
                    >
                      {academicProjects[selectedProject].subject}
                    </span>
                  </div>
                  <p
                    className="text-gray-300 text-sm md:text-base leading-relaxed mb-6"
                    style={{ fontFamily: 'var(--font-inconsolata)' }}
                  >
                    {academicProjects[selectedProject].description}
                  </p>

                  {/* View Report Button */}
                  {academicProjects[selectedProject].reportLink !== "#" && (
                    <div className="flex justify-center">
                      <a
                        href={academicProjects[selectedProject].reportLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 glass text-white hover:text-white hover:bg-indigo-500/20 transition-all duration-300 rounded-lg font-semibold hover:scale-105 transform"
                        style={{ fontFamily: 'var(--font-inconsolata)' }}
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Project Report
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Image Slider (2/3) */}
              <div className="lg:col-span-2">
                <div className="overflow-hidden">
                  <div className="relative h-64 md:h-72 lg:h-96 rounded-lg overflow-hidden bg-gray-800 p-4">
                    {academicProjects[selectedProject].images[0] !== "/images/placeholder.jpg" ? (
                      <>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentImageIndex[academicProjects[selectedProject].id] || 0}
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -300 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-4"
                          >
                            <Image
                              src={academicProjects[selectedProject].images[currentImageIndex[academicProjects[selectedProject].id] || 0]}
                              alt={`${academicProjects[selectedProject].title} - Image ${(currentImageIndex[academicProjects[selectedProject].id] || 0) + 1}`}
                              fill
                              className="object-contain rounded-lg"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 60vw"
                            />
                          </motion.div>
                        </AnimatePresence>

                        {/* Navigation Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {academicProjects[selectedProject].images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(prev => ({
                                ...prev,
                                [academicProjects[selectedProject].id]: index
                              }))}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === (currentImageIndex[academicProjects[selectedProject].id] || 0)
                                  ? 'bg-indigo-400 scale-110'
                                  : 'bg-white/30 hover:bg-white/50'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                          onClick={() => {
                            const currentIdx = currentImageIndex[academicProjects[selectedProject].id] || 0;
                            const newIdx = currentIdx === 0 ? academicProjects[selectedProject].images.length - 1 : currentIdx - 1;
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [academicProjects[selectedProject].id]: newIdx
                            }));
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-indigo-400 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            const currentIdx = currentImageIndex[academicProjects[selectedProject].id] || 0;
                            const newIdx = (currentIdx + 1) % academicProjects[selectedProject].images.length;
                            setCurrentImageIndex(prev => ({
                              ...prev,
                              [academicProjects[selectedProject].id]: newIdx
                            }));
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:text-indigo-400 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                            Project images coming soon
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Objectives & Tech Stack */}
            {(academicProjects[selectedProject].objectives[0] !== "Coming Soon" || 
              academicProjects[selectedProject].techStack.backend[0] !== "TBD") && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Objectives */}
                {academicProjects[selectedProject].objectives[0] !== "Coming Soon" && (
                  <div className="glass rounded-xl p-6">
                    <h4
                      className="text-lg md:text-xl font-bold text-indigo-400 mb-4"
                      style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                    >
                      PROJECT OBJECTIVES
                    </h4>
                                         <ul className="space-y-3">
                       {academicProjects[selectedProject].objectives.map((objective, index) => (
                         <li
                           key={index}
                           className="flex items-start space-x-3"
                         >
                           <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                           <p
                             className="text-gray-300 text-sm md:text-base leading-relaxed"
                             style={{ fontFamily: 'var(--font-inconsolata)' }}
                           >
                             {objective}
                           </p>
                         </li>
                       ))}
                     </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {academicProjects[selectedProject].techStack.backend[0] !== "TBD" && (
                  <div className="glass rounded-xl p-6">
                    <h4
                      className="text-lg md:text-xl font-bold text-indigo-400 mb-4"
                      style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                    >
                      TECH STACK
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <span
                          className="text-purple-400 font-semibold text-sm mb-2 block"
                          style={{ fontFamily: 'var(--font-inconsolata)' }}
                        >
                          Backend:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {academicProjects[selectedProject].techStack.backend.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30"
                              style={{ fontFamily: 'var(--font-inconsolata)' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span
                          className="text-purple-400 font-semibold text-sm mb-2 block"
                          style={{ fontFamily: 'var(--font-inconsolata)' }}
                        >
                          Frontend:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {academicProjects[selectedProject].techStack.frontend.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30"
                              style={{ fontFamily: 'var(--font-inconsolata)' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}