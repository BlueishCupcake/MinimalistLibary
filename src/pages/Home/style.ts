import styled, { keyframes } from "styled-components";

const inputAnimation = keyframes`
  0% {background-color: var(--beigeLight)}
  20% {background-color: transparent}

  40% {background-color: var(--beigeLight)}
  60% {background-color: transparent}

  80% {background-color: var(--beigeLight)}
  100% {background-color: transparent}
`;

export const BodyContainer = styled.div`
  display: flex;
  place-items: center;
  place-content: center;
  height: 100vh;
  background-color: var(--beige);
  flex-flow: column wrap;
  overflow: hidden;

  @media (max-width: 810px) {
    place-items: center;
    place-content: center;
  }
`;

export const Label = styled.label`
  color: var(--brown);
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  place-items: center;
  flex-flow: column wrap;

  @media (max-width: 412px) {
    place-content: center;
  }

  @media (max-width: 810px) {
    place-items: center;
    place-content: center;
  }
`;

export const Input = styled.input`
  padding: 16px;
  width: 320px;
  background-color: transparent;
  margin-top: 16px;
  border: none;
  border-bottom: 1px solid black;

  animation-name: ${inputAnimation};
  animation-duration: 2s;

  &:focus {
    outline: none;
  }

  @media (max-width: 360px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  padding: 16px;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 16px;
  width: 160px;
  border-radius: 4px;
  border: 1px solid var(--brown);
  margin-top: 16px;

  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background: var(--beigeLight);
  }
  transition: 0.5s;
`;
