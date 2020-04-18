import styled from 'styled-components'
import { prop } from 'styled-tools'

export const CardStyled = styled.div`
  background-color: white;
  box-shadow: ${prop('theme.boxShadow')};
  border-radius: 8px;
  overflow: hidden;
  min-height: 12em;
  display: flex;
  position: relative;
`;

export const CardPoster = styled.div<{ url: string }>`
  background: no-repeat top/100% url(${prop('url')});
  min-height: 100%;
  width: 50%;
`;

export const CardInfo = styled.div`
  background-color: white;
  padding: 1em 2em 1em 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  clip-path: polygon(5% 0, 100% 0, 100% 100%, 0% 100%);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`;

export const CardTitle = styled.h3`
  font-size: ${prop('theme.font.size.heading')};
  color: ${prop('theme.colors.primary.500')};
  font-weight: bold;
`;

export const CardSubtitle = styled.div`
  color: ${prop('theme.colors.gray.600')};
`;

export const CardLink = styled.a`
  font-size: ${prop('theme.font.size.heading')};
  color: ${prop('theme.colors.secondary.500')};

  &:hover {
    text-decoration: none;
    color: ${prop('theme.colors.tertiary.500')};
  }
`;