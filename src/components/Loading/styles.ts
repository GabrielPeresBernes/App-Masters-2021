import styled, { css } from 'styled-components';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(49, 46, 56, 0.9);
  z-index: 4;
  transition: opacity 0.4s;

  ${props =>
    !props.show &&
    css`
      height: 0;
      opacity: 0;
    `}

  ${props =>
    props.show &&
    css`
      height: 100%;
      opacity: 1;
    `}

  img {
    width: 200px;
    height: 200px;
  }
`;
