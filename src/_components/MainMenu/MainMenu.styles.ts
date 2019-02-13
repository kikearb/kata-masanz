import styled, { css } from "styled-components";

interface Props {
    mobileVisible?: boolean;
}

export const Menu = styled.div.attrs({})<Props>`
  width: 100%;
  background-color: #deb887;
  z-index: 10;

  @media (max-width: 767px) {
    position: fixed;
    top: 89px;
    left: 100%;
    height: 100vh;
    transition: all 0.3s;

    ${p =>
      p.mobileVisible &&
      css`
        top: 89px;
        left: 0;
        right: 0;
        overflow: hidden;
        transition: all 0.3s;
      `}
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    border: 0;
    padding-top: 0;
  }
`;
