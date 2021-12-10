import styled from "styled-components";

export const ButtonContainer = styled.div`
    margin-top: 25px;
`

export const Button = styled.button`
    height: 42px;
    border-radius: 6px;
    border: none;
    padding: 10px 20px;
    background-image: linear-gradient(to right, #1D4A9B, #830A74);
    font-size: 18px;
    color: white;
    font-weight: 400;
    font-family: "Monument-Extended", sans-serif !important;
    cursor: pointer;

    &:hover{
        transform: translateY(-8px);
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
`