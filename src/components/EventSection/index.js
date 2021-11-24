import React from 'react';
import {
  GradientCard,
  Event,
  PreEventBanner,
  WorkshopBanner,
  TalksBanner,
  CulturalBanner,
} from './EventSectionElements';
import eventpic from '../../images/preRex2.jpeg';
import { Link } from 'react-router-dom';

function bannerClick() {
  window.open(
    'https://docs.google.com/forms/d/e/1FAIpQLScWz7ABN-BC52BGDbJZswoqB-2KJjbh_Aqyy09HomkXB5tHCg/viewform',
  );
}
export default function EventSection() {
  return (
    <>
      <h1>
        <span>E</span>VENTS
      </h1>
      <p>Stay tune till we reveal our amazing and exciting events!</p>
      <svg
        width="244"
        height="394"
        viewBox="0 0 244 394"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="dashed-circle"
          cx="197"
          cy="197"
          r="196.5"
          stroke="#1D4A9B"
          stroke-linecap="round"
          stroke-dasharray="3 10"
        />
      </svg>
      <GradientCard>
        <Event>
          <h3>Pre-events</h3>
          <br />
          <br />
          <PreEventBanner onClick={bannerClick}></PreEventBanner>
        </Event>

        <Event>
          <h3>Workshops</h3>
          <br />
          <br />
          <WorkshopBanner></WorkshopBanner>
        </Event>

        <Event>
          <h3>Talk Sessions</h3>
          <br />
          <br />
          <TalksBanner></TalksBanner>
        </Event>

        <Event>
          <h3>Cultural</h3>
          <br />
          <br />
          <CulturalBanner></CulturalBanner>
        </Event>
      </GradientCard>

      <svg
        width="275"
        height="394"
        viewBox="0 0 275 394"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="dashed-circle"
          cx="78"
          cy="197"
          r="196.5"
          stroke="#BD00FF"
          stroke-linecap="round"
          stroke-dasharray="3 10"
        />
      </svg>
    </>
  );
}
