import React from "react";
import {Mouse, Line, P, IconWrap} from "./ScrollIconElements.js";

export default function ScrollIcon()
{
    return (
        <>
            <IconWrap>
            <Mouse>
                <Line></Line>
            </Mouse>
            <P>Scroll</P>
            </IconWrap>
        </>
    );
}