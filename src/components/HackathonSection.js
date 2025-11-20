'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

const hackathons = [
  {
    title: "Winner – TechTwister 2025 (RIT-GOA) Webathon | CareerConnection",
    date: "April 2025",
    desc: `Developed a full-stack application connecting students with companies, featuring resume parsing, LeetCode-style DSA compiler, AI-generated aptitude tests, voice-based HR interview feedback, and job-test eligibility matching.`,
    image: "/images/RIT.jpeg",
    projectLink: "/ProjectDetails?id=50864"
  },
  {
    title: "Participant – 24-H Hackathon 2025 (PCCE) | Career Path",
    date: "March 2025",
    desc: `Developed a comprehensive career development platform with AI-driven insights, interactive learning paths, gamified roadmaps, job marketplace, and professional networking features.`,
    image: "/images/careerpath/cp (1).png",
    projectLink: "/ProjectDetails?id=39485"
  },
  
  {
    title: "Participant – INTERNSPIRIT HACKATHON | Handyman",
    date: "March 2025",
    desc: `Built a service marketplace platform connecting customers with local handyman services, featuring AI-powered matching, real-time booking, location tracking, and secure payment integration.`,
    projectLink: "/ProjectDetails?id=19576",
    image: "/images/IS.jpeg"
  },
  {
    title: "Winner – IRIX-2024 (Chowgule College) Webathon | FitTrack",
    date: "January 2025",
    desc: `Developed a fitness tracking app with a dashboard for steps, calories, and activity insights; added BMI, food logging, sleep trends, real-time chat (Socket.io), badge rewards, 2FA security, and light/dark mode UI.`,
    projectLink: "/ProjectDetails?id=47293",
    image: "/images/IRIX.jpeg"
  },

  {
    title: "Finalist – Goa Police Hackathon (BITS-GOA) | E-bandobast",
    date: "October 2024",
    desc: `Built E-Bandobast, a geotagging-based digital tool for police officials to efficiently plan, monitor, and execute deployments with an intuitive interface for streamlined bandobast operations.`,
    image: "/images/GPH.jpeg"
  },
  
];

export default function HackathonSection() {

  return (
    <section className="w-full flex flex-col items-center py-16 md:py-20 px-4 md:px-8 relative" style={{ fontFamily: 'var(--font-inconsolata)' }}>
      {/* Header */}
      <div className="relative flex flex-col items-center mb-12 md:mb-16 w-full">
        <h2
          className="text-[8vw] md:text-[3vw] font-extrabold text-indigo-400 font-bebas drop-shadow-lg tracking-widest text-center leading-none mb-2"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.12em', textShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
        >
          HACKATHONS
        </h2>
        <span 
          className="text-indigo-400 font-inconsolata text-sm md:text-lg font-bold tracking-wide text-center px-4"
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          Competitive coding and innovation challenges
        </span>
      </div>

      {/* Hackathons List */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-6">
          {hackathons.map((hack, idx) => (
            <div key={idx} className="glass rounded-lg shadow-md p-4 md:p-5 flex flex-col md:flex-row gap-3 md:gap-4">
              {/* Image */}
              {hack.image && (
                <div className="flex-shrink-0 w-full md:w-28 h-28 md:h-28 rounded-md overflow-hidden relative bg-indigo-400/20">
                  <Image
                    src={hack.image}
                    alt={hack.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 128px"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-1.5">
                  <h3
                    className="text-base md:text-lg font-extrabold text-white mb-0.5 tracking-wide"
                    style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                  >
                    {hack.title}
                  </h3>
                  <span
                    className="text-[11px] md:text-xs text-gray-300 font-semibold md:ml-4 flex-shrink-0"
                    style={{ fontFamily: 'var(--font-inconsolata)' }}
                  >
                    {hack.date}
                  </span>
                </div>
                
                <p
                  className="text-gray-300 text-xs md:text-sm leading-relaxed mb-2"
                  style={{ fontFamily: 'var(--font-inconsolata)' }}
                >
                  {hack.desc}
                </p>

                {hack.projectLink && (
                  <div className="mt-auto">
                    <Link
                      href={hack.projectLink}
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
} 