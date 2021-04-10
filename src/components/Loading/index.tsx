import React from 'react';

import { Container } from './styles';
import loading from '../../assets/loading.svg';

interface LoadingProps {
  show: boolean;
}

const Loading: React.FC<LoadingProps> = ({ show }) => {
  return (
    <Container show={show}>
      <img src={loading} alt="ícone de carregamento" />
    </Container>
  );
};

export default Loading;
