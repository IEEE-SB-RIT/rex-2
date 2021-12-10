import styled from 'styled-components';

export const GradientCard = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(120deg, #451a3e, #201420, #131216);
  border-radius: 18px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 50px 0 200px 0;
  position: relative;
  z-index: 5;

  @media screen and (max-width: 480px) {
    margin: 50px 0 300px 0;
  }
`;

export const Event = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 0 1 25%;
  height: 100%;
  padding: 20px;
  color: white;

  @media screen and (max-width: 480px)
  {
    flex: 0 1 100%;
    margin: 20px 0;
  }

  & a{
    color: white;
    text-decoration: none;
  }

  & svg{
    color: white;
      margin: 0 0 30px 0;
      position: relative !important;
      font-size: 75px;
      padding: 15px;
      background-color: #66346060;
      border-radius: 8px;
  }

  & h3{
    position: relative;
  }

  &:hover svg{
    filter: brightness(2.5);
    transition: filter 0.4s ease;
  }

  &:hover h3{
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }

  &:nth-of-type(3) h3:after, &:nth-of-type(4) h3:after
  {
    content: "COMING SOON";
    display: inline-block;
    font-weight: normal;
    position: absolute;
    top: -10px;
    left: calc(100% - 10px);
    color: #BD00FF;
    letter-spacing: 1px;
    margin-left: 15px;
    font-size: 8px;
    padding: 5px;
    border: 1px solid #BD00FF;
    border-radius: 50px;
  }
`;