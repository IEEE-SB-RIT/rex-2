import styled from 'styled-components';

export const preEventCardWrapper = styled.div`
    margin: 0 20px;
    flex-basis: calc(30% - 40px);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px)
    {
        flex-basis: 100%;
    }
`;