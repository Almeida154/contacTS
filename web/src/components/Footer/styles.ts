import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  background-color: ${props => props.theme.colors.box};
`;

export const Credits = styled.div`
  width: 100%;
  padding: 0.9rem;
  background-color: ${props => darken(0.02, props.theme.colors.box)};
`;
