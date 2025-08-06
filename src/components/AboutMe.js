import Image from "next/image";
import SocialLinks from "./Socials";
import { motion } from "framer-motion";

export default function AboutMe() {
  // Animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.12 } },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const floatVariant = {
    animate: {
      y: [0, -16, 0],
      boxShadow: [
        '0 4px 32px 0 rgba(99,102,241,0.15)',
        '0 8px 48px 0 rgba(168,85,247,0.25)',
        '0 4px 32px 0 rgba(99,102,241,0.15)'
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.section
      className="text-white flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-8 max-w-7xl mx-auto relative"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Section */}
      <motion.div className="w-full md:max-w-2xl text-center md:text-left lg:pr-12 z-10" variants={fadeInUp}>
        <motion.h3 
          className="text-indigo-400 text-sm tracking-wider mb-2" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          MORE ABOUT ME
        </motion.h3>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-3 sm:mb-4 drop-shadow-xl"
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
        >
          Full-Stack Developer and
          <span className="inline-block md:hidden"><br /></span>
          <span className="hidden md:inline-block"><br /></span>
           little bit of <span className="text-transparent">everything</span>
        </motion.h1>
        <motion.p 
          className="mt-4 text-gray-300" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          I'm Shubham Chede, a proactive full-stack developer passionate about
          creating dynamic web experiences. From frontend to backend, I thrive
          on solving complex problems with clean, efficient code. My expertise
          spans React Native, Next.js, and Node.js, and I have a keen eye for UI/UX design.
        </motion.p>
        <motion.p 
          className="mt-4 text-gray-300" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          When I'm not coding, I'm exploring new ideas and staying curious. I also enjoy
          working on design and digital art, adding a creative touch to my projects.
          Life's about balance, and I love embracing every part of it.
        </motion.p>
        <motion.p 
          className="mt-4 text-gray-300" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          I believe in waking up each day eager to make a difference!
        </motion.p>
        <motion.p 
          className="mt-4 text-gray-300" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          You can find me here
        </motion.p>
        <motion.div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4" variants={fadeInUp}>
          <SocialLinks 
            linkedinUrl="https://www.linkedin.com/in/shubham-chede-2957bb278"
            githubUrl="https://github.com/ShubhamSChede"
            instagramUrl="https://www.instagram.com/shubham.dark/"
          />
          <a 
            href="/shubham_chede_resume_final.pdf" 
            download
            className="inline-flex items-center border border-indigo-400 text-indigo-400 font-medium py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-indigo-400/10"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div className="mt-2 md:mt-0 md:-mt-52 flex justify-center z-20" variants={fadeInUp}>
        <Image
          src="/images/shubham.png"
          alt="Shubham Chede"
          width={480}
          height={480}
          className="object-cover w-auto h-auto filter brightness-90 contrast-110 saturate-80 hue-rotate-5 sepia-10 transition-all duration-300 hover:brightness-95 hover:contrast-115 hover:saturate-85"
          priority
        />
      </motion.div>


    </motion.section>
  );
}
