import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type Props =
  | SecondaryProps
  | NegativeProps
  | BeersProps
  | TapasProps
  | CoffeeProps;

interface SecondaryProps extends BaseProps {
  secondary: true;
  negative?: false;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface NegativeProps extends BaseProps {
  secondary?: false;
  negative: true;
  coctel?: boolean;
  beers?: false;
  tapas?: false;
  coffee?: false;
}

interface BeersProps extends BaseProps {
  secondary?: false;
  negative?: false;
  coctel?: false;
  beers?: true;
  tapas?: false;
  coffee?: false;
}

interface TapasProps extends BaseProps {
  secondary?: false;
  negative?: false;
  coctel?: false;
  beers?: false;
  tapas: true;
  coffee?: false;
}

interface CoffeeProps extends BaseProps {
  secondary?: false;
  negative?: false;
  coctel?: false;
  beers?: false;
  tapas?: false;
  coffee: true;
}

interface BaseProps {
  className?: string;
}

export const MainWrapper = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div.attrs({})<Props>`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 24px;

  vertical-align: middle;
  color: inherit;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s;
  background-color: #fff;
  text-decoration: none;

  &:hover {
    color: #000;
  }

  ${p =>
    p.secondary &&
    css`
      background: transparent;
      color: #000;
      border: solid 1px #000;

      &:hover {
        color: #deb887;
        background-color: #000;
      }
    `}

    ${p =>
      p.coctel &&
      css`
        background: transparent;
        color: #000;
        border: solid 1px #000;

        &:hover {
          color: #fff;
          background-color: #49176d;
        }
      `}

  ${p =>
    p.negative &&
    css`
      background: transparent;
      color: #fff;
      border: solid 1px #fff;

      &:hover {
        background: #fff;
        color: #000;
        border: solid 1px #fff;
      }

      ${p.coctel &&
        css`
          &:hover {
            color: #fff;
            background-color: #49176d;
          }
        `}
    `}

    

      ${p =>
        p.beers &&
        css`
          background: transparent;
          color: #000;
          border: solid 1px #000;

          &:hover {
            color: #fff;
            background-color: #d86000;
          }
        `}

      ${p =>
        p.tapas &&
        css`
          background: transparent;
          color: #000;
          border: solid 1px #000;

          &:hover {
            color: #fff;
            background-color: #187828;
          }
        `}

      ${p =>
        p.coffee &&
        css`
          background: transparent;
          color: #000;
          border: solid 1px #000;

          &:hover {
            color: #fff;
            background-color: #482400;
          }
        `}
`;
