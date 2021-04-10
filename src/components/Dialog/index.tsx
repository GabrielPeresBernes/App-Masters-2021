import React from 'react';

import { Container, Content } from './styles';

interface DialogProps {
  show: boolean;
}

const Dialog: React.FC<DialogProps> = ({ show, children }) => {
  return (
    <Container show={show}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Dialog;
