import React, {useState} from "react";
import { Nav, MobNav, NavCenter, NavLogo, NavList, MobNavList, NavListItem } from "./NavbarElements";
import JoinButton from "../Button";
import Icon from "./Icon";

import rexLogo from "../../images/rex-logo-white.png"

export default function Navbar()
{
    const navbarLinks = ["Rex 1.0", "Events", "Team", "Contact Us", "Register"];

    const [isOpen, setIsOpen] = useState(false);
    
    const expand = ()=>{
        // setIsOpen(!isOpen);
    }


    const generateNavLinks = ()=>{
        return navbarLinks.map((link)=>{
            if(link === "Register")
                return <NavListItem><JoinButton>{link}</JoinButton></NavListItem>
            else
                return <NavListItem>{link}</NavListItem>
        })
    }

    return (
        <>
            <Nav>
                <NavCenter>
                    <NavLogo src={rexLogo} />
                    <NavList>
                        {generateNavLinks()}
                    </NavList>
                </NavCenter>
                <Icon onClick={expand()}/>
            </Nav>
            <MobNav isOpen={isOpen}>
                    <MobNavList>
                        {generateNavLinks()}
                    </MobNavList>
            </MobNav>
        </>
    );
}