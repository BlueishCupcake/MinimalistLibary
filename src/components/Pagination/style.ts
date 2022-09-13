import styled from "styled-components";

export const PageList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

interface iPageListItem {
  currentPage?: boolean;
}

export const PageListItem = styled.li<iPageListItem>`
  display: flex;
  place-items: center;
  place-content: center;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${({ currentPage }) =>
    currentPage ? "#ffffff70" : "#fff"};
  width: 40px;
  height: 40px;
  box-shadow: 3px 3px 3px #00000070;

  a {
    display: flex;
    place-items: center;
    place-content: center;
    text-decoration: none;
    width: 40px;
    height: 40px;
    color: inherit;
  }
`;
