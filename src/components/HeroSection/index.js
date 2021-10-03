import React from "react";
import CountDown from "../CountDown";
import ScrollIcon from "../ScrollIcon";
import { HeroContainer, HeroCenter, HeroContentWrap, LiveInContent, Span } from "./HeroElements";

export default function HeroSection()
{
    return (

        <>
            <HeroContainer>
                <HeroCenter>
                    <HeroContentWrap>
                    
                    <h1><Span>R</Span>OBOTIC <Span>EX</Span>PERIENCE PROGRAM</h1>
                    <p>A month-long virtual robotics specialization program, a golden opportunity for enthusiasts to pursue their passion and interact with reputed personalities from the field of robotics and automation.</p>
                    </HeroContentWrap>

                    <LiveInContent>
                        <h2>LIVE <span>in</span></h2>
                        <CountDown date="Jan 5, 2022 15:37:25" />
                        <h2> <span>Hurry! Only</span> LIMITED SEATES LEFT</h2>
                    </LiveInContent>

                    <ScrollIcon />

                </HeroCenter>
            </HeroContainer>
        </>

    );
}