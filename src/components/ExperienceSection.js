'use client';
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    projectLink: "/ProjectDetails?id=04"
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <section ref={sectionRef} className="w-full flex flex-col items-center py-16 md:py-20 px-4 md:px-8 relative min-h-[60vh]">
      {/* Header */}
      <motion.div 
        className="relative flex flex-col items-center mb-8 md:mb-10 w-full"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
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
      </motion.div>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Animated Timeline vertical line */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 z-0 rounded-full hidden md:block"
          style={{
            width: '4px',
            background: 'linear-gradient(to bottom, #818cf8 0%, #a5b4fc 50%, #c4b5fd 100%)',
            height: lineHeight,
            transition: 'height 0.7s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
        <motion.div 
          className="flex flex-col gap-6 md:gap-12 w-full z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className={`relative flex w-full min-h-[120px] md:min-h-[100px]`}
              variants={itemVariants}
            >
              {/* Timeline dot - Hidden on mobile */}
              <div className="absolute left-1/2 -translate-x-1/2 top-6 z-20 hidden md:block">
                <div className="w-4 h-4 bg-indigo-400 border-2 border-white/30 rounded-full shadow-lg" />
              </div>
              
              {/* Card */}
              <div
                className={`relative glass rounded-xl shadow-lg px-4 md:px-6 py-4 md:py-6 flex flex-col w-full md:w-[calc(50%-16px)] ${idx % 2 === 0 ? 'md:ml-0 md:mr-auto md:items-end md:pr-6' : 'md:mr-0 md:ml-auto md:items-start md:pl-6'}`}
                style={{ marginTop: 0 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-1 w-full">
                  <h3
                    className="text-lg md:text-xl lg:text-2xl font-extrabold text-white mb-1 md:mb-1 tracking-wide text-center md:text-left"
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                  >
                    {exp.company}
                  </h3>
                  <span
                    className="text-xs md:text-sm text-gray-300 font-semibold text-center md:text-right"
                    style={{ fontFamily: 'var(--font-inconsolata)' }}
                  >
                    {exp.duration}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-1 w-full">
                  <span
                    className="text-sm md:text-base lg:text-lg text-indigo-400 font-semibold mb-1 text-center md:text-left"
                    style={{ fontFamily: 'var(--font-inconsolata)' }}
                  >
                    {exp.position}
                  </span>
                  <span
                    className="text-xs md:text-sm text-gray-400 text-center md:text-right"
                    style={{ fontFamily: 'var(--font-inconsolata)' }}
                  >
                    {exp.location}
                  </span>
                </div>
                <div className="space-y-3 md:space-y-2 mt-2 md:mt-1 w-full">
                  {exp.description.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start space-x-3 md:space-x-2"
                    >
                      <div className="w-2 h-2 md:w-1.5 md:h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p
                        className="text-gray-300 text-sm md:text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-inconsolata)' }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                  {exp.projectLink && (
                    <div className="mt-4 md:mt-3 flex justify-center md:justify-start">
                      <Link
                        href={exp.projectLink}
                        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm md:text-sm font-semibold transition-colors duration-300 px-3 py-1 rounded-md hover:bg-indigo-400/10"
                        style={{ fontFamily: 'var(--font-inconsolata)' }}
                      >
                        View Project
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 