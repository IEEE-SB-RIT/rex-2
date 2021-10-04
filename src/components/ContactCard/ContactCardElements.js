import styled from "styled-components"

export const QueryCard = styled.div`
    flex: 1;
    width: 100%;
    background: linear-gradient(120deg, #3D1937, #121014, #101624, #101B2F, #101B2F);
    min-height:300px;
    border-radius: 18px;
    padding: 50px 40px;
    display: flex;
    position: relative;
    bottom: 120px;

    & h1{
        color: white;
        
        margin-bottom: 20px;
    }
`

export const Column = styled.div`
    flex: 1 0 45%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    padding: 20px;

    & hr{
        margin: 30px 0 ;
        color: #1D4A9B;
    }

    &:nth-of-type(2) p{
        color: #d2d2d2;
        text-align: left;
    }
`

export const VolunteerContactInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 30px 0;
`

export const Person = styled.div`
    margin-right: 40px;
`