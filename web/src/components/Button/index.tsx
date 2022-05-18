import React from 'react';
import { BiPlus } from 'react-icons/bi';

import { Container } from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <Container>
      <BiPlus size={20} />
      {text}
    </Container>
  );
};

export default Button;
