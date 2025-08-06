'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const hackathons = [
  {
    title: "Winner – TechTwister 2025 (RIT-GOA) Webathon | CareerConnection",
    date: "April 2025",
    desc: `Developed a full-stack application connecting students with companies, featuring resume parsing, LeetCode-style DSA compiler, AI-generated aptitude tests, voice-based HR interview feedback, and job-test eligibility matching.`,
    image: "/images/RIT.jpeg",
    projectLink: "/ProjectDetails?id=07"
  },
  {
    title: "ParticipanT – 24-H Hackathon 2025 (PCCE) | ",
    date: "March 2025",
    desc: `Developed a gamified platform to encourage eco-friendly habits, with leaderboards, daily challenges, and community rewards.`,
    image: null
  },
  
  {
    title: "Participant – INTERNSPIRIT HACKATHON | Handyman",
    date: "March 2025",
    desc: `Built a service marketplace platform connecting customers with local handyman services, featuring AI-powered matching, real-time booking, location tracking, and secure payment integration.`,
    projectLink: "/ProjectDetails?id=05",
    image: "/images/IS.jpeg"
  },
  {
    title: "Winner – IRIX-2024 (Chowgule College) Webathon | FitTrack",
    date: "January 2025",
    desc: `Developed a fitness tracking app with a dashboard for steps, calories, and activity insights; added BMI, food logging, sleep trends, real-time chat (Socket.io), badge rewards, 2FA security, and light/dark mode UI.`,
    projectLink: "/ProjectDetails?id=01",
    image: "/images/IRIX.jpeg"
  },

  {
    title: "Finalist – Goa Police Hackathon (BITS-GOA) | E-bandobast",
    date: "October 2024",
    desc: `Built E-Bandobast, a geotagging-based digital tool for police officials to efficiently plan, monitor, and execute deployments with an intuitive interface for streamlined bandobast operations.`,
    image: "/images/GPH.jpeg"
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.8,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    x: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  active: {
    scale: 1.1,
    x: 15,
    boxShadow: "0 20px 40px rgba(78, 154, 241, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const contentVariants = {
  hidden: { 
    opacity: 0, 
    x: 100,
    scale: 0.9,
    rotateY: -15,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    scale: 0.9,
    rotateY: 15,
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    rotate: -10,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function HackathonSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full flex flex-col items-center py-24 px-4 relative min-h-[80vh]" style={{ fontFamily: 'var(--font-inconsolata)' }}>
      {/* Header with floating animation */}
      <motion.div 
        className="relative flex flex-col items-center mb-12 w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="text-[8vw] md:text-[5vw] font-extrabold text-indigo-400 font-bebas drop-shadow-lg tracking-widest text-center leading-none"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.12em', textShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
          animate={floatingAnimation}
        >
          HACKATHONS
        </h1>
      </motion.div>

      {/* Cards and Reveal */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 mt-12 min-h-[500px]">
        {/* Left: Card List */}
        <motion.div 
          className="flex flex-col gap-4 flex-shrink-0 lg:w-1/3 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Nerdy Subtitle */}
          <motion.div
            className="mb-6 p-4 glass rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p 
              className="text-sm text-gray-300 leading-relaxed"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              <span className="text-indigo-400 font-semibold">while (college_life) {`{`}</span><br/>
              &nbsp;&nbsp;hackathon_grind();<br/>
              &nbsp;&nbsp;sleepless_nights++;<br/>
              &nbsp;&nbsp;coffee_consumption *= 2;<br/>
              <span className="text-indigo-400 font-semibold">{`}`}</span>
            </p>
          </motion.div>
          
          {hackathons.map((hack, idx) => (
            <motion.div
              key={hack.title}
              className={`group relative flex items-center cursor-pointer glass rounded-xl shadow-lg px-6 py-4 transition-all duration-300 ${active === idx ? 'ring-4 ring-indigo-400/40' : ''}`}
              variants={cardVariants}
              whileHover="hover"
              animate={active === idx ? "active" : "visible"}
              onMouseEnter={() => setActive(idx)}
              onClick={() => setActive(idx)}
              style={{ outline: 'none' }}
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-indigo-400 mr-4"
                animate={active === idx ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                transition={{ duration: 0.5, repeat: active === idx ? Infinity : 0 }}
              />
              <span className="text-md md:text-lg font-bebas font-extrabold text-white tracking-wide text-left" style={{ fontFamily: 'var(--font-bebas)' }}>
                {hack.title.split('|')[0]}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Animated Reveal */}
        <div className="flex-1 flex items-center justify-center min-h-[400px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-2xl glass rounded-3xl shadow-2xl p-8 flex flex-col items-center lg:items-start relative overflow-hidden"
            >
               {/* Background glow effect */}
               <motion.div
                 className="absolute inset-0 bg-indigo-500/20 rounded-3xl"
                 animate={{
                   opacity: [0.3, 0.6, 0.3],
                 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   ease: "easeInOut",
                 }}
               />
               
               {/* Hero Image */}
               <motion.div className="relative z-10 mb-6">
                 <motion.div 
                   className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl shadow-2xl bg-indigo-400 flex items-center justify-center overflow-hidden"
                   variants={imageVariants}
                   whileHover="hover"
                   animate="visible"
                 >
                   {hackathons[active].image ? (
                     <Image
                       src={hackathons[active].image}
                       alt={hackathons[active].title}
                       fill
                       className="object-cover"
                       sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                     />
                   ) : (
                     <span className="text-4xl font-bold text-white">🏆</span>
                   )}
                 </motion.div>
                 <motion.div
                   className="absolute inset-0 rounded-2xl bg-indigo-400/30"
                   animate={{
                     opacity: [0, 0.5, 0],
                   }}
                   transition={{
                     duration: 2,
                     repeat: Infinity,
                     ease: "easeInOut",
                   }}
                 />
               </motion.div>

              {/* Content */}
              <div className="relative z-10 text-center lg:text-left">
                <motion.span 
                  className="text-2xl md:text-3xl font-bebas font-extrabold text-indigo-400 tracking-widest mb-3 block"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {hackathons[active].title}
                </motion.span>
                
                <motion.span 
                  className="text-md text-gray-300 font-inconsolata mb-4 block"
                  style={{ fontFamily: 'var(--font-inconsolata)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {hackathons[active].date}
                </motion.span>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-100 font-inconsolata leading-relaxed"
                  style={{ fontFamily: 'var(--font-inconsolata)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {hackathons[active].desc}
                </motion.p>
                
                {hackathons[active].projectLink && (
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <Link
                      href={hackathons[active].projectLink}
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-inconsolata)' }}
                    >
                      View Project
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Floating particles effect */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-indigo-400 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-1 h-1 bg-purple-400 rounded-full"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 