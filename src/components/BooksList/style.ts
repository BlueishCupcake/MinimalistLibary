import styled from "styled-components";

export const BookListContainer = styled.div`
  padding: 70px 0 70px;
`;

export const BookDiv = styled.div`
  background-color: var(--lighterBrown);
  margin: 15px;
  box-shadow: 5px 5px 5px #00000050;

  > a {
    display: flex;
    cursor: pointer;
    color: var(--lightBrown);
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
