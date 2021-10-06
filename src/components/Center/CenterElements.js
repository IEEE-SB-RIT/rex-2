import styled from "styled-components";

import rexBg from "../../images/rex-bg-all.jpg";

export const Section = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    
    & svg {
        position: absolute;
        right: 0;
        top: 50%;
        
    }

    & svg:nth-of-type(2) {
        position: absolute;
        left: 0;
        top: 76%;
        
    }

`

export const CenterContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1{
        color: white;
        z-index: 5;
    }

    & h1 span {
        color: #BD00FF;
    }

    & p{
        z-index: 5;
    }
`

export const HomeSection = styled(Section)`
    background: url(${rexBg});
    background-repeat: no-repeat;
    background-size: cover;
`