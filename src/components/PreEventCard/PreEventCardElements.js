import styled from 'styled-components';
import { CenterContainer } from '../Center/CenterElements';

export const PreEventCenterContainer = styled(CenterContainer)`
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 0;
`

export const PreEventCardGradientWrapper = styled.div`
    background: linear-gradient(240deg, #1D4A9B, #830A74);
    border-radius: 8px;
    flex-basis: calc(30% - 40px);
    margin: 14px;
    &:hover{
        transform: translateY(-10px);
        box-shadow:
  0px 1.7px 2.2px rgba(0, 0, 0, 0.031),
  0px 4.1px 5.3px rgba(0, 0, 0, 0.044),
  0px 7.8px 10px rgba(0, 0, 0, 0.055),
  0px 13.8px 17.9px rgba(0, 0, 0, 0.066),
  0px 25.9px 33.4px rgba(0, 0, 0, 0.079),
  0px 62px 80px rgba(0, 0, 0, 0.11)
;
        transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    }

    @media screen and (max-width: 480px)
    {
        flex-basis: 100%;
    }
`

export const PreEventCardWrapper = styled.div`
    margin: 2px;
    border-radius: 8px;
    display: flex;
    color: white;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0D0319;

    & h3{
        margin: 0 0 20px 0;
    }

    & svg{
        color: white;
        margin: 0 0 30px 0;
        position: relative !important;
        font-size: 75px;
        padding: 15px;
        background: #1D4A9B50;
        border-radius: 8px;
    }
  
    &:hover svg{
      filter: brightness(1.6);
      transition: filter 0.4s ease;
    }

    @media screen and (max-width: 480px)
    {
        flex-basis: 100%;
    }
`;