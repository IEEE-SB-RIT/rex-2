import React from "react";
import CenteredLayout from "../Layouts/centered";
import WorkshopCard from "../components/WorkshopCard";
import JoinButton from "../components/Button";
import { ButtonContainer } from "../components/Button/ButtonElements";
import workshop1 from '../images/rex-workshop1.jpeg';
import workshop2 from '../images/rex-workshop2.jpeg';
import workshop3 from '../images/workshop-drone.jpeg';

export default function Workshops()
{
    const pageDetails = {
        title: "Workshops",
        subtitle: "Checkout the workshops we have brought for you!"
    }
    return (<>
        <CenteredLayout title={pageDetails.title} subtitle={pageDetails.subtitle}>
            <WorkshopCard>
                <h3>DRONE - ZONE : Workshop on Drone Software</h3>
                <img src={workshop3} width="200px"/>
                <ButtonContainer>
            <a href="https://bit.ly/drone-zone" target="_blank" rel="noreferrer"><JoinButton>Register Now</JoinButton></a>
          </ButtonContainer>
            </WorkshopCard>
            <WorkshopCard>
                <h3>Introduction to Robotics and Joy of Flying</h3>
                <img src={workshop1} width="200px"/>
                <ButtonContainer>
            <a href="https://www.yepdesk.com/rex-2-0"><JoinButton>Register Now</JoinButton></a>
          </ButtonContainer>
            </WorkshopCard>
            <WorkshopCard>
                <h3>Computer Vision for Robotics</h3>
                <img src={workshop2} height="200px"/>
                <ButtonContainer>
                <a href="https://www.yepdesk.com/rex-2-0"><JoinButton>Register Now</JoinButton></a>
                </ButtonContainer>
            </WorkshopCard>
        </CenteredLayout>
    </>)
}