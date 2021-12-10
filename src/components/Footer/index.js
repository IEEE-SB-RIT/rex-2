import ContactCard from '../ContactCard';
import { FooterSection, CopyrightContainer } from './FooterElements';
import { CenterContainer } from '../Center/CenterElements';
import JoinButton from '../Button';
import { ButtonContainer } from '../Button/ButtonElements';
import FooterNav from '../FooterSection';
export default function Footer() {
  return (
    <>
      <FooterSection>
        <CenterContainer>
          <ContactCard />
          <h3>Don’t miss your chance! Register for the event now!</h3>
          <ButtonContainer>
            <a href="https://www.yepdesk.com/rex-2-0"><JoinButton>Register Now</JoinButton></a>
          </ButtonContainer>
          <FooterNav />
          <CopyrightContainer>
              <h5>Copyright &copy; 2022 Robotics Experience Program</h5>
          </CopyrightContainer>
        </CenterContainer>
      </FooterSection>
    </>
  );
}
