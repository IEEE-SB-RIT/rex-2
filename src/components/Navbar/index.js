import React from "react";
import { Nav, NavCenter, NavLogo, NavList, NavListItem } from "./NavbarElements";
import JoinButton from "../Button";

import rexLogo from "../../images/rex-logo-white.png"

export default function Navbar()
{
    return (
        <>
            <Nav>
                <NavCenter>
                    <NavLogo src={rexLogo} />
                    <NavList>
                        <NavListItem>Rex 1.0</NavListItem>
                        <NavListItem>Events</NavListItem>
                        <NavListItem>Team</NavListItem>
                        <NavListItem>Contact Us</NavListItem>
                        <NavListItem><JoinButton style={{fontSize: "14px"}}>Register</JoinButton></NavListItem>
                    </NavList>
                </NavCenter>
            </Nav>
        </>
    );
}