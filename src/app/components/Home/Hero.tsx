"use client"

import { motion } from 'framer-motion';
import '~/styles/github-button.css'

const GitHubButton = () => {
  return (
    <a 
      href="https://github.com/dieselftw/bezel" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="github-link"
    >
      <span className="button-icon">
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </span>
      <span className="button-text">Check out on GitHub</span>
    </a>
  );
};

export const ReadMoreButton = () => {
  return (
    <a 
      href="/read-more" 
      className="github-link"
    >
      <span className="button-text">Read More</span>
      <span className="button-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
        </svg>
      </span>
    </a>
  );
};


const HeroSection = () => {
  return (
    <div className="lg:w-1/2 lg:pr-20 mb-16 lg:mb-0">
      <motion.h1 
        className="text-6xl font-black mb-8 leading-tight tracking-tight text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className='syntax-error'>TypeSafe</span>{' '}
        <span className="text-gray-400">LLM APIs for{' '}</span>
        <span className='animated-gradient'>AI Agents</span>
      </motion.h1>
      <motion.p 
        className="text-2xl mb-12 text-gray-500 font-light leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Build AI Agents with ease. Get outputs the way you want.{' '}
        <span className="text-gray-200">Always.</span>
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <GitHubButton/>
      </motion.div>
    </div>
  );
};

export default HeroSection;
