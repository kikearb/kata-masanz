import styled, { css } from "styled-components";

interface Props {
  secondary?: boolean;
}

export const Separator = styled.div.attrs({})<Props>`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  border-bottom: solid 1px #000;

  ${p => p.secondary && css`
    width: 100px;
    border-bottom-width: 10px;
    margin: 24px auto;
  `}
`;
