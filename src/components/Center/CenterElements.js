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

        @media screen and (max-width: 480px)
        {
            top: 50%;
        }
        
    }

    & svg:nth-of-type(2) {
        position: absolute;
        left: 0;
        top: 76%;

        @media screen and (max-width: 480px)
        {
            top: 88%;
        }
        
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
    position: relative;
    overflow:hidden;

`

export const REXGradientSection = styled(Section)`
    background: url(${rexBg});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 180px 0 150px 0;
    color: white;

    & h1{
        color: white;
        
        margin-bottom: 20px;
    }

    & h4{
        margin-bottom: 30px;
    }

    & p {
        
        @media screen and (max-width: 480px)
        {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 480px)
    {
        padding: 180px 20px 150px 20px;
    }

`