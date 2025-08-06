'use client';

import React, { useEffect, useRef, useState } from 'react';

// Enhanced futuristic tech icon component
const TechIcon = ({ src, alt, withBackground = false }) => {
  return (
    <div className="tech-icon-container group">
      <div className="w-12 h-12 flex items-center justify-center glass rounded-md overflow-hidden border border-white/10 group-hover:border-indigo-400 transition-all duration-300 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {withBackground ? (
          <div className="bg-white p-1 rounded-sm flex items-center justify-center w-8 h-8 relative z-10">
            <img 
              src={src} 
              alt={alt} 
              className="w-6 h-6 object-contain" 
            />
          </div>
        ) : (
          <img 
            src={src} 
            alt={alt} 
            className="w-8 h-8 object-contain relative z-10" 
          />
        )}
      </div>
    </div>
  );
};

const TechStack = () => {
  const sectionRef = useRef(null);
  
  // Updated data structure for the tech stack following your categories
  const techData = {
    sections: [
      {
        title: "PROGRAMMING LANGUAGES",
        technologies: [
          { name: "C", icon: "/icons/C.png", withBackground: false },
          { name: "C++", icon: "/icons/cpp.png", withBackground: false },
          { name: "HTML", icon: "/icons/HTML5.png", withBackground: false },
          { name: "CSS", icon: "/icons/CSS3.png", withBackground: false },
          { name: "JavaScript", icon: "/icons/JavaScript.png", withBackground: false },
          { name: "TypeScript", icon: "/icons/TypeScript.png", withBackground: false },
        ]
      },
      {
        title: "TECHNOLOGIES & FRAMEWORKS",
        technologies: [
          { name: "React.js", icon: "/icons/React.png", withBackground: false },
          { name: "Next.js", icon: "/icons/Next.js.png", withBackground: true },
          { name: "React Native", icon: "/icons/React.png", withBackground: false },
          { name: "Express.js", icon: "/icons/Express.png", withBackground: true },
          { name: "Node.js", icon: "/icons/Node.js.png", withBackground: false },
          { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.png", withBackground: false },
        ]
      },
      {
        title: "DATABASES",
        technologies: [
          { name: "MongoDB", icon: "/icons/MongoDB.png", withBackground: false },
          { name: "PostgreSQL", icon: "/icons/PostgresSQL.png", withBackground: false },
          { name: "MySQL", icon: "/icons/MySQL.png", withBackground: false },
          { name: "Supabase" , icon: "/icons/Supabase.png", withBackground: false },
        ]
      },
      {
        title: "VERSION CONTROL & TOOLS",
        technologies: [
          { name: "Git", icon: "/icons/Git.png", withBackground: false },
          { name: "GitHub", icon: "/icons/GitHub.png", withBackground: true },
          { name: "SQL Workbench", icon: "/icons/MySQL.png", withBackground: false },
          { name: "Prisma", icon: "/icons/prisma.png", withBackground: true },
        ]
      },
      {
        title: "DESIGN & PROTOTYPING",
        technologies: [
          { name: "Figma", icon: "/icons/Figma.png", withBackground: false },
        ]
      }
    ]
  };

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
      
      // Observe all tech sections
      const techSections = document.querySelectorAll('.tech-section');
      techSections.forEach((section) => {
        observer.observe(section);
      });

      return () => {
        techSections.forEach((section) => {
          observer.unobserve(section);
        });
      };
    };

    animateOnScroll();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 
          className="text-[7vw] md:text-[3vw] font-extrabold text-indigo-400 drop-shadow-lg tracking-widest text-center leading-none mb-2"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.12em', textShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
        >
          TECH STACK
        </h2>
        <p 
          className="text-indigo-400 text-base md:text-lg font-bold tracking-wide text-center"
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          Technologies I work with
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techData.sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="tech-section glass rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all duration-300 transform hover:scale-105"
            style={{ opacity: 0, transform: 'translateY(30px)' }}
          >
            <h3 
              className="text-lg font-bold text-white mb-4 tracking-wide"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
            >
              {section.title}
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {section.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex flex-col items-center">
                  <TechIcon
                    src={tech.icon}
                    alt={tech.name}
                    withBackground={tech.withBackground}
                  />
                  <span 
                    className="text-xs text-gray-300 mt-2 text-center"
                    style={{ fontFamily: 'var(--font-inconsolata)' }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tech-section.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .tech-section:nth-child(1) { transition-delay: 0.1s; }
        .tech-section:nth-child(2) { transition-delay: 0.2s; }
        .tech-section:nth-child(3) { transition-delay: 0.3s; }
        .tech-section:nth-child(4) { transition-delay: 0.4s; }
        .tech-section:nth-child(5) { transition-delay: 0.5s; }
      `}</style>
    </section>
  );
};

export default TechStack;