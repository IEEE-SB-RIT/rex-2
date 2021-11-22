import styled, {css} from "styled-components";
import { CenterContainer } from "../Center/CenterElements";

export const Nav = styled.nav`
    display: flex;
    align-items: center; 
    width: 100%;
    min-height: 80px; 
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`

export const MobNav = styled.div`
    display: none;
    position: fixed;
    right: 0;
    height: 60px;
    width: 60px;
    background: black;
    border-radius: 50%;
    opacity: 0;
    overflow: hidden;
    z-index: 15;
    transition: all 0.5s ease-in-out;

    ${
        props => props.isOpen && css`
            transform: scale(60);
        `
    }

    @media screen and (max-width: 480px)
    {
        display: block;
    }
`

export const NavCenter = styled(CenterContainer)`
    flex-grow: 1;
    height: 100%;
    display: flex; 
    flex-direction: row;
    align-items: center; 
    justify-content: space-between;
`

export const NavLogo = styled.img`
    height: 40px;

    @media screen and (max-width: 480px){
        height: 28px;
    }
` 

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    @media screen and (max-width: 480px)
    {
        display: none;
    }
`

export const MobNavList = styled.ul`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;

    & li{
        margin: 20px 0;
        font-size: 18px;
    }

    & li button {
        font-size: 18px;
    }
`

export const NavListItem = styled.li`
    font-family: 'Monument-Extended', sans-serif;
    font-size: 14px;
    color: #DFDFDF;
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;

    & button{
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    }
`