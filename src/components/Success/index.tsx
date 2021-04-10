import React from 'react';

import { FiCheck } from 'react-icons/fi';

import { Container } from './styles';

interface SuccessProps {
  show: boolean;
}

const Success: React.FC<SuccessProps> = ({ show }) => {
  return (
    <Container show={show}>
      <FiCheck size={64} />
      <h1>Muito bom!</h1> <h2>Você receberá seus adesivos em alguns dias</h2>
    </Container>
  );
};

export default Success;
