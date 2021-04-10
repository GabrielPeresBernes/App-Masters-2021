import styled, { css } from 'styled-components';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  z-index: 4;
  transition: opacity 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(49, 46, 56, 0.8);

  ${props =>
    !props.show &&
    css`
      height: 0;
      opacity: 0;
    `}

  ${props =>
    props.show &&
    css`
      height: auto;
      opacity: 1;
    `}
`;

export const Content = styled.div`
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
  background: #fcfcfc;
  color: #000;
  border-radius: 8px;
  padding: 42px 42px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
