"use client"

import React from 'react';
import Layout from './components/Layout/Layout';
import HeroSection from './components/Home/Hero';
import UpdatesSection from './components/Home/UpdatesSection';

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen text-white relative pt-10">
        <div className="fixed inset-0 bg-gradient-animate z-0"></div>
        <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center relative z-10">
          <HeroSection/>
          <UpdatesSection />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
