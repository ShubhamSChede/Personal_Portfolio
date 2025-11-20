'use client';

import React from 'react';

const TechStack = () => {
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

  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
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

      {/* Compact Tech Stack List */}
      <div className="flex flex-col gap-6 md:gap-8">
        {techData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="w-full">
            {/* Section Title */}
            <h3 
              className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 tracking-wide text-center"
              style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
            >
              {section.title}
            </h3>
            
            {/* Technologies List */}
            <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-center">
              {section.technologies.map((tech, techIndex) => (
                <div 
                  key={techIndex} 
                  className="flex items-center gap-2 px-3 md:px-4 py-2 glass rounded-lg border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
                >
                  {tech.withBackground ? (
                    <div className="bg-white p-1 rounded-sm flex items-center justify-center w-6 h-6">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-4 h-4 object-contain" 
                      />
                    </div>
                  ) : (
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-6 h-6 object-contain" 
                    />
                  )}
                  <span 
                    className="text-sm text-gray-300"
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
    </section>
  );
};

export default TechStack;