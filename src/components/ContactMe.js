'use client';

import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: data.message || 'Message sent successfully!' }
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          info: { error: true, msg: data.message || 'Something went wrong' }
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again later.' }
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="text-[7vw] md:text-[3vw] font-extrabold text-indigo-400 drop-shadow-lg tracking-widest text-center leading-none mb-2"
          style={{ fontFamily: 'var(--font-bebas)', letterSpacing: '0.12em', textShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
        >
          GET IN TOUCH
        </h2>
        <p 
          className="text-indigo-400 text-base md:text-lg font-bold tracking-wide text-center max-w-lg mx-auto"
          style={{ fontFamily: 'var(--font-inconsolata)' }}
        >
          Have a project in mind or want to collaborate? Send me a message and let's create something amazing together.
        </p>
      </div>

      {status.info.error && (
        <div className="mb-8 p-4 glass border border-red-500/30 rounded-lg text-red-400 text-center">
          <p style={{ fontFamily: 'var(--font-inconsolata)' }}>{status.info.msg}</p>
        </div>
      )}
      
      {status.submitted && !status.info.error && (
        <div className="mb-8 p-4 glass border border-green-500/30 rounded-lg text-green-400 text-center">
          <p style={{ fontFamily: 'var(--font-inconsolata)' }}>{status.info.msg}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label 
            htmlFor="name" 
            className="block text-sm text-indigo-400 font-medium"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors duration-300"
            placeholder="Your name"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          />
        </div>

        <div className="space-y-2">
          <label 
            htmlFor="email" 
            className="block text-sm text-indigo-400 font-medium"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors duration-300"
            placeholder="your.email@example.com"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label 
            htmlFor="subject" 
            className="block text-sm text-indigo-400 font-medium"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            SUBJECT
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors duration-300"
            placeholder="What's this about?"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label 
            htmlFor="message" 
            className="block text-sm text-indigo-400 font-medium"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 glass border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Tell me about your project..."
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          />
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            disabled={status.submitting}
            className="px-8 py-4 glass border border-indigo-400 text-indigo-400 rounded-lg hover:bg-indigo-400/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      {/* Contact Info */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 
            className="text-white font-bold mb-2"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            EMAIL
          </h3>
          <p 
            className="text-gray-300"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            shubhamchede1602@gmail.com
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 
            className="text-white font-bold mb-2"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            LOCATION
          </h3>
          <p 
            className="text-gray-300"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Goa, India
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 
            className="text-white font-bold mb-2"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            AVAILABILITY
          </h3>
          <p 
            className="text-gray-300"
            style={{ fontFamily: 'var(--font-inconsolata)' }}
          >
            Open to opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;