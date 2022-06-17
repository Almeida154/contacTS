import styled from 'styled-components';
import { rgba } from 'polished';
import metrics from '../../styles/metrics';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.box};
  padding: 0.9rem; // 1.8rem / 2
  border-radius: ${metrics.radius};
  display: flex;
  gap: 0.9rem;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  height: 100%;

  :hover {
    background-color: ${(props) =>
      rgba(props.theme.colors.primary, 0.04)};
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 435px) {
    padding: 0.6rem;
  }
`;

export const ProfileImage = styled.div`
  min-width: 70px;
  height: 70px;
  border-radius: ${metrics.radius};
  background: ${(props) => props.theme.colors.lightBox};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: 0.3s;

  @media (max-width: 435px) {
    min-width: 40px;
    height: 40px;
    font-size: 0.8rem;
  }
`;

export const Name = styled.h3`
  transition: 0.3s;

  @media (max-width: 435px) {
    font-size: 1rem;
  }
`;

export const Details = styled.div`
  margin-top: 0.3rem;

  ul {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    height: 100%;
  }

  ul li {
    background-color: ${(props) =>
      rgba(props.theme.colors.primary, 0.2)};
    border-radius: 4px;
    color: ${(props) => props.theme.colors.primary};
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
    transition: 0.3s;

    @media (max-width: 435px) {
      font-size: 8px;
      padding: 4px;
    }
  }
`;
