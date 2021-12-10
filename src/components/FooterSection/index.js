import rexLogo from '../../images/rex-logo-white.png';
import { NavLogo } from '../Navbar/NavbarElements';
import {
  FooterSectionContainer,
  FooterLinksContainer,
  LinksContainer
} from './FooterSectionElements';
import { HashLink } from 'react-router-hash-link';


export default function FooterNav() {
  return (
    <FooterSectionContainer>
      <NavLogo src={rexLogo} />
      <FooterLinksContainer>
        <LinksContainer>
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a
                href="https://ieeesbrit.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                IEEE SB RIT
              </a>
            </li>
            <li>
              <a
                href="https://ras.ieeesbrit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                IEEE RAS SBC RIT
              </a>
            </li>
            <li>
              <a
                href="https://ieee-sb-rit.github.io/rex-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                REX 1.0
              </a>
            </li>
          </ul>
        </LinksContainer>
        <LinksContainer>
          <h3>See More</h3>
          <ul>
            <li>
              <HashLink to="/#events">Talk Sessions</HashLink>
            </li>
            <li>
              <HashLink to="/#events">Workshops</HashLink>
            </li>
            <li>
              <HashLink to="/speakers">Speakers</HashLink>
            </li>
            <li>
              <a
                href="https://ras.ieeesbrit.com/#execom"
                target="_blank"
                rel="noopener noreferrer"
              >
                Team
              </a>
            </li>
          </ul>
        </LinksContainer>
      </FooterLinksContainer>
    </FooterSectionContainer>
  );
}
