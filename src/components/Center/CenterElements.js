import styled from "styled-components";

import rexBg from "../../images/rex-bg-all.jpg";

export const Section = styled.div`
    width: 100%;
    text-align: center;
    
`

export const CenterContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1{
        color: white;
    }

    & h1 span {
        color: #BD00FF;
    }
`

export const HomeSection = styled(Section)`
    background: url(${rexBg});
    background-repeat: no-repeat;
    background-size: cover;
`