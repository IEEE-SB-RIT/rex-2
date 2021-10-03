import styled from "styled-components"
import {Section} from "../Center/CenterElements"

export const FooterSection = styled(Section)`
    background: radial-gradient(circle at top,#0F2D4A, #111015);
    min-height: 400px;
`

export const QueryCard = styled.div`
    flex: 1;
    width: 100%;
    background: linear-gradient(120deg, #3D1937, #121014, #101624, #101B2F, #101B2F);
    min-height:300px;
    border-radius: 18px;
    padding: 20px 40px;

    & h2{
        color: white;
        font-size: 24px;
    }
`