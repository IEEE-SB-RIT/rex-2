import React from 'react';
import Footer from '../components/Footer';
import { HomeCenter } from '../components/Center';
import Navbar from '../components/Navbar';
import { HomeSection } from '../components/Center/CenterElements';
import HeroSection from '../components/HeroSection';
import {REXGradientCenter} from '../components/Center';
import {RiCameraFill, RiCodeSSlashFill, RiShape2Line, RiPencilFill} from 'react-icons/ri'
import JoinButton from '../components/Button';
import PreEventCard from '../components/PreEventCard'
import { PreEventCenterContainer } from '../components/PreEventCard/PreEventCardElements';

export default function PreEvents() {

  const regLink = "https://docs.google.com/forms/d/e/1FAIpQLScWz7ABN-BC52BGDbJZswoqB-2KJjbh_Aqyy09HomkXB5tHCg/viewform";

  return (
    <>
    
      <REXGradientCenter>
        <h1>Pre Events</h1>
        <p>Be a part of REX and stand a chance to win exciting prizes</p>
        <PreEventCenterContainer>
          <PreEventCard>
            <RiCameraFill  />
            <h3>Photography Competition</h3>
            <a href={regLink}><JoinButton>Register Now</JoinButton></a>
          </PreEventCard>
          <PreEventCard>
            <RiShape2Line />
            <h3>Poster Design Competition</h3>
            <a href={regLink}><JoinButton>Register Now</JoinButton></a>
          </PreEventCard>
          <PreEventCard>
            <RiCodeSSlashFill />
            <h3>Web Design Competition</h3>
            <a href={regLink}><JoinButton>Register Now</JoinButton></a>
          </PreEventCard>
          <PreEventCard>
            <RiPencilFill />
            <h3>Blogging Competition</h3>
            <a href={regLink}><JoinButton>Register Now</JoinButton></a>
          </PreEventCard>
          </PreEventCenterContainer>
      </REXGradientCenter>
      
    </>
  );
}
