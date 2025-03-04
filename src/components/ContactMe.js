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
    <div id="contact" className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="text-gray-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-white tracking-wider">GET IN TOUCH</h2>
        </div>
        <p className="text-gray-400 max-w-lg mx-auto">
          Have a project in mind or want to collaborate? Send me a message and let's create something amazing together.
        </p>
      </div>

      {status.info.error && (
        <div className="mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-500 text-center">
          <p>{status.info.msg}</p>
        </div>
      )}
      
      {status.submitted && !status.info.error && (
        <div className="mb-8 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-500 text-center">
          <p>{status.info.msg}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm text-gray-400 font-medium">
            NAME
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full bg-transparent border-b border-gray-800 focus:border-green-500 py-2 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-400 font-medium">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email address"
            className="w-full bg-transparent border-b border-gray-800 focus:border-green-500 py-2 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="subject" className="block text-sm text-gray-400 font-medium">
            SUBJECT
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="Subject of your message"
            className="w-full bg-transparent border-b border-gray-800 focus:border-green-500 py-2 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300"
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="block text-sm text-gray-400 font-medium">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
            rows="6"
            className="w-full bg-transparent border-b border-gray-800 focus:border-green-500 py-2 text-white placeholder-gray-600 focus:outline-none transition-colors duration-300 resize-none"
          />
        </div>
        
        <div className="md:col-span-2 flex justify-center mt-8">
          <button 
            type="submit" 
            disabled={status.submitting}
            className={`bg-transparent border-2 border-green-600 hover:bg-green-900/30 text-green-500 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
              status.submitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {status.submitting && (
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            <span>{status.submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
          </button>
        </div>
      </form>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h3 className="text-white font-medium">EMAIL</h3>
          <p className="text-gray-400">shubhamchede@gmail.com</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-white font-medium">LOCATION</h3>
          <p className="text-gray-400">Goa</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-white font-medium">AVAILABILITY</h3>
          <p className="text-gray-400">Open to new opportunities</p>
        </div>
      </div>

      <div className="mt-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Shubham Chede. All rights reserved.
      </div>
    </div>
  );
};

export default ContactMe;