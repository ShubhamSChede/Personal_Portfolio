import Image from "next/image";
import SocialLinks from "./Socials";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInUp, fadeInLeft, fadeInRight, revealText, floatingAnimation, magneticEffect } from "../utils/gsapAnimations";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const heading = headingRef.current;
    const paragraphs = paragraphRefs.current;
    const image = imageRef.current;
    const button = buttonRef.current;
    const social = socialRef.current;

    // Create timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title with typewriter effect
    if (title) {
      tl.fromTo(title, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Animate main heading with reveal effect
    if (heading) {
      tl.fromTo(heading,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      );
    }

    // Stagger animate paragraphs
    if (paragraphs.length > 0) {
      tl.fromTo(paragraphs,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Animate social links and button
    if (social) {
      tl.fromTo(social,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );
    }

    // Animate image with floating effect
    if (image) {
      tl.fromTo(image,
        { opacity: 0, x: 50, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );
      
      // Add floating animation
      floatingAnimation(image);
    }

    // Add magnetic effect to button
    if (button) {
      magneticEffect(button);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation variants for fallback
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.12 } },
  };
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

    return (
    <motion.section
      ref={sectionRef}
      className="text-white flex flex-col md:flex-row items-center justify-between py-8 md:py-12 px-6 md:px-8 max-w-7xl mx-auto relative min-h-screen md:min-h-[85vh]"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Section */}
      <motion.div className="w-full md:max-w-2xl md:-mt-8 text-center md:text-left lg:pr-12 z-10" variants={fadeInUpVariant}>
        <motion.h3 
          ref={titleRef}
          className="text-indigo-400 text-sm tracking-wider mb-2" 
          variants={fadeInUpVariant}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          MORE ABOUT ME
        </motion.h3>
        <motion.h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-indigo-400 mb-2 md:mb-3 drop-shadow-xl"
          variants={fadeInUpVariant}
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
        >
          Full-Stack Developer and little bit of 
          <span className="inline-block md:hidden"><br /></span>
          <span className="hidden md:inline-block"><br /></span>
         <br/>   <span className="text-white ">everything</span>
        </motion.h1>
        <motion.p 
          className="mt-1 md:mt-2 text-gray-300 text-sm md:text-base leading-relaxed" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
I'm Shubham Chede, a proactive full stack developer passionate about building dynamic and impactful web experiences. I enjoy working across the stack solving complex problems with clean, efficient code. With hands on experience in React Native, Next.js, and Node.js, I also bring a strong eye for UI/UX design. I'm currently pursuing a B.E. in Computer Engineering from Goa Engineering College (GEC), where I'm honing both my technical and creative development skills.
        </motion.p>
        <motion.p 
          className="mt-1 md:mt-2 text-gray-300 text-sm md:text-base leading-relaxed" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          When I'm not coding, I'm exploring new ideas and staying curious. I also enjoy
          working on design and digital art, adding a creative touch to my projects.
          Life's about balance, and I love embracing every part of it.
        </motion.p>
        <motion.p 
          className="mt-1 md:mt-2 text-gray-300 text-sm md:text-base leading-relaxed" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          I believe in waking up each day eager to make a difference!
        </motion.p>
        <motion.p 
          className="mt-1 md:mt-2 text-gray-400 text-xs md:text-sm font-medium" 
          variants={fadeInUp}
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          You can find me here
        </motion.p>
        <motion.div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 mt-1 md:mt-2" variants={fadeInUp}>
          <SocialLinks 
            linkedinUrl="https://www.linkedin.com/in/shubham-chede-2957bb278"
            githubUrl="https://github.com/ShubhamSChede"
            instagramUrl="https://www.instagram.com/shubham.dark/"
          />
          <a 
            ref={buttonRef}
            href="/shubham_chede_resume_final.pdf" 
            download
            className="inline-flex items-center border border-indigo-400 text-indigo-400 font-medium py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-indigo-400/10 hover:scale-105 transform"
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
       <motion.div className="mt-4 md:mt-0 md:-mt-32 lg:-mt-48 flex justify-center z-20" variants={fadeInUpVariant}>
         <div ref={imageRef} className="relative">
           <Image
             src="/images/shubham.png"
             alt="Shubham Chede"
             width={480}
             height={480}
             className="object-cover w-auto h-auto filter brightness-90 contrast-110 saturate-80 hue-rotate-5 sepia-10 transition-all duration-300 hover:brightness-95 hover:contrast-115 hover:saturate-85"
             priority
           />
           {/* Fade-out gradient overlay at the bottom */}
           <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-[#242424] via-[#242424]/60 to-transparent pointer-events-none"></div>
         </div>
       </motion.div>


    </motion.section>
  );
}
