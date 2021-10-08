import rexLogo from "../../images/rex-logo-white.png";
import { NavLogo } from "../Navbar/NavbarElements";
import { FooterSectionContainer, FooterLinksContainer } from "./FooterSectionElements";

export default function FooterNav()
{
    return(
        <FooterSectionContainer>
            <NavLogo src={rexLogo} />
            <FooterLinksContainer>
                <div className="links">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="https://ieeesbrit.com" target="_blank" rel="noopener noreferrer">IEEE SB RIT</a></li>
                        <li><a href="https://ieeesbrit.com" target="_blank" rel="noopener noreferrer">IEEE RAS SBC RIT</a></li>
                        <li><a href="https://ieeesbrit.com" target="_blank" rel="noopener noreferrer">REX 1.0</a></li>
                    </ul>
                </div>
                <div className="links">
                    <h3>See More</h3>
                    <ul>
                        <li><a href="https://ieeesbrit.com" target="_blank" rel="noopener noreferrer">Panel Discussions</a></li>
                        <li><a href="https://ieeesbrit.com" target="_blank" rel="noopener noreferrer">Workshops</a></li>
                        <li><a href="https://ieeesbrit.com" target="_blank" rel="noopener noreferrer">Team</a></li>
                    </ul>
                </div>
            </FooterLinksContainer>
        </FooterSectionContainer>
    )
}