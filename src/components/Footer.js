'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p 
            className="text-gray-400 text-sm md:text-base mb-2"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Made with ❤️
          </p>
          <p 
            className="text-indigo-400 text-xs md:text-sm font-medium"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            {/* Funny line that changes on hover */}
            <span className="inline-block transition-all duration-300 hover:scale-105">
              <span className="group cursor-pointer">
                <span className="group-hover:hidden">console.log("You're still here? Impressive! 🎉");</span>
                <span className="hidden group-hover:inline">console.log("Thanks for scrolling this far! 🚀");</span>
              </span>
            </span>
          </p>
          <div className="mt-4 pt-4 border-t border-white/10">
            <p 
              className="text-gray-500 text-xs"
              style={{ fontFamily: 'var(--font-inconsolata)' }}
            >
              © 2025 Shubham Chede. All bugs are features in disguise 🐛✨
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 