'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    title: "CricScorers",
    semester: "Semester 5",
    subject: "DBMS",
    description: "CricScorer addresses the common challenges of cricket scorekeeping by offering a reliable, user-friendly, and comprehensive digital solution. With real-time scoring, seamless data storage, cross-platform compatibility, and a range of cricket-specific features, CricScorer streamlines the scoring process for match officials, players, and spectators alike.",
    objectives: [
      "Scorer authentication with firstname, lastname, email, and password",
      "Match setup with details including overs per match, overs per bowler, location, date, and ball type",
      "Toss result recording with winning team and decision to bat or bowl first",
      "User-friendly scoring interface for ball-by-ball score updates",
      "Live score tracking accessible to spectators in real time",
      "Player data storage with stats and performance history",
      "Detailed match results and scorecards generation at the end of the game"
    ],
    techStack: {
      backend: ["Express JS", "Node JS", "PostgreSQL"],
      frontend: ["React Native", "Expo", "Typescript"]
    },
    reportLink: "./Final Report cricscorer.pdf",
    images: ["/images/cric/1.jpg", "/images/cric/cric (3).jpg", "/images/cric/cric (8).jpg","/images/cric/cric (12).jpg",  "/images/cric/cric (20).jpg" , "/images/cric/cric (22).jpg"  ]
  },
  {
    id: 3,
    title: "Final year project",
    semester: "Semester 7-8",
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

export default function AcademicSection() {
  const [expandedProject, setExpandedProject] = useState(academicProjects[0].id);
  const [imageIndex, setImageIndex] = useState({});

  useEffect(() => {
    const initial = {};
    academicProjects.forEach(project => {
      initial[project.id] = 0;
    });
    setImageIndex(initial);
  }, []);

  useEffect(() => {
    const activeProject = academicProjects.find(project => project.id === expandedProject);
    if (!activeProject || activeProject.images.length === 0) return;

    const interval = setInterval(() => {
      setImageIndex(prev => ({
        ...prev,
        [activeProject.id]: ((prev[activeProject.id] || 0) + 1) % activeProject.images.length
      }));
    }, 3500);

    return () => clearInterval(interval);
  }, [expandedProject]);

  const handlePrev = (project) => {
    setImageIndex(prev => {
      const current = prev[project.id] || 0;
      const nextIndex = current === 0 ? project.images.length - 1 : current - 1;
      return { ...prev, [project.id]: nextIndex };
    });
  };

  const handleNext = (project) => {
    setImageIndex(prev => {
      const current = prev[project.id] || 0;
      const nextIndex = (current + 1) % project.images.length;
      return { ...prev, [project.id]: nextIndex };
    });
  };

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-10 md:mb-12">
        <h2
          className="text-[8vw] md:text-[3vw] font-extrabold text-indigo-400 drop-shadow-lg tracking-widest text-center leading-none mb-2"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.12em', textShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
        >
          ACADEMIC PROJECTS
        </h2>
        <p
          className="text-gray-400 text-sm md:text-base font-medium"
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          University coursework and research builds
        </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-5">
        {academicProjects.map(project => {
          const isExpanded = expandedProject === project.id;
          const currentImage = imageIndex[project.id] || 0;

          return (
            <div key={project.id} className="glass rounded-lg p-4 md:p-5 shadow-md">
              <button
                onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                className="w-full flex flex-col md:flex-row md:items-center md:justify-between text-left gap-3"
              >
                <div>
                  <h3
                    className="text-lg md:text-xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-indigo-400 text-xs font-semibold px-3 py-1 glass rounded-full">
                      {project.semester}
                    </span>
                    <span className="text-purple-400 text-xs font-semibold px-3 py-1 glass rounded-full">
                      {project.subject}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-indigo-300 text-xs md:text-sm font-semibold" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                  {isExpanded ? 'Hide Details' : 'View Details'}
                  <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="mt-4 border-t border-white/10 pt-4 space-y-4">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                    {project.description}
                  </p>

                  {project.images && project.images.length > 0 && (
                    <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden bg-indigo-900/20">
                      <Image
                        src={project.images[currentImage]}
                        alt={`${project.title} - slide ${currentImage + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 70vw"
                      />
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); handlePrev(project); }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center text-white hover:text-indigo-300"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); handleNext(project); }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 glass rounded-full flex items-center justify-center text-white hover:text-indigo-300"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setImageIndex(prev => ({ ...prev, [project.id]: idx }));
                                }}
                                className={`w-2 h-2 rounded-full ${idx === currentImage ? 'bg-indigo-400' : 'bg-white/40'}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.objectives && project.objectives[0] !== "Coming Soon" && (
                      <div>
                        <h4 className="text-sm font-bold text-indigo-400 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                          Objectives
                        </h4>
                        <ul className="space-y-1.5">
                          {project.objectives.map((objective, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2" />
                              <p className="text-gray-300 text-xs md:text-sm" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                                {objective}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-bold text-indigo-400 mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                        Tech Stack
                      </h4>
                      <div className="space-y-2">
                        <div>
                          <span className="text-purple-400 font-semibold text-xs block mb-1">Backend</span>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.backend.map((tech, index) => (
                              <span
                                key={index}
                                className="text-[11px] px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-md border border-indigo-500/20"
                                style={{ fontFamily: 'var(--font-inconsolata)' }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-purple-400 font-semibold text-xs block mb-1">Frontend</span>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.frontend.map((tech, index) => (
                              <span
                                key={index}
                                className="text-[11px] px-3 py-1 bg-indigo-500/20 text-indigo-200 rounded-md border border-indigo-500/20"
                                style={{ fontFamily: 'var(--font-inconsolata)' }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {project.reportLink !== "#" && (
                    <div className="pt-3">
                      <a
                        href={project.reportLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-inconsolata)' }}
                      >
                        View Detailed Report
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}