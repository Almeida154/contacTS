import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <Link to='create'>
      <Container>
        <BiPlus size={20} />
        {text}
      </Container>
    </Link>
  );
};

export default Button;
