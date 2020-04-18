import React, { FunctionComponent } from "react";
import ReactLoader from "react-loaders";
import styled from "styled-components";
import { prop } from 'styled-tools'

const StyledLoader = styled(ReactLoader)`
  text-align: center;

  .line-scale-pulse-out-rapid > div {
    background-color: ${prop('theme.colors.secondary.500')};
  }
`;

const Loader: FunctionComponent = () => (
  <StyledLoader type="line-scale-pulse-out-rapid" active={true} />
);

export default Loader;
