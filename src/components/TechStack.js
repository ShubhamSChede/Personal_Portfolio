'use client';

import React, { useEffect, useRef, useState } from 'react';

const TechStack = () => {
  const sectionRef = useRef(null);
  const [isMinimized, setIsMinimized] = useState(false);
  
  // Data structure for the tech stack
  const techData = {
    sections: [
      {
        title: "FRONTEND",
        technologies: [
          { name: "JavaScript", icon: "JS" },
          { name: "TypeScript", icon: "TS" },
          { name: "React", icon: "⚛️" },
          { name: "Next.Js", icon: "N" },
          { name: "Tailwind CSS", icon: "TW" },
        ]
      },
      {
        title: "BACKEND",
        technologies: [
          { name: "Node.Js", icon: "N" },
          { name: "Express.Js", icon: "Ex" },
          { name: "Next.Js", icon: "N" },
        ]
      },
      {
        title: "DATABASES",
        technologies: [
          { name: "MongoDB", icon: "M" },
          { name: "PostgreSQL", icon: "PG" },
          { name: "MySQL", icon: "My" },
        ]
      },
      {
        title: "LANGUAGES",
        technologies: [
          { name: "C", icon: "C" },
          { name: "C++", icon: "C++" },
          { name: "HTML", icon: "H" },
          { name: "CSS", icon: "CS" },
        ]
      },
      {
        title: "TOOLS",
        technologies: [
          { name: "Git", icon: "G" },
          { name: "GitHub", icon: "GH" },
          { name: "Prisma", icon: "P" },
          { name: "Figma", icon: "F" },
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
      
      const sections = document.querySelectorAll('.stack-section');
      sections.forEach((section) => {
        observer.observe(section);
      });
      
      const techItems = document.querySelectorAll('.tech-item');
      techItems.forEach((item) => {
        observer.observe(item);
      });
      
      return () => {
        sections.forEach((section) => observer.unobserve(section));
        techItems.forEach((item) => observer.unobserve(item));
      };
    };
    
    const cleanup = animateOnScroll();
    
    return cleanup;
  }, []);

  const toggleMinimize = () => {
    setIsMinimized(prev => !prev);
  };

  return (
    <div 
      className="text-white py-12 px-6 md:px-12 lg:px-16"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-3 mb-12 stack-section opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="flex items-center gap-3">
            <div className="text-gray-400">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L4 8L6 6L12 12L18 6L20 8L12 16Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">MY STACK</h2>
          </div>
          
          <button 
            className="text-gray-500 hover:text-white transition-colors p-2 rounded-full"
            onClick={toggleMinimize}
          >
            {isMinimized ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L18 14L16.6 15.4L12 10.8L7.4 15.4L6 14L12 8Z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L6 10L7.4 8.6L12 13.2L16.6 8.6L18 10L12 16Z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
      
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isMinimized ? 'max-h-0 opacity-0' : 'max-h-[5000px] opacity-100'
          }`}
        >
          {techData.sections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex} 
              className="mb-16 stack-section opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-5xl font-bold mb-8 text-gray-500">{section.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {section.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="tech-item flex items-center gap-4 opacity-0 translate-y-4 transition-all duration-500 ease-out"
                    style={{ transitionDelay: `${techIndex * 50}ms` }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center backdrop-blur-sm bg-gray-800/30 rounded-md overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300">
                      <span className="text-xl font-bold">{tech.icon}</span>
                    </div>
                    <span className="text-xl">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styleSheet = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

.tech-item.animate-in {
  animation-duration: 0.5s;
}
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = styleSheet;
  document.head.appendChild(style);
}

export default TechStack;