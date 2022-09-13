import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  place-items: center;
  place-content: center;
  background-color: var(--beige);
  flex-flow: column;
  overflow: hidden;
  padding-top: 50px;
`;

export const BodyText = styled.p`
  font-family: "Poller One", cursive;
  color: var(--brown);
  font-size: 22px;
  text-align: center;
`;

export const TypeWritterWrapper = styled.form`
  aspect-ratio: 1;
  width: 670px;
  max-width: 100%;
  background: center center url("typewritter.png");
  display: flex;
  place-items: center;

  @media (max-width: 500px) {
    width: 100vw;
    flex: 1;
    aspect-ratio: 1/2;
    overflow: hidden;
    margin-left: 8px;
  }
`;

export const TypeWritterInput = styled.input`
  padding: 30px;
  margin: 0 auto 334px;
  height: 120px;
  width: 260px;
  border: none;
`;
