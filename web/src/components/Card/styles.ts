import styled from 'styled-components';
import { rgba } from 'polished';
import metrics from '../../styles/metrics';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.box};
  padding: 0.9rem; // 1.8rem / 2
  border-radius: ${metrics.radius};
  display: flex;
  gap: 0.9rem;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  height: min-content;

  :hover {
    background-color: ${props => rgba(props.theme.colors.primary, 0.04)};
    outline: 2px solid ${props => props.theme.colors.primary};
  }
`;

export const ProfileImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: ${metrics.radius};
  background: ${props => props.theme.colors.lightBox};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const Name = styled.h3``;

export const Details = styled.div`
  margin-top: 0.3rem;

  ul {
    display: flex;
    gap: 6px;

    flex-wrap: wrap;
  }

  ul li {
    background-color: ${props => rgba(props.theme.colors.primary, 0.2)};
    border-radius: 4px;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    padding: 6px;
    list-style: none;
    width: min-content;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;
