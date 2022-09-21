import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 30px 0;
  background-color: var(--lightBrown);
  display: flex;
  place-content: space-around;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;

  .icon {
    fill: var(--brown);
  }
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
