import styled from 'styled-components';
import { darken } from 'polished';
import metrics from '../../styles/metrics';

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  gap: ${metrics.padding};
  margin: 0 auto;
  padding: ${metrics.padding};
`;

export const ContactsContainer = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.9rem;
`;

export const FloatboxContainer = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    border: 10px dashed ${props => darken(0.05, props.theme.colors.box)};
    border-top: 0;
    border-bottom: 0;
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
  }
`;
