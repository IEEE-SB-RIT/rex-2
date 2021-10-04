import react from "react";
import ContactCard from "../ContactCard";
import { FooterSection} from "./FooterElements";
import {CenterContainer} from "../Center/CenterElements"



export default function Footer()
{
    return (

        <>
            <FooterSection>
                <CenterContainer>
                <ContactCard />
                <h3>Don’t miss your chance! Register for the event now!</h3>
                </CenterContainer>
            </FooterSection>
        </>

    );
}