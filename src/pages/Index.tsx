
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SocialArea from '@/components/SocialArea';
import Leaderboard from '@/components/Leaderboard';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SocialArea />
        <Leaderboard />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
