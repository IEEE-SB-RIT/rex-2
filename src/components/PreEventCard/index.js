import React from 'react';
import { PreEventCardGradientWrapper, PreEventCardWrapper, PreEventCenterContainer } from './PreEventCardElements';

export default function PreEventCard(props)
{
    return (
        
        <PreEventCardGradientWrapper>
        <PreEventCardWrapper>
            {props.children}
        </PreEventCardWrapper>
        </PreEventCardGradientWrapper>
    )
}