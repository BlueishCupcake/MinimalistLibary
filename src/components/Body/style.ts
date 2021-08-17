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
  padding: 54px 0;
`;

export const BookDiv = styled.div`
  > a {
    display: flex;
    margin: 15px;
    cursor: pointer;
    color: #000;
    text-decoration: none;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-flow: column;
  max-width: calc(100% - 130px);
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
  flex: 1;
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

export const HiddenBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  align-self: baseline;
`;
