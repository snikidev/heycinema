import styled from "styled-components";
import { prop } from "styled-tools";
import { Container as BootstrapContainer } from 'react-bootstrap'

export const Back = styled.div`
  background-color: ${prop('theme.colors.gray.200')};
  min-height: 100vh;
`;

export const Container = styled(BootstrapContainer)`
  margin-top: 3em;
  margin-bottom: 3em;
`
