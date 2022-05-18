import styled from 'styled-components';
import metrics from '../../styles/metrics';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.box};
  padding: ${metrics.padding};
  border-radius: ${metrics.radius};
`;
