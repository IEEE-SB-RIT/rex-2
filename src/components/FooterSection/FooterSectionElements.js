import styled from "styled-components";

export const FooterSectionContainer = styled.section`
    margin-top: 120px;
    margin-bottom: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    & img{
        height: 40px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 480px)
    {
        flex-direction: column;
    }
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
                font-size: 15px;
                line-height: 24px;
                text-decoration: none;
            }

            & a:hover{
                transition: color 0.3s ease;
                color: #4d67fc;
            }
        }
    }

    @media screen and (max-width: 480px)
    {
        flex-direction: column ;
        width: 100%;
    }
`

export const LinksContainer = styled.div`
    @media screen and (max-width: 480px)
    {
        width: 100%;
        margin-top: 60px;
        padding: 0 40px;
    }
`;