import React from "react";
import styled from "styled-components";

export default function Icon({toggle})
{
    return (
        <>
            <TransparentButton onClick={toggle}>
                <HamburgerIcon/>
        </TransparentButton>
        </>
    )
}

const TransparentButton = styled.button`
    border: none;
    background: transparent;
`

const HamburgerIcon = styled.div`
    display: none;
    position: relative;
    margin: 20px;
    height: 2px;
    width: 20px;
    background-color: white;
    z-index: 16;

    &::after, &::before {
        content: "";
        display: block;
        height: 2px;
        width: 10px;
        background: white;
        position: absolute;
    }

    &::after{
        top: 8px;
        right: 0;
    }

    &::before{
        bottom: 8px;
    }

    @media screen and (max-width: 768px)
    {
        display: block;
    } 
`