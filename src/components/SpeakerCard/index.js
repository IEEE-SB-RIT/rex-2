import React from "react";
import { SpeakerCardWrapper, SpeakerCardGradientWrapper } from "./SpeakerCardElements";

export default function SpeakerCard(props){
    return (
        <>
        <SpeakerCardGradientWrapper>
        <SpeakerCardWrapper>
            {props.children}
        </SpeakerCardWrapper>
        </SpeakerCardGradientWrapper>

        </>
    )
}