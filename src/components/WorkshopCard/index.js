import React from 'react';
import { WorkshopCardWrapper } from './WorkshopCardElements';

export default function WorkshopCard(props)
{
    return (<>
        <WorkshopCardWrapper>
            {props.children}
        </WorkshopCardWrapper>
    </>);
}