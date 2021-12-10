import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
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

export default function Navbar(props) {
  const navbarLinks = [{title: 'Rex 1.0', link: 'rex.ieeesbrit.com/2020'}, {title: 'Events', link: '/#events'}, {title: 'Speakers', link: '/speakers'},{title: 'Contact Us', link: '/#contact'}, {title: 'Register', link: 'https://www.yepdesk.com/rex-2-0'}];

  const generateNavLinks = () => {
    return navbarLinks.map((link) => {
      if (link.title === 'Register')
        return (
          <NavListItem>
            <a href="https://www.yepdesk.com/rex-2-0"><JoinButton>{link.title}</JoinButton></a>
          </NavListItem>
        );
      else if (link.title === 'Rex 1.0')
        return <a href="https://rex.ieeesbrit.com/2020/"><NavListItem>{link.title}</NavListItem></a>;
      else
        return <HashLink to={link.link} smooth={true} duration={500} exact={true}><NavListItem>{link.title}</NavListItem></HashLink>;
    });
  };

  return (
    <>
      <Nav>
        <NavCenter>
          <Link to="/"> <NavLogo src={rexLogo} /> </Link>
          <NavList>{generateNavLinks()}</NavList>
        </NavCenter>
        <Icon toggle={props.toggle}/>
      </Nav>
      <MobNav isOpen={props.isOpen} >
        <MobNavList onClick={props.toggle}>{generateNavLinks()}</MobNavList>
      </MobNav>
    </>
  );
}
