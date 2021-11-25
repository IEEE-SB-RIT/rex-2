import React from 'react';
import Footer from '../components/Footer';
import { HomeCenter } from '../components/Center';
import Navbar from '../components/Navbar';
import { HomeSection } from '../components/Center/CenterElements';
import HeroSection from '../components/HeroSection';
import Center from '../components/Center';

export default function PreEvents() {
  return (
    <>
      <Center>
        <h1>Pre Events</h1>
        <h5>Be a part of REX and stand a chance to win exciting prizes</h5>
        <div>
          <PreEventCard>
            
          </PreEventCard>
        </div>
      </Center>
    </>
  );
}
