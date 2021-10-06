import styled from "styled-components";

export const GradientCard = styled.div`
    flex: 1;
    width: 100%;
    background: linear-gradient(120deg, #451A3E, #201420, #131216);
    border-radius: 18px;
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px 0 200px 0;
    position: relative;
    z-index: 5;

`

export const Event = styled.div`
    flex: 0 1 30%;
    height: 100%;
    padding: 20px;
    color: white;

    @media screen and (max-width: 480px)
    {
        flex: 0 1 100%;
    }
`
