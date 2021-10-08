import styled from "styled-components";
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
`

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
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