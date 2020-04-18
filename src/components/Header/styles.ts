import styled, { css } from "styled-components";
import { prop, switchProp } from "styled-tools";

export const HeaderStyled = styled.header`
  background-color: white;
  padding: 1em 2em;
  border-radius: 0 0 10px 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  
  a:hover {
    text-decoration: none;
  }
`;

export const Logo = styled.div<{ type: string }>`
  font-weight: bold;
  line-height: 0.9em;
  font-size: ${prop("theme.font.size.heading", "heading")};

  ${switchProp("type", {
    hey: css`
      color: ${prop("theme.colors.primary.500")};
    `,
    cinema: css`
      color: ${prop("theme.colors.secondary.500")};
    `,
  })}
`;