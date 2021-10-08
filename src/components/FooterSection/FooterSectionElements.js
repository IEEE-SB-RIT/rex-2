import styled from "styled-components";

export const FooterSectionContainer = styled.section`
    margin-top: 120px;
    margin-bottom: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 55%;

    & h3 {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: left;
    }

    & ul {
        list-style: none;
        text-align: left;

        & li {
            margin-top: 18px;

            & a {
                color: white;
                font-family: 'DM Sans', sans-serif;
                font-size: 18px;
                line-height: 24px;
            }
        }
    }
`