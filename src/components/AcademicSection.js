'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const academicProjects = [
  {
    id: 1,
    title: "Mosaic Generator",
    semester: "Semester 6",
    subject: "Image Processing & Vision",
    description: "A comprehensive mosaic generation system that creates artistic mosaics from RGB images using dynamic color mapping and various visual effect filters.",
    objectives: [
      "Color Mosaic Generation with RGB images through dynamic color mapping",
      "Fixed Block Size (16×16) for balanced resolution",
      "Visual Effect Filters: sepia, vintage, pop art",
      "Quality Metrics: SSIM, MSE, PSNR",
      "Step-by-Step Workflow: Upload → Preprocess → Generate → Enhance",
      "Job Status Tracking with real-time progress",
    ],
    techStack: {
      backend: ["Python 3.6+", "Flask", "NumPy", "Pillow", "OpenCV", "scikit-image"],
      frontend: ["Next.js", "Tailwind CSS", "React Hooks"],
    },
    reportLink: "/IPV_PROJECT_REPORT.pdf",
    images: [
      "/images/careerpath/mos (1).png",
      "/images/careerpath/mos (2).png",
      "/images/careerpath/mos (3).png",
      "/images/careerpath/mos (4).png",
    ],
  },
  {
    id: 2,
    title: "CricScorers",
    semester: "Semester 5",
    subject: "DBMS",
    description: "CricScorer addresses common cricket scorekeeping challenges with a reliable, user-friendly digital solution: real-time scoring, data storage, cross-platform compatibility, and cricket-specific features.",
    objectives: [
      "Scorer authentication and match setup",
      "Toss result and ball-by-ball scoring interface",
      "Live score tracking for spectators",
      "Player data storage and stats",
      "Detailed match results and scorecards",
    ],
    techStack: {
      backend: ["Express JS", "Node JS", "PostgreSQL"],
      frontend: ["React Native", "Expo", "TypeScript"],
    },
    reportLink: "/Final Report cricscorer.pdf",
    images: [
      "/images/cric/1.jpg",
      "/images/cric/cric (3).jpg",
      "/images/cric/cric (8).jpg",
      "/images/cric/cric (12).jpg",
      "/images/cric/cric (20).jpg",
      "/images/cric/cric (22).jpg",
    ],
  },
  {
    id: 3,
    title: "Final year project",
    semester: "Semester 7-8",
    subject: "Coming Soon",
    description: "Academic project details will be added soon.",
    objectives: ["Coming Soon"],
    techStack: { backend: ["TBD"], frontend: ["TBD"] },
    reportLink: "#",
    images: [],
  },
];

export default function AcademicSection() {
  const [activeId, setActiveId] = useState(academicProjects[0].id);
  const [imageIndex, setImageIndex] = useState(0);
  const activeProject = academicProjects.find((p) => p.id === activeId);

  useEffect(() => {
    setImageIndex(0);
  }, [activeId]);

  useEffect(() => {
    if (!activeProject?.images?.length) return;
    const interval = setInterval(() => {
      setImageIndex((i) => (i + 1) % activeProject.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [activeId, activeProject?.images?.length]);

  const goPrev = () => {
    if (!activeProject?.images?.length) return;
    setImageIndex((i) => (i === 0 ? activeProject.images.length - 1 : i - 1));
  };

  const goNext = () => {
    if (!activeProject?.images?.length) return;
    setImageIndex((i) => (i + 1) % activeProject.images.length);
  };

  return (
    <section
      id="academic"
      className="relative py-12 md:py-16 px-4 md:px-8 max-w-5xl mx-auto"
      style={{ fontFamily: 'var(--font-inconsolata)' }}
    >
      {/* Header - compact */}
      <div className="text-center mb-6 md:mb-8">
        <h2
          className="text-[7vw] md:text-[2.75rem] font-extrabold tracking-[0.15em] leading-none mb-1"
          style={{
            fontFamily: 'var(--font-bebas)',
            background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ACADEMIC PROJECTS
        </h2>
        <p className="text-gray-500 text-xs md:text-sm font-medium tracking-wider uppercase">
          Coursework & research builds
        </p>
      </div>

      {/* Carousel tabs - compact strip */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-5">
        {academicProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveId(project.id)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
              activeId === project.id
                ? 'bg-indigo-500/25 border-indigo-400/60 text-white shadow-lg shadow-indigo-500/15'
                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300'
            }`}
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Single expandable panel - fixed max height, scroll inside */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm overflow-hidden">
        {activeProject && (
          <div className="max-h-[min(65vh,520px)] overflow-y-auto">
            <div className="p-4 md:p-6 space-y-4">
              {/* Meta row */}
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-400/15 text-indigo-300 text-[11px] font-semibold border border-indigo-400/20">
                  {activeProject.semester}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-400/15 text-purple-300 text-[11px] font-semibold border border-purple-400/20">
                  {activeProject.subject}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {activeProject.description}
              </p>

              {/* Image carousel - compact, neutral fit for varying dimensions */}
              {activeProject.images?.length > 0 && (
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/40 flex items-center justify-center">
                  <Image
                    src={activeProject.images[imageIndex]}
                    alt={`${activeProject.title} ${imageIndex + 1}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  {activeProject.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        aria-label="Previous image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        aria-label="Next image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {activeProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setImageIndex(idx)}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === imageIndex ? 'bg-indigo-400' : 'bg-white/50'}`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Objectives + Tech - 2 cols on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {activeProject.objectives?.[0] !== 'Coming Soon' && (
                  <div>
                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                      Objectives
                    </h4>
                    <ul className="space-y-1.5">
                      {activeProject.objectives.map((obj, i) => (
                        <li key={i} className="flex gap-2 text-gray-400 text-xs leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0 mt-2" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                    Tech Stack
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-purple-400/90 text-[10px] font-semibold uppercase block mb-1">Backend</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techStack.backend.map((tech, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-200 text-[10px] border border-indigo-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-purple-400/90 text-[10px] font-semibold uppercase block mb-1">Frontend</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techStack.frontend.map((tech, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-200 text-[10px] border border-indigo-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {activeProject.reportLink && activeProject.reportLink !== '#' && (
                <div className="pt-2 border-t border-white/5">
                  <a
                    href={activeProject.reportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-xs font-semibold transition-colors"
                  >
                    View detailed report
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
