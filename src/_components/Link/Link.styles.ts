import styled, { css } from "styled-components";

interface Props {
  secondary?: boolean;
}

export const Wrapper = styled.a.attrs({})<Props>`
  display: inline-flex;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid #7a6342;

  ${p =>
    p.secondary &&
    css`
      color: #fff;
      border-bottom: 1px solid #ebeb68;

      &:hover {
        color: #ebeb68;
        border: 0;
      }
    `}
`;

export const LinkWrapper = styled.span.attrs({})<Props>`
  display: inline-flex;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid #7a6342;

  ${p =>
    p.secondary &&
    css`
      color: #fff;
      border-bottom: 1px solid #ebeb68;

      &:hover {
        color: #ebeb68;
        border: 0;
      }
    `}
`;
