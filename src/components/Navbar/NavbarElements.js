import styled, { css } from 'styled-components';
import { CenterContainer } from '../Center/CenterElements';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const MobNav = styled.div`
  position: fixed;
  background: black;
  overflow: hidden;
  z-index: 15;
  transition: all 0.5s ease-in-out;
  top: 0;
  left: 0;
  opacity: ${({isOpen})=>(isOpen?'1':'0')};
  top: ${({isOpen})=>(isOpen?'0':'-100%')};

`;

export const NavCenter = styled(CenterContainer)`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.img`
  height: 40px;
  object-fit: contain;

  @media screen and (max-width: 480px) {
    height: 28px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  & a{
    text-decoration: none;
  }


  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobNavList = styled.ul`
  width: 100vw;
  height: 100vh;
  display: flex;
  // position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  z-index: 30;
  list-style: none;
  & a{
    text-decoration: none;
  }

  & li {
    margin: 20px 0;
    font-size: 18px;
  }

  & li button {
    font-size: 18px;
  }
`;

export const NavListItem = styled.li`
  font-family: 'Monument-Extended', sans-serif;
  font-size: 14px;
  color: #dfdfdf;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }

  & button {
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`;
