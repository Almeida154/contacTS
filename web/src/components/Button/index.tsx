import React, { FormEvent } from 'react';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ButtonProps {
  text: string;
  onPress?: (e: FormEvent) => void;
  isShort?: boolean;
  isLink: boolean;
  isSubmitButton?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  isShort,
  isLink,
  isSubmitButton,
}) => {
  return (
    <>
      {isLink ? (
        <Link to='create'>
          <Container className={isShort ? 'short' : ''}>
            <BiPlus size={20} />
            {text}
          </Container>
        </Link>
      ) : (
        <Container
          className={isShort ? 'short' : ''}
          onClick={onPress}
          type={isSubmitButton ? 'submit' : 'button'}>
          <BiPlus size={20} />
          {text}
        </Container>
      )}
    </>
  );
};

export default Button;
