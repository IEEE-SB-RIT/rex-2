import React from "react";
import { GradientCard, Event } from "./EventSectionElements";

export default function EventSection()
{
    return (
        <>
                    <h1><span>E</span>VENTS</h1>
                    <p>Stay tune till we reveal our amazing and exciting events!</p>

                    <GradientCard>
                        <Event>
                            <h3>Pre-events</h3>                            
                        </Event>
                    
                        <Event>
                            <h3>Panel Discussions</h3>                            
                        </Event>
                    
                        <Event>
                            <h3>Workshops</h3>                            
                        </Event>

                    </GradientCard>

        </>
    );
}