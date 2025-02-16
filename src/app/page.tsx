"use client"

import { useState } from 'react';
import React from 'react';
import Layout from './components/Layout/Layout';
import HeroSection from './components/Home/Hero';
import UpdatesSection from './components/Home/UpdatesSection';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div className="min-h-screen text-white relative pt-10">
        <div className="fixed inset-0 bg-gradient-animate z-0"></div>
        <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center relative z-10">
          <HeroSection onWaitlistClick={() => setIsModalOpen(true)} />
          <UpdatesSection />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
