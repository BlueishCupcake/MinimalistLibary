import styled, { keyframes } from "styled-components";

const booksAnimationTop = keyframes`
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
`;
const booksAnimationBottom = keyframes`
    from {
        right: -50%;
    }

    to {
        right: 50%;
    }
`;

export const BodyContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: ${booksAnimationBottom} 5s infinite linear;
`;

export const ImagesDivTop = styled.div`
  height: 50%;
  width: 100%;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

export const ImagesDivBottom = styled.div`
  width: 100%;
  height: 50%;
`;

export const Image = styled.img`
  padding: 16px;
  opacity: 0.4;
`;
