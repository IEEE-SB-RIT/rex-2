import styled from "styled-components"
import {Section} from "../Center/CenterElements"

export const FooterSection = styled(Section)`
    background: radial-gradient(circle at top,#0F2D4A, #111015);
    min-height: 400px;
    color: white;
`

export const CopyrightContainer = styled.div`
    text-align: center;
    width: 100%;

    & h5{
        opacity: 0.9;
        margin: 0 0 40px;
        font-weight: normal;
    }

    & h5 span a{
        color: white;
    }
`;