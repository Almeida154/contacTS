import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, Credits } from './styles';

import blackBrand from '../../img/black-brand.svg';
import whiteBrand from '../../img/white-brand.svg';

const Footer: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <div
      style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
    >
      <Container>
        <img src={title === 'light' ? blackBrand : whiteBrand} />
      </Container>
      <Credits>
        <p style={{ opacity: 0.3 }}>
          Developed with 💙 by David Almeida
        </p>
      </Credits>
    </div>
  );
};

export default Footer;
