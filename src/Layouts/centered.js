import React from "react";
import { REXGradientCenter } from "../components/Center";

export default function CenteredLayout(props)
{
    return <>
        <REXGradientCenter>
            <h1>{props.title}</h1>
            <h4>{props.subtitle}</h4>
            {props.children}
        </REXGradientCenter>
    </>
}