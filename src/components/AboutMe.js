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
        '0 4px 32px 0 rgba(59,130,246,0.15)',
        '0 8px 48px 0 rgba(168,85,247,0.25)',
        '0 4px 32px 0 rgba(59,130,246,0.15)'
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
      className="text-white flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16 max-w-7xl mx-auto relative"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Section */}
      <motion.div className="w-full md:max-w-2xl text-center md:text-left lg:pr-12 z-10" variants={fadeInUp}>
        <motion.h3 className="text-gray-400 text-sm tracking-wider mb-2" variants={fadeInUp}>
          MORE ABOUT ME
        </motion.h3>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
          variants={fadeInUp}
        >
          Full-Stack Developer and
          <span className="inline-block md:hidden"><br /></span>
          <span className="hidden md:inline-block"><br /></span>
          a little bit of <span className="bg-green-600 text-transparent bg-clip-text">everything</span>
        </motion.h1>
        <motion.p className="mt-4 text-gray-300" variants={fadeInUp}>
          I'm Shubham Chede, a proactive full-stack developer passionate about
          creating dynamic web experiences. From frontend to backend, I thrive
          on solving complex problems with clean, efficient code. My expertise
          spans React Native, Next.js, and Node.js, and I have a keen eye for UI/UX design.
        </motion.p>
        <motion.p className="mt-4 text-gray-300" variants={fadeInUp}>
          When I'm not coding, I'm exploring new ideas and staying curious. I also enjoy
          working on design and digital art, adding a creative touch to my projects.
          Life's about balance, and I love embracing every part of it.
        </motion.p>
        <motion.p className="mt-4 text-gray-300" variants={fadeInUp}>
          I believe in waking up each day eager to make a difference!
        </motion.p>
        <motion.p className="mt-4 text-gray-300 font-serif" variants={fadeInUp}>
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
            className="inline-flex items-center border border-green-600 text-green-500 font-medium py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600/10"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Right Section (Profile Image) */}
      <motion.div className="mt-12 md:mt-0 flex justify-center z-20" variants={fadeInUp}>
        <motion.div
          className="relative group"
          variants={floatVariant}
          animate="animate"
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          ></motion.div>
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-md border border-blue-400/10 z-10"></div>
          {/* Image container */}
          <motion.div
            className="relative z-20"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/images/shubham.jpg"
              alt="Shubham Chede"
              width={280}
              height={280}
              className="rounded-2xl border-2 border-gray-800 shadow-2xl object-cover w-auto h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>


    </motion.section>
  );
}
