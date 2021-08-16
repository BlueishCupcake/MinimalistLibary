import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  place-items: center;
  place-content: center;
  height: 100vh;
`;

export const StyledHello = styled.div`
  font-family: "Poller One", cursive;
  color: #4ec5f1;
  font-size: 22px;
  text-align: center;
`;

export const BookListContainer = styled.div`
  padding-top: 54px;
`;

export const BookDiv = styled.div`
  display: flex;
  margin: 15px;
  cursor: pointer;
`;

export const BookTitle = styled.h2`
  font-size: 18px;
  margin-left: 10px;
`;

export const BookSubtitle = styled.h3`
  font-size: 14px;
  margin-left: 10px;
`;

export const BookAuthors = styled.h4`
  font-size: 14px;
  margin-left: 10px;
`;

export const DefaultThumbnail = styled.div`
  background-color: #eee;
  width: 130px;
  display: flex;
  place-content: center;
  place-items: center;
  font-size: 60px;
  font-weight: 600;
`;
