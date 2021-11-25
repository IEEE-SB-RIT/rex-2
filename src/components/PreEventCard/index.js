import React from 'react';
import { preEventCardWrapper } from './PreEventCardElements';

export default function(props)
{
    return (
        <PreEventCardWrapper>
            {props.children}
        </PreEventCardWrapper>
    )
}