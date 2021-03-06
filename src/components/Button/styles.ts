import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #74fd64;
  height: 56px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 18px;

  &:hover {
    background: ${shade(0.2, '#74FD64')};
  }
`;
