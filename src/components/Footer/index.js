import ContactCard from "../ContactCard";
import { FooterSection } from "./FooterElements";
import {CenterContainer} from "../Center/CenterElements";
import JoinButton from "../Button";
import { ButtonContainer } from "../Button/ButtonElements";
import FooterNav from "../FooterSection";

export default function Footer()
{
    return (

        <>
            <FooterSection>
                <CenterContainer>
                <ContactCard />
                <h3>Don’t miss your chance! Register for the event now!</h3>
                <ButtonContainer>
                    <JoinButton>Register Now</JoinButton>
                </ButtonContainer>
                <FooterNav />
                </CenterContainer>
            </FooterSection>
        </>

    );
}