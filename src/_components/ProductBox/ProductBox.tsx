import * as React from "react";
import styled from "styled-components";

export const ProductBox: React.SFC = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div`
  padding: 0 12px;
  text-align: center;
  flex-grow: 1;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
