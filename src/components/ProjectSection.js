'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '92148',
    num: '01',
    name: 'MYTRACKERY',
    description: 'Mobile app for personal tracking and productivity.',
    technologies: ['React Native', 'Express.js', 'MongoDB'],
    screenshot: '/images/Mytrakcery/mt1.jpg',
  },
  {
    id: '74329',
    num: '02',
    name: 'Taskaholic',
    description: 'Productivity app for task management and time tracking.',
    technologies: ['Next.js', 'Supabase', 'TypeScript', 'shadcn'],
    screenshot: '/images/task/task (1).png',
  },
  {
    id: '85617',
    num: '03',
    name: 'Roshstocks',
    description: 'Wedding invitation website with a polished, shareable experience.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    screenshot: '/images/02.jpg',
  },

];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const heroRef = useRef(null);
  const sideRefs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const tagline = taglineRef.current;
    const hero = heroRef.current;
    const sideCards = sideRefs.current.filter(Boolean);

    if (!section) return;

    if (title) {
      gsap.fromTo(title, { opacity: 0, y: 36 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 82%', toggleActions: 'play none none reverse' },
      });
    }
    if (tagline) {
      gsap.fromTo(tagline, { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.5, delay: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 82%', toggleActions: 'play none none reverse' },
      });
    }

    if (hero) {
      gsap.set(hero, { opacity: 0, y: 48 });
      ScrollTrigger.create({
        trigger: section,
        start: 'top 78%',
        onEnter: () => gsap.to(hero, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }),
      });
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) gsap.to(hero, { opacity: 1, y: 0, duration: 0.5 });
    }

    sideCards.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, { opacity: 0, x: i === 0 ? -32 : 32 });
      ScrollTrigger.create({
        trigger: section,
        start: 'top 72%',
        onEnter: () => gsap.to(card, {
          opacity: 1, x: 0, duration: 0.6, delay: 0.1 + i * 0.08, ease: 'power2.out',
        }),
      });
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        gsap.to(card, { opacity: 1, x: 0, duration: 0.4, delay: i * 0.06 });
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleClick = (projectId) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('portfolio_home_scroll', String(window.scrollY));
    }
    router.push(`/ProjectDetails?id=${projectId}`);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full overflow-hidden py-20 md:py-28 px-4 md:px-8"
      style={{ fontFamily: 'var(--font-inconsolata)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(129,140,248,0.6) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <h2
            ref={titleRef}
            className="text-[10vw] sm:text-[8vw] md:text-[4.5rem] font-extrabold tracking-[0.2em] leading-none mb-2"
            style={{
              fontFamily: 'var(--font-bebas)',
              background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.18em',
            }}
          >
            PERSONAL PROJECTS
          </h2>
          <p
            ref={taglineRef}
            className="text-gray-500 text-xs md:text-sm font-semibold tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            side quests & weekend builds
          </p>
        </div>

        {/* Bento grid: hero (8 cols, 2 rows) | side (4 cols x 2 rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-fr">
          {/* Hero card - spans 2 rows on desktop */}
          <article
            ref={heroRef}
            onClick={() => handleClick(projects[0].id)}
            className="lg:col-span-8 lg:row-span-2 group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_50px_-12px_rgba(129,140,248,0.25)] cursor-pointer flex flex-col lg:flex-row min-h-[320px] lg:min-h-[420px]"
          >
            <div className="relative w-full lg:w-[52%] min-h-[220px] lg:min-h-full flex-shrink-0 bg-black/30 flex items-center justify-center">
              <span className="absolute left-4 top-4 z-10 text-[clamp(4rem,12vw,8rem)] font-black text-white/5 select-none" style={{ fontFamily: 'var(--font-bebas)' }}>
                {projects[0].num}
              </span>
              <Image
                src={projects[0].screenshot}
                alt={projects[0].name}
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent lg:from-black/30 pointer-events-none" />
            </div>
            <div className="relative flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <span className="text-indigo-400/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                Project {projects[0].num}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.06em' }}>
                {projects[0].name}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 max-w-md">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[0].technologies.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-indigo-400/15 text-indigo-300/90 text-[11px] font-semibold border border-indigo-400/20">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                View project
                <span className="text-lg">→</span>
              </span>
            </div>
          </article>

          {/* Side card 1 */}
          <article
            ref={el => { sideRefs.current[0] = el; }}
            onClick={() => handleClick(projects[1].id)}
            className="lg:col-span-4 group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_40px_-10px_rgba(129,140,248,0.2)] cursor-pointer flex flex-col min-h-[280px]"
          >
            <div className="relative w-full aspect-[16/10] flex-shrink-0 bg-black/30 flex items-center justify-center">
              <span className="absolute left-3 top-3 z-10 text-5xl font-black text-white/10 select-none" style={{ fontFamily: 'var(--font-bebas)' }}>
                {projects[1].num}
              </span>
              <Image
                src={projects[1].screenshot}
                alt={projects[1].name}
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4 md:p-5">
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}>
                  {projects[1].name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                  {projects[1].description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {projects[1].technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-indigo-400/10 text-indigo-400/90 text-[10px] font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-indigo-400/90 text-xs font-semibold mt-2 group-hover:gap-2 transition-all duration-300">
                View
                <span>→</span>
              </span>
            </div>
          </article>

          {/* Side card 2 */}
          <article
            ref={el => { sideRefs.current[1] = el; }}
            onClick={() => handleClick(projects[2].id)}
            className="lg:col-span-4 group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_40px_-10px_rgba(129,140,248,0.2)] cursor-pointer flex flex-col min-h-[280px]"
          >
            <div className="relative w-full aspect-[16/10] flex-shrink-0 bg-black/30 flex items-center justify-center">
              <span className="absolute left-3 top-3 z-10 text-5xl font-black text-white/10 select-none" style={{ fontFamily: 'var(--font-bebas)' }}>
                {projects[2].num}
              </span>
              <Image
                src={projects[2].screenshot}
                alt={projects[2].name}
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4 md:p-5">
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight" style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}>
                  {projects[2].name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                  {projects[2].description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {projects[2].technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-indigo-400/10 text-indigo-400/90 text-[10px] font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-indigo-400/90 text-xs font-semibold mt-2 group-hover:gap-2 transition-all duration-300">
                View
                <span>→</span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
