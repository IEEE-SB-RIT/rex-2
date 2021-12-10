import styled from "styled-components";
import{PreEventCardGradientWrapper, PreEventCardWrapper } from "../PreEventCard/PreEventCardElements";


export const SpeakerCardGradientWrapper = styled(PreEventCardGradientWrapper)`
    flex-basis: calc(100% - 40px);
`;

export const SpeakerCardWrapper = styled(PreEventCardWrapper)`
    
    flex-direction: row;

    @media screen and (max-width: 480px)
    {
        flex-direction: column;
    }

    & img{
        border-radius: 8px;
        border: 1px solid #1D4A9B;
    }

    & h3{
        text-align: left;
        font-size: 20px;
        letter-spacing: 2px;
    }

    & h3 span{
        font-family: 'DM Sans', sans-serif;
        opacity: 0.9;
        letter-spacing: 0px;
        font-weight: normal;
        font-style: italic;
        font-size: 16px;
    }

    & p{
        text-align: left;
        opacity: 0.8;
        font-size: 16px;
        line-height: 1.5;

        @media screen and (max-width: 480px)
        {
            font-size: 16px;
        }
    }

    &:hover svg{
        filter: none;
    }
`;

export const SpeakerContent = styled.div`
    margin-left: 30px;
    width: 80%;

    @media screen and (max-width: 480px)
    {
        margin: 30px 0 0 0;
        width: 100%;
    }
`;

export const SpeakerContact = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 14px;

    @media screen and (max-width: 480px){
        flex-direction: column;
        align-items: start;
        margin-top: 30px;
    }

    & a {
        text-decoration: none;
        color: white;
    }

    & a span{
        position: relative;
        bottom: 13px;
        margin-right: 50px;

        @media screen and (max-width: 480px){
            margin-right: 0;
        }
    }


    & svg{
        top: 0;
        font-size: 35px;
        color: white;
        padding: 8px;
        background: #1D4A9B;
        margin: 20px 10px 0px;

        &:first-of-type{
            margin-left: 0;
        }
    }

    & a:hover svg{
        filter: brightness(1.8);
    }
`