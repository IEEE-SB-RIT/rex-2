import React from 'react';
import Footer from '../components/Footer';
import { HomeCenter } from '../components/Center';
import Navbar from '../components/Navbar';
import { HomeSection } from '../components/Center/CenterElements';
import HeroSection from '../components/HeroSection';
import Center from '../components/Center';
import {RiCamera3Line} from 'react-icons/ri'
import JoinButton from '../components/Button';

export default function PreEvents() {
  return (
    <>
      <Center>
        <h1>Pre Events</h1>
        <h5>Be a part of REX and stand a chance to win exciting prizes</h5>
        <div>
          <PreEventCard>
            <RiCamera3Line />
            <h3>Photography Competition</h3>
            <JoinButton>Register Now</JoinButton>
          </PreEventCard>
          <PreEventCard>
            <RiCamera3Line />
            <h3>Poster Design Competition</h3>
            <JoinButton>Register Now</JoinButton>
          </PreEventCard>
          <PreEventCard>
            <RiCamera3Line />
            <h3>Web Design Competition</h3>
            <JoinButton>Register Now</JoinButton>
          </PreEventCard>
          <PreEventCard>
            <RiCamera3Line />
            <h3>Blogging Competition</h3>
            <JoinButton>Register Now</JoinButton>
          </PreEventCard>
        </div>
      </Center>
    </>
  );
}
