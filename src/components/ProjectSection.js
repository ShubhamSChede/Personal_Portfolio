import React, { useState } from 'react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    {
      id: '01',
      name: 'Epikcart',
      technologies: ['React', 'Redux', 'React i18n'],
      screenshot: '/api/placeholder/600/400',
    },
    {
      id: '02',
      name: 'Resume Roaster',
      technologies: ['GPT-4', 'Next.js', 'PostgreSQL'],
      screenshot: '/api/placeholder/600/400',
    },
    {
      id: '03',
      name: 'Real Estate',
      technologies: ['React.js', 'Redux', 'Tailwind CSS'],
      screenshot: '/api/placeholder/600/400',
    },
    {
      id: '04',
      name: 'Consulting Finance',
      technologies: ['HTML', 'CSS & SCSS', 'Javascript'],
      screenshot: '/api/placeholder/600/400',
    },
  ];

  return (
    <div className="relative flex min-h-screen  text-white p-12">
      <div className="w-full md:w-2/3">
        <div className="flex items-center mb-12">
          <div className="w-10 h-10 mr-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                    fill="#FFFFFF" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold tracking-wider">SELECTED PROJECTS</h2>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-center mb-2 opacity-60">
                <span className="font-mono text-xl">_{project.id}.</span>
              </div>
              <h3 className="text-8xl font-bold tracking-tighter transition-all duration-300 text-gray-600 group-hover:text-green-400">
                {project.name}
              </h3>
              <div className="flex flex-wrap mt-2 gap-6 opacity-70">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {hoveredProject && (
        <div className="fixed top-1/2 right-12 transform -translate-y-1/2 w-1/3 h-auto transition-all duration-300 opacity-100">
          <img 
            src={projects.find(p => p.id === hoveredProject).screenshot} 
            alt={projects.find(p => p.id === hoveredProject).name} 
            className="rounded-lg w-full h-auto shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;