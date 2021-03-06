import styled from 'styled-components';
import { rgba } from 'polished';
import metrics from '../../styles/metrics';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.box};
  padding: ${metrics.padding};
  border-radius: ${metrics.radius};

  img {
    width: 50%;
  }

  @media (max-width: 535px) {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(
        ${(props) =>
          props.theme.title === 'light'
            ? rgba(255, 255, 255, 0.5)
            : rgba(12, 16, 20, 0.5)}
      )
    );
    backdrop-filter: blur(25px) saturate(180%);
  }
`;

export const Searchbar = styled.input`
  margin-top: 1.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
  width: 100%;
  height: 48px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 0.9rem;
  outline: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  transition: 0.3s;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary};
  }

  :focus {
    background-color: ${(props) =>
      rgba(props.theme.colors.primary, 0.2)};
  }
`;

export const ThemeSwitch = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleFloatbox = styled.div`
  position: absolute;
  right: 1.35rem;
  top: ${metrics.padding};
  display: flex;
  justify-content: center;
  align-items: center;
`;
