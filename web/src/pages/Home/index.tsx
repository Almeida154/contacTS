import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { BarLoader } from 'react-spinners';

import { Container } from './styles';

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const { colors } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <BarLoader
          color={colors.span}
          width={150}
          height={4}
          loading={isLoading}
        />
      ) : (
        <Container>
          <h2>Carregou</h2>
          <p>daora</p>
        </Container>
      )}
    </>
  );
};

export default Home;
