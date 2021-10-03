import react from "react";
import { FooterSection, QueryCard } from "./FooterElements";
import {CenterContainer} from "../Center/CenterElements"



export default function Footer()
{
    return (

        <>
            <FooterSection>
                <CenterContainer>
                <QueryCard>
                    <h2>Have any Queries?</h2>
                    <p>Feel free to get in touch with us.</p>
                </QueryCard>
                <h3>Don’t miss your chance! Register for the event now!</h3>
                </CenterContainer>
            </FooterSection>
        </>

    );
}