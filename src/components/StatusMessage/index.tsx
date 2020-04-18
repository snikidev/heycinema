import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

const StyledMessage = styled.h3`
  color: ${prop("theme.colors.gray.400")};
  font-size: ${prop("theme.font.size.heading")};
  text-align: center;
`;

interface Props {
  children: ReactNode;
}

const StatusMessage: FunctionComponent<Props> = ({ children }: Props) => (
  <StyledMessage>{children}</StyledMessage>
);

export default StatusMessage;
