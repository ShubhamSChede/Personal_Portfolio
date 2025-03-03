import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);

  const projectsData = {
    '01': {
      id: '01',
      name: 'Epikcart',
      fullName: 'Epikcart - E-commerce Solution',
      description: 'A comprehensive e-commerce platform built with React and Redux, offering seamless shopping experiences with internationalization support.',
      technologies: ['React', 'Redux', 'React i18n'],
      features: [
        'Advanced product filtering and search',
        'Multi-language support',
        'Responsive cart and checkout system',
        'User authentication and profiles',
        'Order tracking and history'
      ],
      images: [
        '/api/placeholder/900/500',
        '/api/placeholder/900/500',
        '/api/placeholder/900/500'
      ],
      year: '2023',
      link: 'https://example.com/epikcart'
    },
    '02': {
      id: '02',
      name: 'Resume Roaster',
      fullName: 'Resume Roaster - AI Resume Analysis',
      description: 'An AI-powered resume analysis tool that provides detailed feedback and improvement suggestions using GPT-4.',
      technologies: ['GPT-4', 'Next.js', 'PostgreSQL'],
      features: [
        'AI-driven resume feedback',
        'Industry-specific recommendations',
        'Expert reviewer matching',
        'Resume version control',
        'Interview preparation tips'
      ],
      images: [
        '/api/placeholder/900/500',
        '/api/placeholder/900/500',
        '/api/placeholder/900/500'
      ],
      year: '2024',
      link: 'https://example.com/resumeroaster'
    },
    '03': {
      id: '03',
      name: 'Real Estate',
      fullName: 'Real Estate - Property Management Platform',
      description: 'A modern real estate platform for property listings, management, and client interactions built with React and Tailwind CSS.',
      technologies: ['React.js', 'Redux', 'Tailwind CSS'],
      features: [
        'Interactive property maps',
        'Advanced property search filters',
        'Virtual tour integration',
        'Agent-client messaging system',
        'Appointment scheduling'
      ],
      images: [
        '/api/placeholder/900/500',
        '/api/placeholder/900/500',
        '/api/placeholder/900/500'
      ],
      year: '2023',
      link: 'https://example.com/realestate'
    },
    '04': {
      id: '04',
      name: 'Consulting Finance',
      fullName: 'Consulting Finance - Financial Advisory Platform',
      description: 'A comprehensive financial consulting platform offering tools and resources for financial planning and analysis.',
      technologies: ['HTML', 'CSS & SCSS', 'Javascript'],
      features: [
        'Interactive financial calculators',
        'Personalized investment strategies',
        'Retirement planning tools',
        'Budget optimization',
        'Tax planning assistance'
      ],
      images: [
        '/api/placeholder/900/500',
        '/api/placeholder/900/500',
        '/api/placeholder/900/500'
      ],
      year: '2022',
      link: 'https://example.com/consultingfinance'
    }
  };

  useEffect(() => {
    if (id && projectsData[id]) {
      setProject(projectsData[id]);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Loading project details...</h1>
          <Link href="/" className="text-green-400 hover:text-green-300 underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-12 py-16">
      <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      <div className="flex items-center mb-6 opacity-60">
        <span className="font-mono text-xl">_{project.id}.</span>
      </div>
      
      <h1 className="text-7xl font-bold tracking-tighter text-green-400 mb-4">
        {project.name}
      </h1>
      
      <h2 className="text-3xl mb-8 text-gray-300">{project.fullName}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
        <div className="lg:col-span-2">
          <p className="text-xl text-gray-300 mb-8">
            {project.description}
          </p>
          
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc pl-5 mb-8 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-lg text-gray-300">{feature}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mb-8">
            <span className="text-gray-400">Year: </span>
            <span className="text-white">{project.year}</span>
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Visit Project
          </a>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <img 
              src={project.images[0]} 
              alt={project.name} 
              className="w-full h-auto rounded-lg shadow-xl mb-6" 
            />
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">Project Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img 
                src={image} 
                alt={`${project.name} screenshot ${index + 1}`} 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;