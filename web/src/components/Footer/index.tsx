import React from 'react';

import { Container, Credits } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <span>Esfera Software</span>
          <h1>Challenge</h1>
        </div>
      </Container>
      <Credits>
        <p style={{ opacity: 0.3 }}>Developed with 💛 by David Almeida</p>
      </Credits>
    </>
  );
};

export default Footer;
