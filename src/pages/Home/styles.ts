import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/background.jpg';

import Button from '../../components/Button';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
    0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);

  width: 100%;
  max-width: 600px;
  z-index: 2;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    text-align: center;

    h1 {
      font-size: 60px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #74fd64;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#74FD64')};
    }
  }
`;

export const Background = styled.div`
  opacity: 0.6;
  z-index: 1;
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;

export const AddressSection = styled.div`
  position: relative;
  padding-left: 15px;

  &::before {
    content: '';
    border-style: solid;
    border-color: #edf1f5;
    border-width: 1px;
    top: 0;
    left: 0;
    height: 100%;
    position: absolute;
    opacity: 0.4;
  }
`;

export const DialogHeader = styled.div`
  color: #c53030;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  h1 {
    font-size: 36px;
    margin-left: 16px;
  }
`;

export const DialogBody = styled.div`
  p + p {
    margin-top: 8px;
  }
`;

export const DialogFooter = styled.div`
  margin-top: 32px;
`;

export const DialogCloseButton = styled(Button)`
  background: #6c757d;
  color: #fff;

  &:hover {
    background: ${shade(0.2, '#6c757d')};
  }
`;
