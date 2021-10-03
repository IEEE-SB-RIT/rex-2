import React, {useState, useEffect} from "react";
import { CountDownWrap } from "./CountDownElements";

export default function CountDown(props)
{
    let countDownDate = new Date(props.date).getTime();

    const [count, setCount] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }); 

    const tick = ()=>{

        let now = new Date().getTime();

        let remaining = countDownDate - now;

        if(remaining > 0){
        setCount({
            days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
            hours: Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((remaining % (1000 * 60)) / 1000)

        })
        }

    }

    useEffect(
        ()=>{
            const timer = setInterval(tick, 1000);

            return () => clearInterval(timer)
        }
        ,
    );


    return (
        <>
        <CountDownWrap>
        <h2>
            <span >{count.days}</span> Days:&nbsp; 
            <span >{count.hours}</span> Hours:&nbsp; 
            <span >{count.minutes}</span> Minutes:&nbsp; 
            <span >{count.seconds}</span> Seconds
        </h2>
        </CountDownWrap>
        </>
    )
}