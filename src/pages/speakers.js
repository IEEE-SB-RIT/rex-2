import React from 'react';
import SpeakerCard from '../components/SpeakerCard';
import {SpeakerContent, SpeakerContact} from '../components/SpeakerCard/SpeakerCardElements';
import CenteredLayout from '../Layouts/centered';
import speakerImg from '../images/Speaker-Sreekanth.jpeg';
import {RiGlobalLine, RiMailLine} from 'react-icons/ri'


export default function Speakers(){

    const pageDetails = {
        title: "Speakers",
        subtitle: "Checkout the amazing speakres we have brought for you!"
    }

    return(
        <>
        <CenteredLayout title={pageDetails.title} subtitle={pageDetails.subtitle}>
            <SpeakerCard>
                <img src={speakerImg} alt="" width="250px"/>
                <SpeakerContent >
                <h3>SREEKANTH MADHAVAN <br /> <span>CEO, Kabani Tech</span></h3>
                <p>
                Currently CEO of Kabani Tech, a Maker Space/
                Fab Lab & Product Development Centre at
                Shoranur, Palakkad Dt., Kerala, India.
                Treasurer - IEEE RAS (Robotics & Automation
                Society) Kerala Chapter during the year 2015-16
                and active member of Robotics Society of India
                (RSI).
                Delivered talks to more than 30 Engineering
                Colleges on Robotics and IoT.
                Published 5 international conferences and one
                SCI Indexed International Journal.
                </p>
                <SpeakerContact>
                    <a href="https://www.kabanitech.com"><RiGlobalLine /><span>www.kabanitech.com</span></a>
                    <a href="mailto:sreekanthmadhav@gmail.com"><RiMailLine /><span>sreekanthmadhav@gmail.com</span></a>
                </SpeakerContact>
                </SpeakerContent>
            </SpeakerCard>
        </CenteredLayout>
        </>
    )
}