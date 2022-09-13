import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 30px;
  background-color: var(--lightBrown);
  display: flex;
  place-content: space-around;
  position: sticky;
  width: 100%;
  left: 0;
  top: 0;

  .icon {
    fill: var(--brown);
  }
`;

export const SearchForm = styled.form`
  display: flex;
  flex: 1;
  place-content: center;
`;

export const SearchInput = styled.input`
  border: 1px solid #000;
  border-radius: 3px;
  width: 50%;
  outline: none;
  padding: 2px 10px;
`;

export const StyledBtn = styled.button`
  border: 1px solid #000;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
`;

export const HiddenBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
