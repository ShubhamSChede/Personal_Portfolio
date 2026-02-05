import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Animation configurations
export const animationConfig = {
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.1,
};

// Fade in from bottom animation
export const fadeInUp = (element, delay = 0) => {
  gsap.fromTo(element, 
    { 
      y: 50, 
      opacity: 0 
    },
    { 
      y: 0, 
      opacity: 1, 
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Fade in from left animation
export const fadeInLeft = (element, delay = 0) => {
  gsap.fromTo(element,
    {
      x: -50,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Fade in from right animation
export const fadeInRight = (element, delay = 0) => {
  gsap.fromTo(element,
    {
      x: 50,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Scale in animation
export const scaleIn = (element, delay = 0) => {
  gsap.fromTo(element,
    {
      scale: 0.8,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1,
      duration: animationConfig.duration,
      ease: "back.out(1.7)",
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Stagger animation for multiple elements
export const staggerFadeIn = (elements, delay = 0) => {
  gsap.fromTo(elements,
    {
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      stagger: animationConfig.stagger,
      delay,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Typewriter effect
export const typeWriter = (element, text, delay = 0) => {
  gsap.to(element, {
    duration: text.length * 0.05,
    text: text,
    ease: "none",
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
};

// Floating animation
export const floatingAnimation = (element) => {
  gsap.to(element, {
    y: -10,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
  });
};

// Magnetic effect for buttons
export const magneticEffect = (element) => {
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(element, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Parallax scroll effect
export const parallaxScroll = (element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

// Reveal text animation
export const revealText = (element, delay = 0) => {
  const chars = element.textContent.split('');
  element.innerHTML = chars.map(char => `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
  
  gsap.fromTo(element.children,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.02,
      delay,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

// Loading screen animation
export const loadingScreenAnimation = (element, onComplete) => {
  const tl = gsap.timeline({
    onComplete
  });
  
  tl.to(element, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut"
  })
  .to(element, {
    y: "-100%",
    duration: 0.8,
    ease: "power2.inOut"
  }, "-=0.2");
  
  return tl;
};

// Page transition animation
export const pageTransition = {
  enter: (element) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }
    );
  },
  exit: (element) => {
    gsap.to(element, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in"
    });
  }
};

// Cursor follow animation
export const cursorFollow = (cursor, follower) => {
  let mouseX = 0;
  let mouseY = 0;
  
  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    gsap.to(cursor, {
      x: mouseX,
      y: mouseY,
      duration: 0.1,
      ease: "power2.out"
    });
    
    gsap.to(follower, {
      x: mouseX,
      y: mouseY,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
};

const gsapAnimations = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerFadeIn,
  typeWriter,
  floatingAnimation,
  magneticEffect,
  parallaxScroll,
  revealText,
  loadingScreenAnimation,
  pageTransition,
  cursorFollow
};

export default gsapAnimations;