import React from 'react';
import Footer from '../components/Footer';
import { HomeCenter } from '../components/Center';
import Navbar from '../components/Navbar';
import { HomeSection } from '../components/Center/CenterElements';
import HeroSection from '../components/HeroSection';

export default function PreEvents() {
  return (
    <>
      <Navbar />
      <HomeSection>
        <HeroSection />
      </HomeSection>
      <Footer />
    </>
  );
}
