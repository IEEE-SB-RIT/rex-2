import React from "react";
import { QueryCard, Column, VolunteerContactInfo, Person } from "./ContactCardElements";

export default function ContactCard()
{
    return (

        <>
            <QueryCard>
                <Column>
                <h1>Have any Queries?</h1>
                <p>Feel free to get in touch with us.</p>
                </Column>
                <Column>
                    <p>Get in touch with our very friendly volunteers</p>
                    <VolunteerContactInfo>
                        <Person>
                            <p><b>Jake Peralta</b></p>
                            <p>jake@nine-nine.org<br/>+91 1234567890</p>
                        </Person>
                        <Person>
                            <p><b>Jonas Kahnwald</b></p>
                            <p>jonas@dark.org<br/>+91 1234567890</p>
                        </Person>
                    </VolunteerContactInfo>
                    <hr />
                    <p>Or send us an email regarding your queries @ <strong>ieeesb.ritk@gmail.com</strong></p>
                </Column>
            </QueryCard>
        </>

    );
}