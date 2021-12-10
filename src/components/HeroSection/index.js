import React, { useEffect } from 'react';
import CountDown from '../CountDown';
import ScrollIcon from '../ScrollIcon';
import JoinButton from "../Button";
import { ButtonContainer } from "../Button/ButtonElements";
import {
  HeroContainer,
  HeroVideo,
  HeroCenter,
  HeroContentWrap,
  LiveInContent,
  Span,
  MobRegButton
} from './HeroElements';
import video from '../../video/rex.m4v';

export default function HeroSection() {

  useEffect(()=>{
    const video = document.querySelector('#heroVideo');
    let isPlaying = video.play() 
    console.log(isPlaying);
    if (isPlaying !== undefined) {
      isPlaying.then(_ => {
        // Autoplay started!
      }).catch(error => {
        // Autoplay not allowed!
        // Mute video and try to play again
        video.muted = true;
        video.play();
    
        // Show something in the UI that the video is muted
      });
    }
  })
   

  return (
    <>
      <HeroVideo id="heroVideo" autoPlay={true} loop={true} src={video} />
      <HeroContainer>
        <HeroCenter>
          <HeroContentWrap>
            <h1>
              <Span>R</Span>OBOTIC <Span>EX</Span>PERIENCE PROGRAM
            </h1>
            <p>
              A month-long hybrid robotics specialization program, a golden
              opportunity for enthusiasts to pursue their passion and interact
              with reputed personalities from the field of robotics and
              automation.
            </p>
          </HeroContentWrap>

          <MobRegButton>
          <ButtonContainer>
            <a href="https://www.yepdesk.com/rex-2-0"><JoinButton>Register Now</JoinButton></a>
          </ButtonContainer>
          </MobRegButton>

          <LiveInContent>
            <h2>
              LIVE <span>in</span>
            </h2>
            <CountDown date="Dec 3, 2021 09:00:00" />
            <h2>
              {' '}
              <span>Hurry! Only</span> LIMITED SEATS LEFT
            </h2>
          </LiveInContent>

          <ScrollIcon />
        </HeroCenter>
      </HeroContainer>
    </>
  );
}
