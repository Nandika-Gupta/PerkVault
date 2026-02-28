import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Dashboard from '../sections/Dashboard';
import Analytics from '../sections/Analytics';
import OCRSection from '../sections/OCRSection';
import SMSSection from '../sections/SMSSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Analytics />
        <OCRSection />
        <SMSSection />
      </main>
      <Footer />
    </div>
  );
}
