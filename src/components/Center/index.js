import React from "react";
import {Section, CenterContainer, HomeSection} from "./CenterElements"

//center component
export default function Center(props)
{
    return (
        <Section>
            <CenterContainer>
                {props.children}
            </CenterContainer>
        </Section>
    );
}


//Special center component for Home page background
export function HomeCenter(props)
{
    return (
        <HomeSection>
            <CenterContainer>
                {props.children}
            </CenterContainer>
        </HomeSection>
    );
}