import styled from "styled-components";

export const CountDownWrap = styled.div`
    width: 100%;

    & h2{
        color: #BD00FF;
        font-size: 24px;

        @media screen and (max-width: 480px)
        {
            line-height: 1.6;
        }
    }

    & h2 span{
        font-family: "Monument-Extended", sans-serif !important;
        font-size: 36px;
        color: white;
    }
`

export const MobileBreaks = styled.br`
    display: none;

    @media screen and (max-width: 480px)
    {
        display: block;
    }
`