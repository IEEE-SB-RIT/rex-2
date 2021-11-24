import rexLogo from '../../images/rex-logo-white.png';
import { NavLogo } from '../Navbar/NavbarElements';
import {
  FooterSectionContainer,
  FooterLinksContainer,
} from './FooterSectionElements';

export default function FooterNav() {
  return (
    <FooterSectionContainer>
      <NavLogo src={rexLogo} />
      <FooterLinksContainer>
        <div className="links">
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
        </div>
        <div className="links">
          <h3>See More</h3>
          <ul>
            <li>
              <a href="">Talk Sessions</a>
            </li>
            <li>
              <a href="">Workshops</a>
            </li>
            <li>
              <a href="">Culturals</a>
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
        </div>
      </FooterLinksContainer>
    </FooterSectionContainer>
  );
}
