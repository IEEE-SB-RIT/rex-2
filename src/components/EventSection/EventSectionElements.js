import styled from 'styled-components';
import eventpic from '../../images/events.png';
import workshop from '../../images/workshop.png';
import talk from '../../images/talk.png';
import cultural from '../../images/mic.png';

export const GradientCard = styled.div`
  flex: 1;
  width: 100%;
  background: linear-gradient(120deg, #451a3e, #201420, #131216);
  border-radius: 18px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

  @media screen and (max-width: 480px) {
    flex: 0 1 100%;
  }
`;

export const PreEventBanner = styled.div`
  background-image: url(${eventpic});
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 45px;
  height: 160px;
  width: 160px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    transition: ease 0.3s;
  }
`;

export const WorkshopBanner = styled.div`
  background-image: url(${workshop});
  background-size: contain;
  background-repeat: no-repeat;
  height: 160px;
  width: 160px;
  margin-top: 45px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    transition: ease-in 0.3s;
  }
`;

export const TalksBanner = styled.div`
  background-image: url(${talk});
  background-size: contain;
  background-repeat: no-repeat;
  height: 160px;
  width: 160px;
  margin-top: 45px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    transition: ease-in 0.3s;
  }
`;

export const CulturalBanner = styled.div`
  background-image: url(${cultural});
  background-size: contain;
  background-repeat: no-repeat;
  height: 160px;
  width: 160px;
  margin-top: 45px;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
    transition: ease-in 0.3s;
  }
`;
