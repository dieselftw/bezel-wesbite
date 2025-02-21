"use client"

import { motion } from 'framer-motion';
import '~/styles/github-button.css'
import { useState } from 'react';

const GitHubButton = () => {
  return (
    <a 
      href="https://github.com/dieselftw/bezel" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="github-link w-64"
    >
      <span className="button-icon w-8">
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </span>
      <span className="button-text">We&apos;re opensource!</span>
    </a>
  );
};

const InstallCommand = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("npm install bezel-ai");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black/30 backdrop-blur-sm border border-gray-800 text-gray-100 px-4 py-2 rounded-lg flex items-center justify-between w-full max-w-lg hover:bg-black/40 transition-all duration-200">
      <code className="font-mono text-sm select-all">npm install bezel-ai</code>
      <button 
        className="ml-2 p-1 hover:bg-gray-800 text-gray-400 hover:text-white rounded-md transition-colors duration-200"
        onClick={handleCopy}
        title="Copy to clipboard"
      >
        {copied ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        )}
      </button>
    </div>
  );
};


const NPMButton = () => {
  return (
    <a 
      href="https://www.npmjs.com/package/bezel" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="npm-link w-64"
    >
      <span className="button-icon w-8">
        <svg height="24" width="48" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
        </svg>
      </span>
      <span className="button-text">Check us out on NPM</span>
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
        className="text-2xl mb-12 text-gray-500 font-light leading-relaxed items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get outputs the way you want.{' '}
        <span className="text-gray-200">Always.</span>
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <InstallCommand/>
      </motion.div>
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 pt-10 items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <GitHubButton/>
        <NPMButton/>
      </motion.div>
    </div>
  );
};

export default HeroSection;
