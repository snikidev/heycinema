import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0.5em 0.8em;
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;

  svg {
    color: ${prop('theme.colors.primary.500')}
  }

  &:hover {
    background: transparent;

    svg {
      color: ${prop('theme.colors.primary.700')}
    }
  }
`;

export const Input = styled.input`
  box-shadow: ${prop('theme.boxShadow')};
  position: relative;
  width: 100%;
  padding: 0.5em 2em 0.5em 0.8em;
  border-radius: 10px;
  border: none;
`;

export const Form = styled.form`
  position: relative;
  max-width: 20em;
  margin: 0 auto;
`;