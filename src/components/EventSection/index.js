import React from "react";
import { GradientCard, Event } from "./EventSectionElements";

export default function EventSection()
{
    return (
        <>  
                    
                    <h1><span>E</span>VENTS</h1>
                    <p>Stay tune till we reveal our amazing and exciting events!</p>
                    
                    <svg width="244" height="394" viewBox="0 0 244 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle class="dashed-circle" cx="197" cy="197" r="196.5" stroke="#1D4A9B" stroke-linecap="round" stroke-dasharray="3 10"/>
                    </svg>


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
                    
                    <svg width="275" height="394" viewBox="0 0 275 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle class="dashed-circle" cx="78" cy="197" r="196.5" stroke="#BD00FF" stroke-linecap="round" stroke-dasharray="3 10"/>
                    </svg>


        </>
    );
}