import React from 'react';
import {
  QueryCard,
  Column,
  VolunteerContactInfo,
  Person,
} from './ContactCardElements';

export default function ContactCard() {
  return (
    <>
      <QueryCard id="contact">
        <Column>
          <h1>Have any Queries?</h1>
          <p>Feel free to get in touch with us.</p>
        </Column>
        <Column>
          <p>Get in touch with our very friendly volunteers</p>
          <VolunteerContactInfo>
            <Person>
              <p>
                <b>Abdul Ahad</b>
              </p>
              <p>
                abdulahad01@ieee.org
                <br />
                +91 6238792719
              </p>
            </Person>
            <Person>
              <p>
                <b>Sidharth S</b>
              </p>
              <p>
                sidharth248@ieee.org
                <br />
                +91 9383429474
              </p>
            </Person>
          </VolunteerContactInfo>
          <hr />
          <p>
            Or send us an email regarding your queries @{' '}
            <strong>ieeesb.ritk@gmail.com</strong>
          </p>
        </Column>
      </QueryCard>
    </>
  );
}
