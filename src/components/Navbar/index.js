import React, { useState } from 'react';
import {
  Nav,
  MobNav,
  NavCenter,
  NavLogo,
  NavList,
  MobNavList,
  NavListItem,
} from './NavbarElements';
import JoinButton from '../Button';
import Icon from './Icon';

import rexLogo from '../../images/rex-logo-white.png';

function rex1() {
  window.open('https://ieee-sb-rit.github.io/rex-1/');
}

function events() {
  // window.open('https://ieee-sb-rit.github.io/rex-1/');
}
function team() {
  // window.open('https://ieee-sb-rit.github.io/rex-1/');
}
function contactUs() {
  // window.open('https://ieee-sb-rit.github.io/rex-1/');
}

export default function Navbar() {
  const navbarLinks = ['Rex 1.0', 'Events', 'Team', 'Contact Us', 'Register'];

  const [isOpen, setIsOpen] = useState(true);

  const expand = () => {
    setIsOpen(!isOpen);
  };

  const generateNavLinks = () => {
    return navbarLinks.map((link) => {
      if (link === 'Register')
        return (
          <NavListItem>
            <JoinButton>{link}</JoinButton>
          </NavListItem>
        );
      else if (link === 'Rex 1.0')
        return <NavListItem onClick={rex1}>{link}</NavListItem>;
      else if (link === 'Events')
        return <NavListItem onClick={events}>{link}</NavListItem>;
      else if (link === 'Team')
        return <NavListItem onClick={team}>{link}</NavListItem>;
      else if (link === 'Contact Us')
        return <NavListItem onClick={contactUs}>{link}</NavListItem>;
    });
  };

  return (
    <>
      <Nav>
        <NavCenter>
          <NavLogo src={rexLogo} />
          <NavList>{generateNavLinks()}</NavList>
        </NavCenter>
        <Icon onClick={expand} />
      </Nav>
      <MobNav isOpen={true}>
        <MobNavList>{generateNavLinks()}</MobNavList>
      </MobNav>
    </>
  );
}
