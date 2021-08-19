import styled from "styled-components";

export const BodyDetails = styled.div`
  display: flex;
  flex-flow: column;
  place-items: center;
  place-content: center;
  padding: 54px 0;
`;

export const BookImage = styled.img`
  margin-top: 25px;
`;

export const InfoDiv = styled.div`
  display: flex;
  place-items: center;
  flex-flow: column;
  max-width: calc(100% - 130px);
`;

export const BookInfo = styled.h4`
  font-size: 16px;
`;

export const DefaultThumbnail = styled.div`
  background-color: #eee;
  margin-top: 25px;

  display: flex;
  place-content: center;
  place-items: center;
  font-size: 60px;
  font-weight: 600;

  @media (max-width: 1050px) {
    width: 90%;
    height: 50vh;
  }

  @media (min-width: 1100px) {
    width: 20%;
    height: 50vh;
  }
`;

export const AddFavorites = styled.div`
  text-decoration: underline;
  font-size: 20px;
`;
