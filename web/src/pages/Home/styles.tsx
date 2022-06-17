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
  margin-bottom: 310px;

  @media (max-width: 535px) {
    display: block;
    min-height: calc(290px + 3.6rem);
  }
`;

export const ContactsContainer = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.9rem;
  height: min-content;

  @media (max-width: 768px) {
    flex: 1;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 535px) {
    grid-template-columns: repeat(1, 0.8fr);
    justify-content: right;
  }
`;

export const FloatboxContainer = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  transition: 0.3s;
  z-index: 100;

  ::before {
    content: '';
    position: absolute;
    border: 10px dashed
      ${(props) => darken(0.05, props.theme.colors.box)};
    border-top: 0;
    border-bottom: 0;
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
  }

  .toggle {
    transition: 0.3s;
    display: none;
  }

  @media (max-width: 535px) {
    position: fixed;
    left: -190px;

    ::before {
      border: none;
    }

    .toggle {
      display: flex;
    }
  }

  .toggle.active {
    transform-origin: center;
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
  }

  &.active {
    left: 1.8rem;
  }
`;
