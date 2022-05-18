import React from 'react';
// @ts-ignore
import Sticky from 'react-stickynode';

import { Container } from './styles';

interface FloatboxProps {
  contactsContainerHeight: number;
}

const Floatbox: React.FC<FloatboxProps> = ({ contactsContainerHeight }) => {
  return (
    <Sticky
      top={1.8 * 18}
      enabled={contactsContainerHeight > 300}
      bottomBoundary={contactsContainerHeight + 1.8 * 18}>
      <Container>
        <h1>Floatbox</h1>
      </Container>
    </Sticky>
  );
};

export default Floatbox;
