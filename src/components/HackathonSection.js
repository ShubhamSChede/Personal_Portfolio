'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hackathons = [
  {
    role: 'winner',
    title: "TechTwister 2025 (RIT-GOA) Webathon | CareerConnection",
    date: "April 2025",
    desc: "Full-stack app connecting students with companies: resume parsing, LeetCode-style DSA compiler, AI aptitude tests, voice-based HR interview feedback, and job-test matching.",
    image: "/images/RIT.jpeg",
    projectLink: "/ProjectDetails?id=50864",
  },
  {
    role: 'participant',
    title: "24-H Hackathon 2025 (PCCE) | Career Path",
    date: "March 2025",
    desc: "Career development platform with AI-driven insights, interactive learning paths, gamified roadmaps, job marketplace, and professional networking.",
    image: "/images/careerpath/cp (1).png",
    projectLink: "/ProjectDetails?id=39485",
  },
  {
    role: 'participant',
    title: "INTERNSPIRIT HACKATHON | Handyman",
    date: "March 2025",
    desc: "Service marketplace connecting customers with local handymen: AI matching, real-time booking, location tracking, and secure payments.",
    projectLink: "/ProjectDetails?id=19576",
    image: "/images/IS.jpeg",
  },
  {
    role: 'winner',
    title: "IRIX-2024 (Chowgule College) Webathon | FitTrack",
    date: "January 2025",
    desc: "Fitness app with steps/calories dashboard, BMI, food logging, sleep trends, real-time chat (Socket.io), badge rewards, 2FA, and light/dark mode.",
    projectLink: "/ProjectDetails?id=47293",
    image: "/images/IRIX.jpeg",
  },
  {
    role: 'finalist',
    title: "Goa Police Hackathon (BITS-GOA) | E-bandobast",
    date: "October 2024",
    desc: "E-Bandobast: geotagging-based digital tool for police to plan, monitor, and execute deployments with an intuitive bandobast interface.",
    image: "/images/GPH.jpeg",
  },
];

const BADGE_STYLES = {
  winner: {
    label: 'Winner',
    className: 'bg-gradient-to-r from-amber-400/90 to-yellow-500/90 text-black font-black text-[10px] uppercase tracking-widest shadow-lg shadow-amber-500/25',
    icon: '🏆',
  },
  finalist: {
    label: 'Finalist',
    className: 'bg-gradient-to-r from-slate-400/90 to-zinc-500/90 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-slate-500/25',
    icon: '✨',
  },
  participant: {
    label: 'Participant',
    className: 'bg-gradient-to-r from-indigo-500/90 to-violet-500/90 text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-indigo-500/25',
    icon: '⚡',
  },
};

export default function HackathonSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const tagline = taglineRef.current;

    if (!section) return;

    if (title) {
      gsap.fromTo(title, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    }
    if (tagline) {
      gsap.fromTo(tagline, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    }

    const runCardAnimations = () => {
      const cards = cardsRef.current.filter(Boolean);
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          opacity: 1,
          x: 0,
          duration: 0.55,
          delay: i * 0.07,
          ease: 'power2.out',
          overwrite: true,
        });
      });
    };

    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, i) => {
      if (!card) return;
      const dir = i % 2 === 0 ? 1 : -1;
      gsap.set(card, { opacity: 0, x: 60 * dir });
    });

    ScrollTrigger.create({
      trigger: section,
      start: 'top 88%',
      onEnter: runCardAnimations,
    });

    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) runCardAnimations();

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hackathons"
      className="relative w-full overflow-hidden py-20 md:py-28 px-4 md:px-8"
      style={{ fontFamily: 'var(--font-inconsolata)' }}
    >
      {/* Background vibe: gradient orbs + grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(129,140,248,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(129,140,248,0.5) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 md:mb-16">
          <h2
            ref={titleRef}
            className="text-[9vw] sm:text-[7vw] md:text-[4rem] font-extrabold tracking-[0.2em] leading-none mb-3"
            style={{
              fontFamily: 'var(--font-bebas)',
              background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.15em',
            }}
          >
            HACKATHONS
          </h2>
          <p
            ref={taglineRef}
            className="text-gray-400 text-sm md:text-base font-semibold tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            built under pressure · zero regrets
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {hackathons.map((hack, idx) => {
            const badge = BADGE_STYLES[hack.role];
            const imageLeft = idx % 2 === 0;

            return (
              <article
                key={idx}
                ref={el => { cardsRef.current[idx] = el; }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/30 hover:shadow-[0_0_40px_-8px_rgba(129,140,248,0.35)]"
              >
                <div className={`flex flex-col md:flex-row ${!imageLeft ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image block */}
                  {hack.image && (
                    <div className="relative w-full md:w-[42%] min-h-[200px] md:min-h-[240px] flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 pointer-events-none" />
                      <Image
                        src={hack.image}
                        alt={hack.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 42vw"
                      />
                      <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${badge.className}`}>
                          <span>{badge.icon}</span>
                          {badge.label}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/50 text-gray-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
                          {hack.date}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center p-5 md:p-6 lg:p-7">
                    <h3
                      className="text-lg md:text-xl font-bold text-white mb-2 leading-tight tracking-tight"
                      style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.04em' }}
                    >
                      {hack.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {hack.desc}
                    </p>
                    {hack.projectLink ? (
                      <Link
                        href={hack.projectLink}
                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors duration-300 w-fit group/link"
                        style={{ fontFamily: 'var(--font-inconsolata)' }}
                      >
                        <span>View project</span>
                        <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5">→</span>
                      </Link>
                    ) : (
                      <span className="text-gray-500 text-sm font-medium">Details on request</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
