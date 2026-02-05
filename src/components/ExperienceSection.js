'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    company: "TEXAM",
    position: "Software Engineer Intern",
    duration: "July 2025 – August 2025",
    location: "Remote",
    description: [
      "Built a functional prototype of the exam platform using Next.js with a focus on clean UI and responsive layout.",
      "Integrated RESTful APIs from the Golang backend into the React.js frontend using Axios; tested endpoints and payloads using Postman for reliability and correctness."
    ],
    additionalInfo: [
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Participated in code reviews and agile development processes.",
      "Gained experience in modern web development technologies and best practices."
    ],
    docs: [
      { name: "Certificate", url: "/internshipcertificate.pdf", external: true },
      { name: "Internship Report", url: "/internshipreport.pdf", external: true }
    ]
  },
  {
    id: 2,
    company: "Technical Event Website – TECHNIX 2025",
    position: "Developer",
    duration: "March 2025",
    location: "Ponda, Goa",
    description: [
      "Led the website team and worked with 10+ council members to understand requirements and develop a fully responsive Squid Game themed website for the Computer Department's technical event, achieving seamless user experience.",
      "Implemented interactive elements, animations, and optimized navigation for an engaging and visually appealing interface."
    ],
    additionalInfo: [
      "Managed project timeline and coordinated with design and content teams.",
      "Ensured cross-browser compatibility and mobile responsiveness.",
      "Delivered the project on time with positive feedback from stakeholders."
    ],
    docs: [
      { name: "Project Link", url: "https://technix-2025.vercel.app/", external: true }
    ]
  }
];

export default function ExperienceSection() {
  const [expandedInfo, setExpandedInfo] = useState({});
  const [expandedDocs, setExpandedDocs] = useState({});

  // Removed animations - cards are now static

  const toggleInfo = (id) => {
    setExpandedInfo(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleDocs = (id) => {
    setExpandedDocs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };


  const expandVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20 px-4 md:px-8 relative min-h-[60vh]">
      {/* Header */}
      <div className="relative flex flex-col items-center mb-12 md:mb-16 w-full">
        <h2
          className="text-[8vw] md:text-[3vw] font-extrabold text-white font-bebas drop-shadow-lg tracking-widest text-center leading-none mb-2"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.12em', textShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
        >
          EXPERIENCE
        </h2>
        <span 
          className="text-indigo-400 font-inconsolata text-sm md:text-lg font-bold tracking-wide text-center px-4"
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          Professional journey and achievements
        </span>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 md:gap-8 w-full">
          {experiences.map((exp, idx) => (
            <div key={exp.id}>
              {/* Card */}
              <div className="relative glass rounded-xl shadow-lg px-5 md:px-6 py-5 md:py-6 flex flex-col w-full">
                {/* Header Section */}
                <div className="flex flex-col mb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3
                      className="text-xl md:text-2xl font-extrabold text-white mb-1 tracking-wide"
                      style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                    >
                      {exp.company}
                    </h3>
                    <span
                      className="text-xs md:text-sm text-gray-300 font-semibold"
                      style={{ fontFamily: 'var(--font-inconsolata)' }}
                    >
                      {exp.duration}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <span
                      className="text-base md:text-lg text-indigo-400 font-semibold mb-1"
                      style={{ fontFamily: 'var(--font-inconsolata)' }}
                    >
                      {exp.position}
                    </span>
                    <span
                      className="text-xs md:text-sm text-gray-400"
                      style={{ fontFamily: 'var(--font-inconsolata)' }}
                    >
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description Section */}
                <div className="space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p
                        className="text-gray-300 text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-inconsolata)' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Expandable Buttons */}
                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/10">
                  {/* Additional Info Button */}
                  {exp.additionalInfo && (
                    <button
                      onClick={() => toggleInfo(exp.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 glass hover:bg-indigo-400/20 text-indigo-400 hover:text-white"
                      style={{ fontFamily: 'var(--font-inconsolata)' }}
                    >
                      <span>{expandedInfo[exp.id] ? 'Hide' : 'Show'} Info</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedInfo[exp.id] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}

                  {/* Docs Button */}
                  {exp.docs && exp.docs.length > 0 && (
                    <button
                      onClick={() => toggleDocs(exp.id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 glass hover:bg-indigo-400/20 text-indigo-400 hover:text-white"
                      style={{ fontFamily: 'var(--font-inconsolata)' }}
                    >
                      <span>{expandedDocs[exp.id] ? 'Hide' : 'Show'} Docs</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${expandedDocs[exp.id] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Additional Info Expandable Section */}
                <AnimatePresence>
                  {expandedInfo[exp.id] && exp.additionalInfo && (
                    <motion.div
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={expandVariants}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                        {exp.additionalInfo.map((info, infoIndex) => (
                          <div
                            key={infoIndex}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p
                              className="text-gray-300 text-sm leading-relaxed"
                              style={{ fontFamily: 'var(--font-inconsolata)' }}
                            >
                              {info}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Docs Expandable Section */}
                <AnimatePresence>
                  {expandedDocs[exp.id] && exp.docs && exp.docs.length > 0 && (
                    <motion.div
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={expandVariants}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
                        {exp.docs.map((doc, docIndex) => {
                          const linkClass = "flex items-center gap-2 px-3 py-2 rounded-md text-sm text-indigo-400 hover:text-white hover:bg-indigo-400/10 transition-all duration-300";
                          const icon = (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span>{doc.name}</span>
                              <svg className="w-3 h-3 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </>
                          );
                          return doc.external ? (
                            <a
                              key={docIndex}
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={linkClass}
                              style={{ fontFamily: 'var(--font-inconsolata)' }}
                            >
                              {icon}
                            </a>
                          ) : (
                            <Link
                              key={docIndex}
                              href={doc.url}
                              className={linkClass}
                              style={{ fontFamily: 'var(--font-inconsolata)' }}
                            >
                              {icon}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 