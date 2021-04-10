import React from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className = '' }) => {
  return (
    <Container className={className}>
      <FiAlertCircle color="#c53030" size={20} />
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
