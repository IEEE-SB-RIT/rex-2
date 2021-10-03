import styled from "styled-components";
import { CenterContainer } from "../Center/CenterElements";


export const HeroContainer = styled.div`
    width: 100%;
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
    padding: 60px 20px 0 20px;
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
            text-align: left;
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
            text-align: left;
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

    & h2 span{
        font-family: 'DM Sans', sans-serif;
    }
`

export const Span = styled.span`
    color: #BD00FF;
`
