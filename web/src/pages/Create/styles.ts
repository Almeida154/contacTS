import styled from 'styled-components';
import metrics from '../../styles/metrics';

export const Container = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: ${metrics.padding};
  margin: 0 auto;
  padding: ${metrics.padding};
  margin-bottom: 340px;
`;

export const FormContainer = styled.div`
  background-color: ${props => props.theme.colors.box};
  padding: ${metrics.padding};
  border-radius: ${metrics.radius};
`;

export const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  & > button {
    margin-top: 0;
  }
`;

export const Fieldset = styled.fieldset`
  min-inline-size: auto;
  border: 0;
  margin: 0;
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
  gap: ${metrics.padding};
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  gap: 0.9rem;

  input {
    background-color: ${props => props.theme.colors.background};
    border: 0;
    outline: 0;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    color: ${props => props.theme.colors.text};
    flex: 1;
    overflow: hidden;
    border-radius: 6px;

    ::placeholder {
      color: ${props => props.theme.colors.text};
      opacity: 0.3;
    }
  }

  label.mandatory::after {
    content: '*';
    color: ${props => props.theme.colors.primary};
    margin-left: 10px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;

  input {
    padding-right: calc(1.5rem + 40px);
  }

  :hover .deleteInput {
    right: 0;
  }
`;

export const DeleteInput = styled.button`
  opacity: 0.7;
  cursor: pointer;
  position: absolute;
  right: -3rem;
  transition: 0.3s;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  border-start-start-radius: ${metrics.radius};
  border-end-start-radius: ${metrics.radius};
  background-color: ${props => props.theme.colors.danger_light};
  color: ${props => props.theme.colors.danger_strong};
`;
