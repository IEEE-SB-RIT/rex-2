import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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
  const navbarLinks = [{title: 'Rex 1.0', link: '#'}, {title: 'Events', link: 'events'}, {title: 'Team', link: 'team'}, {title: 'Contact Us', link: 'contact'}, {title: 'Register', link: '#'}];

  const generateNavLinks = () => {
    return navbarLinks.map((link) => {
      if (link.title === 'Register')
        return (
          <NavListItem>
            <JoinButton>{link.title}</JoinButton>
          </NavListItem>
        );
      else if (link.title === 'Rex 1.0')
        return <a href="#"><NavListItem>{link.title}</NavListItem></a>;
      else
        return <Link to={link.link}><NavListItem>{link.title}</NavListItem></Link>;
    });
  };

  return (
    <>
      <Nav>
        <NavCenter>
          <NavLogo src={rexLogo} />
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
