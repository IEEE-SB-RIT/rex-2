import styled, {keyframes} from "styled-components";

export const IconWrap = styled.div`
  margin: 30px 0 100px 0;
`

export const Mouse = styled.div`
    width: 23px;
    height: 38px;
    border: 2px solid #858585;
    border-radius: 50px;
    margin: 0 0 10px 0;
`

const scrollDown = keyframes`
    from{
    transform: translateY(0);
    opacity: 1;
  }
  
  to{
    transform: translateY(14px);
    opacity: 0;
  }
`

export const Line = styled.div`
    width: 4px;
    height: 5px;
    background-color: #858585;
    border-radius: 50%;
    margin: 7px auto;
    animation-name: ${scrollDown};
    animation-duration:1.4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
`

export const P = styled.p`
    font-size: 12px;
    color: #858585;
`