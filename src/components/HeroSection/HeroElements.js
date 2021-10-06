import styled from "styled-components";
import { CenterContainer } from "../Center/CenterElements";


export const HeroContainer = styled.div`
    width: 100%;
    position: relative;


    & h1, h2, p {
        z-index: 5;
    }

    @media screen and (max-width: 480px)
    {
        margin-bottom: 100px; 
    }
`

export const HeroCenter = styled(CenterContainer)`
    min-height: 100vh;
    font-size: 18px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-algin: center;
    padding: 250px 20px 0 20px;
`

export const HeroContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1{
        font-size: 36px;
        margin-bottom: 20px;
        text-align: center;

        @media screen and (max-width: 480px)
        {
            width: 100%;
            text-align: center;
        }

    }

    & p{
        width: 64%;
        font-size: 18px;
        line-height: 1.4;
        text-align: center;
        margin-bottom: 50px;

        @media screen and (max-width: 480px)
        {
            width: 100%;
            text-align: center;
            font-size: 16px;
        }
    }
`

export const LiveInContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2{
        margin-bottom: 40px;
    }

    & h2:nth-of-type(2){
        @media screen and (max-width: 480px)
        {
            font-size: 22px;
            line-height: 1.8;
            margin-top: 50px; 
        } 
    }

    & h2 span{
        font-family: 'DM Sans', sans-serif;
    }

    @media screen and (max-width: 480px)
    {
        margin-top: 112px;
    }
`

export const Span = styled.span`
    color: #BD00FF;
`
